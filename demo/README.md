# Demo portfolio (React)

Premium multi-route portfolio demo — isolated from the main site. Review here before merging into production.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS + Framer Motion + GSAP (ScrollTrigger)
- React Router (multi-route)
- MP4/WebM hero video (no HLS)

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero, stats, work preview, marquee footer |
| `/work` | Selected works bento grid |
| `/journal` | Journal list |
| `/explorations` | Parallax gallery + lightbox |
| `/contact` | Contact links |

## Commands

```bash
cd demo
npm install
npm run dev      # http://localhost:5173/samadarsh-portfolio/demo/
npm run build
npm run preview
```

## Loader

The 0–100 preloader runs **once per browser session** (`sessionStorage`). Clear site data or use a private window to see it again.

## Hero video

Drop `hero.mp4` (and optional `hero.webm`, `hero-poster.jpg`) in `public/videos/`. Without them, a gradient background is used automatically.
