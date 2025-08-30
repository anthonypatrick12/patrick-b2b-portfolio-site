# Patrick — B2B Lead Generation (Portfolio Website) — v2

Modern, animated, SEO-friendly portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## New in v2
- Scroll progress bar, reveal-on-scroll, parallax hero, number counters, logo marquee
- Sticky "Process" cards, Packages section, Compliance block, inline Calendly
- Services & Industries pages (+ breadcrumbs JSON-LD)
- Legal pages (Privacy, Terms, DPA, Cold Email Policy)
- Audit (lead magnet) page
- Not-found & Thank-you pages
- Typography plugin and performance-friendly `next/image`

## Quickstart
```bash
npm install
npm run dev
```
Set your domain:
```bash
echo 'NEXT_PUBLIC_SITE_URL=https://yourdomain.com' > .env
```

## Customize
- `lib/seo.ts` — site name, description, services, case studies, testimonials, nav
- `components/Contact.tsx` — email + Calendly + qualification fields
- Replace images in `/public` (portrait, case studies, logos, og-image)
- Edit service copy in `/app/services/*` and industry copy in `/app/industries/*`

## Deploy
- **Vercel (recommended):** push to GitHub → import → add `NEXT_PUBLIC_SITE_URL` → deploy
- **GitHub Pages (static):** set `output: 'export'` in `next.config.js` and run `next build && next export`

## SEO Checklist
- Titles/Descriptions (in `app/layout.tsx` metadata)
- JSON-LD: Organization + ProfessionalService + FAQ + Breadcrumbs on service pages
- Performance: compress images, set poster for video, lazy-load below-the-fold
- Internal Links: hero → services → case studies → contact
