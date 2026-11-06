import TechStack from "./TechStack";
import RevealOnScroll from "./ui/scroll-reveal";

export default function About() {
  return (
    <div
      id="about"
      className="container-md  section-edge"
    >
      <RevealOnScroll>
        <h1 className=" glow-title mx-auto px-6 text-center font-thin text-[2rem] sm:text-[2rem] md:text-[4rem] lg:text-[4rem] mb-3 pt-10 ">
          TECH STACK
        </h1>
        <TechStack />
      </RevealOnScroll>
    </div>
  );
}
