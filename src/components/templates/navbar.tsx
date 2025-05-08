import { Logo } from "@/components/atoms/logo.svg";
import Link from "next/link";
import { Navlink } from "../atoms/navlink";
import { HamburguerMenu } from "../molecules/hamburger-menu";

export function Navbar() {
  return (
    <header className="absolute top-0 flex w-full p-8">
      <Link href="/" className="transition-colors hover:text-emerald-500">
        <Logo className="size-14" />
      </Link>
      <HamburguerMenu />
      <nav className="flex grow justify-end gap-8 max-md:hidden">
        <Navlink href="#about">Sobre mim</Navlink>
        <Navlink href="#projects">Projetos</Navlink>
        <Navlink href="#experience">Experiência</Navlink>
        <Navlink href="#contact">Contato</Navlink>
      </nav>
    </header>
  );
}
