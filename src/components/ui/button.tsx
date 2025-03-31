import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:border-zinc-300 focus-visible:ring-zinc-300/50 focus-visible:ring-1 aria-invalid:ring-rose-500/20 aria-invalid:border-rose-500",
  {
    variants: {
      variant: {
        default: "bg-emerald-700 text-white shadow-xs hover:bg-emerald-600",
        destructive:
          "bg-rose-500 text-white shadow-xs hover:bg-rose-400 focus-visible:ring-rose-500/20",
        outline:
          "border bg-zinc-950 shadow-xs hover:bg-sky-500 hover:text-white",
        secondary: "bg-zinc-300 text-zinc-950 shadow-xs hover:bg-zinc-100",
        ghost: "hover:bg-sky-700 hover:text-white",
        link: "text-white hover:text-emerald-400",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        xl: "h-12 px-8 has-[>svg]:px-6",
        icon: "size-9",
        "icon-xl": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
