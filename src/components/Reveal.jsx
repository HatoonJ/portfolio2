import { motion } from "framer-motion";

/**
 * Small reusable scroll-reveal wrapper. Keeps animation timing/easing
 * consistent across the whole site instead of repeating transition
 * objects in every component.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  className,
  as: Component = motion.div,
}) {
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
