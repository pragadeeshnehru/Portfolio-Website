export default function Gallery() {
  return (
    <div className="container mx-auto px-6 ">
      <h1 className="text-white flex justify-end font-thin text-[2rem] sm:text-[2rem] md:text-[4rem] lg:text-[4rem] mb-3">
        Artworks
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
        <div class="grid gap-2">
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/elden-lord.jpg"
              alt=""
            />
            <div class="overlay-text">Love over Power.</div>
          </div>
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/guts-griffith.jpg"
              alt=""
            />
            <div class="overlay-text">The greatest nemesis.</div>
          </div>
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/gal-gadot.jpg"
              alt=""
            />
            <div class="overlay-text">Timeless elegance.</div>
          </div>
        </div>
        <div class="grid gap-2">
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/butterfly-girl.jpeg"
              alt=""
            />
            <div class="overlay-text">Perfectly imperfect!</div>
          </div>
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/jack-sparrow.jpg"
              alt=""
            />
            <div class="overlay-text">Wheres' the rum gone?</div>
          </div>
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/walter-white.jpg"
              alt=""
            />
            <div class="overlay-text">Say my name.</div>
          </div>
        </div>
        <div class="grid gap-2">
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/paul-atriedes.jpg"
              alt=""
            />
            <div class="overlay-text">The eye of the Messiah</div>
          </div>
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/skull-knight.jpg"
              alt=""
            />
            <div class="overlay-text">Struggle, endure, contend.</div>
          </div>
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/doom.jpg"
              alt=""
            />
            <div class="overlay-text">The only thing they fear is you.</div>
          </div>
        </div>
        <div class="grid gap-2">
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/guts.jpg"
              alt=""
            />
            <div class="overlay-text">
              I'd rather fight for my life than live it.
            </div>
          </div>
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/assassin-ezio.jpg"
              alt=""
            />
            <div class="overlay-text">
              The world will not suffer if it ends too soon.
            </div>
          </div>
          <div class="relative image-container">
            <img
              class="w-full h-full object-cover"
              src="../public/art-images/thomas-shelby.jpg"
              alt=""
            />
            <div class="overlay-text">Oh and there's a woman!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
