import type { Tech } from "@/lib/constants/techs";

export function Badge({ name, site }: Tech) {
	return (
		<li>
			<a
				href={site}
				target="_blank"
				rel="noreferrer"
				className="rounded-full px-2 py-1 text-stone-400 text-xs transition-colors hover:text-white"
			>
				{name}
			</a>
		</li>
	);
}
