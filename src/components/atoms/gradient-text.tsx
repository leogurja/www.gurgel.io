import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const gradientVariants = cva("bg-clip-text text-transparent", {
	variants: {
		animated: {
			false: "bg-gradient-to-r",
			true: "animate-gradient bg-rainbow",
		},
	},
	defaultVariants: {
		animated: false,
	},
});

export function GradientText({
	className,
	animated,
	...rest
}: ComponentProps<"span"> & VariantProps<typeof gradientVariants>) {
	return (
		<span className={gradientVariants({ animated, className })} {...rest} />
	);
}
