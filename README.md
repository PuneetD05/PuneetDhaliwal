# Engineering Portfolio

My personal portfolio website, showcasing my mechanical engineering projects and skills.
Built with [Next.js](https://nextjs.org) + [React](https://react.dev), deployed on
[Vercel](https://vercel.com).

## ✨ Features

- Responsive, mobile-friendly design with a dark graphite/electric-blue theme
- Sections: Hero, About, Experience, Projects, Skills, Contact
- A dedicated page for each project (`/projects/<name>`)
- All content driven from one file — easy to update

## 🛠️ Getting started

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:3000
npm run build    # build for production
npm run start    # serve the production build locally
```

## ✏️ Making it yours

All the text, skills, and projects live in [`lib/data.js`](lib/data.js).
Edit that one file to update your name, bio, skills, and project list — no need
to touch the components. To add project images or video, drop the files in
[`public/`](public) and reference them by filename in `lib/data.js`.

## 📁 Project structure

```
app/
  layout.jsx     root layout (nav, footer, metadata)
  page.jsx       home page
  globals.css    theme + all styles
  projects/[slug]/page.jsx   per-project page
components/       UI sections (Navbar, Hero, About, Experience, ...)
lib/
  data.js        ← your content lives here
  asset.js       resolves /public file URLs
public/          images, resume PDF, video
```
