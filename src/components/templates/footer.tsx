import { SiGithub } from "@icons-pack/react-simple-icons";

import { ExternalLink } from "../atoms/external-link";
import { FooterCopyright } from "../atoms/footer-copyright";
import { LinkedInLogo } from "../atoms/linkedin-logo.svg";

export function Footer() {
  return (
    <footer className="border-t border-stone-800/30">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-6">
          <ExternalLink href="https://linkedin.com/in/leogurja">
            <LinkedInLogo className="size-6" />
          </ExternalLink>
          <ExternalLink href="https://github.com/leogurja">
            <SiGithub className="size-6" title="GitHub" />
          </ExternalLink>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}
