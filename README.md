# Helen — Botanical Skincare

A premium, cinematic, luxury ecommerce experience for Helen's natural skincare oil brand. Built with **Next.js 14**, **TypeScript**, **Tailwind CSS** and **Framer Motion**, statically exportable and ready to host on **GitHub Pages** out of the box.

> A modern luxury wellness experience — gold accents, floating botanicals, cold-pressed storytelling, and a conversion-focused storefront.

---

## What is included

| Page                                  | Path                            |
| ------------------------------------- | ------------------------------- |
| Home (cinematic hero, story, reviews) | `/`                             |
| Shop (filter + sort)                  | `/shop`                         |
| Product detail (dynamic per product)  | `/product/[slug]`               |
| About Helen (biography, milestones)   | `/about`                        |
| Contact & FAQ                         | `/contact`                      |
| Cart                                  | `/cart`                         |
| Checkout (Stripe + PayPal)            | `/checkout`                     |
| Order confirmation                    | `/order-confirmation`           |
| Privacy Policy                        | `/privacy`                      |
| Terms of Service                      | `/terms`                        |
| 404                                   | (custom not-found)              |

**Feature highlights**

- Cinematic, animated Hero with floating botanical SVGs, gold particle field and parallax scroll.
- Reusable Botanical primitives (`<FloatingLeaf>`, `<GoldOrb>`, `<OilDrop>`, `<Particles>`).
- Smooth page transitions, scroll-triggered reveals, glassmorphism, gold shimmer.
- Premium typography (Cormorant Garamond + Inter + Italianno).
- Zustand-powered cart with **localStorage persistence**, drawer + full-page views.
- Discount codes (`HELEN10`, `WELCOME15`, `RADIANCE`), shipping logic, complimentary threshold.
- Stripe Checkout (hosted) **and** PayPal Smart Buttons fully wired in the UI.
- Mobile-first, fully responsive, SEO metadata on every page.
- Static export — no server required for the storefront.

---

## Local development

```bash
# 1. install
npm install

# 2. dev server
npm run dev

# 3. production build (static export -> ./out)
npm run build
```

The static site is written to `./out/`. You can preview it with any static server (e.g. `npx serve out`).

---

## Environment variables

Copy `.env.example` to `.env.local`, then fill in the values you need.

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_…
NEXT_PUBLIC_STRIPE_CHECKOUT_ENDPOINT=https://your-api.example.com/api/create-checkout-session
NEXT_PUBLIC_PAYPAL_CLIENT_ID=sandbox-or-live-id
NEXT_PUBLIC_SITE_URL=https://helenskincare.com
NEXT_PUBLIC_CURRENCY=AUD
NEXT_PUBLIC_CONTACT_EMAIL=hello@helenskincare.com
```

All `NEXT_PUBLIC_*` variables are baked into the static bundle at build time. Never put a `STRIPE_SECRET_KEY` here — that lives only on the serverless endpoint.

---

## Payments architecture

GitHub Pages is a static host. Stripe Checkout requires a **server** to create a session with your secret key. We solve this with a tiny serverless function deployed separately — the static front-end calls it via the `NEXT_PUBLIC_STRIPE_CHECKOUT_ENDPOINT` URL.

```
Browser (helenskincare.com on GitHub Pages)
        │
        │   POST /api/create-checkout-session
        ▼
Serverless function (Vercel / Netlify / Lambda / Cloudflare Worker)
        │
        │   Uses STRIPE_SECRET_KEY to create the session
        ▼
Stripe Checkout (hosted page)
```

A reference implementation is provided at [`api/create-checkout-session.example.ts`](api/create-checkout-session.example.ts). Drop it into:

- **Vercel** — `/api/create-checkout-session.ts` in a separate project, set `STRIPE_SECRET_KEY` + `ALLOWED_ORIGIN`.
- **Netlify** — `netlify/functions/create-checkout-session.ts` with `exports.handler` wrapper.
- **AWS Lambda / API Gateway** — adapt the handler signature.
- **Cloudflare Workers** — replace `stripe` package with the Workers-compatible variant.

PayPal does **not** need a serverless function — it uses the client-side Smart Buttons SDK and works on a pure static site.

### Recommended scalable hosting upgrade path

When you outgrow GitHub Pages, the same codebase can be deployed unchanged to:

- **Vercel** (recommended) — one-click, includes the API route by default. Remove `output: 'export'` from `next.config.mjs` to take advantage of edge functions, ISR and image optimisation.
- **Netlify** — same drop-in support.
- **Cloudflare Pages** — set `output: 'export'` as it is; serverless functions can live in `functions/`.

---

## Deploying to GitHub Pages

1. **Create the repo** and push this codebase to `main`.
2. In repository settings → **Pages**, set **Source = GitHub Actions**.
3. (Optional) Add the following repository **Secrets** — without them the build still succeeds, but real payments are disabled:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_STRIPE_CHECKOUT_ENDPOINT`
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
4. Push to `main`. The included workflow at `.github/workflows/deploy.yml` will:
   - Install dependencies with cache.
   - Build the static site with `GITHUB_PAGES=true` so the `basePath` resolves to your repo name.
   - Publish `out/` to GitHub Pages.

