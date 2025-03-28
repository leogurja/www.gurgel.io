import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

export function SectionContainer({
  className,
  ...rest
}: ComponentProps<"section"> & { id: string }) {
  return <section className={cn("w-full", className)} {...rest} />;
}
