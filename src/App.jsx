import { useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import FlipWord from "./components/FlipWord";
import About from "./components/About";

export default function App() {
  const scrollSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container comfortaa-light mx-auto px-6 text-white">
      <div className="flex flex-row justify-end text-l sm:text-xl gap-1 sm:gap-3 mt-2 sm:mt-4">
        <button className="nav-button" onClick={() => scrollSection("about")}>About</button>
        <button className="nav-button" onClick={() => scrollSection("gallery")}>Works</button>
        <button className="nav-button" onClick={() => scrollSection("contact")}>Contact</button>
      </div>

      <Header />
      <FlipWord />
      <About />
      <Gallery/>
    </div>
  );
}