The site will be live at `https://<your-username>.github.io/<repo-name>/` within a couple of minutes.

> **Custom domain?** Add a `public/CNAME` file containing `helenskincare.com`, set the DNS, then change `basePath` handling: when you have a custom apex domain you can remove the `basePath` line from `next.config.mjs` (or simply skip setting `GITHUB_PAGES=true` in the workflow).

---

## Project structure

```
helen/
├── .github/workflows/deploy.yml        ← GH Pages CI/CD
├── api/create-checkout-session.example.ts  ← serverless reference
├── public/                              ← favicon, .nojekyll
├── src/
│   ├── app/                             ← routes (App Router)
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── page.tsx                     (Home)
│   │   ├── shop/page.tsx
│   │   ├── product/[slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── cart/page.tsx
│   │   ├── checkout/page.tsx
│   │   ├── order-confirmation/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── not-found.tsx
│   ├── components/                      ← reusable UI
│   │   ├── Hero.tsx
│   │   ├── ProductBottle.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Botanicals.tsx
│   │   ├── Particles.tsx
│   │   ├── Navbar.tsx · Footer.tsx
│   │   ├── CartDrawer.tsx · CartPage.tsx
│   │   ├── Checkout.tsx · OrderConfirmation.tsx
│   │   └── … (Story, Benefits, Testimonials, Faq, Newsletter, etc.)
│   ├── lib/
│   │   ├── products.ts                  ← single source of truth for the catalogue
│   │   ├── cartStore.ts                 ← Zustand store, persisted to localStorage
│   │   ├── checkout.ts                  ← Stripe client helper
│   │   └── utils.ts
│   └── types/index.ts
├── tailwind.config.ts
├── next.config.mjs                      ← static export + GH Pages basePath
└── tsconfig.json
```

---

## Adding a new product

Open [`src/lib/products.ts`](src/lib/products.ts) and append a new `Product` to the array. It will automatically appear on the home page, the shop, in the cart, and at `/product/<your-slug>/`. The static generator will pre-render it on the next build.

```ts
{
  slug: 'midnight-body-oil',
  name: 'Midnight Body Oil',
  category: 'face', // 'face' | 'hair' | 'beard' — extend the union if needed
  volume: '100 ml',
  price: 95,
  hero: { accent: '#A5B587', deepAccent: '#34402A' },
  // …
}
```

To add a new category, extend the `category` union in [`src/types/index.ts`](src/types/index.ts) and add a filter entry in [`src/components/ShopGrid.tsx`](src/components/ShopGrid.tsx).

---

## Customising the look

Almost everything visual is tokenised in [`tailwind.config.ts`](tailwind.config.ts):

- **Colors** — `cream`, `nude`, `gold`, `sage`, `forest`, `ink`.
- **Fonts** — `font-display`, `font-sans`, `font-script`.
- **Shadows** — `shadow-soft`, `shadow-luxe`, `shadow-gold`.
- **Backgrounds** — `bg-gold-gradient`, `bg-cream-radial`, `bg-forest-radial`, `bg-nude-fade`.
- **Animations** — `animate-float`, `animate-shine`, `animate-sway`, `animate-pulse-soft`.

Reusable composed components live in `globals.css` under `@layer components` (`.btn-primary`, `.card-luxe`, `.glass`, `.eyebrow`, etc.).

---

## Image assets

This build ships with **pure-SVG** product visuals (rendered by `<ProductBottle />`) so it deploys without any external image dependencies. To replace them with photography:

1. Drop your photos into `public/images/products/`.
2. Replace `<ProductBottle />` usages in `ProductCard.tsx`, `ProductDetail.tsx`, `Hero.tsx`, `CartDrawer.tsx`, and `CartPage.tsx` with `<img>` (or `next/image` with `unoptimized` on, since GitHub Pages cannot run the image optimiser).
3. Keep the gradient containers around them — that is what gives products the cinematic glow.

---

## Tech

- **Next.js 14** App Router with `output: 'export'` for static GitHub Pages deploys.
- **TypeScript 5**, strict mode.
- **Tailwind CSS 3.4** with custom design tokens.
- **Framer Motion 11** for all animations (page transitions, parallax, scroll-reveals).
- **Zustand 4** for cart state, persisted to `localStorage`.
- **Stripe.js + Stripe Checkout** (server-created session via a configurable endpoint).
- **PayPal Smart Buttons** via `@paypal/react-paypal-js`.
- **Lucide React** for line iconography.

---

## License

Copyright © Helen Skincare. All rights reserved.
