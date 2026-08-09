import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLightbox } from "../context/LightboxContext";
import "./LightboxOverlay.css";

export default function LightboxOverlay() {
  const { images, index, open, closeLightbox, next, prev } = useLightbox();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeLightbox, next, prev]);

  const current = images[index];

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            ✕
          </button>

          {images.length > 1 && (
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt || ""}
            className="lightbox__image"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              ›
            </button>
          )}

          {images.length > 1 && (
            <div className="lightbox__counter">
              {index + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
