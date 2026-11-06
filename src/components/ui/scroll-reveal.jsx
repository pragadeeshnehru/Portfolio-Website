import { motion } from "framer-motion";

const dirs = {
  up: { y: 60, x: 0 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
  none: { x: 0, y: 0 },
};

export default function RevealOnScroll({ children, direction = "up", delay = 0, className = "" }) {
  const d = dirs[direction] || dirs.up;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)", ...d }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
