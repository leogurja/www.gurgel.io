import { featuredProjects } from "@/lib/constants/featured-projects";
import { SectionContainer } from "../atoms/section-container";
import { SectionTitle } from "../molecules/section-title";
import { ProjectCard } from "../organisms/project-card";

export function ProjectsSection() {
	return (
		<SectionContainer id="projects">
			<SectionTitle number={2} className="from-violet-500 to-fuchsia-500">
				Projetos
			</SectionTitle>
			<div className="flex flex-col gap-8">
				{featuredProjects.map((project) => (
					<ProjectCard {...project} key={project.title} />
				))}
			</div>
			{/* <div className="mt-8 text-center">
				<Link
					href="/projects"
					className="inline-flex gap-1 text-emerald-400 text-lg transition-all hover:ms-1 hover:gap-2 hover:text-emerald-200"
				>
					Ver Todos os Projetos
					<span>→</span>
				</Link>
			</div> */}
		</SectionContainer>
	);
}
