import type { Tech } from "@/lib/constants/techs";
import { ExternalLink } from "../atoms/external-link";

export function Badge({ name, site }: Tech) {
	return (
		<li>
			<ExternalLink href={site} className="rounded-full px-2 py-1 text-xs">
				{name}
			</ExternalLink>
		</li>
	);
}
