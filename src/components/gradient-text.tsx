import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

export function GradientText({ className, ...rest }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "animate-gradient bg-rainbow bg-clip-text text-transparent",
        className,
      )}
      {...rest}
    />
  );
}
