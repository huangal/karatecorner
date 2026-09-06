# KarateCorner

Single-page marketing site for a martial arts dojo. Next.js App Router + TypeScript +
Tailwind CSS v4 + Framer Motion.

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Design tokens

Defined in [`src/app/globals.css`](src/app/globals.css) under `@theme`, so they are
available as Tailwind utilities (`bg-ink-900`, `text-ochre-400`, `bg-washi-100`, …).

| Token        | Drawn from                                   | Used for                                |
| ------------ | -------------------------------------------- | --------------------------------------- |
| `ink`        | Aizome — the indigo a gi and noren are dyed   | Hero, dark sections, body type on light |
| `vermillion` | Shu — torii and temple red                    | CTAs and the accent rule. Actions only  |
| `ochre`      | Kincha — Shaolin robes, worn hinoki           | Highlights, milestone badges, kanji     |
| `sage`       | Tatami straw                                  | The philosophy panel and testimonials   |
| `washi`      | Warm paper white                              | The ground the whole site sits on       |

Section tones alternate `ink → white → ink → washi → ink → white → sage → ink`, so no
two dark sections ever touch. Type is Poppins throughout (700–800 headings, 500–600
body), loaded via `next/font/google` in [`src/app/layout.tsx`](src/app/layout.tsx).

Every accent pairing was checked against its actual background and clears WCAG AA
(lowest is the vermillion CTA at 5.8:1).

## Disciplines

The dojo teaches three lineages — Shotokan Karate, Aikido and Shaolin Kung Fu —
plus a kids class, an eight-week beginners' course and an open qigong/zazen hour.
All six live in `PROGRAMS` in [`src/lib/content.ts`](src/lib/content.ts), each with an
icon key that maps to a hand-drawn SVG in
[`ProgramIcon.tsx`](src/components/ui/ProgramIcon.tsx).

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

## Deployment

The site is a **static export**. `npm run build` writes a plain HTML/CSS/JS site to
`out/` — there are no route handlers, server actions or dynamic rendering, so nothing
is lost by exporting. Two settings in [`next.config.ts`](next.config.ts) make it work,
and both are load-bearing:

- `output: "export"` — emits `out/` with a real `index.html`.
- `images.unoptimized` — without it the export still emits `/_next/image?url=…` URLs
  that need Next's optimizer server, and every photo 404s on a static host.

### How it reaches karatecorner.huangal.com (Plesk)

`main` holds source only; build output is never committed to it. On every push to
`main`, [`.github/workflows/build-static-site.yml`](.github/workflows/build-static-site.yml)
builds the site and force-pushes the *contents* of `out/` to a `deploy` branch. Plesk
pulls `deploy` into the subdomain document root.

Plesk side, one-time setup — Websites & Domains → karatecorner.huangal.com → Git:

1. Point the repository at `git@github.com:huangal/karatecorner.git`.
2. Set the tracked branch to **`deploy`** (not `main` — `main` is source, which is
   what produces a 404).
3. Set the deployment path to the subdomain document root (usually `httpdocs`).
4. Leave "additional deployment actions" empty; the site arrives pre-built.

To publish by hand instead, run `npm run build` and upload the *contents* of `out/`
(not the folder itself) into the document root.

## Placeholder content to replace before launch

- Copy, names, prices and the timetable in `src/lib/content.ts`.
- Instructor and dojo photography (currently Unsplash URLs allow-listed in
  `next.config.ts` → `images.remotePatterns`).
- The contact form only sets local state; wire it to a server action or form service.
- The map block in `Contact.tsx` is a labelled placeholder — drop in an iframe embed.
- `siteUrl` and `/og.svg` in `src/app/layout.tsx`.
