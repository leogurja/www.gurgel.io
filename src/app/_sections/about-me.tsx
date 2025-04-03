import {
	SiCss,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "@icons-pack/react-simple-icons";
import { MotionInView } from "@/components/motion-in-view";
import { cn } from "@/utils/cn";
import { SectionContainer } from "./components/section-container";
import { SectionTitle } from "./components/section-title";

const experience = [
	{
		name: "React",
		icon: SiReact,
		site: "https://react.dev",
		iconStyle: "text-react",
		style: "hover:text-react",
	},
	{
		name: "Next.js",
		icon: SiNextdotjs,
		site: "https://nextjs.org",
		iconStyle: "text-nextjs bg-white rounded-full p-px",
		style: "motion-delay-150 hover:text-white",
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
		site: "https://typescriptlang.org",
		iconStyle: "text-typescript",
		style: "motion-delay-300 hover:text-typescript",
	},
	{
		name: "Node.js",
		icon: SiNodedotjs,
		site: "https://nodejs.org",
		iconStyle: "text-nodejs",
		style: "motion-delay-450 hover:text-nodejs",
	},
	{
		name: "TailwindCSS",
		icon: SiTailwindcss,
		site: "https://tailwindcss.com",
		iconStyle: "text-tailwindcss",
		style: "motion-delay-600 hover:text-tailwindcss",
	},
	{
		name: "CSS",
		icon: SiCss,
		iconStyle: "text-css",
		site: "https://developer.mozilla.org/docs/Web/CSS",
		style: "motion-delay-750 hover:text-css",
	},
];

export function AboutMe() {
	return (
		<SectionContainer id="about">
			<SectionTitle number={1} className="from-emerald-500 to-cyan-400">
				Sobre Mim
			</SectionTitle>

			<p className="mx-auto max-w-[65ch] text-pretty px-4 text-center text-base text-stone-100 leading-relaxed sm:text-lg">
				Apaixonado por criar experiências de usuário incríveis com React.js, sou
				desenvolvedor front-end com foco em interfaces modernas. Nos momentos de
				lazer, aproveito games, filmes e musculação. Acredito que a programação
				é uma forma de arte e busco expressar minha criatividade em cada
				projeto.
			</p>

			<div className="mt-10 w-full">
				<h3 className="text-center font-semibold text-3xl text-white">
					Experiência com
				</h3>
				<ul className="mt-10 grid w-full grid-cols-3 justify-items-center gap-y-10 sm:gap-10 lg:grid-cols-6">
					{experience.map((xp) => (
						<MotionInView
							as="li"
							key={xp.name}
							className={cn(
								"motion-safe:motion-preset-slide-left-lg motion-duration-400 motion-ease-spring-bouncy",
								xp.style,
							)}
						>
							<a
								href={xp.site}
								className="group flex flex-col items-center gap-3"
							>
								<xp.icon
									className={cn(
										"size-16 transition-transform group-hover:scale-105 sm:size-20",
										xp.iconStyle,
									)}
								/>
								<span className="text-center font-semibold text-sm transition-colors">
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
