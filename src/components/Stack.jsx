import Reveal from "./Reveal";
import { stack } from "../data/content";
import "./Stack.css";

export default function Stack() {
  return (
    <section className="section stack" id="stack">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Stack</span>
          <h2 className="section-title">Technologies and tools I build with.</h2>
        </Reveal>

        <div className="stack__groups">
          {Object.entries(stack).map(([group, items], i) => (
            <Reveal className="stack__group" delay={i * 0.06} key={group}>
              <h3>{group}</h3>
              <div className="stack__items">
                {items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
