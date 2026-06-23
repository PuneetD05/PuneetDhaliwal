import { projects } from "../data";
import { asset } from "./Hero";

// If an image file isn't present yet, drop the whole figure so there's no
// broken-image icon or empty reserved space.
function hideMissing(e) {
  const fig = e.currentTarget.closest(".project__media");
  if (fig) fig.remove();
}

function ProjectCard({ project }) {
  const images = project.images || [];

  return (
    <article className={`project ${project.featured ? "project--featured" : ""}`}>
      {images.length > 0 && (
        <figure className="project__media">
          <img
            src={asset(images[0])}
            alt={project.title}
            loading="lazy"
            onError={hideMissing}
          />
          {images.length > 1 && (
            <div className="project__thumbs">
              {images.slice(1).map((img) => (
                <img
                  key={img}
                  src={asset(img)}
                  alt=""
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ))}
            </div>
          )}
        </figure>
      )}

      <div className="project__body">
        <div className="project__head">
          <h3 className="project__title">{project.title}</h3>
          {project.period && (
            <span className="project__period">{project.period}</span>
          )}
        </div>
        <p className="project__desc">{project.description}</p>
        <ul className="project__tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      {(project.video || project.link || project.repo) && (
        <div className="project__links">
          {project.video && (
            <a href={project.video} target="_blank" rel="noreferrer">
              ▶ Watch demo
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              Live ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              Code ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__head">
        <span className="section__num">03</span>
        <h2 className="section__title">Projects</h2>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
