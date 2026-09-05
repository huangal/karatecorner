# KarateCorner

Single-page marketing site for a martial arts gym. Next.js App Router + TypeScript +
Tailwind CSS v4 + Framer Motion.

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Design tokens

Defined in [`src/app/globals.css`](src/app/globals.css) under `@theme`, so they are
available as Tailwind utilities (`bg-navy-900`, `text-brown-400`, `bg-bone-100`, …).

| Token    | Role                                          |
| -------- | --------------------------------------------- |
| `navy`   | Primary dark — hero, alternating sections      |
| `brown`  | Secondary accent — CTAs, panels, eyebrow rules |
| `bone`   | Off-white / white — light sections, type       |
| `gold`   | Optional award badge accent only               |

Type is Poppins throughout (700–800 headings, 500–600 body), loaded via
`next/font/google` in [`src/app/layout.tsx`](src/app/layout.tsx).

## Structure

```
src/
  app/
    layout.tsx        Poppins, metadata + Open Graph
    page.tsx          Section composition
    globals.css       Theme tokens, texture + outline helpers
  components/
    Navbar.tsx        Transparent → solid on scroll, animated mobile drawer
    Footer.tsx
    ui/               Button, Card, Section, Reveal, Logo, ProgramIcon
    sections/         Hero, About, Programs, Instructors, Achievements,
                      Schedule, Testimonials, Contact
  lib/
    content.ts        All placeholder copy — swap for a CMS
    utils.ts          cn() class joiner
```

`Reveal` is the shared scroll-animation wrapper (fade + slide, fires once, respects
`prefers-reduced-motion`). `Section` handles the tone alternation, eyebrow/title/lead
header and `aria-labelledby` wiring.

## Placeholder content to replace before launch

- Copy, names, prices and the timetable in `src/lib/content.ts`.
- Instructor and gym photography (currently Unsplash URLs allow-listed in
  `next.config.ts` → `images.remotePatterns`).
- The contact form only sets local state; wire it to a server action or form service.
- The map block in `Contact.tsx` is a labelled placeholder — drop in an iframe embed.
- `siteUrl` and `/og.svg` in `src/app/layout.tsx`.
