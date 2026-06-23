import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">Hi, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__role">{profile.role}</h2>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in Touch
          </a>
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} className="btn btn--ghost" target="_blank" rel="noreferrer">
              Résumé
            </a>
          )}
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        ↓
      </a>
    </section>
  );
}
