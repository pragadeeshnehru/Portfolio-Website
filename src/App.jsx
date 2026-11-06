import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import RevealOnScroll from "./components/ui/scroll-reveal";
import { AnimatedCards } from "./components/AnimatedCards";
import MediumArticles from "./components/MediumArticles";
import Loader from "./components/Loader";
import CursorTrail from "./components/CursorTrail";
import ScrollProgress from "./components/ScrollProgress";
import Background from "./components/Background";

const NAV = [
  ["about", "About"],
  ["gallery", "Works"],
  ["contact", "Contact"],
];

export default function App() {
  const [ready, setReady] = useState(false);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, 180]);
  const bgRot = useTransform(scrollY, [0, 900], [0, 12]);
  const [navSolid, setNavSolid] = useState(false);
  useEffect(() => scrollY.on("change", (v) => setNavSolid(v > 40)), [scrollY]);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="comfortaa-light text-white relative">
      <Loader onDone={() => setReady(true)} />
      <Background />
      <CursorTrail />
      <ScrollProgress />

      <nav className={`nav-pill ${navSolid ? "solid" : ""}`}>
        {NAV.map(([id, label]) => (
          <button key={id} className="nav-link" onClick={() => go(id)}>{label}</button>
        ))}
      </nav>

      <section className={`hero ${ready ? "hero-in" : ""}`}>
        <div className="flex flex-col md:flex-row px-10 pt-24 pb-6 relative">
          <Header />
          <motion.img
            src="/philo.png"
            alt=""
            style={{ y: bgY, rotate: bgRot }}
            className="hero-img w-fit h-screen object-contain absolute right-0 z-[-1] opacity-10 md:opacity-30"
          />
        </div>
        <RevealOnScroll>
          <div className="flex items-center justify-center px-10 py-10 w-full">
            <AnimatedCards />
          </div>
        </RevealOnScroll>
      </section>

      <About />
      <Gallery />
      <MediumArticles />
      <Contact />
    </div>
  );
}
