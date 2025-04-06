import { AboutMeSection } from "@/components/templates/about-me-section";
import { HeroSection } from "@/components/templates/hero-section";
import { ProjectsSection } from "@/components/templates/projects-section";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen md:container">
			<HeroSection />
			<AboutMeSection />
			<ProjectsSection />
		</main>
	);
}
