import { motion } from "framer-motion";
import portrait from "../assets/portrait/hatoon3.png"; //"../assets/portrait/hatoon.webp";
import { hero, profile } from "../data/content";
import "./Hero.css";

const badges = ["APIs", "Automation", "AI", "WhatsApp Bots"];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            className="hero__headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            className="hero__subhead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#work" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div
            className="hero__badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {badges.map((b) => (
              <span className="chip" key={b}>
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__portrait-ring">
            <img src={portrait} alt={profile.name} />
          </div>
          <motion.div
            className="hero__floating-card hero__floating-card--top"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="hero__floating-dot" />
            Software Engineer
          </motion.div>
          <motion.div
            className="hero__floating-card hero__floating-card--bottom"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="hero__floating-dot" />
            Available for work
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="hero__scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
