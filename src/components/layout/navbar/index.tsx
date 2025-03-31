import { Logo } from "@/components/logos/logo.svg";
import Link from "next/link";
import { HamburguerMenu } from "./hamburger-menu";
import { Navlink } from "./navlink";

export function Navbar() {
  return (
    <header className="absolute top-0 flex w-full p-8">
      <Link href="/" className="transition-colors hover:text-emerald-500">
        <Logo className="size-14" />
      </Link>
      <HamburguerMenu />
      <nav className="flex grow justify-end gap-8 max-md:hidden">
        <Navlink href="#about">Sobre mim</Navlink>
        <Navlink href="#experience">Projetos</Navlink>
        <Navlink href="#experience">Experiência</Navlink>
      </nav>
    </header>
  );
}
