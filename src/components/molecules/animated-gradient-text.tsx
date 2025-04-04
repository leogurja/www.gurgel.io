import type { ComponentProps } from "react";
import { cn } from "@/lib/helpers/cn";
import { GradientText } from "../atoms/gradient-text";

export function AnimatedGradientText({
	className,
	...rest
}: ComponentProps<typeof GradientText>) {
	return (
		<GradientText
			className={cn("animate-gradient bg-rainbow text-transparent", className)}
			{...rest}
		/>
	);
}
