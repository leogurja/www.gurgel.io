"use client";
import { Menu } from "@base-ui/react";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { Navlink } from "../atoms/navlink";

export function HamburguerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex grow justify-end md:hidden">
      <Menu.Root open={open} onOpenChange={setOpen} modal={false}>
        <Menu.Trigger className="inline-flex items-center justify-center rounded-xl hover:text-emerald-500">
          <ListIcon weight="bold" className="size-10" alt="menu" />
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner align="end">
            <Menu.Popup
              className={twMerge(
                "grid grid-flow-row overflow-hidden rounded-xl bg-stone-900 text-sm *:py-5 *:pr-12 *:pl-7",
                open
                  ? "motion-safe:motion-preset-slide-left motion-ease-out-back motion-duration-500"
                  : "motion-safe:motion-opacity-out motion-safe:motion-translate-x-out motion-ease-in motion-duration-200 motion-reduce:opacity-0",
              )}
            >
              <Menu.Item className="data-highlighted:bg-emerald-600">
                <Navlink onClick={() => setOpen(false)} href="#about">
                  Sobre mim
                </Navlink>
              </Menu.Item>
              <Menu.Item className="data-highlighted:bg-emerald-600">
                <Navlink onClick={() => setOpen(false)} href="#projects">
                  Projetos
                </Navlink>
              </Menu.Item>
              <Menu.Item className="data-highlighted:bg-emerald-600">
                <Navlink onClick={() => setOpen(false)} href="#experience">
                  Experiência
                </Navlink>
              </Menu.Item>
              <Menu.Item className="data-highlighted:bg-emerald-600">
                <Navlink onClick={() => setOpen(false)} href="#experience">
                  Contato
                </Navlink>
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </nav>
  );
}
