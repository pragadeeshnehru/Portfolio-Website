import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedCards() {
  const info = [
    {
      description:
        "I am a developer with a passion for combining creativity and technology. Whether it's writing fiction, exploring philosophy, or learning about machine learning, I strive to bring thoughtful solutions to every project I work on.",
      designation: "Writer and Tech Enthusiast",
      src: "designer.jpg",
    },
    {
      description:
        "With a love for reading and writing, I explore topics ranging from philosophy to fiction. I enjoy expanding my technical skills by learning a bit of machine learning to create meaningful and practical solutions.",
      designation: "Software Developer and Curious Learner",
      src: "dev.jpg",
    },
    {
      description:
        "I strive to blend creativity with logic in my work. Writing fiction and philosophy inspires me to build thoughtful solutions, whether through code or learning new technologies like machine learning.",
      designation: "Creative Technologist and Writer",
      src: "writer.jpg",
    },
    {
      description:
        "Curious by nature, I explore diverse interests—from philosophy and fiction writing to learning a bit of machine learning. My goal is to continuously improve my skills and create meaningful, user-friendly solutions.",
      designation: "Developer, Artist, and Lifelong Learner",
      src: "artist.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={info} />;
}
