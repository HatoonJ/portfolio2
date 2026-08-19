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
            const images = [
              p.image && { src: p.image, alt: p.name },
              p.image2 && { src: p.image2, alt: p.name },
              ...(p.gallery || []),
            ].filter(Boolean);
            const hasGallery = images.length > 1;
            return (
              <Reveal className="mp-card" delay={(i % 3) * 0.08} key={p.id}>
                {images.length > 0 ? (
                  <button
                    className="mp-card__image"
                    onClick={() => openLightbox(images, 0)}
                    aria-label={
                      hasGallery
                        ? `View ${images.length} images for ${p.name}`
                        : `View image for ${p.name}`
                    }
                  >
                    <img src={images[0].src} alt={p.name} loading="lazy" />
                    {hasGallery && (
                      <span className="mp-card__gallery-hint">{images.length} photos</span>
                    )}
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
                  {(p.link || p.link2) && (
                    <div className="mp-card__links">
                      {p.link && (
                        <a href={p.link.href} target="_blank" rel="noreferrer" className="mp-card__link">
                          {p.link.label} ↗
                        </a>
                      )}
                      {p.link2 && (
                        <a href={p.link2.href} target="_blank" rel="noreferrer" className="mp-card__link">
                          {p.link2.label} ↗
                        </a>
                      )}
                    </div>
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
