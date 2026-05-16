'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { AboutStory } from '@/components/sections/about-story';
import { FeaturedMenu } from '@/components/sections/featured-menu';
import { ReviewQuote } from '@/components/sections/review-quote';
import { ContactInfo } from '@/components/sections/contact-info';

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutStory />
      <FeaturedMenu />
      <ReviewQuote />
      <ContactInfo />
    </div>
  );
}

