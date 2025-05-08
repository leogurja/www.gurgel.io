"use client";

import { useIntersectionOnce } from "@/lib/hooks/useIntersectionOnce";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import type { ClassNameValue } from "tailwind-merge";
import { tv } from "tailwind-variants";

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & { as?: E }
>;

type MotionInViewProps<T extends ElementType> = PolymorphicProps<T> & {
  threshold?: number;
  className?: ClassNameValue;
};

const motionInViewVariants = tv({
  variants: {
    didIntersect: {
      true: "motion-safe:motion-running",
      false: "motion-safe:motion-paused",
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
    <Component
      ref={ref}
      className={motionInViewVariants({ className, didIntersect })}
      {...rest}
    />
  );
}
