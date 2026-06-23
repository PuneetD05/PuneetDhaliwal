# Engineering Portfolio

My personal portfolio website, showcasing my engineering projects and skills.
Built with [React](https://react.dev) + [Vite](https://vite.dev).

## ✨ Features

- Responsive, mobile-friendly single-page design
- Sections: Hero, About, Skills, Projects, Contact
- All content driven from one file — easy to update

## 🛠️ Getting started

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:5173
npm run build    # build for production into /dist
npm run preview  # preview the production build
```

## ✏️ Making it yours

All the text, skills, and projects live in [`src/data.js`](src/data.js).
Edit that one file to update your name, bio, skills, and project list — no need
to touch the components.

## 📁 Project structure

```
src/
  components/   UI sections (Navbar, Hero, About, Skills, Projects, Contact)
  data.js       ← your content lives here
  App.jsx       assembles the sections
  index.css     theme + all styles
```
