import Reveal from "./Reveal";
import { contact, profile } from "../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact__card">
          <div className="contact__glow" aria-hidden="true" />
          <span className="eyebrow">Get In Touch</span>
          <h2 className="contact__heading">{contact.heading}</h2>
          <p className="contact__detail">{contact.detail}</p>

          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Email me
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              GitHub
            </a>
            <a href={profile.cvPath} download className="btn btn-ghost">
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
