import avatarImage from "@/assets/images/foto_perfil.jpg";
import { GradientText } from "@/components/gradient-text";
import { Github } from "@/components/logos/github.svg";
import { LinkedIn } from "@/components/logos/linkedin.svg";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen">
      <SectionContainer
        id="hero"
        className="flex h-screen flex-col items-center justify-center text-center"
      >
        <Image
          className="mb-20 aspect-square rounded-full object-cover"
          src={avatarImage.src}
          alt=""
          width={256}
          height={256}
          blurDataURL={avatarImage.blurDataURL ?? ""}
        />
        <h1 className="max-w-7xl text-7xl font-black tracking-[-0.0125em] text-pretty">
          Desenvolvedor Full Stack especializado em{" "}
          <GradientText>ReactJS</GradientText>.
        </h1>
        <p className="text-2xl/relaxed tracking-wide text-gray-400">
          Com 4 anos de experiência em desenvolvimento web e foco em aplicações
          de alto desempenho.
        </p>
        <div className="mt-8 flex items-center gap-3 text-sm">
          <Button size="xl">Entrar em contato</Button>
          <Button variant="secondary" size="xl" asChild>
            <a
              href="/Leonardo Gurgel%20-%20Desenvolvedor%20Full%20Stack.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Currículo
            </a>
          </Button>
          <Button
            size="icon-xl"
            variant="secondary"
            className="hover:bg-linkedin hover:text-white"
            asChild
          >
            <a
              href="https://linkedin.com/in/leogurja"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
          </Button>
          <Button
            size="icon-xl"
            variant="secondary"
            className="hover:bg-github hover:text-white"
            asChild
          >
            <a
              href="https://github.com/leogurja"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
