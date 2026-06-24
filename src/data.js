// ─────────────────────────────────────────────────────────────
//  Edit this file to make the portfolio yours.
//  Everything the site displays comes from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Puneet Dhaliwal",
  role: "Mechanical Engineering Student",
  // Short, recruiter-facing intro line.
  tagline:
    "Mechanical Engineering student at the University of Toronto specializing in mechanical design, CFD, and precision manufacturing — turning concepts into real, tested hardware.",
  location: "Toronto, ON",
  email: "Puneetdhaliwal05@gmail.com",
  phone: "289-388-4159",
  photo: "", // optional: add a headshot to /public, then set e.g. "headshot.jpg"
  resumeUrl: "Puneet-Dhaliwal-Resume.pdf", // lives in /public — recruiters can download it
  socials: {
    github: "https://github.com/PuneetD05",
    linkedin: "https://www.linkedin.com/in/puneet-dhaliwal-032b202a6",
  },
};

export const education = {
  school: "University of Toronto — St. George Campus",
  degree: "B.A.Sc. Mechanical Engineering + PEY Co-op",
  detail: "2023 – 2028 (expected)",
  honours: "Dean's Honour List (Fall 2024) · $5,000 Entrance Scholarship",
  courses:
    "Mechanical Design · Thermodynamics · Manufacturing · Fluid Dynamics · Materials Science",
};

export const about = [
  "I'm a Mechanical Engineering student at the University of Toronto (PEY Co-op stream) who loves the full arc of engineering — from CAD and simulation to machining real parts and testing them on the bench.",
  "On the U of T Supermileage team I design composite aero bodywork and run CFD; at EM Dynamics I machined aerospace and medical components to ±0.01 mm tolerances. Across my projects I've led teams, managed budgets and timelines, and consistently shipped working hardware.",
];

// Work experience & design teams — listed newest first.
export const experience = [
  {
    role: "Aerodynamics Team Member",
    org: "University of Toronto Supermileage",
    location: "Toronto, ON",
    period: "Apr 2025 – Present",
    points: [
      "Designed the aerodynamic body of the team's prototype vehicle in SolidWorks, producing assemblies and manufacturing drawings.",
      "Ran CFD simulations in Ansys Fluent to guide design iterations, validating airflow behaviour and improving aerodynamic performance.",
      "Fabricated composite body panels through mold design, layup, and curing — translating CAD models into lightweight structural components.",
    ],
  },
  {
    role: "CNC Machine Operator",
    org: "EM Dynamics",
    location: "Scarborough, ON",
    period: "May 2024 – Sept 2025",
    points: [
      "Set up and operated CNC milling machines for aerospace and medical components to tolerances within ±0.01 mm.",
      "Interpreted engineering drawings and CAD models, performing root-cause analysis to adjust tooling, offsets, and machining parameters.",
      "Supported quality assurance and AS9100 compliance while maximizing machine uptime.",
    ],
  },
];

// Skills, mechanical-engineering focused (from resume + experience).
export const skills = [
  {
    category: "Design & CAD",
    items: ["SolidWorks (CSWA Certified)", "AutoCAD", "GD&T", "Technical Drawing"],
  },
  {
    category: "Simulation & Analysis",
    items: ["Ansys Fluent (CFD)", "FEA", "MATLAB"],
  },
  {
    category: "Manufacturing",
    items: ["CNC Machining", "Composite Layup", "Welding", "3D Printing"],
  },
  {
    category: "Programming",
    items: ["C", "Java", "Python"],
  },
  {
    category: "Professional",
    items: ["Project Management", "Gantt Scheduling", "Teamwork", "Communication"],
  },
];

// Projects — newest / most impressive first.
export const projects = [
  {
    title: "StrideAssist — Adaptable Walking Exoskeleton",
    description:
      "Designed and developed a below-waist exoskeleton with adjustable lumbar width and reconfigurable leg-link mechanisms to support users with varying lower-limb lengths and mobility impairments.",
    tags: ["SolidWorks", "Mechanism Design", "Biomechanics"],
    period: "",
    link: "",
    repo: "",
    featured: true,
  },
  {
    title: "3-Speed Go-Kart",
    description:
      "Engineered and fabricated a custom gas-powered go-kart from the ground up — chassis, steering, braking, and a custom multi-speed drivetrain. Designed a 3-speed chain-and-gear transmission in SolidWorks (researching gear ratios and torque delivery), then built it with welding, machining, and 3D printing. Validated a 50 km/h target through structured speed, braking, and handling tests.",
    tags: ["SolidWorks", "Drivetrain", "Fabrication"],
    period: "Jun – Aug 2024",
    // Images live in /public — drop the files in and they appear automatically.
    images: ["gokart-1.jpg", "gokart-2.jpg", "gokart-3.jpg"],
    videoFile: "gokart-demo.mp4", // embedded player (file in /public)
    link: "",
    repo: "",
    featured: true,
  },
  {
    title: "CNC Hobbyist Router",
    description:
      "Led a 4-person team over 12 weeks to deliver a prototype-ready CNC router for home hobbyists. Modeled the full assembly in SolidWorks (60+ parts, 20+ drawings) and managed a $4,200 budget to optimize for manufacturability and aluminum-cutting capability.",
    tags: ["SolidWorks", "CAD", "Project Management"],
    period: "Sep – Dec 2024",
    link: "",
    repo: "",
  },
  {
    title: "Garage Entrance / Exit Ramp",
    description:
      "Led a 6-member team as Project Manager to design a space-efficient parking ramp. Modeled a spiral ramp in SolidWorks, evaluating 120+ alternatives to reduce footprint by 67%, and validated continuous traffic flow with a 1:64 3D-printed prototype hitting a 40-second descent target.",
    tags: ["SolidWorks", "Project Management", "Prototyping"],
    period: "Jan – May 2024",
    link: "",
    repo: "",
  },
];
