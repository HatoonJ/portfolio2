import Reveal from "./Reveal";
import { recognition } from "../data/content";
import "./Recognition.css";

export default function Recognition() {
  return (
    <section className="recognition">
      <div className="container">
        <Reveal className="recognition__inner">
          <div className="recognition__icon" aria-hidden="true">
            ★
          </div>
          <div className="recognition__text">
            <h3>{recognition.heading}</h3>
            <p>{recognition.detail}</p>
          </div>
          <a
            href={recognition.cta.href}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-sm recognition__cta"
          >
            {recognition.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
