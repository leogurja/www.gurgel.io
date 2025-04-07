import { SiGithub } from "@icons-pack/react-simple-icons";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import avatarImage from "@/assets/images/foto_perfil.png";
import { Button } from "@/components/atoms/button";
import { GradientText } from "@/components/atoms/gradient-text";
import { LinkedInLogo } from "@/components/atoms/linkedin-logo.svg";
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
			<h1 className="max-w-7xl text-pretty font-black text-4xl/tight tracking-[-0.0125em] md:text-7xl">
				Desenvolvedor Full Stack especializado em{" "}
				<GradientText animated={true}>ReactJS</GradientText>.
			</h1>
			<p className="max-w-4xl text-pretty text-base text-stone-400 tracking-wide md:text-xl/normal">
				Me chamo <strong className="text-stone-300">Leonardo Gurgel</strong>,
				tenho 4 anos de experiência em desenvolvimento web e foco em aplicações
				de alto desempenho.
			</p>
			<div className="grid grid-flow-col grid-rows-2 gap-3 md:grid-cols-[1fr_1fr] md:grid-rows-1">
				<Button size="xl" asChild>
					<ExternalLink
						href="mailto:leo@gurgel.io"
						className="no-underline hover:text-white"
					>
						Entrar em contato
					</ExternalLink>
				</Button>
				<div className="flex w-full divide-x divide-stone-400/30">
					<Button intent="secondary" size="xl" asChild>
						<ExternalLink
							className="flex flex-1 rounded-r-none px-8! no-underline hover:text-stone-950"
							href="/Leonardo Gurgel%20-%20Desenvolvedor%20Full%20Stack.pdf"
						>
							Currículo
						</ExternalLink>
					</Button>
					<Button intent="secondary" size="xl" asChild>
						<a
							href="/Leonardo Gurgel%20-%20Desenvolvedor%20Full%20Stack.pdf"
							download="cv_leonardo_gurgel.pdf"
							className="rounded-l-none px-4!"
						>
							<DownloadSimple className="size-5" alt="Baixar Currículo" />
						</a>
					</Button>
				</div>
				<Button
					size="icon-xl"
					intent="secondary"
					className="hover:bg-linkedin hover:text-white"
					asChild
				>
					<ExternalLink href="https://linkedin.com/in/leogurja">
						<LinkedInLogo />
					</ExternalLink>
				</Button>
				<Button
					size="icon-xl"
					intent="secondary"
					className="hover:bg-github hover:text-white"
					asChild
				>
					<ExternalLink href="https://github.com/leogurja">
						<SiGithub className="size-4" />
					</ExternalLink>
				</Button>
			</div>
		</section>
	);
}
