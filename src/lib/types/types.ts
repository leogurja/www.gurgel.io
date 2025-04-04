import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type TechName =
	| "ReactJS"
	| "Next.js"
	| "Node.js"
	| "TailwindCSS"
	| "TypeScript"
	| "Resend"
	| "Vite"
	| "Zustand"
	| "NPM";

export interface Tech {
	name: TechName;
	color: string;
	site: string;
}

export interface Project {
	title: string;
	image: StaticImageData;
	description: ReactNode;
	techs: string[];
	site?: string;
	repo?: string;
	className?: string;
}
