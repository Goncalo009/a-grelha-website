"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ExternalLink, MessageCircle, Phone, Quote, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { GoogleReview } from "@/lib/google-reviews";

const googleReviewsHref = siteConfig.links.googleReviews ?? siteConfig.links.maps;
const phoneHref = `tel:${siteConfig.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Olá A Grelha, quero encomendar takeaway para levantar no restaurante."
)}`;

type RatingSummary = {
  rating: string;
  total: string;
};

type ReviewsPayload = {
  configured: boolean;
  source: "google-business-profile" | "fallback";
  ratingSummary: RatingSummary | null;
  reviews: GoogleReview[];
  fetchedAt: string;
};

const initialReviewsData: ReviewsPayload = {
  configured: false,
  source: "fallback",
  ratingSummary: null,
  reviews: [],
  fetchedAt: new Date().toISOString(),
};

function GoogleMark({ large = false }: { large?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-white font-black shadow-[0_7px_18px_rgba(62,40,28,0.10)]",
        large ? "h-9 w-9 text-[1.55rem]" : "h-8 w-8 text-[1.22rem]"
      )}
      aria-hidden="true"
    >
      <span className="text-[#4285f4]">G</span>
    </span>
  );
}

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 text-brand-red", className)} aria-label={`${rating} em 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" size={13} className={cn("fill-current", index >= rating && "opacity-25")} />
      ))}
    </span>
  );
}

function GoogleSummaryPill({ compact = false, summary }: { compact?: boolean; summary: RatingSummary }) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full items-center rounded-[18px] border border-white/72 bg-white/88 shadow-[0_14px_36px_rgba(80,45,28,0.16)] backdrop-blur",
        compact ? "gap-2 px-3 py-2" : "max-w-[282px] gap-3 px-4 py-3"
      )}
    >
      <GoogleMark />
      <p className="text-[0.92rem] font-black tabular-nums text-brand-black">{summary.rating}</p>
      <Stars rating={5} className="[&_svg]:h-[11px] [&_svg]:w-[11px]" />
      <p className="ml-auto whitespace-nowrap text-[0.6rem] font-bold text-brand-black/82">{summary.total}</p>
    </div>
  );
}

function ReviewerAvatar({ review }: { review: GoogleReview }) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-base font-black text-white shadow-[0_8px_18px_rgba(58,32,20,0.18)]",
        review.avatarClass
      )}
      aria-hidden="true"
    >
      {review.initial}
    </span>
  );
}

function VerifiedReviewCard({ review, featured = false }: { review: GoogleReview; featured?: boolean }) {
  return (
    <article
      className={cn(
        "relative rounded-[18px] border border-white/72 bg-white/88 text-left shadow-[0_18px_48px_rgba(80,45,28,0.18)] backdrop-blur",
        featured ? "mx-auto w-full max-w-[292px] p-3 md:max-w-none" : "grid grid-cols-[1fr_86px] gap-3 p-3"
      )}
    >
      <Quote aria-hidden="true" size={featured ? 36 : 28} className="absolute right-4 top-6 fill-brand-brown/10 text-brand-brown/10" />
      <div className={cn(featured ? "" : "min-w-0")}>
        <div className="flex items-center gap-3">
          <ReviewerAvatar review={review} />
          <div className="min-w-0">
            <p className="truncate text-[0.88rem] font-black text-brand-black">{review.author}</p>
            <p className="mt-0.5 text-[0.64rem] font-semibold text-brand-brown/74">{review.age}</p>
          </div>
        </div>
        <Stars rating={review.rating} className="mt-3 [&_svg]:h-[12px] [&_svg]:w-[12px]" />
        <p className={cn("mt-3 font-semibold leading-[1.3] text-brand-black", featured ? "line-clamp-3 text-[clamp(0.78rem,3.7vw,0.9rem)]" : "line-clamp-2 text-[0.74rem]")}>
          “{review.text}”
        </p>
      </div>

      <div className={cn("relative overflow-hidden rounded-[13px] bg-brand-brown/10", featured ? "mt-3 h-[clamp(74px,13svh,106px)] md:h-[112px]" : "min-h-[70px]")}>
        <Image src={review.image} alt={review.alt} fill sizes={featured ? "290px" : "86px"} className="object-cover object-[50%_54%]" />
      </div>
    </article>
  );
}

