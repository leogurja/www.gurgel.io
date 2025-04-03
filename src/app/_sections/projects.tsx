import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import tetrisScreenshot from "@/assets/images/tetris-screenshot.png";
import wgsTechScreenshot from "@/assets/images/wgstech-screenshot.png";
import { MotionInView } from "@/components/motion-in-view";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { SectionContainer } from "./components/section-container";
import { SectionTitle } from "./components/section-title";

export function Projects() {
  return (
    <SectionContainer id="projects">
      <SectionTitle number={2} className="from-rose-500 to-amber-400">
        Projetos
      </SectionTitle>
      <div className="flex flex-col gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex gap-1 text-emerald-400 text-lg transition-all hover:ms-1 hover:gap-2 hover:text-emerald-200"
        >
          Ver Todos os Projetos
          <span>→</span>
        </Link>
      </div>
    </SectionContainer>
  );
}

function ProjectCard({
  title,
  site,
  image,
  description,
  techs,
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
      <a
        href={site}
        target="_blank"
        rel="noreferrer"
        className="h-40 overflow-hidden rounded-2xl transition-transform group-hover:scale-102 md:h-auto md:w-1/3"
      >
        <Image
          src={image.src}
          width={512}
          height={512}
          placeholder="blur"
          blurDataURL={image.blurDataURL ?? ""}
          alt=""
          className="scale-102 object-contain transition-transform group-hover:scale-105"
        />
      </a>
      <div className="flex flex-col justify-between gap-3 rounded-2xl bg-stone-900 p-4 md:w-2/3">
        <h3 className="font-semibold text-2xl text-white">{title}</h3>
        <p className="mb-2 text-pretty text-stone-300">{description}</p>
        <ul className="mb-3 flex gap-2">
          {techs.map((tech) => (
            <Badge key={tech} tech={tech} />
          ))}
        </ul>
        <footer className="flex gap-4">
          {repo && (
            <Button asChild variant="link">
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
            <Button asChild variant="link">
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

function Badge({ tech }: { tech: keyof typeof techs }) {
  return (
    <li>
      <a
        href={techs[tech].site}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "rounded-full px-2 py-1 text-stone-400 text-xs transition-colors hover:text-white",
          techs[tech].color,
        )}
      >
        {tech}
      </a>
    </li>
  );
}

const techs = {
  ReactJS: {
    color: "hover:bg-react hover:text-[#23272f]",
    site: "https://react.dev/",
  },
  "Next.js": { color: "hover:bg-black", site: "https://nextjs.org/" },
  "Node.js": { color: "hover:bg-nodejs", site: "https://nodejs.org/" },
  TailwindCSS: {
    color: "hover:bg-tailwindcss",
    site: "https://tailwindcss.com/",
  },
  TypeScript: {
    color: "hover:bg-typescript",
    site: "https://typescriptlang.org/",
  },
  Resend: { color: "hover:bg-black", site: "https://resend.com/home" },
  Vite: { color: "hover:bg-vite", site: "https://vite.dev/" },
  Zustand: { color: "hover:bg-black", site: "https://zustand-demo.pmnd.rs/" },
};

interface Project {
  title: string;
  image: StaticImageData;
  description: ReactNode;
  techs: (keyof typeof techs)[];
  site?: string;
  repo?: string;
  className?: string;
}

const featuredProjects = [
  {
    title: "WGS Tech",
    description: (
      <>
        Uma landing page moderna e responsiva para a WGS Tech, uma empresa de
        suporte de TI. O projeto foi otimizado para SEO, garantindo melhor
        posicionamento nos motores de busca e aumentando a visibilidade da
        empresa. Além de destacar os serviços oferecidos, a página foi
        estruturada para maximizar a conversão de visitantes em clientes.
      </>
    ),
    image: wgsTechScreenshot,
    techs: ["Next.js", "TailwindCSS", "TypeScript", "Resend"],
    site: "https://wgstech.com.br",
  },
  {
    title: "Tetris",
    description: (
      <>
        Desenvolvi uma versão do clássico Tetris{" "}
        <strong>100% com ReactJS!</strong> Com foco em alta performance e no
        gerenciamento eficiente de estados complexos. A otimização foi essencial
        para garantir uma jogabilidade fluida, especialmente ao lidar com
        atualizações rápidas da interface e movimentação dinâmica das peças.
      </>
    ),
    image: tetrisScreenshot,
    techs: ["ReactJS", "Vite", "TypeScript", "Zustand"],
    site: "https://tetris.gurgel.io",
    repo: "https://github.com/leogurja/tetris",
    className: "motion-delay-100",
  },
  {
    title: "Create TSConfig",
    description: (
      <>
        Nunca mais se preocupe com <strong>tsconfig.json</strong>!<br />
        Responda a poucas perguntas e tenha a configuração ideal para seu
        projeto, seguindo as melhores práticas do <strong>TypeScript</strong>.
      </>
    ),
    image: tetrisScreenshot,
    techs: ["Node.js", "TypeScript"],
    repo: "https://github.com/leogurja/create-tsconfig",
    className: "motion-delay-200",
  },
] satisfies Project[];
