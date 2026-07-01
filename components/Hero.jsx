import { profile } from "@/lib/data";
import { asset } from "@/lib/asset";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__avatar">
          {profile.photo ? (
            <img src={asset(profile.photo)} alt={profile.name} />
          ) : (
            <span>{initials(profile.name)}</span>
          )}
        </div>

        <div className="hero__text">
          <p className="hero__eyebrow">Hi, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">{profile.role}</h2>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let's Connect
            </a>
            {profile.resumeUrl && (
              <a
                href={asset(profile.resumeUrl)}
                className="btn btn--ghost"
                target="_blank"
                rel="noreferrer"
              >
                Résumé
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
