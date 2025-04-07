import { experience } from "@/lib/constants/experience";
import { SectionContainer } from "../atoms/section-container";
import { ExperienceCard } from "../molecules/experience-card";
import { SectionTitle } from "../molecules/section-title";

export default function ExperienceSection() {
	return (
		<SectionContainer id="experience">
			<SectionTitle number={3} className="from-orange-500 to-yellow-500">
				Experiência
			</SectionTitle>
			<div className="relative border-stone-700 border-l pl-6">
				{experience.map((exp) => (
					<ExperienceCard key={exp.company} {...exp} />
				))}
			</div>
		</SectionContainer>
	);
}
