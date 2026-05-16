import type { Metadata } from "next";
import { Anton, Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import { generateMetadata } from "@/config/seo";
import { RestaurantSchema } from "@/components/seo/restaurant-schema";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${anton.variable} ${openSans.variable}`}>
      <body className="bg-brand-beige text-brand-black font-body font-extrabold selection:bg-brand-red selection:text-white overflow-x-hidden antialiased">
        <div className="fixed inset-0 noise-overlay z-[100] pointer-events-none opacity-[0.08]"></div>
        <RestaurantSchema />
        {children}
      </body>
    </html>
  );
}
