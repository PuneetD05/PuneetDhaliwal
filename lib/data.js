// ─────────────────────────────────────────────────────────────
//  Edit this file to make the portfolio yours.
//  Everything the site displays comes from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Puneet Dhaliwal",
  role: "Mechanical Engineering Student",
  // Short, recruiter-facing intro line.
  tagline:
    "Mechanical engineering student at the University of Toronto. I turn ideas into machined, tested, working hardware — from CFD-tuned aero bodywork to custom-built drivetrains.",
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
  "I'm a mechanical engineering student at the University of Toronto who's happiest with a hard problem in front of me and a deadline on the calendar. What I love most is the full loop — sketching an idea, refining it in CAD, simulating it, then actually building and testing the real thing.",
  "On the Supermileage team I design and run CFD on composite aero bodywork; at EM Dynamics I machined aerospace and medical parts to ±0.01 mm. Across my own projects I've led teams, owned budgets, and — above all — shipped hardware that works.",
];

// Work experience & design teams — listed newest first.
export const experience = [
  {
    role: "Aerodynamics Team Member",
    org: "University of Toronto Supermileage",
    location: "Toronto, ON",
    period: "Apr 2025 – Present",
    points: [
      "Designed the prototype vehicle's aerodynamic bodywork in SolidWorks, producing the assemblies and drawings the team manufactures from.",
      "Ran Ansys Fluent CFD studies to steer design iterations — validating airflow behaviour and sharpening aerodynamic performance.",
      "Built the composite panels hands-on through mold design, layup, and cure, turning CAD geometry into lightweight structural parts.",
    ],
  },
  {
    role: "CNC Machine Operator",
    org: "EM Dynamics",
    location: "Scarborough, ON",
    period: "May 2024 – Sept 2025",
    points: [
      "Set up and ran CNC mills producing aerospace and medical components held to tolerances within ±0.01 mm.",
      "Read engineering drawings and CAD models, tracing machining deviations to root cause and correcting tooling, offsets, and parameters.",
      "Kept production AS9100-compliant while pushing machine uptime and consistent part quality.",
    ],
  },
];

// Skills, mechanical-engineering focused.
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

// ── Projects ──────────────────────────────────────────────────
// Each has its own page at /projects/<slug>.
//  - tagline:   one-liner shown on the home card
//  - overview:  paragraph(s) for the project page
//  - highlights: bullet points of what you actually did / achieved
//  - images:    files in /public (first = cover)
//  - videoFile: optional embedded video in /public
export const projects = [
  {
    slug: "strideassist",
    title: "StrideAssist — Adaptable Walking Exoskeleton",
    period: "Academic Project",
    tagline: "A below-waist exoskeleton that adapts to the person wearing it.",
    overview: [
      "StrideAssist is a lower-body exoskeleton built around a single conviction: mobility aids shouldn't be one-size-fits-all. I designed an adjustable frame — variable lumbar width paired with reconfigurable leg-link mechanisms — so one device can fit users with very different lower-limb lengths and mobility needs.",
      "The goal was a platform that meets people where they are, instead of forcing them to adapt to rigid hardware.",
    ],
    highlights: [
      "Engineered adjustable lumbar width and modular leg-links to accommodate a wide range of body dimensions.",
      "Modeled the full mechanism in SolidWorks with a focus on support, comfort, and safe load paths.",
      "Grounded every design decision in real accessibility needs for users with lower-limb mobility impairments.",
    ],
    tags: ["SolidWorks", "Mechanism Design", "Biomechanics", "Accessibility"],
    images: [],
    videoFile: "",
    link: "",
    repo: "",
    featured: true,
  },
  {
    slug: "go-kart",
    title: "3-Speed Go-Kart",
    period: "Jun – Aug 2024",
    tagline: "A gas-powered kart with a transmission I designed and built from scratch.",
    overview: [
      "This project started as a question — could I build a working multi-speed transmission myself? — and ended as a fully drivable, gas-powered go-kart. I designed a three-speed chain-and-gear gearbox in SolidWorks, dialing in gear ratios to balance torque off the line against top-end speed.",
      "From there it was all hands-on: I fabricated the chassis, steering, brakes, and drivetrain, with every part welded, machined, or 3D-printed myself.",
    ],
    highlights: [
      "Designed a custom 3-speed chain-and-gear transmission in SolidWorks, sizing ratios for both torque and top speed.",
      "Fabricated the chassis, steering, braking, and drivetrain using welding, machining, and 3D printing.",
      "Hit a 50 km/h top-speed target and validated braking and handling through structured on-road testing.",
    ],
    tags: ["SolidWorks", "Drivetrain", "Fabrication", "Welding"],
    images: ["gokart-1.jpg", "gokart-2.jpg", "gokart-3.jpg"],
    videoFile: "gokart-demo.mp4",
    link: "",
    repo: "",
    featured: true,
  },
  {
    slug: "cnc-router",
    title: "CNC Hobbyist Router",
    period: "Sep – Dec 2024",
    tagline: "An aluminum-capable CNC router designed to be affordable for hobbyists.",
    overview: [
      "Most desktop CNC routers either cost a fortune or can't touch metal. Leading a four-person team over twelve weeks, I set out to close that gap with a rigid, aluminum-capable router a hobbyist could actually afford.",
      "I owned the full CAD model while keeping the team on schedule and the project on budget — turning a loose brief into a prototype-ready design package.",
    ],
    highlights: [
      "Led a 4-person team for 12 weeks with weekly design reviews, task delegation, and Gantt scheduling.",
      "Modeled the complete assembly in SolidWorks — 60+ parts and 20+ detailed drawings covering tolerances and joint interfaces.",
      "Managed a $4,200 budget, optimizing part and material choices for manufacturability and aluminum-cutting rigidity.",
    ],
    tags: ["SolidWorks", "CAD", "Project Management", "Manufacturing"],
    images: [],
    videoFile: "",
    link: "",
    repo: "",
    featured: false,
  },
  {
    slug: "garage-ramp",
    title: "Garage Entrance / Exit Ramp",
    period: "Jan – May 2024",
    tagline: "A space-saving spiral parking ramp, validated with a scaled prototype.",
    overview: [
      "Tasked with moving cars in and out of a tight footprint, my six-person team needed a ramp that was efficient, safe, and genuinely buildable. As project manager I kept the engagement on track with Gantt charts and weekly client updates.",
      "On the technical side, I led the design — modeling a spiral ramp in SolidWorks and iterating hard before committing to a final layout.",
    ],
    highlights: [
      "Led a 6-person team as Project Manager, using Gantt charts and weekly client check-ins to hit every deadline.",
      "Evaluated 120+ design alternatives and selected a spiral ramp that reduced footprint by 67%.",
      "Validated continuous traffic flow with a 1:64 3D-printed prototype, hitting the target 40-second descent.",
    ],
    tags: ["SolidWorks", "Project Management", "Prototyping"],
    images: [],
    videoFile: "",
    link: "",
    repo: "",
    featured: false,
  },
];

// Helper: look a project up by its slug (used by the project page).
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
