import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function ExternalLink({
  className,
  children,
  ...rest
}: Omit<ComponentProps<"a">, "target" | "rel">) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={twMerge(
        "cursor-pointer text-stone-300 underline underline-offset-2 transition-colors hover:text-emerald-400",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
