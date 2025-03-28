import { List } from "@phosphor-icons/react/dist/ssr";
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dropdown-menu";
import { Navlink } from "./navlink";

export function HamburguerMenu() {
  return (
    <nav className="flex grow justify-end md:hidden">
      <Root>
        <Trigger asChild>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl hover:text-indigo-500"
          >
            <List weight="bold" className="size-10" />
          </button>
        </Trigger>
        <Portal>
          <Content
            className="mr-7 rounded-xl bg-gray-900 p-8 will-change-[opacity,transform]"
            sideOffset={5}
          >
            <Item className="group text-violet11 data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 relative flex h-[25px] items-center rounded-[3px] pr-[5px] pl-[25px] text-[13px] leading-none outline-none select-none data-[disabled]:pointer-events-none">
              <Navlink href="#about">Sobre mim</Navlink>
            </Item>
            <Item>
              <Navlink href="#experience">Projetos</Navlink>
            </Item>
            <Item>
              <Navlink href="#experience">Experiência</Navlink>
            </Item>
          </Content>
        </Portal>
      </Root>
    </nav>
  );
}
