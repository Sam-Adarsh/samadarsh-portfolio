# Portfolio — Adarsh S

Personal portfolio site. React + Vite + TypeScript.

Lives at: [samadarsh.github.io/samadarsh-portfolio/](https://samadarsh.github.io/samadarsh-portfolio/)

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS + Framer Motion + GSAP
- React Router (multi-route)

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero, stats, teaser sections |
| `/about` | About — narrative, experience, skills, education |
| `/work` | Selected works grid |
| `/journal` | Haugtun Research — market notes published on LinkedIn |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Content

All copy and project data lives in [`src/data/content.ts`](src/data/content.ts) — edit there to update text, projects, experience, journal entries, etc.

## Project screenshots

Drop `<slug>.webp` files in `public/projects/`. Convert source PNGs with:

```bash
magick source.png -quality 92 -define webp:method=6 output.webp
```

Then reference in `content.ts`:

```typescript
cover: 'projects/<slug>.webp',
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes to GitHub Pages.

## Related projects

- **Haugtun** (market research practice) — separate repo: [github.com/samadarsh/haugtun](https://github.com/samadarsh/haugtun) → [haugtun.in](https://haugtun.in/)

## Loader

The 0–100 preloader runs **once per browser session** (`sessionStorage` key: `portfolio-loaded`). Clear site data or use a private window to see it again.
