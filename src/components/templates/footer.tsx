import { SiGithub } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "../atoms/external-link";
import { LinkedInLogo } from "../atoms/linkedin-logo.svg";

export function Footer() {
	return (
		<footer className="border-stone-800/30 border-t">
			<div className="mx-auto flex w-full max-w-7xl p-8 px-6 py-12 md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center gap-6">
					<ExternalLink href="https://linkedin.com/in/leogurja">
						<span className="sr-only">LinkedIn</span>
						<LinkedInLogo className="size-6" />
					</ExternalLink>
					<ExternalLink href="https://github.com/leogurja">
						<span className="sr-only">GitHub</span>
						<SiGithub className="size-6" />
					</ExternalLink>
				</div>
				<p className="text-center text-sm/6 text-stone-400 max-sm:mt-8 md:order-first">
					<ExternalLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
						CC BY-NC-SA 4.0
					</ExternalLink>{" "}
					{new Date().getFullYear()} © Leonardo Gurgel
				</p>
			</div>
		</footer>
	);
}
