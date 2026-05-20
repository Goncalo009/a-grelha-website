"use client";

import { useEffect } from "react";

const MIN_SWIPE_DISTANCE = 34;
const ANIMATION_LOCK_MS = 520;
const SNAP_SETTLE_DELAY_MS = 150;
const SNAP_TOLERANCE_PX = 2;
const SNAP_SETTLE_TOLERANCE_PX = 8;
const SNAP_HEADER_OVERLAP_PX = 6;

function readCssPixelVar(name: string, fallback: number) {
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const resolveWithProbe = () => {
    const probe = document.createElement("div");
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    probe.style.width = `var(${name})`;
    document.body.appendChild(probe);
    const width = probe.getBoundingClientRect().width;
    probe.remove();
    return Number.isFinite(width) && width > 0 ? width : fallback;
  };

  const parsed = Number.parseFloat(value);

  if (!Number.isFinite(parsed)) return resolveWithProbe();
  if (value.endsWith("px")) return parsed;
  if (value.endsWith("rem")) {
    const rootFontSize = Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    return Number.isFinite(rootFontSize) ? parsed * rootFontSize : fallback;
  }
  if (value.endsWith("em")) {
    const fontSize = Number.parseFloat(window.getComputedStyle(document.body).fontSize);
    return Number.isFinite(fontSize) ? parsed * fontSize : fallback;
  }

  return resolveWithProbe();
}

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest('header, a, button, input, textarea, select, label, [role="dialog"], [data-review-sheet], #mobile-navigation'));
}

export function HomeSnapController() {
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!media.matches || reducedMotion.matches) return;

    const getSections = () => Array.from(document.querySelectorAll<HTMLElement>(".home-mobile-snap > section, footer"));
    let locked = false;
    let animationFrame: number | null = null;
    let touchStartY: number | null = null;
    let touchLatestY: number | null = null;
    let settleTimer: number | null = null;

    const headerOffset = () => {
      const header = document.querySelector<HTMLElement>("header");
      const measured = header?.getBoundingClientRect().bottom;
      if (measured && Number.isFinite(measured)) return measured;
      return readCssPixelVar("--ag-mobile-header-h", 64);
    };
    const sectionTargetTop = (section: HTMLElement) =>
      Math.max(0, window.scrollY + section.getBoundingClientRect().top - headerOffset() + SNAP_HEADER_OVERLAP_PX);

    const activeIndex = (sections: HTMLElement[]) => {
      const viewportAnchor = headerOffset() + 8;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const distance = Math.abs(section.getBoundingClientRect().top - viewportAnchor);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      return bestIndex;
    };

    const getNextSection = (direction: 1 | -1) => {
      const sections = getSections();
      if (sections.length < 2) return null;

      const current = activeIndex(sections);
      const next = Math.max(0, Math.min(sections.length - 1, current + direction));
      if (next === current) return null;

      return sections[next];
    };

    const canPage = (direction: 1 | -1) => Boolean(getNextSection(direction));

    const clearAnimation = () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      document.documentElement.removeAttribute("data-ag-snap-animating");
    };

    const animateScrollTo = (targetSection: HTMLElement) => {
      clearAnimation();
      if (settleTimer !== null) window.clearTimeout(settleTimer);

      const startTop = window.scrollY;
      const targetTop = sectionTargetTop(targetSection);
      const distance = targetTop - startTop;
      const startedAt = window.performance.now();

      if (Math.abs(distance) <= SNAP_TOLERANCE_PX) {
        window.scrollTo({ top: sectionTargetTop(targetSection), behavior: "instant" });
        locked = false;
        return;
      }

      document.documentElement.setAttribute("data-ag-snap-animating", "true");

      const step = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / ANIMATION_LOCK_MS);
        const eased = 1 - Math.pow(1 - progress, 3);

        window.scrollTo({ top: startTop + distance * eased, behavior: "instant" });

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
          return;
        }

        window.scrollTo({ top: sectionTargetTop(targetSection), behavior: "instant" });
        animationFrame = null;
        locked = false;
        document.documentElement.removeAttribute("data-ag-snap-animating");
      };

      animationFrame = window.requestAnimationFrame(step);
    };

    const goToSection = (direction: 1 | -1) => {
      if (locked) return false;

      const nextSection = getNextSection(direction);
      if (!nextSection) return false;

      locked = true;
      animateScrollTo(nextSection);
      return true;
    };

    const onWheel = (event: WheelEvent) => {
      if (isInteractiveTarget(event.target) || Math.abs(event.deltaY) < 8) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      if (!canPage(direction)) return;
      event.preventDefault();
      goToSection(direction);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (isInteractiveTarget(event.target)) {
        touchStartY = null;
        touchLatestY = null;
        return;
      }
      touchStartY = event.touches[0]?.clientY ?? null;
      touchLatestY = touchStartY;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (touchStartY === null || isInteractiveTarget(event.target)) return;
      touchLatestY = event.touches[0]?.clientY ?? touchLatestY;
      if (touchLatestY !== null && Math.abs(touchStartY - touchLatestY) > 10) {
        const direction = touchStartY - touchLatestY > 0 ? 1 : -1;
        if (canPage(direction)) event.preventDefault();
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY === null || touchLatestY === null || isInteractiveTarget(event.target)) {
        touchStartY = null;
        touchLatestY = null;
        return;
      }

      const delta = touchStartY - touchLatestY;
      touchStartY = null;
      touchLatestY = null;

      if (Math.abs(delta) < MIN_SWIPE_DISTANCE) return;
      const direction = delta > 0 ? 1 : -1;
      if (!canPage(direction)) return;
      event.preventDefault();
      goToSection(direction);
    };

    const settleToNearestSection = () => {
      if (locked) return;

      const sections = getSections();
      if (sections.length < 2) return;

      const currentSection = sections[activeIndex(sections)];
      if (!currentSection) return;

      const expectedTop = headerOffset() - SNAP_HEADER_OVERLAP_PX;
      const distanceFromTop = Math.abs(currentSection.getBoundingClientRect().top - expectedTop);
      if (distanceFromTop <= SNAP_SETTLE_TOLERANCE_PX || distanceFromTop > window.innerHeight * 0.45) return;

      locked = true;
      animateScrollTo(currentSection);
    };

    const scheduleSettle = () => {
      if (locked) return;
      if (settleTimer !== null) window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(settleToNearestSection, SNAP_SETTLE_DELAY_MS);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: false });
    window.addEventListener("scroll", scheduleSettle, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", scheduleSettle);
      if (settleTimer !== null) window.clearTimeout(settleTimer);
      clearAnimation();
    };
  }, []);

  return null;
}
