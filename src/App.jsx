import Header from "./components/Header";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import RevealOnScroll from "./components/ui/scroll-reveal";

export default function App() {
  const scrollSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" comfortaa-light text-white">
      <Preloader className="fixed"/>
      <div className="flex flex-row justify-around text-l sm:text-xl gap-1 sm:gap-3 mt-2 sm:mt-4 text-gray-400 ">
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
        <div className=" bg-[url('/philo.png')] bg-contain bg-no-repeat bg-center h-screen animate-fadeIn  ">
          <div className="flex flex-col md:flex-row items-center justify-between h-full p-4 md:p-8">
            <div className="w-full md:w-1/2">
              <Header />
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4 md:pr-10">
              <div className="max-w-md text-center  comfortaa-light space-y-4">
                <p className="text-lg md:text-2xl ">
                  A multifaceted individual, I am a computer science student and
                  developer with a passion for coding, creativity in art, a love
                  for reading, and a flair for writing. Always learning, always
                  creating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <About />
      <Gallery />
      <Contact />
    </div>
  );
}
