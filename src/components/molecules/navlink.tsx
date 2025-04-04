import Link from "next/link";
import type { ComponentProps } from "react";
import { Button } from "@/components/atoms/button";

export function Navlink(props: ComponentProps<typeof Link>) {
	return (
		<Button asChild intent="link" className="tracking-wide">
			<Link {...props} />
		</Button>
	);
}
