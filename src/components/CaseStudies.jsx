import Reveal from "./Reveal";
import CaseStudy from "./CaseStudy";
import { caseStudies } from "../data/content";
import "./CaseStudies.css";

export default function CaseStudies() {
  return (
    <section className="section case-studies" id="work">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">Systems built for real businesses.</h2>
          <p className="section-sub">
            Four projects, end to end — the problem they solved, how I built them, and what they run on.
          </p>
        </Reveal>

        <div className="case-studies__list">
          {caseStudies.map((study, i) => (
            <CaseStudy study={study} index={i} key={study.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
