import type { Metadata, Viewport } from "next";
import "maplibre-gl/dist/maplibre-gl.css";
import "@/styles/globals.css";
import { generateMetadata } from "@/config/seo";
import { RestaurantSchema } from "@/components/seo/restaurant-schema";

export const metadata: Metadata = generateMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className="overflow-x-hidden bg-brand-cream font-body font-normal text-brand-black antialiased selection:bg-brand-red selection:text-white">
        <div className="pointer-events-none fixed inset-0 z-[100] noise-overlay opacity-[0.04]" />
        <RestaurantSchema />
        {children}
      </body>
    </html>
  );
}
