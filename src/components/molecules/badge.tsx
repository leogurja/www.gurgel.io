import { ExternalLink } from "../atoms/external-link";

interface BadgeProps {
	name: string;
	site: string;
}

export function Badge({ name, site }: BadgeProps) {
	return (
		<li>
			<ExternalLink
				href={site}
				className="rounded-full bg-stone-800 px-3 py-1 font-medium text-xs leading-5 no-underline hover:bg-emerald-700 hover:text-white"
			>
				{name}
			</ExternalLink>
		</li>
	);
}
