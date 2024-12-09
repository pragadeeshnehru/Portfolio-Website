import Header from "./components/Header";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import RevealOnScroll from "./components/ui/scroll-reveal";
import { useState } from "react";
import { AnimatedCards } from "./components/AnimatedCards";

export default function App() {
  const scrollSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="comfortaa-light text-white">
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} className="fixed" />
      ) : (
        <>
          <div className="flex flex-row justify-around text-l sm:text-xl gap-1 sm:gap-3 mt-2 sm:mt-4 text-gray-400">
            <button
              className="nav-button hover:text-white"
              onClick={() => scrollSection("about")}
            >
              About
            </button>
            <button
              className="nav-button hover:text-white"
              onClick={() => scrollSection("gallery")}
            >
              Works
            </button>
            <button
              className="nav-button hover:text-white"
              onClick={() => scrollSection("contact")}
            >
              Contact
            </button>
          </div>

          <RevealOnScroll>
            <div className="flex flex-col md:flex-row px-10 py-10 relative">
              <Header className="z-5 absolute" />
              <img
                src="/philo.png"
                alt="Background"
                className="w-fit h-screen object-contain absolute right-0  z-[-1] opacity-10 md:opacity-20"
              />
            </div>

            <div className="flex items-center justify-center px-10 py-10 w-full">
              <AnimatedCards />
            </div>
          </RevealOnScroll>

          <About />
          <Gallery />
          <Contact />
        </>
      )}
    </div>
  );
}
