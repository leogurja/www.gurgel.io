"use client";
import { List } from "@phosphor-icons/react/dist/ssr";
import {
	Content,
	Item,
	Portal,
	Root,
	Trigger,
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { cn } from "@/lib/helpers/cn";
import { Navlink } from "../molecules/navlink";

export function HamburguerMenu() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="flex grow justify-end md:hidden">
			<Root open={open} onOpenChange={setOpen}>
				<Trigger asChild>
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-xl hover:text-emerald-500"
					>
						<List weight="bold" className="size-10" />
					</button>
				</Trigger>
				<Portal>
					<Content
						className={cn("rounded-xl bg-stone-900 p-8", {
							"motion-safe:motion-preset-slide-left motion-ease-out-back motion-duration-500":
								open,
							"motion-safe:motion-opacity-out motion-safe:motion-translate-x-out motion-ease-in motion-duration-200 motion-reduce:opacity-0":
								!open,
						})}
						align="end"
						avoidCollisions={false}
					>
						<Item className="data-[highlighted]:bg-emerald-500 data-[highlighted]:text-emerald-500">
							<Navlink href="#about">Sobre mim</Navlink>
						</Item>
						<Item className="data-[highlighted]:bg-emerald-500 data-[highlighted]:text-emerald-500">
							<Navlink href="#projects">Projetos</Navlink>
						</Item>
						<Item className="data-[highlighted]:bg-emerald-500 data-[highlighted]:text-emerald-500">
							<Navlink href="#experience">Experiência</Navlink>
						</Item>
					</Content>
				</Portal>
			</Root>
		</nav>
	);
}
