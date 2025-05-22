import tetrisScreenshot from "@/assets/images/tetris-screenshot.png";
import wgsTechScreenshot from "@/assets/images/wgstech-screenshot.png";
import { CreateTsConfigCode } from "@/components/molecules/create-tsconfig-code";
import { EslintConfigCode } from "@/components/molecules/eslint-config-code";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { TechName } from "./techs";

export interface Project {
  title: string;
  aside:
    | {
        type: "image";
        image: StaticImageData;
      }
    | {
        type: "code";
        code: ReactNode;
      };
  description: ReactNode;
  tags: TechName[];
  links: Record<string, string | null>;
  className?: string;
}

export const featuredProjects: Project[] = [
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
    aside: { type: "image", image: wgsTechScreenshot },
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Resend"],
    links: {
      Site: "https://wgstech.com.br",
    },
  },
  {
    title: "Tetris",
    description: (
      <>
        Desenvolvi uma versão do clássico Tetris{" "}
        <strong>100% com React!</strong> Com foco em alta performance e no
        gerenciamento eficiente de estados complexos. A otimização foi essencial
        para garantir uma jogabilidade fluida, especialmente ao lidar com
        atualizações rápidas da interface e movimentação dinâmica das peças.
      </>
    ),
    aside: { type: "image", image: tetrisScreenshot },
    tags: ["React", "Vite", "TypeScript", "Zustand"],
    links: {
      Site: "https://tetris.gurgel.io",
      Github: "https://github.com/leogurja/tetris",
    },
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
    links: {
      Github: "https://github.com/leogurja/create-tsconfig",
      NPM: "https://npmjs.com/@gurja/create-tsconfig",
    },
    aside: {
      type: "code",
      code: <CreateTsConfigCode />,
    },
    tags: ["Node.js", "TypeScript", "NPM"],
    className: "motion-delay-200",
  },
  {
    title: "ESLint Config",
    description: (
      <>
        Uma configuração opinada do <strong>ESLint</strong> para projetos em{" "}
        <strong>TypeScript</strong>, pronta para uso em diferentes frameworks e
        ambientes. Inclui plugins úteis já pré-configurados, eliminando a dor de
        cabeça de decidir cada regra e padronizando o código desde o início.
      </>
    ),
    aside: {
      type: "code",
      code: <EslintConfigCode />,
    },
    tags: ["ESLint", "TypeScript", "NPM"],
    links: {
      Github: "https://github.com/leogurja/eslint-config",
      NPM: "https://npmjs.com/@gurja/eslint-config",
    },
    className: "motion-delay-300",
  },
];
