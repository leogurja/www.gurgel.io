import { MotionInView } from "@/components/atoms/motion-in-view";
import { SectionContainer } from "@/components/atoms/section-container";
import { SectionTitle } from "@/components/molecules/section-title";
import { experience } from "@/lib/constants/featured-techs";
import { twMerge } from "tailwind-merge";

export function AboutMeSection() {
  return (
    <SectionContainer id="about">
      <SectionTitle number={1} className="from-blue-500 to-cyan-400">
        Sobre Mim
      </SectionTitle>

      <p className="mx-auto max-w-[65ch] px-4 text-center text-base leading-relaxed text-pretty text-stone-100 sm:text-lg">
        Apaixonado por criar experiências de usuário incríveis com React, sou
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
              className={twMerge(
                "motion-safe:motion-preset-slide-left-lg motion-duration-400 motion-ease-spring-bouncy",
                xp.delay,
              )}
            >
              <a
                href={xp.site}
                className="group flex flex-col items-center gap-3"
              >
                <xp.icon
                  className="size-16 transition-transform group-hover:scale-105 sm:size-20"
                  color={xp.color}
                />
                <span className="text-center text-sm font-semibold transition-colors">
                  {xp.name}
                </span>
              </a>
            </MotionInView>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
