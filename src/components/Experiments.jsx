import { useRef } from "react";
import Reveal from "./Reveal";
import { useLightbox } from "../context/LightboxContext";
import { experiments } from "../data/content";
import "./Experiments.css";

export default function Experiments() {
  const trackRef = useRef(null);
  const { openLightbox } = useLightbox();

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="section experiments" id="experiments">
      <div className="container experiments__head-row">
        <Reveal className="section-head" y={20}>
          <span className="eyebrow">Experiments & Side Projects</span>
          <h2 className="section-title">Hackathons, prototypes, and things I made for fun.</h2>
        </Reveal>

        <div className="experiments__controls">
          <button onClick={() => scrollBy(-1)} aria-label="Scroll left">
            ‹
          </button>
          <button onClick={() => scrollBy(1)} aria-label="Scroll right">
            ›
          </button>
        </div>
      </div>

      <div className="experiments__track" ref={trackRef}>
        {experiments.map((e) => (
          <article className="exp-card" key={e.id}>
            <button
              className="exp-card__image"
              onClick={() => openLightbox([{ src: e.image, alt: e.name }], 0)}
              aria-label={`View image for ${e.name}`}
            >
              <img src={e.image} alt={e.name} loading="lazy" />
              <span className="exp-card__tag">{e.tag}</span>
            </button>
            <div className="exp-card__body">
              <h3>{e.name}</h3>
              <p>{e.description}</p>
              {e.link && (
                <a href={e.link.href} target="_blank" rel="noreferrer" className="exp-card__link">
                  {e.link.label} ↗
                </a>
              )}
            </div>
          </article>
        ))}
        <div className="experiments__spacer" aria-hidden="true" />
      </div>
    </section>
  );
}
