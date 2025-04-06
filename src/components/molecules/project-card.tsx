import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import type { Project } from "@/lib/constants/featured-projects";
import { techs } from "@/lib/constants/techs";
import { cn } from "@/lib/helpers/cn";
import { Badge } from "../atoms/badge";
import { Button } from "../atoms/button";
import { MotionInView } from "../atoms/motion-in-view";

export function ProjectCard({
	title,
	site,
	aside,
	description,
	tags,
	repo,
	className,
}: Project) {
	return (
		<MotionInView
			className={cn(
				"motion-safe:even:motion-preset-slide-left motion-safe:odd:motion-preset-slide-right motion-ease-spring-bouncy",
				"group flex flex-col gap-3 transition-transform even:md:flex-row-reverse odd:md:flex-row even:md:*:items-end",
				className,
			)}
			as="article"
		>
			{aside.type === "image" ? (
				<a
					href={site ?? "#"}
					target="_blank"
					rel="noreferrer"
					className="h-40 overflow-hidden rounded-2xl transition-transform group-hover:scale-102 md:h-auto md:w-1/3"
				>
					<Image
						src={aside.image.src}
						width={512}
						height={512}
						placeholder="blur"
						blurDataURL={aside.image.blurDataURL ?? ""}
						alt={site ?? ""}
						className="scale-102 object-contain transition-transform group-hover:scale-105"
					/>
				</a>
			) : (
				aside.code
			)}
			<div className="flex flex-col justify-between gap-3 rounded-2xl bg-stone-900 p-4 md:w-2/3">
				<h3 className="font-semibold text-2xl text-white">{title}</h3>
				<p className="mb-2 text-pretty text-stone-300">{description}</p>
				<ul className="mb-3 flex gap-2">
					{tags.map((tag) => (
						<Badge key={tag} {...techs.find((t) => t.name === tag)!} />
					))}
				</ul>
				<footer className="flex gap-4">
					{repo && (
						<Button asChild intent="link">
							<a
								href={repo}
								target="_blank"
								rel="noreferrer"
								className="flex items-center"
							>
								<SiGithub className="size-6" /> <span>Github</span>
							</a>
						</Button>
					)}
					{site && (
						<Button asChild intent="link">
							<a
								href={site}
								target="_blank"
								rel="noreferrer"
								className="flex items-center"
							>
								<ArrowSquareOut className="size-6" /> Site
							</a>
						</Button>
					)}
				</footer>
			</div>
		</MotionInView>
	);
}
