# Muhammad Sufiyan — Portfolio

A React + Vite portfolio site with a GSAP-powered pinned-scroll hero, dedicated
project detail pages (via React Router), and a warm dark "cinematic" theme.

## Tech stack

- **React 18** — UI components
- **Vite** — dev server & build tool
- **React Router** — client-side routing (`/`, `/project/:id`)
- **GSAP + ScrollTrigger** — the pinned hero animation and scroll-driven reveals

## Project structure

```
sufiyan-portfolio/
├── index.html              # Vite HTML entry (fonts, meta, #root)
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx             # React root, router provider
│   ├── App.jsx               # Routes
│   ├── data/
│   │   └── projects.js       # Single source of truth for project content
│   ├── components/
│   │   ├── Home.jsx           # Composes the landing page sections
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx            # GSAP pinned-scroll hero
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx        # Project grid -> links to /project/:id
│   │   ├── ProjectDetail.jsx   # Dedicated per-project page
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Cursor.jsx          # Custom cursor (desktop only)
│   ├── styles/                # One CSS file per component
│   └── assets/                # Images (headshot cutout, app screenshots)
```

## Running locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying

The `dist/` folder is a plain static site — deploy it anywhere:

- **Vercel**: import the repo, framework preset "Vite", done.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: push `dist/` contents to a `gh-pages` branch (or use the
  `gh-pages` npm package).

## Editing content

- **Projects**: edit `src/data/projects.js` — both the project grid and the
  detail pages read from this one file.
- **Bio / skills / contact info**: edit the relevant component directly in
  `src/components/`.
- **Live demo / GitHub links**: once you have them, set `demoUrl` and
  `githubUrl` on each project in `src/data/projects.js` and the "coming soon"
  buttons will automatically turn into real links.
- **Colors / fonts**: all design tokens live at the top of
  `src/styles/index.css` (`:root { --bg, --amber, --font-display, ... }`).
