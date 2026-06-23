// ─────────────────────────────────────────────────────────────
//  Edit this file to make the portfolio yours.
//  Everything the site displays comes from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Your Name",
  role: "Engineering Student",
  tagline:
    "I build things that solve real problems — from hardware prototypes to full-stack web apps.",
  location: "Your City, Country",
  email: "you@example.com",
  resumeUrl: "", // optional: link to a PDF, e.g. "/resume.pdf"
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};

export const about = [
  "I'm an engineering student passionate about turning ideas into working products. I enjoy the full journey — sketching a concept, prototyping, and shipping something people can actually use.",
  "Outside of coursework I work on personal projects to sharpen my skills in software, electronics, and design. I'm always looking for the next problem worth solving.",
];

// Grouped skills. Add or remove groups and items freely.
export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "C / C++", "HTML & CSS", "SQL"],
  },
  {
    category: "Frameworks & Tools",
    items: ["React", "Node.js", "Git & GitHub", "Vite", "Arduino"],
  },
  {
    category: "Engineering",
    items: ["CAD / SolidWorks", "Circuit Design", "3D Printing", "Data Analysis"],
  },
];

// Your projects. The first 1–2 with `featured: true` get a larger card.
export const projects = [
  {
    title: "Smart Home Dashboard",
    description:
      "A web dashboard that monitors and controls IoT devices around the house in real time. Built the frontend in React and the device API in Node.js.",
    tags: ["React", "Node.js", "IoT"],
    link: "",
    repo: "",
    featured: true,
  },
  {
    title: "Line-Following Robot",
    description:
      "An autonomous robot using infrared sensors and a PID control loop to follow a track. Designed the chassis in CAD and programmed the microcontroller in C.",
    tags: ["Arduino", "C", "Robotics"],
    link: "",
    repo: "",
    featured: true,
  },
  {
    title: "Study Planner App",
    description:
      "A productivity app that breaks coursework into scheduled study blocks and tracks progress over the semester.",
    tags: ["JavaScript", "UI Design"],
    link: "",
    repo: "",
  },
  {
    title: "Weather Data Visualizer",
    description:
      "Pulls live weather data from an open API and renders interactive charts to spot trends over time.",
    tags: ["Python", "Data Analysis"],
    link: "",
    repo: "",
  },
];
