import { Link } from "react-router-dom";
import { projects } from "../data";
import { asset } from "../lib/asset";

function ProjectCard({ project }) {
  const cover = project.images?.[0];

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`pcard ${project.featured ? "pcard--featured" : ""}`}
    >
      <div className="pcard__media">
        {cover ? (
          <img
            src={asset(cover)}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.classList.add("pcard__media--empty");
            }}
          />
        ) : (
          <span className="pcard__placeholder">{project.title.charAt(0)}</span>
        )}
        {project.videoFile && <span className="pcard__badge">▶ Video</span>}
      </div>

      <div className="pcard__body">
        <div className="pcard__head">
          <h3>{project.title}</h3>
          {project.period && <span className="pcard__period">{project.period}</span>}
        </div>
        <p className="pcard__tagline">{project.tagline}</p>
        <ul className="pcard__tags">
          {project.tags.slice(0, 3).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <span className="pcard__cta">View project →</span>
      </div>
    </Link>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="section">
      <div className="section__head">
        <span className="section__num">03</span>
        <h2 className="section__title">Projects</h2>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
