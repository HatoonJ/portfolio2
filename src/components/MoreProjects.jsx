import Reveal from "./Reveal";
import { useLightbox } from "../context/LightboxContext";
import { moreProjects } from "../data/content";
import "./MoreProjects.css";

export default function MoreProjects() {
  const { openLightbox } = useLightbox();

  return (
    <section className="section more-projects" id="more-projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">More Work</span>
          <h2 className="section-title">Business systems, automation & tooling.</h2>
          <p className="section-sub">
            Additional projects delivered for real teams — internal CRMs, reporting automation, and integrations.
          </p>
        </Reveal>

        <div className="more-projects__grid">
          {moreProjects.map((p, i) => {
            const images = [p.image, p.image2].filter(Boolean).map((src) => ({ src, alt: p.name }));
            return (
              <Reveal className="mp-card" delay={(i % 3) * 0.08} key={p.id}>
                {images.length > 0 ? (
                  <button
                    className="mp-card__image"
                    onClick={() => openLightbox(images, 0)}
                    aria-label={`View screenshots for ${p.name}`}
                  >
                    <img src={images[0].src} alt={p.name} loading="lazy" />
                  </button>
                ) : (
                  <div className="mp-card__image mp-card__image--placeholder" aria-hidden="true">
                    <span>{p.name.slice(0, 2).toUpperCase()}</span>
                  </div>
                )}
                <div className="mp-card__body">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="mp-card__stack">
                    {p.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <a href={p.link.href} target="_blank" rel="noreferrer" className="mp-card__link">
                      {p.link.label} ↗
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
