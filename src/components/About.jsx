import HorizonScroll from "./HorizonScroll";
import RevealOnScroll from "./ui/scroll-reveal";

export default function About() {
  return (
    <div id="about" className="mb-32 mt-10">
      <div className="container mx-auto px-6  text-white comfortaa-light flex flex-row gap-5">
        <p className="text-2xl ">
          A multifaceted individual, I am a computer science student and
          developer with a passion for coding, creativity in art, a love for
          reading, and a flair for writing. Always learning, always creating.
        </p>
        <img
          src="./glass.png"
          className="h-96 object-contain transition-transform duration-500 ease-out transform hover:scale-110 hover:rotate-3 hidden md:block"
        />
      </div>
      <RevealOnScroll>
        <h1 className="container mx-auto px-6 text-white font-thin text-[2rem] sm:text-[2rem] md:text-[4rem] lg:text-[4rem] mb-3 mt-32">
          Tech Stack
        </h1>
      </RevealOnScroll>

      <HorizonScroll classes="mb-10 " />
    </div>
  );
}
