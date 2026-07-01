"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { profile } from "@/lib/data";
import { asset } from "@/lib/asset";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === "/";

  // Smooth-scroll to a section. If we're on a project page, go home first.
  function goToSection(id) {
    setOpen(false);
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }

  return (
    <header className="nav">
      <Link href="/" className="nav__brand" onClick={() => setOpen(false)}>
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
            href={asset(profile.resumeUrl)}
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
