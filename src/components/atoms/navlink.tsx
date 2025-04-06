import Link from "next/link";
import type { ComponentProps } from "react";

export function Navlink(props: ComponentProps<typeof Link>) {
	return (
		<Link
			className="font-medium tracking-wide transition-colors hover:text-emerald-400"
			{...props}
		/>
	);
}
