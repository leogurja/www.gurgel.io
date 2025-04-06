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

export const techs = [
	{
		name: "ReactJS",
		color: "hover:bg-[#61dafb] hover:text-[#23272f]",
		site: "https://react.dev/",
	},
	{ name: "Next.js", color: "hover:bg-black", site: "https://nextjs.org/" },
	{ name: "Node.js", color: "hover:bg-[#5fa04e]", site: "https://nodejs.org/" },
	{
		name: "TailwindCSS",
		color: "hover:bg-[#06b6d4]",
		site: "https://tailwindcss.com/",
	},
	{
		name: "TypeScript",
		color: "hover:bg-[#3178c6]",
		site: "https://typescriptlang.org/",
	},
	{ name: "Resend", color: "hover:bg-black", site: "https://resend.com/home" },
	{ name: "Vite", color: "hover:bg-[#646cff]", site: "https://vite.dev/" },
	{
		name: "Zustand",
		color: "hover:bg-black",
		site: "https://zustand-demo.pmnd.rs/",
	},
	{
		name: "NPM",
		color: "hover:bg-[#CB3837]",
		site: "https://npmjs.com",
	},
] satisfies Tech[];
