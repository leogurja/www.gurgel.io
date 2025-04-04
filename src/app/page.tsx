import { AboutMe } from "@/components/sections/about-me";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen md:container">
			<Hero />
			<AboutMe />
			<Projects />
		</main>
	);
}
