import { Button as BaseButton } from "@base-ui/react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium cursor-pointer transition-all",
    "focus-visible:border-stone-300 focus-visible:ring-stone-300/50 focus-visible:ring-1",
    "aria-invalid:ring-rose-500/20 aria-invalid:border-rose-500",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:shrink-0 [&_svg]:pointer-events-none",
  ],
  variants: {
    intent: {
      primary: "bg-emerald-700 text-white shadow-xs hover:bg-emerald-600",
      secondary: "bg-stone-300 text-stone-950 shadow-xs hover:bg-stone-100",
      destructive:
        "bg-rose-500 text-white shadow-xs hover:bg-rose-400 focus-visible:ring-rose-500/20",
      outline:
        "border border-emerald-500 text-emerald-500 bg-transparent shadow-xs hover:bg-emerald-500 hover:text-white",
      ghost: "hover:bg-emerald-500 hover:text-white",
      link: "text-white hover:text-emerald-400",
    },
    size: {
      sm: "h-8 gap-1.5 px-3 has-[&_svg]:px-2.5",
      md: "h-9 px-4 py-2 has-[&_svg]:px-3",
      lg: "h-10 px-6 has-[&_svg]:px-4",
      xl: "h-12 px-8 has-[&_svg]:px-6",
      icon: "size-9",
      "icon-xl": "size-12",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export interface ButtonProps extends BaseButton.Props, VariantProps<typeof buttonVariants> {
  className?: string;
}

export function Button({ className, intent, size, ...props }: ButtonProps) {
  return (
    <BaseButton
      data-slot="button"
      className={buttonVariants({ intent, size, className })}
      {...props}
    />
  );
}
