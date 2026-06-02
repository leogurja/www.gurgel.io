import {
  type IconType,
  SiCss,
  SiCssHex,
  SiNextdotjs,
  SiNodedotjs,
  SiNodedotjsHex,
  SiReact,
  SiReactHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
} from "@icons-pack/react-simple-icons";

interface Experience {
  name: string;
  icon: IconType;
  site: string;
  color: string;
  delay: string;
}

export const experience = [
  {
    name: "React",
    icon: SiReact,
    site: "https://react.dev",
    color: SiReactHex,
    delay: "delay-500",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    site: "https://nextjs.org",
    color: "#fff",
    delay: "delay-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    site: "https://typescriptlang.org",
    color: SiTypescriptHex,
    delay: "delay-300",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    site: "https://nodejs.org",
    color: SiNodedotjsHex,
    delay: "delay-200",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    site: "https://tailwindcss.com",
    color: SiTailwindcssHex,
    delay: "delay-100",
  },
  {
    name: "CSS",
    icon: SiCss,
    site: "https://developer.mozilla.org/docs/Web/CSS",
    color: SiCssHex,
    delay: "delay-0",
  },
] satisfies Experience[];
