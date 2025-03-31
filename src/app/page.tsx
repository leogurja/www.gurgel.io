import { AboutMe } from "./_sections/about-me";
import { Hero } from "./_sections/hero";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen md:container">
      <Hero />
      <AboutMe />
    </main>
  );
}
