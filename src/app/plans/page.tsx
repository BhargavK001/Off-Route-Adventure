import { Metadata } from "next";
import Image from "next/image";
import { destinations } from "@/data/destinations";
import { BreadcrumbSchema, TouristTripSchema } from "@/components/JsonLd";
import PlansContent from "./PlansContent";
import PlansExtraSections from "./PlansExtraSections";

const BASE_URL = "https://www.offrouteadventure.in";

export const metadata: Metadata = {
  title: "All Tour Packages – Trekking & Camping Packages from ₹799",
  description:
    "Browse all adventure tour packages by Off Route Adventure — day treks from ₹799, camping from ₹1,199, multi-day expeditions to Hampi, Manali, Dudhsagar & more. Affordable trekking packages in Maharashtra with experienced leaders.",
  keywords: [
    "trekking packages Maharashtra",
    "affordable trek packages Pune",
    "fort camping Maharashtra",
    "budget trekking packages",
    "overnight camping Maharashtra",
    "guided trekking tours Maharashtra",
    "Hampi tour package",
    "Manali tour package",
    "Dudhsagar trip",
    "weekend trek packages Pune Mumbai",
    "adventure tour packages India",
  ],
  alternates: {
    canonical: "/plans",
  },
  openGraph: {
    title: "All Tour Packages – Treks & Camping from ₹799 | Off Route Adventure",
    description:
      "Day treks from ₹799, camping from ₹1,199, multi-day trips to Hampi, Manali & Dudhsagar. Affordable Maharashtra trekking packages. Book now!",
    url: `${BASE_URL}/plans`,
    images: [
      {
        url: `${BASE_URL}/Off-Route-Logo.png`,
        width: 800,
        height: 600,
        alt: "Tour Packages – Off Route Adventure",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trekking & Camping Packages from ₹799",
    description:
      "Browse affordable treks, camping & multi-day tours in Maharashtra. 16+ destinations starting ₹799.",
  },
};

export default function PlansPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "All Tour Packages", href: "/plans" },
        ]}
      />
      {destinations.map((dest) => (
        <TouristTripSchema
          key={dest.id}
          name={dest.name}
          description={dest.description}
          price={dest.price}
          duration={dest.duration}
          highlights={dest.highlights}
        />
      ))}
      <section className="relative py-16 md:py-24 flex items-center justify-center text-white overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dlgjwovla/image/upload/v1774371185/IMG_20260319_234929_440_wlzryq.jpg"
            alt="Adventure Hero - Harishchandragad"
            fill
            className="object-cover object-center grayscale-[30%]"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(10,10,10,1) 100%)"
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 md:px-10 relative z-10 w-full flex flex-col items-center">
          <div className="max-w-4xl text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-black uppercase tracking-[0.3em] mb-6 backdrop-blur-md">
              🎒 Choose Your Adventure
            </span>
            <h1 
              className="font-black text-white leading-[0.85] tracking-tight mb-8"
              style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
            >
              Find Your Next <br />
              <span className="text-green-500 italic">Expedition.</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium mx-auto max-w-xl">
              Choose from our wide range of adventure packages. From budget-friendly
              day trips to premium multi-day trekking experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Grid (Client Side) */}
      <div id="packages">
        <PlansContent destinations={destinations} />
      </div>

      <PlansExtraSections />
    </>
  );
}
