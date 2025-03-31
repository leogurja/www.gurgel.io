import { GradientText } from "@/components/gradient-text";
import { MotionInView } from "@/components/motion-in-view";
import { cn } from "@/utils/cn";
import {
  SiCss,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

const experience = [
  {
    name: "React",
    icon: SiReact,
    iconStyle: "text-react",
    style: "text-react",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    iconStyle: "text-nextjs bg-white rounded-full p-px",
    style: "motion-delay-100",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    iconStyle: "text-typescript",
    style: "motion-delay-300",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    iconStyle: "text-nodejs",
    style: "text-nodejs motion-delay-500",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    iconStyle: "text-tailwindcss",
    style: "motion-delay-700",
  },
  {
    name: "CSS",
    icon: SiCss,
    iconStyle: "text-css",
    style: "motion-delay-900",
  },
];

export function AboutMe() {
  return (
    <section
      className="flex flex-col items-center gap-8 md:container"
      id="about"
    >
      <span className="aspect-square rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 p-3 text-center text-2xl font-bold text-white">
        1
      </span>
      <h2 className="text-6xl font-bold tracking-tight text-emerald-400">
        <GradientText className="from-emerald-500 to-cyan-400">
          Sobre Mim
        </GradientText>
      </h2>
      <p className="max-w-[65ch] px-4 text-center text-base leading-relaxed text-pretty text-zinc-100 sm:text-lg">
        Apaixonado por criar experiências de usuário incríveis com React.js, sou
        desenvolvedor front-end com foco em interfaces modernas. Nos momentos de
        lazer, aproveito games, filmes e musculação. Acredito que a programação
        é uma forma de arte e busco expressar minha criatividade em cada
        projeto.
      </p>

      <div className="mt-10 w-full">
        <h3 className="text-center text-3xl font-semibold text-white">
          Experiência com
        </h3>
        <ul className="mt-10 grid w-full grid-cols-3 justify-items-center gap-y-10 sm:gap-10 lg:grid-cols-6">
          {experience.map((xp) => (
            <MotionInView
              as="li"
              key={xp.name}
              className={cn(
                "motion-safe:motion-preset-slide-left-lg flex flex-col items-center gap-3 rounded-xl transition",
                xp.style,
              )}
            >
              <xp.icon className={cn("size-16 sm:size-20", xp.iconStyle)} />
              <span className="text-center text-sm font-semibold text-zinc-100">
                {xp.name}
              </span>
            </MotionInView>
          ))}
        </ul>
      </div>
    </section>
  );
}
