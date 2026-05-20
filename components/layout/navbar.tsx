"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Flame, Menu, MessageCircle, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/menu", label: "Cardápio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contactos#localizacao", label: "Localização" },
  { href: "/contactos", label: "Contacto" },
];

const phoneHref = `tel:${siteConfig.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Olá A Grelha, quero encomendar takeaway para levantar no restaurante."
)}`;

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const lastTouchToggleAt = useRef(-1000);
  const backHref = pathname.startsWith("/menu/") ? "/menu" : null;

  const toggleMenu = () => {
    setOpen((value) => !value);
  };

  const toggleMenuFromTouch = () => {
    const now = performance.now();
    if (now - lastTouchToggleAt.current < 300) return;
    lastTouchToggleAt.current = now;
    toggleMenu();
  };

  const toggleMenuFromClick = () => {
    if (performance.now() - lastTouchToggleAt.current < 650) return;
    toggleMenu();
  };

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

  const mobileNavigation = open ? (
    <div id="mobile-navigation" className="fixed inset-x-0 bottom-0 top-[var(--ag-mobile-header-h)] z-[120] lg:hidden">
      <button
        type="button"
        aria-label="Fechar menu"
        className="absolute inset-0 z-0 bg-brand-black/44 backdrop-blur-[2px]"
        onClick={() => setOpen(false)}
      />
      <nav
        aria-label="Navegação móvel"
        className="absolute left-3 right-3 top-3 z-10 overflow-hidden rounded-[26px] border border-white/45 bg-white p-3 text-brand-black shadow-[0_24px_70px_rgba(28,28,28,0.22)]"
      >
        <div className="grid gap-1">
          {links.map((link, index) => {
            const active = isActive(pathname, link.href);

            return (
              <a
                key={`${link.href}-${link.label}-${index}-mobile`}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block touch-manipulation rounded-[18px] px-4 py-4 text-center text-lg font-extrabold uppercase tracking-[0.055em] text-brand-black transition hover:bg-[#f2f1ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red",
                  active && "bg-[#fff3ec] text-brand-red"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link
            href="/menu"
            className="inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-[16px] bg-brand-red px-4 text-[0.72rem] font-extrabold uppercase tracking-[0.07em] text-white shadow-[0_12px_26px_rgba(198,69,44,0.22)]"
            onClick={() => setOpen(false)}
          >
            <MessageCircle aria-hidden="true" size={17} />
            Take-away
          </Link>
          <a
            href={phoneHref}
            className="inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-[16px] border border-brand-brown/14 bg-[#f2f1ef] px-4 text-[0.72rem] font-extrabold uppercase tracking-[0.07em] text-brand-black"
          >
            <Phone aria-hidden="true" size={17} />
            Ligar
          </a>
        </div>
      </nav>
    </div>
  ) : null;

  return (
    <>
      <header data-mobile-header className="sticky top-0 z-[70] h-16 border-b border-brand-brown/10 bg-brand-white shadow-[0_7px_24px_rgba(54,35,23,0.055)] lg:relative lg:top-auto lg:h-[94px]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-md focus:bg-brand-black focus:px-4 focus:py-3 focus:text-white"
      >
        Saltar para o conteúdo
      </a>

      <div className="relative h-full w-full px-[4vw]">
        <div className="absolute left-[4vw] top-1/2 hidden -translate-y-1/2 items-center gap-2 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-brand-black/78 lg:flex">
          <Flame aria-hidden="true" size={13} strokeWidth={2.2} className="text-brand-brown/72" />
          Churrasqueira
        </div>

        <Link
          href="/"
          aria-label="A Grelha - página inicial"
          className="absolute left-1/2 top-1/2 inline-flex h-10 w-[148px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md text-brand-black transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red lg:top-2 lg:h-[43px] lg:w-[250px] lg:translate-y-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo/a-grelha-logo.svg"
            alt=""
            width={668}
            height={132}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="absolute bottom-[17px] left-1/2 hidden -translate-x-1/2 items-center gap-[clamp(1.6rem,3.2vw,4.2rem)] lg:flex"
        >
          {links.map((link, index) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={`${link.href}-${link.label}-${index}`}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-brand-black/74 transition-colors hover:text-brand-red focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red",
                  active && "text-brand-red"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute right-[4vw] top-1/2 hidden -translate-y-1/2 items-center gap-3 lg:flex">
          <Link
            href="/menu"
            className="inline-flex h-[43px] items-center justify-center rounded-[3px] bg-brand-red px-7 text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_12px_26px_rgba(201,71,38,0.22)] transition duration-200 hover:bg-[#b73c20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            Ver cardápio
          </Link>
          <a
            href={whatsappHref}
            className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-md text-brand-black/75 transition-colors hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            aria-label="Encomendar por WhatsApp"
          >
            <MessageCircle aria-hidden="true" size={17} strokeWidth={1.8} />
          </a>
        </div>

        {backHref ? (
          <Link
            href={backHref}
            aria-label="Voltar ao menu"
            className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-brand-black transition hover:bg-brand-black/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red lg:hidden"
          >
            <ArrowLeft aria-hidden="true" size={21} />
          </Link>
        ) : (
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={toggleMenuFromClick}
            onPointerUp={(event) => {
              if (event.pointerType === "mouse") return;
              event.preventDefault();
              event.stopPropagation();
              toggleMenuFromTouch();
            }}
            onTouchEnd={(event) => {
              event.preventDefault();
              event.stopPropagation();
              toggleMenuFromTouch();
            }}
            className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full text-brand-black transition hover:bg-brand-black/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red lg:hidden"
          >
            {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
          </button>
        )}

        <a
          href={phoneHref}
          aria-label={`Ligar para ${siteConfig.phone}`}
          className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#c6452c] text-white shadow-[0_10px_24px_rgba(198,69,44,0.24)] transition hover:bg-[#b83d25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red lg:hidden"
        >
          <Phone aria-hidden="true" size={19} strokeWidth={2} />
        </a>
      </div>
      </header>
      {typeof document !== "undefined" && mobileNavigation ? createPortal(mobileNavigation, document.body) : null}
    </>
  );
}
