import type { ComponentProps } from "react";

export function GradientText({ children, ...rest }: ComponentProps<"span">) {
  return (
    <span
      className="animate-gradient bg-rainbow bg-clip-text leading-relaxed text-transparent"
      {...rest}
    >
      {children}
    </span>
  );
}
