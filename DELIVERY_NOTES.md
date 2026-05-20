# A Grelha Delivery Notes

## What changed

- Reworked all public App Router pages for A Grelha: home, menu, about, contacts, and blog notes; `/encomendas` now redirects to the menu flow.
- Replaced generic placeholder copy, dead `#` links, remote images, and stale static HTML with local assets and working CTAs.
- Added consistent navigation/footer with mobile menu behavior, skip link, active route state, phone, maps, social, and order links.
- Improved local SEO: shared metadata config, `metadataBase`, canonical URLs, OpenGraph/Twitter images, route-specific metadata, `sitemap.xml`, `robots.txt`, and Restaurant/LocalBusiness JSON-LD.
- Improved performance posture: removed Google font build dependency, removed external image allowlist, used `next/image` with `sizes`/`priority`, and kept the order flow mostly static/native.
- Improved accessibility: semantic landmarks, form labels, focus-visible states, `aria-current`, `aria-expanded`, Escape-close mobile menu, native checkboxes, and status messaging for phone confirmation.
- Disabled fake server-side order intake until a real email/POS/CRM/database integration exists, avoiding lost orders and unnecessary PII logging.
- Added lightweight verification scripts: `npm run typecheck` and `npm run verify:links`.
- Updated `npm run build` to use `next build --webpack` because Turbopack attempts an internal port bind that is blocked in this sandbox.

## Verification

- `npm run lint`
- `npm run typecheck`
- `npm run verify:links`
- `npm run build`

## Real-world assumptions to confirm

- Production domain is assumed to be `https://a-grelha.pt`.
- Address/phone/socials were grounded from public search results: Rua do Rosmaninho, Lote 2, Loja Dta, 2135-085 Porto Alto; +351 924 114 604; Instagram `agrelha_takeaway`; Facebook page ID `100083930862067`.
- Opening hours still need owner confirmation before launch; the site currently tells users to confirm by phone before pickup.
- The current takeaway flow is menu-first with local cart/WhatsApp/phone confirmation; production can add email, POS, CRM, or database integration later if the restaurant wants true online ordering.
- Menu prices and item availability should be confirmed with the restaurant before publishing.
- Local image assets are existing repo assets; final brand photography would improve trust and conversion.
