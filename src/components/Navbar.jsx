import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === "/";

  // Smooth-scroll to a section. If we're on a project page, go home first.
  function goToSection(id) {
    setOpen(false);
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      // Wait for the home page to mount, then scroll.
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    }
  }

  return (
    <header className="nav">
      <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
        {profile.name}
      </Link>

      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav__links ${open ? "is-open" : ""}`}>
        {sections.map((s) => (
          <button key={s.id} className="nav__link" onClick={() => goToSection(s.id)}>
            {s.label}
          </button>
        ))}
        {profile.resumeUrl && (
          <a
            className="nav__resume"
            href={import.meta.env.BASE_URL + profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Résumé
          </a>
        )}
      </nav>
    </header>
  );
}
