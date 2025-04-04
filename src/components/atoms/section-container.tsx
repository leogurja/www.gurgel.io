import type { ComponentProps } from "react";
import { cn } from "@/lib/helpers/cn";

interface SectionContainerProps extends ComponentProps<"div"> {
	id: string;
}

export function SectionContainer({
	className,
	children,
	id,
	...rest
}: SectionContainerProps) {
	return (
		<section id={id} className="py-12">
			<div className={cn("mx-auto px-6 md:container", className)} {...rest}>
				{children}
			</div>
		</section>
	);
}
