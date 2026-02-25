import { Metadata } from "next";
import Link from "next/link";
import { Mountain, Star, Clock, MapPin, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import { BreadcrumbSchema, TouristTripSchema } from "@/components/JsonLd";

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
    canonical: `${BASE_URL}/plans`,
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

const included = [
  "Transportation (as mentioned in package)",
  "Experienced trek leader",
  "First aid support",
  "Meals (where applicable)",
  "Camping equipment (for camping trips)",
  "Entry fees and permits",
];

const notIncluded = [
  "Personal expenses",
  "Travel insurance",
  "Additional meals",
  "Tips and gratuities",
  "Personal trekking gear",
  "Anything not mentioned in inclusions",
];

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
      <section className="py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6">
              🎒 Choose Your Adventure
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              All Tour{" "}
              <span className="text-green-300">Packages</span>
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Choose from our wide range of adventure packages. From budget-friendly
              day trips to premium multi-day expeditions.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Day Trips", "Treks", "Multi-Day", "Camping"].map((filter, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="h-44 bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center relative overflow-hidden">
                  <Mountain className="h-14 w-14 text-white/60 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/95 rounded-full text-sm font-bold text-green-700 shadow">
                    ₹{destination.price.toLocaleString()}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-bold text-gray-900 leading-tight">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-0.5 text-yellow-500 flex-shrink-0 ml-2">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs text-gray-500 font-medium">4.8</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Maharashtra</span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {destination.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full font-medium border border-green-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/book?destination=${destination.id}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm text-center rounded-xl font-semibold hover:from-green-500 hover:to-emerald-500 transition-all group-hover:shadow-md group-hover:shadow-green-200"
                  >
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                What&apos;s Included in Our Packages
              </h2>
              <p className="text-gray-500">Everything you need for a safe and memorable adventure.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-100 p-6 rounded-2xl">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" /> Included
                </h3>
                <ul className="space-y-2.5">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" /> Not Included
                </h3>
                <ul className="space-y-2.5">
                  {notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-10 text-white text-center relative overflow-hidden shadow-xl shadow-green-200">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.1),_transparent_60%)]" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className="text-green-100 mb-6">
                We also offer custom packages for groups and corporate events. Contact us to plan your perfect adventure.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 hover:scale-105 transition-all shadow-lg"
              >
                Contact Us <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
