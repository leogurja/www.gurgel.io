import type { ComponentProps } from "react";
import { cn } from "@/lib/helpers/cn";

export function ExternalLink({
	className,
	...rest
}: Omit<ComponentProps<"a">, "target" | "rel">) {
	return (
		<a
			target="_blank"
			rel="noreferrer"
			className={cn(
				"cursor-pointer text-stone-300 transition-colors hover:text-white",
				className,
			)}
			{...rest}
		/>
	);
}
