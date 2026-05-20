import { expect, type Page, test } from "@playwright/test";

const ROUTES_TO_AUDIT = ["/", "/menu", "/sobre", "/contactos", "/blog"] as const;

const ACTIONABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "[role='button']",
  "summary",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "label[for]",
].join(",");

type ClickTarget = {
  index: number;
  tagName: string;
  label: string;
  href: string | null;
  isInternalLink: boolean;
  x: number;
  y: number;
};

type PageIssue = Error & { message: string };

function trackBrowserErrors(page: Page) {
  const errors: string[] = [];

  page.on("console", (message) => {
    if (message.type() !== "error") return;
    errors.push(`console.error: ${message.text()}`);
  });

  page.on("pageerror", (error: PageIssue) => {
    errors.push(`pageerror: ${error.message}`);
  });

  return errors;
}

async function gotoReady(page: Page, route: string) {
  await page.goto(route);
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle").catch(() => undefined);
  // Let React finish hydration before the audit reads/taps the DOM.
  await page.waitForTimeout(100);
}

async function openMobileMenu(page: Page) {
  await page.getByRole("button", { name: /abrir menu/i }).tap();
  await expect(page.getByRole("navigation", { name: "Navegação móvel", exact: true })).toBeVisible();
}

async function getClickTargets(page: Page): Promise<ClickTarget[]> {
  return page.evaluate((selector) => {
    const isElementTappable = (element: HTMLElement) => {
      if (element.classList.contains("sr-only")) return false;

      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      if (
        style.visibility === "hidden" ||
        style.display === "none" ||
        style.pointerEvents === "none" ||
        rect.width <= 0 ||
        rect.height <= 0 ||
        x < 0 ||
        y < 0 ||
        x > window.innerWidth ||
        y > window.innerHeight
      ) {
        return false;
      }

      const topElement = document.elementFromPoint(x, y);
      return topElement === element || Boolean(topElement && element.contains(topElement));
    };

    return Array.from(document.querySelectorAll<HTMLElement>(selector))
      .filter(isElementTappable)
      .map((element, index) => {
        const rect = element.getBoundingClientRect();
        const href = element instanceof HTMLAnchorElement ? element.href : null;
        const label =
          element.getAttribute("aria-label") ??
          element.textContent?.replace(/\s+/g, " ").trim() ??
          element.getAttribute("href") ??
          element.tagName.toLowerCase();

        return {
          index,
          tagName: element.tagName.toLowerCase(),
          label,
          href,
          isInternalLink: href ? new URL(href).origin === window.location.origin : false,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      });
  }, ACTIONABLE_SELECTOR);
}

function shouldClick(target: ClickTarget) {
  if (!target.href) return true;

  const url = new URL(target.href);
  if (["tel:", "mailto:", "sms:"].includes(url.protocol)) return false;
  if (url.hostname.includes("wa.me")) return false;

  return target.isInternalLink;
}

async function tapTarget(page: Page, target: ClickTarget) {
  await page.touchscreen.tap(target.x, target.y);
}

async function expectHealthyInternalNavigation(page: Page, target: ClickTarget) {
  if (!target.isInternalLink || !target.href) return;

  const expected = new URL(target.href);
  await expect(page, `Internal click should navigate to ${expected.pathname}${expected.hash}`).toHaveURL((url) => {
    if (url.pathname !== expected.pathname) return false;
    if (expected.hash && url.hash !== expected.hash) return false;
    return true;
  });

  const current = new URL(page.url());
  expect(current.pathname, `Internal click should not land on Next.js 404 for ${target.href}`).not.toBe("/_not-found");
  await expect(page.locator("body")).not.toContainText(/404|This page could not be found/i);
}

test.describe("mobile click workflow", () => {
  test.setTimeout(120_000);

  test("hamburger Take-away navigates to the menu page", async ({ page }) => {
    await gotoReady(page, "/");
    await openMobileMenu(page);

    await page.getByRole("link", { name: /take-away/i }).tap();

    await expect(page).toHaveURL(/\/menu$/);
    await expect(page.getByRole("heading", { name: /menu takeaway da a grelha/i })).toBeAttached();
  });

  test("order drawer closes when swiped down from the handle", async ({ page }) => {
    await gotoReady(page, "/");

    await page.getByRole("button", { name: /pedidos/i }).tap();
    const dialog = page.getByRole("dialog", { name: /rascunho para confirmar/i });
    await expect(dialog).toBeVisible();

    const handle = page.getByRole("button", { name: /arrastar para baixo para fechar pedido/i });
    const box = await handle.boundingBox();
    expect(box).not.toBeNull();

    if (!box) return;

    const x = box.x + box.width / 2;
    const y = box.y + box.height / 2;
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x, y + 150, { steps: 8 });
    await page.mouse.up();

    await expect(dialog).not.toBeVisible();
  });

  for (const route of ROUTES_TO_AUDIT) {
    test(`all visible mobile clickables are healthy on ${route}`, async ({ page }, testInfo) => {
      const browserErrors = trackBrowserErrors(page);

      await gotoReady(page, route);
      const targets = (await getClickTargets(page)).filter(shouldClick);

      for (const target of targets) {
        await gotoReady(page, route);

        await test.step(`page: tap ${target.tagName} "${target.label || target.href || target.index}"`, async () => {
          const errorsBefore = browserErrors.length;
          await tapTarget(page, target);
          await page.waitForLoadState("domcontentloaded").catch(() => undefined);
          await page.waitForTimeout(150);

          const errorsAfter = browserErrors.slice(errorsBefore);
          expect(errorsAfter, `Browser errors after tapping ${target.label}`).toEqual([]);
          await expectHealthyInternalNavigation(page, target);
        });
      }

      await testInfo.attach(`${route}-page-click-targets.json`.replace(/[^a-z0-9.-]+/gi, "-"), {
        body: JSON.stringify(targets, null, 2),
        contentType: "application/json",
      });
    });
  }

  test("all visible hamburger menu clickables are healthy", async ({ page }, testInfo) => {
    const browserErrors = trackBrowserErrors(page);

    await gotoReady(page, "/");
    await openMobileMenu(page);
    const targets = (await getClickTargets(page)).filter(shouldClick);

    for (const target of targets) {
      await gotoReady(page, "/");
      await openMobileMenu(page);

      await test.step(`hamburger: tap ${target.tagName} "${target.label || target.href || target.index}"`, async () => {
        const errorsBefore = browserErrors.length;
        await tapTarget(page, target);
        await page.waitForLoadState("domcontentloaded").catch(() => undefined);
        await page.waitForTimeout(150);

        const errorsAfter = browserErrors.slice(errorsBefore);
        expect(errorsAfter, `Browser errors after tapping ${target.label}`).toEqual([]);
        await expectHealthyInternalNavigation(page, target);
      });
    }

    await testInfo.attach("hamburger-click-targets.json", {
      body: JSON.stringify(targets, null, 2),
      contentType: "application/json",
    });
  });
});
