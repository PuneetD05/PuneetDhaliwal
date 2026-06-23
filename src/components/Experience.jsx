import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__head">
        <span className="section__num">02</span>
        <h2 className="section__title">Experience</h2>
      </div>

      <div className="timeline">
        {experience.map((job, i) => (
          <article key={i} className="timeline__item">
            <div className="timeline__marker" />
            <div className="timeline__body">
              <div className="timeline__top">
                <h3>
                  {job.role} <span className="timeline__org">· {job.org}</span>
                </h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <ul>
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
