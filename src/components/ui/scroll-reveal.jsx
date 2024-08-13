import React, { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when out of view
        }
      },
      { threshold: 0.1 } // Adjust the threshold if needed
    );

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 
    ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
