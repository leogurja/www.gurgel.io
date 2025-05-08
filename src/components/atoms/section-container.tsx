import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface SectionContainerProps extends ComponentProps<"div"> {
  id: string;
}

export function SectionContainer({
  className,
  children,
  id,
  ...rest
}: SectionContainerProps) {
  return (
    <section id={id} className="py-12">
      <div
        className={twMerge("mx-auto px-6 md:container", className)}
        {...rest}
      >
        {children}
      </div>
    </section>
  );
}
