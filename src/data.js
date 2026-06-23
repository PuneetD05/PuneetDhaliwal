// ─────────────────────────────────────────────────────────────
//  Edit this file to make the portfolio yours.
//  Everything the site displays comes from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Puneet Dhaliwal",
  role: "Mechanical Engineering Student",
  // Short, punchy intro line — like your friends' sites.
  tagline:
    "Mechanical Engineering student at the University of Toronto, driven by hands-on design, manufacturing, and building things that move.",
  location: "Toronto, ON",
  email: "you@example.com",
  photo: "", // optional: put a headshot in /public and set e.g. "/headshot.jpg"
  resumeUrl: "", // optional: put a PDF in /public and set e.g. "/resume.pdf"
  socials: {
    github: "https://github.com/PuneetD05",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};

export const education = {
  school: "University of Toronto",
  degree: "B.A.Sc. Mechanical Engineering",
  detail: "Expected 2027",
};

export const about = [
  "I'm a Mechanical Engineering student at the University of Toronto with a passion for turning ideas into real, working hardware — from CAD models and prototypes to fully manufactured assemblies.",
  "I specialize in mechanical design and manufacturing, and I love the hands-on side of engineering: machining parts, running analyses, and seeing a design come together on the bench.",
];

// Work experience & design teams — the heart of a mechanical eng portfolio.
// Listed newest first.
export const experience = [
  {
    role: "Mechanical Design Intern",
    org: "Company Name",
    period: "Summer 2025",
    points: [
      "Designed and prototyped components in SolidWorks for production hardware.",
      "Ran tolerance analysis and prepared drawings for manufacturing.",
    ],
  },
  {
    role: "Mechanical Team Member",
    org: "UofT Design Team (e.g. Formula Racing / Supermileage)",
    period: "2024 – Present",
    points: [
      "Contributed to the design and fabrication of vehicle subsystems.",
      "Collaborated across a multidisciplinary team to hit competition deadlines.",
    ],
  },
];

// Grouped skills, mechanical-engineering focused.
export const skills = [
  {
    category: "Design & CAD",
    items: ["SolidWorks", "AutoCAD", "Fusion 360", "GD&T", "Technical Drawing"],
  },
  {
    category: "Manufacturing",
    items: ["3D Printing", "CNC Machining", "Lathe & Mill", "Welding", "Prototyping"],
  },
  {
    category: "Analysis & Tools",
    items: ["FEA (Ansys)", "MATLAB", "Thermodynamics", "Statics & Dynamics"],
  },
  {
    category: "Programming",
    items: ["Python", "C / C++", "Arduino"],
  },
];

// Your projects. Mechanical-flavoured examples — swap in your own.
export const projects = [
  {
    title: "Line-Following Robot",
    description:
      "Autonomous robot using infrared sensors and a PID control loop to follow a track. Designed the chassis in SolidWorks and programmed the microcontroller in C.",
    tags: ["SolidWorks", "Mechatronics", "C"],
    link: "",
    repo: "",
    featured: true,
  },
  {
    title: "CNC Router Design",
    description:
      "A 3-axis desktop CNC router designed from the ground up — frame, motion system, and spindle mount modeled in CAD and validated with FEA.",
    tags: ["CAD", "FEA", "Manufacturing"],
    link: "",
    repo: "",
    featured: true,
  },
  {
    title: "IC Engine Teardown & Analysis",
    description:
      "Disassembled a small internal-combustion engine, measured key components, and analyzed the thermodynamic cycle to characterize performance.",
    tags: ["Thermodynamics", "Analysis"],
    link: "",
    repo: "",
  },
  {
    title: "Robotic Gripper",
    description:
      "A compact 3D-printed robotic gripper with a linkage mechanism, optimized for grip force and range through iterative prototyping.",
    tags: ["3D Printing", "Mechanism Design"],
    link: "",
    repo: "",
  },
];
