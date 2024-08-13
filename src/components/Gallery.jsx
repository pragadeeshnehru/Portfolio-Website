export default function Gallery() {
  return (
    <div id="gallery" className="container mx-auto px-6">
      <h1 className="text-white flex justify-end font-thin text-[2rem] sm:text-[2rem] md:text-[4rem] lg:text-[4rem] mb-3">
        Artworks
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
        <div className="grid gap-2">
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/elden-lord.jpg"
              alt=""
            />
            <div className="overlay-text">Love over Power.</div>
          </div>
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/guts-griffith.jpg"
              alt=""
            />
            <div className="overlay-text">The greatest nemesis.</div>
          </div>
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/gal-gadot.jpg"
              alt=""
            />
            <div className="overlay-text">Timeless elegance.</div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/butterfly-girl.jpeg"
              alt=""
            />
            <div className="overlay-text">Perfectly imperfect!</div>
          </div>
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/jack-sparrow.jpg"
              alt=""
            />
            <div className="overlay-text">Wheres' the rum gone?</div>
          </div>
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/walter-white.jpg"
              alt=""
            />
            <div className="overlay-text">Say my name.</div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/paul-atriedes.jpg"
              alt=""
            />
            <div className="overlay-text">The eye of the Messiah</div>
          </div>
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/skull-knight.jpg"
              alt=""
            />
            <div className="overlay-text">Struggle, endure, contend.</div>
          </div>
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/doom.jpg"
              alt=""
            />
            <div className="overlay-text">The only thing they fear is you.</div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/guts.jpg"
              alt=""
            />
            <div className="overlay-text">
              I'd rather fight for my life than live it.
            </div>
          </div>
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/assassin-ezio.jpg"
              alt=""
            />
            <div className="overlay-text">
              The world will not suffer if it ends too soon.
            </div>
          </div>
          <div className="relative image-container">
            <img
              className="w-full h-full object-cover"
              src="/art-images/thomas-shelby.jpg"
              alt=""
            />
            <div className="overlay-text">Oh and there's a woman!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
