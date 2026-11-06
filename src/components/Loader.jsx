import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAME = "PRAGADEESH";

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const total = 2200;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / total);
      const eased = 1 - Math.pow(1 - p, 3);
      setPct(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setShow(false), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [show]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          className="loader"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader-orb" />
          <div className="loader-name" aria-label="Pragadeesh">
            {NAME.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: "easeOut" }}
              >
                {c}
              </motion.span>
            ))}
          </div>
          <div className="loader-bar"><div style={{ width: `${pct}%` }} /></div>
          <div className="loader-pct">{String(pct).padStart(3, "0")}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
