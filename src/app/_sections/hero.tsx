import { SiGithub } from "@icons-pack/react-simple-icons";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import avatarImage from "@/assets/images/foto_perfil.png";
import { AnimatedGradientText } from "@/components/gradient-text";
import { LinkedInLogo } from "@/components/logos/linkedin.svg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex h-screen flex-col items-center justify-center gap-8 px-4 text-center"
    >
      <Image
        className="aspect-square size-32 rounded-full object-contain md:size-48 lg:size-64"
        src={avatarImage.src}
        alt=""
        width={256}
        height={256}
        blurDataURL={avatarImage.blurDataURL ?? ""}
      />
      <h1 className="max-w-7xl text-pretty font-black text-4xl/tight tracking-[-0.0125em] md:text-7xl">
        Desenvolvedor Full Stack especializado em{" "}
        <AnimatedGradientText>ReactJS</AnimatedGradientText>.
      </h1>
      <p className="max-w-4xl text-pretty text-base text-stone-400 tracking-wide md:text-xl/normal">
        Me chamo <strong className="text-stone-300">Leonardo Gurgel</strong>,
        tenho 4 anos de experiência em desenvolvimento web e foco em aplicações
        de alto desempenho.
      </p>
      <div className="grid grid-flow-col grid-rows-2 gap-3 md:grid-rows-1">
        <Button size="xl" asChild>
          <a href="#a">Entrar em contato</a>
        </Button>
        <div className="flex w-full justify-between divide-x divide-stone-400/30">
          <Button variant="secondary" size="xl" asChild>
            <a
              className="flex flex-1 rounded-r-none"
              href="/Leonardo Gurgel%20-%20Desenvolvedor%20Full%20Stack.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Currículo
            </a>
          </Button>
          <Button variant="secondary" size="xl" asChild>
            <a
              href="/Leonardo Gurgel%20-%20Desenvolvedor%20Full%20Stack.pdf"
              download="cv_leonardo_gurgel.pdf"
              className="rounded-l-none"
            >
              <span className="sr-only">Baixar Currículo</span>
              <DownloadSimple className="size-5" />
            </a>
          </Button>
        </div>
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
            <LinkedInLogo />
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
            <SiGithub className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
