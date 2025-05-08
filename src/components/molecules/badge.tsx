import { techSites, type TechName } from "@/lib/constants/techs";
import { ExternalLink } from "../atoms/external-link";

interface BadgeProps {
  name: TechName;
}

export function Badge({ name }: BadgeProps) {
  return (
    <li>
      <ExternalLink
        href={techSites[name]}
        className="rounded-full bg-stone-800 px-3 py-1 text-xs leading-5 font-medium no-underline hover:bg-emerald-700 hover:text-white"
      >
        {name}
      </ExternalLink>
    </li>
  );
}
