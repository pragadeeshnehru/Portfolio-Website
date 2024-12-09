import HorizonScroll from "./HorizonScroll";
import RevealOnScroll from "./ui/scroll-reveal";

export default function About() {
  return (
    <div id="about" className="mb-4">
      <RevealOnScroll>
        <h1 className=" mx-auto px-6 text-white text-center font-thin text-[2rem] sm:text-[2rem] md:text-[4rem] lg:text-[4rem] mb-3 mt-10">
          Tech Stack
        </h1>
      </RevealOnScroll>

      <HorizonScroll classes="mb-20 " />
    </div>
  );
}
