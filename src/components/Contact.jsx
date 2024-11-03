import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";

export default function Contact() {
  const links = [
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.youtube.com/@Excelsior004",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/pragadeesh-nehru-a26040257/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/pragdxshn",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/pragadeeshnehru",
    },
  ];

  return (
    <footer id="contact" className="mt-32 w-full bg-transparent p-8 text-white">
      <FloatingDock
        items={links}
        desktopClassName={"justify-center w-fit text-white bg-transparent"}
      />
      <hr className="my-8 border-blue-gray-50" />
      <h1 className="text-center font-normal">Built by Pragadeesh Nehru</h1>
    </footer>
  );
}
