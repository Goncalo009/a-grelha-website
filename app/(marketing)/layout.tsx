'use client';
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import FooterEnhanced from "@/components/layout/footer-enhanced";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <FooterEnhanced />
    </div>
  );
}
