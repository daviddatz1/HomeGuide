# HomeGuide — Landing Page

A production-quality, conversion-focused marketing site for **HomeGuide**, a
consumer home repair assistance product (think: "FaceTime for home repairs"
+ AI troubleshooting + step-by-step DIY guidance).

This is a validation-stage landing page focused on collecting waitlist
signups and testing demand.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) — design tokens via
  `@theme` in `src/app/globals.css`
- TypeScript, ESLint
- [Inter](https://rsms.me/inter/) via `next/font/google`
- 100% inline SVG illustrations (no external image deps)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint
```

## Project layout

```
src/
  app/
    layout.tsx         # root layout, Inter font, metadata, global CSS
    page.tsx           # landing page (composes the sections below)
    globals.css        # Tailwind v4 entry + design tokens + animations
  components/
    site/
      Header.tsx       # sticky translucent nav
      Hero.tsx         # headline, subhead, waitlist, mock UI
      HeroMockup.tsx   # phone mockup w/ animated SVG diagnosis
      Problem.tsx      # 4 pain-point cards
      HowItWorks.tsx   # 3-step flow with vector visuals
      Features.tsx     # 5 MVP feature cards
      ValueProof.tsx   # before/after + stats
      CTA.tsx          # dark final-push section + waitlist
      FAQ.tsx          # accessible <details> accordion
      Footer.tsx
      Logo.tsx
    ui/
      Reveal.tsx       # IntersectionObserver fade-in wrapper
      WaitlistForm.tsx # client form (currently simulated submit)
```

## Design system

Defined inline via Tailwind v4 `@theme` tokens in `globals.css`:

- **Background:** white / neutral-50
- **Text:** neutral-900 / neutral-600
- **Accent:** `brand-500` (emerald `#10b981`) — calm, trustworthy, "go"
- **Type:** Inter, with strong size hierarchy and tight tracking on
  display sizes
- **Motion:** subtle `Reveal` fade-up on scroll, soft float animations
  on hero badges, drip animation in the SVG faucet diagnosis. All
  motion respects `prefers-reduced-motion`.

## Wiring up the waitlist

`src/components/ui/WaitlistForm.tsx` currently simulates submission with a
700ms timeout. To go live, replace the body of `handleSubmit` with a
`fetch` to your provider of choice (Resend, Loops, ConvertKit, Mailchimp,
or a custom Next.js Route Handler under `src/app/api/waitlist/route.ts`).

## Sections (per product brief)

1. Hero — headline, subhead, CTA, animated phone mockup
2. Problem — emotional pain points
3. How it works — 3 steps
4. Features — 5 MVP features (camera, guidance, video expert, cost
   comparison, safety/difficulty rating)
5. Value Proof — before/after transformation + stat band
6. Final CTA — dark gradient section with email capture
7. FAQ — accessible accordion
8. Footer

## Deploying

Any Next.js host works (Vercel recommended). No env vars are required for
the static landing page itself; add provider keys when you wire the
waitlist form to a real backend.
