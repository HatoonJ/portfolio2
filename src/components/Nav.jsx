import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./Nav.css";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#more-projects", label: "More Work" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__brand-mark">H</span>
          <span className="nav__brand-name">Hatoon Alsaihati</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-ghost btn-sm nav__cta">
          Let's talk
        </a>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <motion.div
        className="nav__mobile"
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav__mobile-inner">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={handleLinkClick} className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </motion.div>
    </header>
  );
}
