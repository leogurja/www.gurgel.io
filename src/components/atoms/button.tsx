import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { tv, type VariantProps } from "tailwind-variants";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = tv({
  base: `group/button inline-flex shrink-0 items-center justify-center rounded-4xl
    border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap
    transition-all outline-none select-none
    focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30
    active:not-aria-[haspopup]:translate-y-px
    disabled:pointer-events-none disabled:opacity-50
    aria-invalid:ring-3 aria-invalid:border-destructive/50 aria-invalid:ring-destructive/40
    [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      outline:
        "border-border hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground bg-transparent hover:bg-input/30",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-white aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
      ghost:
        "bg-muted text-muted-foreground hover:text-foreground hover:bg-primary aria-expanded:bg-muted aria-expanded:text-foreground",
      destructive:
        "text-destructive focus-visible:border-destructive/40 bg-destructive/20 hover:bg-destructive/30 focus-visible:ring-destructive/40",
      link: "text-white hover:text-accent",
    },
    size: {
      md: "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
      xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
      sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
      icon: "size-9",
      "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
      "icon-sm": "size-8",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ButtonProps extends ButtonPrimitive.Props, ButtonVariants {
  className?: string;
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
