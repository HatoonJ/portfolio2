import Reveal from "./Reveal";
import { experience, education } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where the work happened.</h2>
        </Reveal>

        <div className="experience__timeline">
          {experience.map((job, i) => (
            <Reveal className="experience__item" delay={i * 0.08} key={job.role + job.period}>
              <div className="experience__marker" aria-hidden="true" />
              <div className="experience__meta">
                <span className="experience__period">{job.period}</span>
              </div>
              <div className="experience__content">
                <h3>{job.role}</h3>
                <span className="experience__org">{job.org}</span>
                <ul>
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal className="experience__item experience__item--education" delay={experience.length * 0.08}>
            <div className="experience__marker experience__marker--edu" aria-hidden="true" />
            <div className="experience__meta">
              <span className="experience__period">{education.period}</span>
            </div>
            <div className="experience__content">
              <h3>{education.degree}</h3>
              <span className="experience__org">{education.school}</span>
              <p className="experience__edu-detail">{education.detail}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
