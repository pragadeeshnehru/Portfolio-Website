import React from "react";
import { FlipWords } from "./ui/flip-words";
export default function FlipWord() {
  const words = ["Web Developer", "UX Designer", "Artist", "Writer"];

  return (
    <div className="sm:h-[6rem] md:h-[6rem] lg:h-[10rem] flex items-center justify-start container mx-auto px-6">
      <div className="font-display flip-font font-normal text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
        An aspiring
        <FlipWords
          words={words}
          duration={700}
          className="comfortaa-light"
        />
        <br />
      </div>
    </div>
  );
}
