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
import { Navlink } from "../atoms/navlink";

export function HamburguerMenu() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="flex grow justify-end md:hidden">
			<Root open={open} onOpenChange={setOpen} modal={false}>
				<Trigger asChild>
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-xl hover:text-emerald-500"
					>
						<List weight="bold" className="size-10" alt="menu" />
					</button>
				</Trigger>
				<Portal>
					<Content
						className={cn(
							"grid grid-flow-row overflow-hidden rounded-xl bg-stone-900 text-sm *:py-5 *:pr-12 *:pl-7",
							{
								"motion-safe:motion-preset-slide-left motion-ease-out-back motion-duration-500":
									open,
								"motion-safe:motion-opacity-out motion-safe:motion-translate-x-out motion-ease-in motion-duration-200 motion-reduce:opacity-0":
									!open,
							},
						)}
						align="end"
						avoidCollisions={false}
					>
						<Item className="data-[highlighted]:bg-emerald-600">
							<Navlink onClick={() => setOpen(false)} href="#about">
								Sobre mim
							</Navlink>
						</Item>
						<Item className="data-[highlighted]:bg-emerald-600">
							<Navlink onClick={() => setOpen(false)} href="#projects">
								Projetos
							</Navlink>
						</Item>
						<Item className="data-[highlighted]:bg-emerald-600">
							<Navlink onClick={() => setOpen(false)} href="#experience">
								Experiência
							</Navlink>
						</Item>
						<Item className="data-[highlighted]:bg-emerald-600">
							<Navlink onClick={() => setOpen(false)} href="#experience">
								Contato
							</Navlink>
						</Item>
					</Content>
				</Portal>
			</Root>
		</nav>
	);
}
