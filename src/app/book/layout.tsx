import { Metadata } from "next";

const BASE_URL = "https://www.offrouteadventure.in";

export const metadata: Metadata = {
    title: "Book Your Adventure – Trek & Tour Booking",
    description:
        "Book your next trek, camping, or adventure tour with Off Route Adventure. Easy online booking for Harishchandragad, Kalsubai, Rajmachi, Pawna Lake & 16+ destinations across Maharashtra. Safe, affordable & guided treks.",
    keywords: [
        "book trek Maharashtra",
        "trek booking online India",
        "book adventure trip Pune",
        "trek reservation Maharashtra",
        "book camping trip Pune",
        "online trekking booking",
    ],
    alternates: {
        canonical: `${BASE_URL}/book`,
    },
    openGraph: {
        title: "Book Your Adventure – Off Route Adventure",
        description:
            "Easy online booking for treks, camping & tours across Maharashtra. 16+ destinations. Book now!",
        url: `${BASE_URL}/book`,
        images: [
            {
                url: `${BASE_URL}/Off-Route-Logo.png`,
                width: 800,
                height: 600,
                alt: "Book Trek – Off Route Adventure",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Book Your Trek – Off Route Adventure",
        description:
            "Book treks, camping & adventure tours. 16+ destinations starting ₹799.",
    },
};

export default function BookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
