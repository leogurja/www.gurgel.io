import { techSites, type TechName } from "@/lib/constants/techs";

import { Button } from "../atoms/button";
import { ExternalLink } from "../atoms/external-link";

interface BadgeProps {
  name: TechName;
}

export function Badge({ name }: BadgeProps) {
  return (
    <li>
      <Button
        nativeButton={false}
        variant="ghost"
        size="xs"
        render={<ExternalLink href={techSites[name]} />}
      >
        {name}
      </Button>
    </li>
  );
}
