"use client";

import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import { useIntersectionOnce } from "@/lib/hooks/useIntersectionOnce";

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & { as?: E }
>;

type MotionInViewProps<T extends ElementType> = PolymorphicProps<T> & {
  threshold?: number;
  className?: string;
};

const motionInViewVariants = tv({
  base: "fill-mode-both",
  variants: {
    didIntersect: {
      true: "running",
      false: "paused",
    },
  },
  defaultVariants: {
    didIntersect: false,
  },
});

export function MotionInView<T extends ElementType = "div">({
  className,
  as,
  ...rest
}: MotionInViewProps<T>) {
  const [ref, didIntersect] = useIntersectionOnce();
  const Component = (as ?? "div") satisfies ElementType;

  return (
    <Component ref={ref} className={motionInViewVariants({ className, didIntersect })} {...rest} />
  );
}
