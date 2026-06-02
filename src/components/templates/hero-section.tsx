import { SiGithub } from "@icons-pack/react-simple-icons";
import { DownloadSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import avatarImage from "@/assets/images/foto_perfil.png";
import { Button } from "@/components/atoms/button";
import { GradientText } from "@/components/atoms/gradient-text";
import { LinkedInLogo } from "@/components/atoms/linkedin-logo.svg";

import { ButtonGroup, ButtonGroupSeparator } from "../atoms/button-group";
import { ExternalLink } from "../atoms/external-link";

export function HeroSection() {
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
        priority
      />
      <h1 className="max-w-7xl text-4xl/tight font-black tracking-[-0.0125em] text-pretty md:text-7xl">
        Desenvolvedor Full Stack especializado em{" "}
        <GradientText animated={true}>ReactJS</GradientText>.
      </h1>
      <p className="max-w-4xl text-base tracking-wide text-pretty text-stone-400 md:text-xl/normal">
        Me chamo <strong className="text-stone-300">Leonardo Gurgel</strong>, tenho 4 anos de
        experiência em desenvolvimento web e foco em aplicações de alto desempenho. Atualmente
        trabalho como desenvolvedor front-end na{" "}
        <ExternalLink href="https://wehelpsoftware.com/" className="underline underline-offset-2">
          WeHelp
        </ExternalLink>
        , onde desenvolvo aplicações web modernas e responsivas.
      </p>
      <div className="grid grid-flow-col grid-rows-2 gap-3 md:grid-cols-[1fr_1fr] md:grid-rows-1">
        <Button
          size="lg"
          nativeButton={false}
          render={<ExternalLink href="mailto:leo@gurgel.io" />}
        >
          Entrar em contato
        </Button>
        <ButtonGroup className="w-full">
          <Button
            variant="secondary"
            className="flex-1 border-x-0"
            nativeButton={false}
            size="lg"
            render={<ExternalLink href="/Leonardo Gurgel%20-%20Desenvolvedor%20Full%20Stack.pdf" />}
          >
            Currículo
          </Button>
          <ButtonGroupSeparator className="bg-stone-400" />
          <Button
            nativeButton={false}
            className="border-x-0"
            render={
              // oxlint-disable-next-line jsx-a11y/anchor-has-content jsx-a11y/control-has-associated-label
              <a
                href="/Leonardo Gurgel%20-%20Desenvolvedor%20Full%20Stack.pdf"
                download="cv_leonardo_gurgel.pdf"
              />
            }
            variant="secondary"
            size="icon-lg"
          >
            <DownloadSimpleIcon className="size-5" alt="Baixar Currículo" />
          </Button>
        </ButtonGroup>
        <Button
          size="icon-lg"
          variant="secondary"
          className="hover:bg-linkedin hover:text-white"
          nativeButton={false}
          render={<ExternalLink href="https://linkedin.com/in/leogurja" />}
        >
          <LinkedInLogo />
        </Button>
        <Button
          size="icon-lg"
          variant="secondary"
          className="hover:bg-github hover:text-white"
          nativeButton={false}
          render={<ExternalLink href="https://github.com/leogurja" />}
        >
          <SiGithub className="size-4" />
        </Button>
      </div>
    </section>
  );
}
