import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { useLightbox } from "../context/LightboxContext";
import "./CaseStudy.css";

export default function CaseStudy({ study, index }) {
  const { openLightbox } = useLightbox();
  const reversed = index % 2 === 1;
  const galleryImages = study.images.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <article className={`case-study ${reversed ? "case-study--reversed" : ""}`} id={study.id}>
      <span className="case-study__index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="case-study__grid">
        <Reveal className="case-study__gallery" x={reversed ? 24 : -24}>
          <div
            className="case-study__gallery-main"
            onClick={() => openLightbox(galleryImages, 0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(galleryImages, 0)}
          >
            <img src={study.images[0].src} alt={study.images[0].alt} loading="lazy" />
            <div className="case-study__gallery-hint">View gallery</div>
          </div>
          {study.images.length > 1 && (
            <div className="case-study__gallery-strip">
              {study.images.slice(1, 4).map((img, i) => (
                <button
                  key={img.src}
                  className="case-study__gallery-thumb"
                  onClick={() => openLightbox(galleryImages, i + 1)}
                  aria-label={`View image: ${img.alt}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal className="case-study__content" delay={0.1}>
          <span className="tag">{study.tag}</span>
          <h3 className="case-study__name">{study.name}</h3>
          <p className="case-study__one-liner">{study.oneLiner}</p>

          <div className="case-study__field">
            <span className="case-study__field-label">Role</span>
            <p>{study.role}</p>
          </div>

          <div className="case-study__field">
            <span className="case-study__field-label">Problem</span>
            <p>{study.problem}</p>
          </div>

          <div className="case-study__field">
            <span className="case-study__field-label">Solution</span>
            <p>{study.solution}</p>
          </div>

          <div className="case-study__field">
            <span className="case-study__field-label">Key features</span>
            <ul className="case-study__features">
              {study.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          {study.results && (
            <div className="case-study__results">
              {study.results.map((r) => (
                <div className="case-study__result" key={r.label}>
                  <span className="case-study__result-metric">{r.metric}</span>
                  <span className="case-study__result-label">{r.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="case-study__stack">
            {study.stack.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </div>

          {study.links.length > 0 && (
            <div className="case-study__links">
              {study.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </article>
  );
}
