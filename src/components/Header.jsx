import FlipWord from "./FlipWord";

export default function Header({classNames}) {
  return (
    <div className="text-white comfortaa-light " >
      <h1 className="comfortaa-light text-white font-thin text-[2.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed break-words mb-0">
        Hi,
      </h1>
      <h1 className="comfortaa-light text-white font-thin  text-[2.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed break-words mt-0">
        I am
      </h1>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 mb-3 lg:mb-0 comfortaa-light font-thin text-[2.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed break-words">
        Pragadeesh!
      </h1>
      <FlipWord/>
    </div>
  );
}
