import { Metadata } from "next";

const BASE_URL = "https://www.offrouteadventure.in";

export const metadata: Metadata = {
    title: "Contact Us – Get in Touch with Off Route Adventure",
    description:
        "Contact Off Route Adventure for trek bookings, group tours, corporate retreats, or any queries. Based in Pune, Maharashtra. Call +91 92704 28541 or send us a message. We respond within 24 hours.",
    keywords: [
        "contact trekking company Pune",
        "trekking organizer near me Pune",
        "Off Route Adventure contact",
        "adventure tour enquiry Maharashtra",
        "corporate retreat booking Pune",
        "trekking group booking Maharashtra",
    ],
    alternates: {
        canonical: `${BASE_URL}/contact`,
    },
    openGraph: {
        title: "Contact Off Route Adventure – Pune, Maharashtra",
        description:
            "Get in touch for trek bookings, group tours & corporate retreats. Call +91 92704 28541 or message us.",
        url: `${BASE_URL}/contact`,
        images: [
            {
                url: `${BASE_URL}/Off-Route-Logo.png`,
                width: 800,
                height: 600,
                alt: "Contact Off Route Adventure",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Off Route Adventure – Pune",
        description:
            "Trek bookings, group tours & corporate retreats. Call +91 92704 28541 or message us.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
