# Google Business Profile Reviews Integration

## Goal
Integrate a dynamic Google Business Profile review system. Allow users to leave reviews on Google directly from the site (via redirect) and display genuine Google reviews dynamically on the website with a robust fallback to local testimonials if API keys are not configured.

## Tasks
- [x] Task 1: Update `src/lib/constants.ts` to add Google place ID and review link constants → Verify: Properties are exported in `COMPANY_INFO`.
- [x] Task 2: Create a Next.js API route `src/app/api/reviews/route.ts` that fetches reviews from Google Places API and caches them for 24 hours → Verify: Local HTTP request returns reviews JSON.
- [x] Task 3: Modify `src/app/contact/page.tsx` to fetch reviews from `/api/reviews` on client-side, with loading state and seamless fallback to static testimonials → Verify: Component renders reviews.
- [x] Task 4: Add a prominent "Write a Google Review" button in `src/app/contact/page.tsx` and a prompt modal/banner upon local form submission success → Verify: Button redirects correctly and prompt triggers.
- [x] Task 5: Run visual and accessibility checks on the updated contact page → Verify: Audit script succeeds or reviews display is aesthetic.

## Done When
- [x] Users can click a button to write reviews directly on Google Maps.
- [x] Genuine Google reviews are fetched dynamically via an API route (when configured) and rendered on the contact page.
- [x] The system seamlessly falls back to static testimonials when no keys are present.
