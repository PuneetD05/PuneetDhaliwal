import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="section__head">
        <span className="section__num">04</span>
        <h2 className="section__title">Get in Touch</h2>
      </div>

      <div className="contact">
        <p>
          I'm always open to new projects, collaborations, or just a chat about
          engineering. Feel free to reach out.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn--primary">
          Say Hello
        </a>

        <div className="contact__socials">
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
