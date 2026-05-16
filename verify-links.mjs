import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "app");
const files = [];
const publicRoutes = new Set(["/"]);
const errors = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(fullPath);
      continue;
    }

    if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) files.push(fullPath);
  }
}

function routeFromPage(file) {
  const relative = path.relative(appDir, file).split(path.sep);
  if (relative.at(-1) !== "page.tsx") return null;

  const segments = relative
    .slice(0, -1)
    .filter((segment) => !segment.startsWith("(") && !segment.startsWith("@"));

  return `/${segments.join("/")}`.replace(/\/$/, "") || "/";
}

walk(appDir);
walk(path.join(root, "components"));

for (const file of files) {
  const route = routeFromPage(file);
  if (route) publicRoutes.add(route);
}

const hrefPattern = /href=(?:\{)?["'`]([^"'`{}]+)["'`]/g;

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  let match;

  while ((match = hrefPattern.exec(source))) {
    const href = match[1];

    if (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("#") ||
      href.includes("${")
    ) {
      continue;
    }

    if (href.startsWith("/") && !publicRoutes.has(href)) {
      errors.push(`${path.relative(root, file)} links to missing route ${href}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Verified ${publicRoutes.size} routes and internal links.`);
