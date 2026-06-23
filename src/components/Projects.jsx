import { projects } from "../data";

function ProjectCard({ project }) {
  return (
    <article className={`project ${project.featured ? "project--featured" : ""}`}>
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
      <div className="project__links">
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
