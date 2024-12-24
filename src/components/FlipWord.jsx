import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function FlipWord() {
  const words = ["Web Developer", "UX Designer", "Artist", "Writer"];

  return (
    <div className="flex items-center justify-start container mx-auto px-0 sm:h-[4rem] md:h-[8rem] lg:h-[10rem]">
      <div className="font-display flip-font font-normal text-neutral-600 dark:text-neutral-400 whitespace-nowrap text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
        An aspiring{" "}
        <FlipWords words={words} duration={700} className="comfortaa-light" />
        <br />
      </div>
    </div>
  );
}
