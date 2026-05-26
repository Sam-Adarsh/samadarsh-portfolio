# Portfolio — Adarsh S

Personal portfolio site. React + Vite + TypeScript, deployed on Vercel.

Live: [samadarsh.vercel.app](https://samadarsh.vercel.app/)

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS + Framer Motion + GSAP
- React Router (multi-route SPA)

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

Drop `<slug>.webp` files in `public/projects/` and reference them in `content.ts` via the `cover` field. See [`public/projects/README.md`](public/projects/README.md) for the optimization recipe.

## Deploy

Connected to Vercel — every push to `main` triggers an automatic production deploy, and every PR/branch gets its own preview URL. SPA fallback is handled by [`vercel.json`](vercel.json).

## Related projects

- **Haugtun** (market research practice) — separate repo: [github.com/samadarsh/haugtun](https://github.com/samadarsh/haugtun) → [haugtun.in](https://haugtun.in/)

## Loader

The 0–100 preloader runs **once per browser session** (`sessionStorage` key: `portfolio-loaded`). Clear site data or use a private window to see it again.
