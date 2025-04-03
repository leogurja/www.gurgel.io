import { AboutMe } from "./_sections/about-me";
import { Hero } from "./_sections/hero";
import { Projects } from "./_sections/projects";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen md:container">
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  );
}
