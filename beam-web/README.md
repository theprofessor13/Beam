# Beam — marketing website

Scan-to-pay landing page for Beam, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Vite** — build tool / dev server
- **React 18 + TypeScript**
- **Tailwind CSS** — design tokens in `tailwind.config.ts` (ink navy / cobalt / mint palette, Space Grotesk + Inter + IBM Plex Mono)
- **Framer Motion** — all animation (scroll reveals, the hero phone scan loop, FAQ accordion, count-up stats)
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build      # type-checks with tsc, then outputs to /dist
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  components/
    Navbar.tsx        sticky nav, blurs in on scroll
    Hero.tsx           headline + orchestrated entrance + phone mockup
    PhoneScan.tsx       the signature animation: scanning → detected → success, looping
    HowItWorks.tsx      3-step process with a draw-in connecting line
    Investments.tsx     Investments / Beam Vaults / Flexible plans
    MissionVision.tsx   mission & vision statement cards
    About.tsx           about us + rotating brand mark + count-up stats
    Compare.tsx         Beam vs Card vs Transfer table, rows reveal in sequence
    Security.tsx        trust/security messaging
    FAQ.tsx             accordion with animated height
    CTA.tsx             final download banner
    Footer.tsx
    Reveal.tsx          shared scroll-in-view animation wrapper
    CountUp.tsx         animated number counter
    BrandMark.tsx       the QR-corner logo mark, reused across the site
  App.tsx
  main.tsx
  index.css
```

## Notes

- All motion respects `prefers-reduced-motion` (see `index.css`).
- The App Store / Google Play links in `Hero.tsx` and `CTA.tsx` are placeholders (`#`) — swap in real store URLs before launch.
- The 16.5% indicative return shown in `Investments.tsx` is placeholder copy. Replace with your actual, compliance-reviewed figure before shipping — advertised investment returns are regulated content.

## Deployment

This is a static site (`npm run build` outputs plain HTML/CSS/JS to `/dist`), so it deploys to any static host. `vercel.json` and `netlify.toml` are already included for zero-config deploys.

### Vercel (recommended)
```bash
npm install -g vercel
vercel login
vercel          # first deploy, follow the prompts
vercel --prod   # promote to production URL
```
Or connect the GitHub repo at vercel.com/new — it auto-detects Vite and uses `vercel.json`.

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy            # draft preview
netlify deploy --prod     # production
```
Or drag the built `dist/` folder onto app.netlify.com/drop for an instant one-off preview link.

### Cloudflare Pages
Connect the repo at pages.cloudflare.com → build command `npm run build`, output directory `dist`.

### Custom domain
All three above let you attach a custom domain from their dashboard after the first deploy — point your domain's DNS (usually a CNAME) at the host, then add it under the project's domain settings.

