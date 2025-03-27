import notFoundImg from "@/assets/images/404.jpg";
import { Logo } from "@/lib/components/logos/logo.svg";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import "./_styles/globals.css";

export default function NotFound() {
  return (
    <div className="grid h-screen w-screen grid-cols-1 grid-rows-[1fr_auto_1fr] bg-slate-50 text-slate-900 lg:grid-cols-[max(50%,_36rem)_1fr]">
      <header className="p-8">
        <Link href="/">
          <span className="sr-only">Página Inicial</span>
          <Logo className="size-10 sm:size-12" />
        </Link>
      </header>
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-24 lg:px-8">
        <p className="max-w-6xl leading-8 font-semibold text-sky-800">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-pretty md:text-6xl">
          Página não encontrada
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-slate-500 sm:text-xl/8">
          Desculpe, não encontramos o que você procura.
        </p>
        <Link
          href="/"
          className="mt-10 flex items-center gap-1 rounded-xl text-sm/7 font-semibold text-sky-700"
        >
          <ArrowLeft className="inline" weight="bold" /> Voltar ao início
        </Link>
      </main>
      <footer className="self-end border-t border-slate-300 bg-slate-200 py-10">
        <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm/7 text-slate-600 lg:px-8">
          <Link href="/">Home</Link>
        </nav>
      </footer>
      <aside className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
        <Image
          className="absolute inset-0 size-full object-cover"
          src={notFoundImg.src}
          alt=""
          width={notFoundImg.width}
          height={notFoundImg.height}
          blurDataURL={notFoundImg.blurDataURL ?? ""}
          placeholder="blur"
        />
      </aside>
    </div>
  );
}
