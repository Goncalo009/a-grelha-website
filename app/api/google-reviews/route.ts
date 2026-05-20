import { NextResponse } from "next/server";
import { fetchGoogleBusinessProfileReviews, hasGoogleReviewsConfig } from "@/lib/google-reviews";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function GET() {
  if (!hasGoogleReviewsConfig()) {
    return NextResponse.json(
      {
        configured: false,
        source: "fallback",
        ratingSummary: null,
        reviews: [],
        fetchedAt: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
        },
      }
    );
  }

  try {
    const payload = await fetchGoogleBusinessProfileReviews();

    return NextResponse.json(payload, {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Failed to fetch Google Business Profile reviews", error);

    return NextResponse.json(
      {
        configured: true,
        source: "fallback",
        ratingSummary: null,
        reviews: [],
        fetchedAt: new Date().toISOString(),
        error: "Google reviews temporarily unavailable",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
        },
      }
    );
  }
}
