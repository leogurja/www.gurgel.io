import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./_styles/globals.css";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-emerald-500">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-zinc-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button asChild size="xl" className="mt-10">
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    </main>
  );
}
