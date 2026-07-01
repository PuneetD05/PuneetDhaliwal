# CLAUDE.md — Puneet's Engineering Portfolio

Project guidance for Claude Code. Read this before working in this repo.

## What this is

Puneet Dhaliwal's personal **mechanical-engineering portfolio website**. A single-page
React app with per-project detail pages, hosted free on GitHub Pages.

- **Live site:** https://puneetd05.github.io/PuneetDhaliwal/
- **Repo:** https://github.com/PuneetD05/PuneetDhaliwal (GitHub user: `PuneetD05`)
- **Local path:** `C:\Users\Punee\Downloads\portfolio`

## Who Puneet is (how to work with him)

- Mechanical engineering student at U of T (PEY Co-op), **early in his coding journey**.
- Explain steps **simply and concretely**; avoid unexplained jargon. Give copy-paste commands.
- Grading/priority for his projects: **Design > Functionality > Features > Ease of use.**
- He values a polished, recruiter-ready look.

## Tech stack

- **React 19 + Vite** (build tool)
- **React Router** (`HashRouter`) — one page per project
- **Plain CSS** (no framework) — all styles in `src/index.css`, theme tokens in `:root`
- **GitHub Pages** + **GitHub Actions** for hosting/deploy

## Commands

```bash
npm install      # first time only
npm run dev      # dev server → http://localhost:5173/PuneetDhaliwal/
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## The #1 rule: content lives in ONE file

**All site content is in [`src/data.js`](src/data.js)** — profile, education, experience,
skills, and projects. To change what the site says, edit that file. Components read from it;
don't hardcode content in components.

## Deployment (automatic)

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages (~1 min). The everyday update loop:

```bash
git add .
git commit -m "describe the change"
git push          # → auto-deploys
```

Confirm a deploy with: `gh run list --limit 1` (gh is at `C:\Program Files\GitHub CLI\gh.exe`).

## Project structure

```
public/            static assets served as-is (images, resume PDF, video)
src/
  data.js          ← ALL content + getProject() helper
  App.jsx          Router (HashRouter) + routes + footer
  lib/asset.js     asset() — resolves /public files against the Pages base path
  pages/
    Home.jsx       assembles the home sections
    ProjectPage.jsx  per-project detail page (/projects/:slug)
  components/
    Navbar, Hero, About, Experience, ProjectsGrid, Skills, Contact, ScrollToTop
  index.css        theme (:root tokens) + ALL styles
```

## Conventions & gotchas (important)

- **Base path:** `vite.config.js` sets `base: '/PuneetDhaliwal/'`. It MUST match the repo name.
  If the repo is ever renamed, update this or all assets 404.
- **Referencing files in /public:** always go through `asset('file.ext')` from `src/lib/asset.js`.
  It prepends the base path so links work on GitHub Pages. Never hardcode `/file.ext`.
- **Adding a project:** append an object to `projects[]` in `data.js` with a unique `slug`,
  `title`, `period`, `tagline`, `overview` (array), `highlights` (array), `tags`, and optional
  `images` / `videoFile`. Its page appears automatically at `/projects/<slug>`.
- **Adding images/video:** drop the file in `public/`, then reference it by filename in `data.js`
  (`images: ["foo.jpg"]`, first image = cover). Missing files self-hide (no broken icons).
- **Routing:** uses `HashRouter` (URLs like `/PuneetDhaliwal/#/projects/go-kart`) — chosen because
  it works on GitHub Pages without a 404.html fallback. In-page nav scrolls via JS, not `#anchors`
  (which would clash with the router hash).
- **Theme:** dark "graphite + electric blue" — edit the CSS variables in `:root` in `index.css`
  to reskin. Accent is `--accent` (#3b82f6) / `--accent-2` (#06b6d4).
- **48 MB demo video** (`public/gokart-demo.mp4`) is committed to git history. If repo bloat
  becomes a concern, swap to a YouTube/Vimeo embed and `git rm` the file.
- **Windows LF→CRLF warnings** on commit are harmless; ignore them.
- **Pasted-image gotcha:** the desktop client saves chat-pasted images into the **cwd** with
  millisecond-timestamp filenames (e.g. `1735547149949.jpg`), keeping the original photo date.
  A `find -newermt today` misses them — look in the cwd by name pattern instead.

## Still TODO / optional

- No **headshot** yet — `profile.photo` is empty, so the hero shows a "PD" monogram.
- **StrideAssist, CNC router, garage ramp** have no photos yet (only the go-kart does).
