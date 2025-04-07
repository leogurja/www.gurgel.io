import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { Experience } from "@/lib/constants/experience";
import { ExternalLink } from "../atoms/external-link";
import { Badge } from "./badge";

export function ExperienceCard({
	role,
	site,
	company,
	tags,
	period,
	description,
}: Experience) {
	return (
		<article className="mb-10">
			<div className="-ml-2 absolute left-0 size-4 rounded-full border-2 border-stone-950 bg-emerald-500" />
			<h3 className="-translate-y-1.5 font-semibold text-xl">
				{role}{" "}
				<span className="text-stone-400">
					@{" "}
					<ExternalLink href={site} className="text-stone-400">
						{company}
					</ExternalLink>
				</span>
			</h3>
			<p className="flex gap-2 text-sm text-stone-400">
				<time dateTime={format(period.from, "yyyy-MM-dd")}>
					{format(period.from, "MMM yyyy", { locale: ptBR })}
				</time>
				-
				{period.to != null ? (
					<time dateTime={format(period.to, "yyyy-MM-dd")}>
						{format(period.to, "MMM yyyy", { locale: ptBR })}
					</time>
				) : (
					<span>O momento</span>
				)}
			</p>
			<ul className="flex flex-wrap items-center gap-3 py-3">
				{tags.map((tag) => (
					<Badge key={tag.name} {...tag} />
				))}
			</ul>
			<p className="text-pretty text-stone-300 leading-relaxed">
				{description}
			</p>
		</article>
	);
}
