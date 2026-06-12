import { NextResponse } from "next/server";

export async function GET() {
  try {
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_API_KEY;

    // If API credentials are not configured, return a custom code so client knows to use fallbacks
    if (!placeId || !apiKey) {
      return NextResponse.json({
        success: false,
        fallback: true,
        error: "Google API credentials not configured in environment variables.",
        reviews: []
      });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // Cache reviews locally for 24 hours to stay within the free tier
    });

    if (!res.ok) {
      throw new Error(`Google API returned status ${res.status}`);
    }

    const data = await res.json();

    if (data.status !== "OK") {
      throw new Error(`Google API status error: ${data.status} ${data.error_message || ""}`);
    }

    const rawReviews = data.result?.reviews || [];
    
    // Map Google reviews to format expected by UI
    const reviews = rawReviews.map((r: any) => ({
      name: r.author_name,
      rating: r.rating,
      feedback: r.text,
      destination: r.relative_time_description || "Google Review",
      profilePhoto: r.profile_photo_url || null,
    }));

    return NextResponse.json({
      success: true,
      reviews,
      rating: data.result?.rating,
      totalReviews: data.result?.user_ratings_total
    });
  } catch (error: any) {
    console.error("Google Reviews API Fetch Error:", error);
    
    // Fail gracefully by indicating a fallback should be used
    return NextResponse.json({
      success: false,
      fallback: true,
      error: error.message || "Failed to fetch reviews from Google API",
      reviews: []
    }, { status: 200 }); // Return status 200 with fallback indicator so client can handle it without crash
  }
}
