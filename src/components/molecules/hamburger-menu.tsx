import { ListIcon } from "@phosphor-icons/react/dist/ssr";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";
import { Navlink } from "../atoms/navlink";

export function HamburguerMenu() {
  return (
    <nav className="flex grow justify-end md:hidden">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-xl hover:text-emerald-500">
          <ListIcon weight="bold" className="size-10" alt="menu" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="data-highlighted:bg-emerald-600">
            <Navlink href="#about">Sobre mim</Navlink>
          </DropdownMenuItem>
          <DropdownMenuItem className="data-highlighted:bg-emerald-600">
            <Navlink href="#projects">Projetos</Navlink>
          </DropdownMenuItem>
          <DropdownMenuItem className="data-highlighted:bg-emerald-600">
            <Navlink href="#experience">Experiência</Navlink>
          </DropdownMenuItem>
          <DropdownMenuItem className="data-highlighted:bg-emerald-600">
            <Navlink href="#experience">Contato</Navlink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
