import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

export function AnimatedGradientText({
  className,
  ...rest
}: ComponentProps<typeof GradientText>) {
  return (
    <GradientText
      className={cn("animate-gradient bg-rainbow text-transparent", className)}
      {...rest}
    />
  );
}

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
