import { about, profile } from "../data";

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
          <h3>Quick Facts</h3>
          <ul>
            <li>
              <span>Role</span>
              {profile.role}
            </li>
            <li>
              <span>Location</span>
              {profile.location}
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
