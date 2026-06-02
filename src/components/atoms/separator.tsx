"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { twMerge } from "tailwind-merge";

export interface SeparatorProps extends SeparatorPrimitive.Props {
  className?: string;
}

export function Separator({ className, orientation = "horizontal", ...props }: SeparatorProps) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={twMerge(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className,
      )}
      {...props}
    />
  );
}
