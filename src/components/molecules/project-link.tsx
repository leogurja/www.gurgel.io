import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import type { Icon } from "@phosphor-icons/react/dist/lib/types";
import {
  ArrowSquareOut,
  ClockCountdown,
  Globe,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "../atoms/button";

interface ProjectLinkProps {
  name: string;
  url: string | null;
}

const nameToIcon: Record<string, Icon> = {
  "Em breve": ClockCountdown,
  Site: Globe,
  Github: SiGithub,
  NPM: SiNpm,
};

export function ProjectLink({ name, url }: ProjectLinkProps) {
  const Icon = nameToIcon[name] ?? ArrowSquareOut;

  if (url == null)
    return (
      <Button disabled intent="link">
        <Icon className="size-6" /> <span>{name}</span>
      </Button>
    );

  return (
    <Button asChild intent="link">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        <Icon className="size-6" /> <span>{name}</span>
      </a>
    </Button>
  );
}
