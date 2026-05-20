import type { ReactNode } from "react";
import Navbar from "@/components/layout/navbar";
import FooterEnhanced from "@/components/layout/footer-enhanced";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream pb-[var(--ag-mobile-action-bar-h)] md:pb-0" data-mobile-shell>
      <Navbar />
      <div className="flex-1">{children}</div>
      <FooterEnhanced />
      <MobileActionBar />
    </div>
  );
}
