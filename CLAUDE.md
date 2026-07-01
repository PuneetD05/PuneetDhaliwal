# CLAUDE.md — Puneet's Engineering Portfolio

Project guidance for Claude Code. Read this before working in this repo.

## What this is

Puneet Dhaliwal's personal **mechanical-engineering portfolio website**. A Next.js app
with per-project detail pages, deployed on **Vercel**.

- **Repo:** https://github.com/PuneetD05/PuneetDhaliwal (GitHub user: `PuneetD05`)
- **Local path:** `C:\Users\Punee\Downloads\portfolio`
- **Live site:** Vercel (URL set during Vercel setup). NOTE: the old React+Vite version
  is still on GitHub Pages at https://puneetd05.github.io/PuneetDhaliwal/ until fully cut over.

## ⚠️ Working rules (important)

- **Never `git push` / deploy to production without asking Puneet first.** Commit locally,
  then summarize and ask before pushing. (Vercel auto-deploys on push to the production branch.)
- **Address the user as "Puneet"** in responses.
- Puneet is **early in his coding journey** — explain simply, give copy-paste commands, avoid
  unexplained jargon. Priority for his work: **Design > Functionality > Features > Ease.**

## Tech stack

- **Next.js 15 (App Router)** + **React 19**
- **Plain CSS** (no framework) — all styles in `app/globals.css`, theme tokens in `:root`
- **Inter** via `next/font/google`
- Hosted on **Vercel** (auto-deploys from GitHub)

## Commands

```bash
npm install      # first time only
npm run dev      # dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build locally
```

## The #1 rule: content lives in ONE file

**All site content is in [`lib/data.js`](lib/data.js)** — profile, education, experience,
skills, and projects (plus a `getProject()` helper). To change what the site says, edit that
file. Components read from it; don't hardcode content.

## Project structure

```
public/            static assets served at "/" (images, resume PDF, video, favicon)
app/
  layout.jsx       root layout: <html>/<body>, metadata, Inter font, Navbar, footer
  page.jsx         home page (assembles the sections)
  globals.css      theme (:root tokens) + ALL styles
  projects/[slug]/page.jsx   per-project page (generateStaticParams pre-renders all)
components/        Navbar, Hero, About, Experience, ProjectsGrid, Skills, Contact
lib/
  data.js          ← ALL content + getProject()
  asset.js         asset() — resolves a /public filename to its URL
```

## Deployment (Vercel)

Vercel is connected to the GitHub repo and auto-builds on push to the production branch.
There is **no GitHub Actions workflow** for the Next version (the old GH Pages workflow was
removed). Migration work lives on the **`nextjs-migration`** branch until merged to `main`.

## Conventions & gotchas

- **No base path.** On Vercel the site serves from root, so `asset('foo.jpg')` returns
  `/foo.jpg`. (The old Vite/GitHub-Pages `/PuneetDhaliwal/` base path is gone.)
- **Routing is file-based.** A folder under `app/` = a route. Project pages come from
  `app/projects/[slug]/page.jsx` + `generateStaticParams()` over `projects[]` in `data.js`.
- **Adding a project:** append an object to `projects[]` in `data.js` with a unique `slug`,
  `title`, `period`, `tagline`, `overview` (array), `highlights` (array), `tags`, optional
  `images` / `videoFile`. Its page is generated automatically at `/projects/<slug>`.
- **Adding images/video:** drop the file in `public/`, reference it by filename in `data.js`
  (`images: ["foo.jpg"]`, first = cover).
- **Server vs client components:** components are React Server Components by default. Only
  `Navbar.jsx` is a client component (`"use client"`) because it uses hooks/navigation.
- **Next 15 async params:** in `app/projects/[slug]/page.jsx`, `params` is a Promise — `await`
  it (`const { slug } = await params;`). Same in `generateMetadata`.
- **Images use plain `<img>`**, not `next/image` (keeps things simple; no config needed).
- **48 MB demo video** (`public/gokart-demo.mp4`) is committed to git history. If repo bloat
  matters later, swap to a YouTube/Vimeo embed and `git rm` it.
- **Pasted-image gotcha:** the desktop client saves chat-pasted images into the **cwd** with
  millisecond-timestamp filenames (e.g. `1735547149949.jpg`), keeping the original photo date.
  A `find -newermt today` misses them — look in the cwd by name pattern.

## Still TODO / optional

- No **headshot** yet — `profile.photo` is empty, so the hero shows a "PD" monogram.
- **StrideAssist, CNC router, garage ramp** have no photos yet (only the go-kart does).
- Once Vercel is verified, decide whether to retire the old GitHub Pages site.
