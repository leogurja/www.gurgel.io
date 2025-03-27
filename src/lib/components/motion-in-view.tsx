"use client";

import { cn } from "@/lib/utils/cn";
import { useIntersectionObserver } from "@react-hooks-library/core";
import { type ComponentProps, type ElementType, useRef } from "react";

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
  const ref = useRef(null);
  const { inView } = useIntersectionObserver(ref, { threshold });
  const Component = as;

  return (
    <Component
      ref={ref}
      className={cn(
        className,
        inView ? "motion-safe:motion-running" : "motion-safe:motion-paused",
      )}
      {...rest}
    />
  );
}
