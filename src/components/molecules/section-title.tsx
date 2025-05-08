import { GradientText } from "@/components/atoms/gradient-text";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

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
        className={twMerge(
          "mx-auto flex size-12 items-center justify-center rounded-full bg-linear-to-r text-2xl font-bold text-stone-950",
          className,
        )}
      >
        {number}
      </span>
      <h2 className="my-12 text-center text-6xl font-bold tracking-tight">
        <GradientText className={className} {...rest} />
      </h2>
    </>
  );
}
