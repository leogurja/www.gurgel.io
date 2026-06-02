import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import type { Icon } from "@phosphor-icons/react/dist/lib/types";
import { ArrowSquareOutIcon, ClockCountdownIcon, GlobeIcon } from "@phosphor-icons/react/dist/ssr";

import { Button } from "../atoms/button";

interface ProjectLinkProps {
  name: string;
  url: string | null;
}

const nameToIcon: Record<string, Icon> = {
  "Em breve": ClockCountdownIcon,
  Site: GlobeIcon,
  Github: SiGithub,
  NPM: SiNpm,
};

export function ProjectLink({ name, url }: ProjectLinkProps) {
  const Icon = nameToIcon[name] ?? ArrowSquareOutIcon;

  if (url == null)
    return (
      <Button disabled intent="link">
        <Icon className="size-6" /> <span>{name}</span>
      </Button>
    );

  return (
    <Button
      className="flex items-center"
      nativeButton={false}
      // oxlint-disable-next-line jsx-a11y/anchor-has-content jsx-a11y/control-has-associated-label
      render={<a href={url} target="_blank" rel="noreferrer" />}
      intent="link"
    >
      <Icon className="size-6" /> <span>{name}</span>
    </Button>
  );
}
