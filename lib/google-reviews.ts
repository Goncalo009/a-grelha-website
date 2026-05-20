export type GoogleReview = {
  author: string;
  initial: string;
  rating: number;
  age: string;
  text: string;
  image: string;
  alt: string;
  avatarClass: string;
};

export type GoogleReviewsPayload = {
  configured: boolean;
  source: "google-business-profile" | "fallback";
  ratingSummary: {
    rating: string;
    total: string;
  };
  reviews: GoogleReview[];
  fetchedAt: string;
};

type GoogleTokenResponse = {
  access_token?: string;
  expires_in?: number;
  token_type?: string;
  error?: string;
  error_description?: string;
};

type GoogleReviewApiItem = {
  name?: string;
  reviewId?: string;
  reviewer?: {
    profilePhotoUrl?: string;
    displayName?: string;
    isAnonymous?: boolean;
  };
  starRating?: string;
  comment?: string;
  createTime?: string;
  updateTime?: string;
};

type GoogleReviewsApiResponse = {
  reviews?: GoogleReviewApiItem[];
  averageRating?: number;
  totalReviewCount?: number;
  nextPageToken?: string;
};

const reviewImages = [
  { image: "/stitch/home/hero.jpg", alt: "Grelhado no carvão servido na A Grelha" },
  { image: "/stitch/home/fire-wings.jpg", alt: "Carne na grelha com chama" },
  { image: "/stitch/home/whole-bird.jpg", alt: "Frango assado no churrasco" },
  { image: "/stitch/contactos/polaroid.jpg", alt: "Takeaway da A Grelha" },
];

const avatarClasses = [
  "from-[#f0763d] to-[#b8291e]",
  "from-[#f4a261] to-[#c6452c]",
  "from-[#8a6d5d] to-[#51413a]",
  "from-[#d8a43c] to-[#c6452c]",
];

function getBusinessProfileLocationName() {
  const explicitName = process.env.GOOGLE_BUSINESS_PROFILE_LOCATION_NAME?.trim();

  if (explicitName) {
    return explicitName;
  }

  const accountId = process.env.GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID?.trim();
  const locationId = process.env.GOOGLE_BUSINESS_PROFILE_LOCATION_ID?.trim();

  if (!accountId || !locationId) {
    return null;
  }

  return `accounts/${accountId}/locations/${locationId}`;
}

export function hasGoogleReviewsConfig() {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID?.trim() &&
      process.env.GOOGLE_CLIENT_SECRET?.trim() &&
      process.env.GOOGLE_REFRESH_TOKEN?.trim() &&
      getBusinessProfileLocationName()
  );
}

function starRatingToNumber(starRating?: string) {
  switch (starRating) {
    case "FIVE":
      return 5;
    case "FOUR":
      return 4;
    case "THREE":
      return 3;
    case "TWO":
      return 2;
    case "ONE":
      return 1;
    default:
      return 0;
  }
}

function getInitial(name: string) {
  return name.trim().charAt(0).toUpperCase() || "G";
}

function formatRelativeAge(dateValue?: string) {
  if (!dateValue) {
    return "recentemente";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "recentemente";
  }

  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.max(0, Math.floor(diffMs / 86_400_000));

  if (diffDays === 0) {
    return "hoje";
  }

  if (diffDays === 1) {
    return "há 1 dia";
  }

  if (diffDays < 7) {
    return `há ${diffDays} dias`;
  }

  const diffWeeks = Math.floor(diffDays / 7);

  if (diffWeeks === 1) {
    return "há 1 semana";
  }

  if (diffWeeks < 5) {
    return `há ${diffWeeks} semanas`;
  }

  const diffMonths = Math.floor(diffDays / 30);

  if (diffMonths <= 1) {
    return "há 1 mês";
  }

  if (diffMonths < 12) {
    return `há ${diffMonths} meses`;
  }

  const diffYears = Math.floor(diffDays / 365);

  if (diffYears <= 1) {
    return "há 1 ano";
  }

  return `há ${diffYears} anos`;
}

async function getAccessToken() {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID ?? "",
      client_secret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN ?? "",
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  const payload = (await response.json()) as GoogleTokenResponse;

  if (!response.ok || !payload.access_token) {
    throw new Error(payload.error_description || payload.error || "Could not refresh Google access token");
  }

  return payload.access_token;
}

function normalizeReviews(payload: GoogleReviewsApiResponse): GoogleReviewsPayload {
  const reviews = (payload.reviews ?? [])
    .filter((review) => review.comment?.trim())
    .slice(0, 8)
    .map((review, index) => {
      const author = review.reviewer?.displayName?.trim() || "Cliente Google";
      const image = reviewImages[index % reviewImages.length];

      return {
        author,
        initial: getInitial(author),
        rating: starRatingToNumber(review.starRating),
        age: formatRelativeAge(review.updateTime ?? review.createTime),
        text: review.comment?.trim() || "Avaliação positiva no Google.",
        image: image.image,
        alt: image.alt,
        avatarClass: avatarClasses[index % avatarClasses.length],
      };
    });

  return {
    configured: true,
    source: "google-business-profile",
    ratingSummary: {
      rating: typeof payload.averageRating === "number" ? payload.averageRating.toFixed(1).replace(".", ",") : "—",
      total: typeof payload.totalReviewCount === "number" ? `${payload.totalReviewCount} avaliações` : "avaliações Google",
    },
    reviews,
    fetchedAt: new Date().toISOString(),
  };
}

export async function fetchGoogleBusinessProfileReviews() {
  const locationName = getBusinessProfileLocationName();

  if (!hasGoogleReviewsConfig() || !locationName) {
    return null;
  }

  const accessToken = await getAccessToken();
  const url = new URL(`https://mybusiness.googleapis.com/v4/${locationName}/reviews`);
  url.searchParams.set("pageSize", process.env.GOOGLE_REVIEWS_PAGE_SIZE ?? "10");
  url.searchParams.set("orderBy", process.env.GOOGLE_REVIEWS_ORDER_BY ?? "updateTime desc");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  });

  const payload = (await response.json()) as GoogleReviewsApiResponse & { error?: { message?: string } };

  if (!response.ok) {
    throw new Error(payload.error?.message || "Could not fetch Google Business Profile reviews");
  }

  return normalizeReviews(payload);
}
