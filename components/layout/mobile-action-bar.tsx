"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, UserRound } from "lucide-react";
import { OrderDrawer } from "@/components/forms/order-drawer";
import { cn } from "@/lib/utils";

function navClass(active: boolean) {
  return cn(
    "relative mx-1 my-1 inline-flex min-h-[62px] flex-col items-center justify-center gap-0.5 rounded-[16px] px-2 py-1.5 text-[0.56rem] font-semibold tracking-[-0.01em] transition hover:bg-black/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#c6452c]",
    active ? "bg-[#fff3ec] text-[#c6452c]" : "text-[#1c1c1c]/64"
  );
}

export function MobileActionBar() {
  const pathname = usePathname();
  const menuActive = pathname === "/menu" || pathname.startsWith("/menu/");
  const orderActive = pathname === "/encomendas";
  const accountActive = pathname === "/contactos";

  return (
    <nav
      aria-label="Navegação móvel principal"
      className="fixed inset-x-0 bottom-0 z-50 min-h-[var(--ag-mobile-action-bar-h)] border-t border-[#c6452c]/16 bg-white text-[#1c1c1c] shadow-[0_-14px_34px_rgba(28,28,28,0.12)] md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-3 px-1.5 pb-[calc(env(safe-area-inset-bottom)+0.15rem)] pt-1">
        <Link href="/menu" className={navClass(menuActive)} aria-current={menuActive ? "page" : undefined}>
          <Flame aria-hidden="true" size={20} strokeWidth={1.75} />
          <span>Menu</span>
        </Link>

        <OrderDrawer variant="nav" active={orderActive} label="Pedidos" />

        <Link href="/contactos" className={navClass(accountActive)} aria-current={accountActive ? "page" : undefined}>
          <UserRound aria-hidden="true" size={20} strokeWidth={1.75} />
          <span>Conta</span>
        </Link>
      </div>
    </nav>
  );
}
