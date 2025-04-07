import type { ComponentProps } from "react";
import { GradientText } from "@/components/atoms/gradient-text";
import { cn } from "@/lib/helpers/cn";

interface SectionTitleProps extends ComponentProps<typeof GradientText> {
	number: number;
}

export function SectionTitle({
	number,
	className,
	...rest
}: SectionTitleProps) {
	return (
		<>
			<span
				className={cn(
					"mx-auto flex size-12 items-center justify-center rounded-full bg-linear-to-r font-bold text-2xl text-stone-950",
					className,
				)}
			>
				{number}
			</span>
			<h2 className="my-12 text-center font-bold text-6xl tracking-tight">
				<GradientText className={className} {...rest} />
			</h2>
		</>
	);
}