function ConservativeReviewsBlock() {
  return (
    <section
      id="avaliacoes"
      className="ag-reviews-section relative isolate !justify-start overflow-hidden bg-[#f5eadc] px-0 py-0 text-center text-brand-black md:px-6 md:py-10"
      aria-labelledby="reviews-title"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/stitch/reviews/background.png')] bg-cover bg-[center_top]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,250,242,0.18)_0%,rgba(255,245,231,0.04)_45%,rgba(242,224,203,0.14)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[430px] flex-col justify-center px-4 pb-[clamp(1.35rem,3.2svh,1.8rem)] pt-[clamp(0.85rem,3.2svh,1.75rem)] md:max-w-[920px] md:px-0">
        <header className="mx-auto max-w-[340px] shrink-0">
          <p className="text-[clamp(0.58rem,2.55vw,0.66rem)] font-black uppercase tracking-[0.24em] text-brand-red">Avaliações</p>
          <h2 id="reviews-title" className="mt-1.5 text-balance font-headline text-[clamp(1.72rem,8.4vw,2.1rem)] font-bold leading-[0.9] tracking-[-0.06em] text-brand-black md:text-[clamp(3.8rem,6vw,6.4rem)]">
            Leia no perfil Google.
          </h2>
          <p className="mx-auto mt-3 max-w-[31ch] text-[clamp(0.78rem,3.55vw,0.92rem)] font-medium leading-[1.42] text-brand-black/84 md:text-base md:leading-6">
            Abrimos a fonte original para ver comentários, fotos, horários e direções no mesmo perfil. Não publicamos ratings ou testemunhos sem dados Google verificados.
          </p>
        </header>

        <div className="mx-auto mt-5 grid w-full max-w-[324px] gap-2 md:max-w-[520px] md:grid-cols-2">
          <a
            href={googleReviewsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[50px] items-center justify-center gap-4 rounded-full bg-brand-red px-5 text-[0.7rem] font-black uppercase tracking-[0.1em] text-white shadow-[0_14px_30px_rgba(198,69,44,0.30)] transition hover:bg-[#b73c20] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            <GoogleMark large />
            <span>Ver avaliações</span>
            <ExternalLink aria-hidden="true" size={15} />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full border border-brand-brown/18 bg-white/78 px-5 text-[0.7rem] font-black uppercase tracking-[0.09em] text-brand-black shadow-[0_8px_20px_rgba(80,45,28,0.08)] backdrop-blur transition hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            <MessageCircle aria-hidden="true" size={17} strokeWidth={1.7} />
            Pedir takeaway
          </a>
        </div>
      </div>
    </section>
  );
}

export function GoogleReviewsSection() {
  const [reviewsData, setReviewsData] = useState<ReviewsPayload>(initialReviewsData);

  useEffect(() => {
    let cancelled = false;

    async function loadGoogleReviews() {
      try {
        const response = await fetch("/api/google-reviews", {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as ReviewsPayload;

        if (!cancelled) {
          setReviewsData(payload);
        }
      } catch {
        // Keep the conservative Google-link block if verified Google Reviews are not configured.
      }
    }

    loadGoogleReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  const hasVerifiedReviews =
    reviewsData.source === "google-business-profile" &&
    Boolean(reviewsData.ratingSummary) &&
    reviewsData.reviews.length > 0;

  if (!hasVerifiedReviews || !reviewsData.ratingSummary) {
    return <ConservativeReviewsBlock />;
  }

  const [featuredReview, ...secondaryReviews] = reviewsData.reviews;

  return (
    <section
      id="avaliacoes"
      className="ag-reviews-section relative isolate !justify-start overflow-hidden bg-[#f5eadc] px-0 py-0 text-center text-brand-black md:px-6 md:py-10"
      aria-labelledby="reviews-title"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/stitch/reviews/background.png')] bg-cover bg-[center_top]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,250,242,0.18)_0%,rgba(255,245,231,0.04)_45%,rgba(242,224,203,0.14)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[430px] flex-col overflow-hidden px-4 pb-[clamp(1.35rem,3.2svh,1.8rem)] pt-[clamp(0.85rem,3.2svh,1.75rem)] md:max-w-[1180px] md:px-0 md:pb-0 md:pt-4">
        <header className="mx-auto max-w-[330px] shrink-0">
          <p className="text-[clamp(0.58rem,2.55vw,0.66rem)] font-black uppercase tracking-[0.24em] text-brand-red">Avaliações Google</p>
          <h2 id="reviews-title" className="mt-1.5 text-balance font-headline text-[clamp(1.72rem,8.4vw,2.1rem)] font-bold leading-[0.9] tracking-[-0.06em] text-brand-black md:text-[clamp(3.8rem,6vw,6.6rem)]">
            O que dizem no Google.
          </h2>
          <p className="mx-auto mt-2.5 max-w-[29ch] text-[clamp(0.74rem,3.55vw,0.86rem)] font-medium leading-[1.35] text-brand-black/84 md:text-base md:leading-6">
            Dados carregados a partir do perfil Google Business Profile.
          </p>
        </header>

        <div className="mt-[clamp(0.65rem,2.3svh,1.25rem)] shrink-0">
          <GoogleSummaryPill summary={reviewsData.ratingSummary} />
        </div>

        <div className="mt-[clamp(0.65rem,2.2svh,1rem)] min-h-0 flex-1 overflow-visible md:grid md:grid-cols-[0.86fr_1.14fr] md:gap-10">
          <div className="grid gap-4">
            <VerifiedReviewCard review={featuredReview} featured />
            <a
              href={googleReviewsHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-brand-red px-6 text-[0.68rem] font-black uppercase tracking-[0.1em] text-white shadow-[0_14px_30px_rgba(198,69,44,0.28)] transition hover:bg-[#b73c20]"
            >
              <GoogleMark large />
              Ver avaliações no Google
              <ExternalLink aria-hidden="true" size={15} />
            </a>
          </div>

          <div className="mt-3 grid gap-3 rounded-[28px] border border-white/70 bg-white/72 p-4 text-left shadow-[0_24px_70px_rgba(70,43,29,0.13)] backdrop-blur md:mt-0">
            <GoogleSummaryPill compact summary={reviewsData.ratingSummary} />
            {secondaryReviews.slice(0, 4).map((review) => (
              <VerifiedReviewCard key={`${review.author}-${review.age}`} review={review} />
            ))}
            <div className="grid grid-cols-2 gap-2">
              <a href={whatsappHref} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[12px] border border-brand-brown/10 bg-brand-cream px-3 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-brand-black">
                <MessageCircle aria-hidden="true" size={14} />
                WhatsApp
              </a>
              <a href={phoneHref} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[12px] border border-brand-brown/10 bg-brand-cream px-3 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-brand-black">
                <Phone aria-hidden="true" size={14} />
                Ligar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
