import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ComponentProps } from "react";

export function Navlink(props: ComponentProps<typeof Link>) {
  return (
    <Button asChild variant="link" className="tracking-wide">
      <Link {...props} />
    </Button>
  );
}
