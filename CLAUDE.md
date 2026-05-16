# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run Next.js linter
```

No test suite is configured. There is no testing framework or test runner.

## Architecture

**Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui

### Route Structure

- `app/(marketing)/` — Route group for public-facing pages (home, menu, sobre, contactos, blog) sharing a navbar+footer layout
- `app/encomendas/` — Takeaway order page
- `app/api/orders/route.ts` — REST endpoint (POST to submit, GET to list); orders stored **in-memory only** (no database yet; a PocketBase integration is planned)

### Component Organization

```
components/
  layout/    # Navbar, footer, mobile menu
  sections/  # Page-level sections composed into pages (hero, menu grid, etc.)
  forms/     # OrderForm (dish selection, validation, API call)
  ui/        # Base shadcn/ui primitives (Button, Card, Input, DishCard, etc.)
  seo/       # RestaurantSchema (JSON-LD structured data)
```

Pages are built by composing `sections/` components. The home page (`app/(marketing)/page.tsx`) is a client component that stacks all sections.

### Data & Config

- Menu content lives in `content/menu.json` (4 categories: Entradas, Pratos, Grelhadas, Sobremesas); types defined in `types/menu.ts`
- Site metadata and SEO defaults are in `config/site.ts` and `config/seo.ts`
- Tailwind custom theme (brand colors: `brand-beige`, `brand-red`, `brand-black`, `brand-white`) and fonts (Anton headlines, Open Sans body) are in `tailwind.config.ts`

### Path Aliases

```
@/*         → ./*
@/components → ./components
@/lib        → ./lib
@/config     → ./config
@/styles     → ./styles
```

### Security

`app/middleware.ts` sets security headers (CSP, X-Frame-Options, HSTS, etc.) on every response. The CSP allowlists Google Analytics. Adjust there if adding new external scripts or image domains.

New remote image domains must also be added to `next.config.ts` under `images.remotePatterns`.

### Adding Components

The project uses shadcn/ui. Add new base components via:

```bash
npx shadcn@latest add <component>
```

Configuration for shadcn/ui is in `components.json`.
