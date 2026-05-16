import type { Metadata } from "next";
import "@/styles/globals.css";
import { generateMetadata } from "@/config/seo";
import { RestaurantSchema } from "@/components/seo/restaurant-schema";

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className="bg-brand-beige text-brand-black font-body font-extrabold selection:bg-brand-red selection:text-white overflow-x-hidden antialiased">
        <div className="fixed inset-0 noise-overlay z-[100] pointer-events-none opacity-[0.08]"></div>
        <RestaurantSchema />
        {children}
      </body>
    </html>
  );
}
