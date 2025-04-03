import type { ComponentProps } from "react";
import { GradientText } from "@/components/gradient-text";
import { cn } from "@/utils/cn";

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
          "mx-auto flex size-12 items-center justify-center rounded-full bg-gradient-to-r font-bold text-2xl text-white",
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
