import { useParams, Link } from "react-router-dom";
import { getProject, projects } from "../data";
import { asset } from "../lib/asset";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="project-page">
        <p className="back-link">
          <Link to="/#projects">← Back to projects</Link>
        </p>
        <h1>Project not found</h1>
        <p className="muted">
          That project doesn't exist. Head back and pick one from the list.
        </p>
      </main>
    );
  }

  const images = project.images || [];
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="project-page">
      <p className="back-link">
        <Link to="/#projects">← Back to projects</Link>
      </p>

      <header className="project-hero">
        <span className="project-hero__period">{project.period}</span>
        <h1>{project.title}</h1>
        <p className="project-hero__tagline">{project.tagline}</p>
        <ul className="project-hero__tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </header>

      {images[0] && (
        <figure className="project-cover">
          <img src={asset(images[0])} alt={project.title} />
        </figure>
      )}

      <div className="project-content">
        <section className="project-overview">
          <h2>Overview</h2>
          {project.overview.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        <aside className="project-highlights">
          <h2>Highlights</h2>
          <ul>
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </aside>
      </div>

      {images.length > 1 && (
        <section className="project-gallery">
          <h2>Gallery</h2>
          <div className="project-gallery__grid">
            {images.slice(1).map((img) => (
              <img key={img} src={asset(img)} alt="" loading="lazy" />
            ))}
          </div>
        </section>
      )}

      {project.videoFile && (
        <section className="project-video">
          <h2>Demo</h2>
          <video src={asset(project.videoFile)} controls preload="metadata" playsInline />
        </section>
      )}

      {(project.link || project.repo) && (
        <div className="project-links">
          {project.link && (
            <a href={project.link} className="btn btn--ghost" target="_blank" rel="noreferrer">
              Live ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} className="btn btn--ghost" target="_blank" rel="noreferrer">
              Code ↗
            </a>
          )}
        </div>
      )}

      <Link to={`/projects/${next.slug}`} className="next-project">
        <span>Next project</span>
        <strong>{next.title} →</strong>
      </Link>
    </main>
  );
}
