import type { ComponentProps } from "react";

export function ExternalLink({ children, ...rest }: Omit<ComponentProps<"a">, "target" | "rel">) {
  return (
    <a target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  );
}
