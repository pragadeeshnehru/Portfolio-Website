import React from 'react';

export default function QuoteBox() {
  const quote = "Those who were seen dancing were thought to be insane by those who could not hear the music.";
  const author = "- Friedrich Nietzsche";

  return (
    <div className=" p-8 m-8 shadow-inner shadow-rose-600 text-center rounded-3xl">
      <p className="text-xl text-white italic">{quote}</p>
      <p className="mt-4 text-sm text-white font-semibold">{author}</p>
    </div>
  );
}
