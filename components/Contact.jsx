import { profile } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="section__head">
        <span className="section__num">05</span>
        <h2 className="section__title">Get in Touch</h2>
      </div>

      <div className="contact">
        <p>
          I'm actively looking for mechanical engineering co-op and internship
          opportunities. Whether you're hiring, collaborating, or just want to
          talk shop — I'd love to hear from you.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn--primary">
          Email Me
        </a>

        <div className="contact__socials">
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {profile.resumeUrl && (
            <a href={asset(profile.resumeUrl)} target="_blank" rel="noreferrer">
              Résumé
            </a>
          )}
          {profile.phone && <a href={`tel:${profile.phone}`}>{profile.phone}</a>}
        </div>
      </div>
    </section>
  );
}
