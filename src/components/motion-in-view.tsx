"use client";

import type { ComponentProps, ElementType } from "react";
import { useIntersectionOnce } from "@/hooks/useIntersectionOnce";
import { cn } from "@/utils/cn";

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
    rootMargin: "10%",
  });
  const Component = as;

  return (
    <Component
      ref={ref}
      className={cn(className, didIntersect || "motion-paused!")}
      {...rest}
    />
  );
}
