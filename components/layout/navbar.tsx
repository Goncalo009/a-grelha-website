"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Início" },
  { href: "/menu", label: "Menu" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contactos", label: "Contactos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-brand-black bg-[#f7ecdf]/95 backdrop-blur">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-brand-black focus:px-4 focus:py-3 focus:text-white"
      >
        Saltar para o conteúdo
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link
          href="/"
          aria-label="A Grelha - página inicial"
          className="group inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
        >
          <span className="flex h-12 w-12 items-center justify-center border-4 border-brand-black bg-brand-red font-headline text-3xl text-white shadow-[4px_4px_0_#1f1b13] transition-transform group-hover:-rotate-3">
            AG
          </span>
          <span className="leading-none">
            <span className="block font-headline text-2xl uppercase text-brand-black md:text-3xl">
              A Grelha
            </span>
            <span className="block text-xs font-extrabold uppercase tracking-[0.22em] text-[#5d3f3d]">
              Churrasqueira Porto Alto
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "font-extrabold uppercase tracking-[0.18em] text-brand-black transition-colors hover:text-brand-red focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-red",
                  active && "text-brand-red"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
            className="inline-flex h-12 items-center gap-2 border-4 border-brand-black px-4 font-extrabold uppercase tracking-wider text-brand-black transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            <Phone aria-hidden="true" size={18} />
            Ligar
          </a>
          <Link
            href="/encomendas"
            className="inline-flex h-12 items-center gap-2 bg-brand-red px-5 font-headline text-xl uppercase text-white shadow-[4px_4px_0_#1f1b13] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            <ShoppingBag aria-hidden="true" size={19} />
            Encomendar
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center border-4 border-brand-black bg-white text-brand-black shadow-[3px_3px_0_#1f1b13] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-red lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "lg:hidden",
          open ? "block border-t-4 border-brand-black bg-[#fff8f2]" : "hidden"
        )}
      >
        <nav aria-label="Navegação móvel" className="mx-auto grid max-w-7xl gap-2 px-4 py-5">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-3 font-headline text-3xl uppercase text-brand-black focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-red",
                  active && "bg-brand-red text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
              className="inline-flex items-center justify-center gap-2 border-4 border-brand-black px-5 py-4 font-extrabold uppercase tracking-wider text-brand-black"
            >
              <Phone aria-hidden="true" size={18} />
              Ligar
            </a>
            <Link
              href="/encomendas"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-brand-red px-5 py-4 font-headline text-2xl uppercase text-white shadow-[4px_4px_0_#1f1b13]"
            >
              <ShoppingBag aria-hidden="true" size={20} />
              Encomendar
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
