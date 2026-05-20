# Google Business Profile reviews integration

This project can import real Google reviews from the Google Business Profile API through the server-side route:

```txt
GET /api/google-reviews
```

The public React section never receives Google OAuth secrets. It only calls the local API route. If the Google integration is not configured, the section shows a conservative link to the public Google profile instead of publishing fallback ratings or invented testimonials.

## Google API used

Reviews are fetched from:

```http
GET https://mybusiness.googleapis.com/v4/{parent=accounts/*/locations/*}/reviews
```

Required OAuth scope:

```txt
https://www.googleapis.com/auth/business.manage
```

Google also documents the legacy-compatible scope:

```txt
https://www.googleapis.com/auth/plus.business.manage
```

The Business Profile location must be verified.

## Required environment variables

Create `.env.local` locally or configure the same secrets in the deployment platform:

```bash
GOOGLE_CLIENT_ID="...apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="..."
GOOGLE_REFRESH_TOKEN="..."

# Option A: full resource name, preferred
GOOGLE_BUSINESS_PROFILE_LOCATION_NAME="accounts/ACCOUNT_ID/locations/LOCATION_ID"

# Option B: if the full name is not set
GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID="ACCOUNT_ID"
GOOGLE_BUSINESS_PROFILE_LOCATION_ID="LOCATION_ID"

# Optional
GOOGLE_REVIEWS_PAGE_SIZE="10"
GOOGLE_REVIEWS_ORDER_BY="updateTime desc"
```

## Setup workflow

1. In Google Cloud Console, create or select a project for this website.
2. Enable the Google Business Profile APIs needed for Business Profile management/reviews.
3. Configure OAuth consent screen.
4. Create an OAuth 2.0 Client ID.
   - For manual refresh-token generation, a desktop app or web app OAuth client can be used.
5. Authorize the Google account that manages the restaurant's Google Business Profile with scope:

   ```txt
   https://www.googleapis.com/auth/business.manage
   ```

6. Exchange the authorization code for a refresh token and store it as `GOOGLE_REFRESH_TOKEN`.
7. Find the Business Profile account/location resource name and set `GOOGLE_BUSINESS_PROFILE_LOCATION_NAME`.
8. Test locally:

   ```bash
   npm run dev
   curl http://127.0.0.1:3000/api/google-reviews
   ```

## Expected API response shape

```json
{
  "configured": true,
  "source": "google-business-profile",
  "ratingSummary": {
    "rating": "4,8",
    "total": "avaliações Google"
  },
  "reviews": [
    {
      "author": "Cliente Google",
      "initial": "C",
      "rating": 5,
      "age": "há 2 semanas",
      "text": "Texto real da review...",
      "image": "/stitch/home/hero.jpg",
      "alt": "Grelhado no carvão servido na A Grelha",
      "avatarClass": "from-[#f0763d] to-[#b8291e]"
    }
  ],
  "fetchedAt": "2026-05-19T00:00:00.000Z"
}
```

## Notes

- Google reviews can include reviewer metadata, rating, comment, creation/update time and review replies. The current UI uses only name, initial, rating, age and comment.
- The homepage keeps local food photography for visual consistency because Google review data does not guarantee useful food images per review.
- Do not publish fallback rating summaries, fake reviewer names, or placeholder review counts. Keep the Google-link block until the API returns verified data.
- The route returns HTTP 200 with fallback metadata when credentials are missing or Google is temporarily unavailable. This prevents homepage rendering failures.
- Do not commit `.env.local` or OAuth tokens.
