import type { ComponentProps } from "react";
import { cn } from "@/lib/helpers/cn";

export function GradientText({ className, ...rest }: ComponentProps<"span">) {
	return (
		<span
			className={cn(
				"bg-gradient-to-r bg-clip-text text-transparent",
				className,
			)}
			{...rest}
		/>
	);
}
