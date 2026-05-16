import type { ReactNode } from "react";
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
      {children}
      <FooterEnhanced />
    </div>
  );
}
