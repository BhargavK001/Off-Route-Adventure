import { COMPANY_INFO } from "@/lib/constants";

const BASE_URL = "https://www.offrouteadventure.in";

function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Off Route Adventure",
        alternateName: "Off Route Adventure – Beyond the Map, Into the Wild",
        url: BASE_URL,
        logo: `${BASE_URL}/Off-Route-Logo.png`,
        image: `${BASE_URL}/Off-Route-Logo.png`,
        description:
            "Off Route Adventure is a leading trekking and adventure tour company based in Pune, Maharashtra. We offer safe, exciting, and affordable treks, camping, and travel experiences across India.",
        foundingLocation: {
            "@type": "Place",
            name: "Pune, Maharashtra, India",
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: `+91-${COMPANY_INFO.phone}`,
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Marathi"],
            },
        ],
        sameAs: [COMPANY_INFO.instagram],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Off Route Adventure",
        image: `${BASE_URL}/Off-Route-Logo.png`,
        url: BASE_URL,
        telephone: `+91-${COMPANY_INFO.phone}`,
        email: COMPANY_INFO.email,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 18.5204,
            longitude: 73.8567,
        },
        priceRange: "₹799 - ₹9999",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "500",
            bestRating: "5",
            worstRating: "1",
        },
        areaServed: [
            {
                "@type": "State",
                name: "Maharashtra",
            },
            {
                "@type": "Country",
                name: "India",
            },
        ],
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "08:00",
            closes: "22:00",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Adventure Tour Packages",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "TouristTrip",
                        name: "Trekking Tours",
                        description: "Guided treks to forts, mountains, and waterfalls across Maharashtra and India",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "TouristTrip",
                        name: "Camping Experiences",
                        description: "Overnight lakeside camping with bonfire and BBQ",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "TouristTrip",
                        name: "Corporate Retreats",
                        description: "Customized team building adventures and nature retreats",
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

function WebSiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Off Route Adventure",
        alternateName: "Off Route Adventure – Beyond the Map, Into the Wild",
        url: BASE_URL,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${BASE_URL}/plans?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
        publisher: {
            "@type": "Organization",
            name: "Off Route Adventure",
            logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/Off-Route-Logo.png`,
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface BreadcrumbItem {
    name: string;
    href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${BASE_URL}${item.href}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function FAQSchema({
    faqs,
}: {
    faqs: { question: string; answer: string }[];
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function TouristTripSchema({
    name,
    description,
    price,
    duration,
    highlights,
}: {
    name: string;
    description: string;
    price: number;
    duration: string;
    highlights: string[];
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name,
        description,
        touristType: "Adventure",
        offers: {
            "@type": "Offer",
            price: price.toString(),
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "Off Route Adventure",
            },
        },
        duration,
        itinerary: {
            "@type": "ItemList",
            itemListElement: highlights.map((h, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: h,
            })),
        },
        provider: {
            "@type": "TravelAgency",
            name: "Off Route Adventure",
            url: BASE_URL,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function GlobalJsonLd() {
    return (
        <>
            <OrganizationSchema />
            <LocalBusinessSchema />
            <WebSiteSchema />
            <ReviewSchema />
            <SpeakableSchema />
        </>
    );
}

function ReviewSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Off Route Adventure",
        url: BASE_URL,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "500",
            bestRating: "5",
            worstRating: "1",
        },
        review: [
            {
                "@type": "Review",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                },
                author: { "@type": "Person", name: "Priya Sharma" },
                reviewBody:
                    "Absolutely loved the Harishchandragad trek with Off Route Adventure! The guides were professional, the group was friendly, and the experience was unforgettable. Best trekking group in Pune!",
                datePublished: "2025-02-10",
            },
            {
                "@type": "Review",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                },
                author: { "@type": "Person", name: "Rahul Patil" },
                reviewBody:
                    "Off Route Adventure is hands down the most trusted trek organizer near Mumbai. Amazing Kalsubai trek experience — very affordable and safe for beginners!",
                datePublished: "2025-03-15",
            },
            {
                "@type": "Review",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                },
                author: { "@type": "Person", name: "Sneha Kulkarni" },
                reviewBody:
                    "Incredible Andharban jungle trek. Off Route Adventure made it so easy to book, the price was unbeatable, and the forest experience was truly off the beaten path!",
                datePublished: "2025-04-02",
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

function SpeakableSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Off Route Adventure – Trekking in Maharashtra | Adventure Tours India",
        url: BASE_URL,
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", "h2", ".speakable"],
        },
        description:
            "Off Route Adventure offers safe, trusted & affordable trekking tours in Maharashtra. Explore authentic offbeat forts, low-budget weekend trips from Pune & Mumbai.",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

