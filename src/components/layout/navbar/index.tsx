import { Navlink } from "./navlink";

export function Navbar() {
  return (
    <header className="absolute top-0 flex w-full p-8">
      <nav className="flex grow items-center justify-end gap-8">
        <Navlink href="#about">Sobre mim</Navlink>
        <Navlink href="#experience">Projetos</Navlink>
        <Navlink href="#experience">Experiência</Navlink>
      </nav>
    </header>
  );
}
