import Reveal from "./Reveal";
import { intro } from "../data/content";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="section intro" id="about">
      <div className="container intro__inner">
        <Reveal className="intro__copy">
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 className="section-title intro__heading">{intro.heading}</h2>
          {intro.paragraphs.map((p, i) => (
            <p className="intro__paragraph" key={i}>
              {p}
            </p>
          ))}
        </Reveal>

        <div className="intro__pillars">
          {intro.pillars.map((pillar, i) => (
            <Reveal className="intro__pillar" delay={i * 0.08} key={pillar.label}>
              <span className="intro__pillar-index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{pillar.label}</h3>
              <p>{pillar.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
