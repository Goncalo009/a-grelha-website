"use client";

import { useEffect } from "react";

const MIN_SWIPE_DISTANCE = 34;
const ANIMATION_LOCK_MS = 500;
const SNAP_SETTLE_DELAY_MS = 140;
const SNAP_TOLERANCE_PX = 2;
const SNAP_SETTLE_TOLERANCE_PX = 8;
const SNAP_HEADER_OVERLAP_PX = 0;

function isInteractiveTarget(target: EventTarget | null) {
  return (
    target instanceof Element &&
    Boolean(target.closest('header, a, button, input, textarea, select, label, summary, details, [role="dialog"], #mobile-navigation'))
  );
}

function aboutSections() {
  return Array.from(document.querySelectorAll<HTMLElement>(".about-mobile-snap .about-snap-section"));
}

export function AboutSnapController() {
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!media.matches || reducedMotion.matches) return;

    let locked = false;
    let animationFrame: number | null = null;
    let touchStartY: number | null = null;
    let touchLatestY: number | null = null;
    let settleTimer: number | null = null;

    const headerOffset = () => {
      const header = document.querySelector<HTMLElement>("header");
      const measured = header?.getBoundingClientRect().bottom;
      return measured && Number.isFinite(measured) ? measured : 64;
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
      const sections = aboutSections();
      if (sections.length < 2) return null;

      const current = activeIndex(sections);
      const next = Math.max(0, Math.min(sections.length - 1, current + direction));
      return next === current ? null : sections[next];
    };

    const canPage = (direction: 1 | -1) => Boolean(getNextSection(direction));

    const clearAnimation = () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      document.documentElement.removeAttribute("data-ag-about-snap-animating");
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

      document.documentElement.setAttribute("data-ag-about-snap-animating", "true");

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
        document.documentElement.removeAttribute("data-ag-about-snap-animating");
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

    const onClick = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      if (!anchor) return;

      const targetId = anchor.getAttribute("href")?.slice(1);
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target?.classList.contains("about-snap-section")) return;

      event.preventDefault();
      window.history.pushState(null, "", `#${targetId}`);
      locked = true;
      animateScrollTo(target);
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

      const sections = aboutSections();
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

    document.addEventListener("click", onClick);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: false });
    window.addEventListener("scroll", scheduleSettle, { passive: true });

    return () => {
      document.removeEventListener("click", onClick);
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
