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
	site: string;
}

export const techs = [
	{
		name: "ReactJS",
		site: "https://react.dev/",
	},
	{ name: "Next.js", site: "https://nextjs.org/" },
	{ name: "Node.js", site: "https://nodejs.org/" },
	{
		name: "TailwindCSS",
		site: "https://tailwindcss.com/",
	},
	{
		name: "TypeScript",
		site: "https://typescriptlang.org/",
	},
	{ name: "Resend", site: "https://resend.com/home" },
	{ name: "Vite", site: "https://vite.dev/" },
	{
		name: "Zustand",
		site: "https://zustand-demo.pmnd.rs/",
	},
	{
		name: "NPM",
		site: "https://npmjs.com",
	},
] satisfies Tech[];
