import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedMenu } from "@/components/sections/featured-menu";
import { GoogleReviewsSection } from "@/components/sections/google-reviews-section";
import { ContactInfo } from "@/components/sections/contact-info";
import { HomeSnapController } from "@/components/sections/home-snap-controller";
import { generateMetadata } from "@/config/seo";

export const metadata: Metadata = generateMetadata({
  title: "A Grelha — Churrasqueira e takeaway em Samora Correia",
  description:
    "Frango no churrasco, grelhados no carvão e takeaway em Samora Correia. Veja a ementa, ligue para confirmar disponibilidade e combine a hora de levantamento.",
  path: "/",
});

export default function HomePage() {
  return (
    <main id="conteudo" className="home-mobile-snap relative bg-brand-cream">
      <HeroSection />
      <FeaturedMenu />
      <GoogleReviewsSection />
      <ContactInfo />
      <HomeSnapController />
    </main>
  );
}
