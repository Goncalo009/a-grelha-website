import type { Metadata } from "next";
import { HeroSection } from '@/components/sections/hero-section';
import { AboutStory } from '@/components/sections/about-story';
import { FeaturedMenu } from '@/components/sections/featured-menu';
import { ReviewQuote } from '@/components/sections/review-quote';
import { ContactInfo } from '@/components/sections/contact-info';
import { generateMetadata } from "@/config/seo";

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Churrasqueira no Porto Alto",
});

export default function HomePage() {
  return (
    <main id="conteudo" className="relative">
      <HeroSection />
      <AboutStory />
      <FeaturedMenu />
      <ReviewQuote />
      <ContactInfo />
    </main>
  );
}
