import RevealOnScroll from "./ui/scroll-reveal";

// Array of image data
const images = [
    [
        { src: "/art-images/elden-lord.jpg", alt: "Elden Lord", text: "Love over Power." },
        { src: "/art-images/guts-griffith.jpg", alt: "Guts Griffith", text: "The greatest nemesis." },
        { src: "/art-images/gal-gadot.jpg", alt: "Gal Gadot", text: "Timeless elegance." },
    ],
    [
        { src: "/art-images/butterfly-girl.jpeg", alt: "Butterfly Girl", text: "Perfectly imperfect!" },
        { src: "/art-images/jack-sparrow.jpg", alt: "Jack Sparrow", text: "Where's the rum gone?" },
        { src: "/art-images/walter-white.jpg", alt: "Walter White", text: "Say my name." },
    ],
    [
        { src: "/art-images/paul-atriedes.jpg", alt: "Paul Atreides", text: "The eye of the Messiah" },
        { src: "/art-images/skull-knight.jpg", alt: "Skull Knight", text: "Struggle, endure, contend." },
        { src: "/art-images/doom.jpg", alt: "Doom", text: "The only thing they fear is you." },
    ],
    [
        { src: "/art-images/guts.jpg", alt: "Guts", text: "I'd rather fight for my life than live it." },
        { src: "/art-images/assassin-ezio.jpg", alt: "Assassin Ezio", text: "The world will not suffer if it ends too soon." },
        { src: "/art-images/thomas-shelby.jpg", alt: "Thomas Shelby", text: "Oh and there's a woman!" },
    ],
];

// Custom component for each image
const ImageWithOverlay = ({ src, alt, text }) => {
    return (
        <div className="relative image-container rounded-3xl">
            <img className="w-full h-full object-cover" src={src} alt={alt} />
            <div className="overlay-text">{text}</div>
        </div>
    );
};

export default function Gallery() {
    return (
        <div id="gallery" className="mx-auto px-6 py-16 rounded-t-[5rem] border-t-4  border-rose-600 ">
            <RevealOnScroll>
                <h1 className=" text-white flex justify-center font-thin text-[2rem] sm:text-[2rem] md:text-[4rem] lg:text-[4rem] mb-8">
                    ARTWORKS
                </h1>
            </RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid gap-4">
                        {row.map((image, index) => (
                            <ImageWithOverlay
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                text={image.text}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
