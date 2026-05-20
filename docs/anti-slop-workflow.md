# Anti-slop website workflow for A Grelha

This workflow is for moving A Grelha away from the current brutalist visual language into a client-acceptable, search-visible, phone-converting local business site.

## Non-negotiables

- Do not fabricate reviews, ratings, awards, years in business, coordinates, opening hours, or “best churrasqueira” claims.
- Current primary CTA is phone ordering: `Ligar para encomendar` / `tel:+351924114604`.
- Online ordering is a future-version promise and must not be presented as the current main conversion.
- Every public page must preserve crawlable HTML, one clear H1, local NAP, metadata, schema facts that match visible content, and mobile click-to-call.

## Source of truth

- Business facts: `config/site.ts`
- Menu data: `content/menu.json`
- Existing assets: `public/stitch/*`
- SEO metadata helpers: `config/seo.ts`
- Schema: `components/seo/restaurant-schema.tsx`

## Workflow gates

### Gate 1 — Grounding

Checklist:

- [ ] Confirm phone, address, map link, email, social links.
- [ ] Confirm menu/prices are current or label them as subject to phone confirmation.
- [ ] Confirm opening hours before emitting structured opening hours.
- [ ] Remove or replace unverified testimonials.

### Gate 2 — Strategic direction

For each design option, define:

- Customer moment.
- Above-fold job.
- Primary CTA and secondary CTA.
- Local SEO role.
- Visual language.
- Risks/tradeoffs.

A valid option is not a palette swap. It must change the page strategy.

### Gate 3 — Mockup

Create throwaway HTML sketches under `sketches/a-grelha-anti-slop/`.

Each sketch must include:

- H1 with local/service intent.
- Click-to-call CTA.
- Menu or menu preview.
- Address and directions.
- Phone-visible mobile action.
- Real assets or clearly marked placeholders.
- No fake proof.

### Gate 4 — Visual QA

Use browser/vision checks:

- [ ] Does the page look specific to A Grelha?
- [ ] Is the phone CTA visible in the first viewport?
- [ ] Does it avoid brutalist remnants: Impact, all-caps everywhere, thick borders, hard offset shadows, rotated stickers?
- [ ] Does it avoid AI slop: generic gradients, vague copy, fake badges, stock-looking emotion?
- [ ] Does mobile avoid horizontal overflow and hidden CTAs?

### Gate 5 — Production promotion

After client selects a direction:

- Convert to Next.js components, not static HTML.
- Preserve metadata, sitemap, robots, schema, and accessibility.
- Keep image dimensions and alt text.
- Run `npm run lint`, `npm run typecheck`, and `npm run build`.
- Browser-test desktop and mobile.

## Recommended route strategy

- `/` — combine Balcão Quente + Ritual do Carvão.
- `/menu` — Ementa Viva.
- `/contactos` — Mapa do Levantar.
- `/sobre` — Ritual do Carvão with real business story only.
- Future `/encomendas` — only promote as primary once online ordering is reliable.

## Kanban handoff

Board: `a-grelha-anti-slop`

Created tasks:

- `t_c2c6854f` — research local SEO and phone-first search intent.
- `t_e002e3e7` — define five anti-slop visual directions.

Suggested next tasks after selection:

1. Implement selected homepage direction in Next.js.
2. Review SEO/schema and local-business claims.
3. Review mobile call/directions UX.
4. Client-facing copy pass in Portuguese.
