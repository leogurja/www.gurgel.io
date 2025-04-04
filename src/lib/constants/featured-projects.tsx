import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import tetrisScreenshot from "@/assets/images/tetris-screenshot.png";
import wgsTechScreenshot from "@/assets/images/wgstech-screenshot.png";
import type { TechName } from "../types/types";

interface Project {
	title: string;
	image: StaticImageData;
	description: ReactNode;
	tags: TechName[];
	site?: string;
	repo?: string;
	className?: string;
}

export const featuredProjects = [
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
		tags: ["Next.js", "TailwindCSS", "TypeScript", "Resend"],
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
		tags: ["ReactJS", "Vite", "TypeScript", "Zustand"],
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
		tags: ["Node.js", "TypeScript", "NPM"],
		repo: "https://github.com/leogurja/create-tsconfig",
		className: "motion-delay-200",
	},
] satisfies Project[];
