import { about, education, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section__head">
        <span className="section__num">01</span>
        <h2 className="section__title">About Me</h2>
      </div>

      <div className="about">
        <div className="about__text">
          {about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <aside className="about__card">
          <h3>Education</h3>
          <p className="about__degree">{education.degree}</p>
          <p className="about__school">{education.school}</p>
          <p className="about__detail">{education.detail}</p>
          {education.honours && (
            <p className="about__honours">🏅 {education.honours}</p>
          )}
          {education.courses && (
            <p className="about__courses">
              <strong>Relevant coursework:</strong> {education.courses}
            </p>
          )}

          <hr />

          <ul>
            <li>
              <span>Location</span>
              {profile.location}
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            {profile.phone && (
              <li>
                <span>Phone</span>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </li>
            )}
          </ul>
        </aside>
      </div>
    </section>
  );
}
