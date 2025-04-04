"use client";

import type { ComponentProps, ElementType } from "react";
import { useIntersectionOnce } from "@/lib/hooks/useIntersectionOnce";

type MotionInViewProps<T extends ElementType> = ComponentProps<T> & {
	threshold?: number;
	as?: T;
};

export function MotionInView<T extends ElementType = "div">({
	className,
	threshold = 0.3,
	as = "div",
	...rest
}: MotionInViewProps<T>) {
	const [ref, didIntersect] = useIntersectionOnce({
		threshold,
		rootMargin: "-10% 0px",
	});
	const Component = as;

	return (
		<Component
			ref={ref}
			className={didIntersect ? className : "opacity-0"}
			{...rest}
		/>
	);
}
