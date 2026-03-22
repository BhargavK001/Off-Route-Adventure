import { Metadata } from "next";
import { MapPin, Mountain, Waves, TreePine, Castle, ArrowRight } from "lucide-react";
import { galleryImages } from "@/data/destinations";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

const BASE_URL = "https://www.offrouteadventure.in";

export const metadata: Metadata = {
  title: "Explore Destinations – Forts, Waterfalls & Mountains in Maharashtra",
  description:
    "Discover trekking destinations across Maharashtra — historic forts like Harishchandragad, Rajmachi, Lohagad, Sinhagad; waterfalls like Kalu & Dudhsagar; peaks like Kalsubai. Browse our gallery of 16+ adventure locations.",
  keywords: [
    "trekking destinations Maharashtra",
    "forts in Maharashtra trek",
    "Kalsubai trek",
    "Harishchandragad trek",
    "Rajmachi fort trek",
    "waterfalls Maharashtra",
    "mountains Maharashtra trekking",
    "weekend treks from Pune",
    "adventure destinations India",
    "Sahyadri Western Ghats treks",
  ],
  alternates: {
    canonical: `${BASE_URL}/explore`,
  },
  openGraph: {
    title: "Explore Trekking Destinations in Maharashtra | Off Route Adventure",
    description:
      "Browse 16+ handpicked adventure destinations — forts, waterfalls, mountains & lakes across Maharashtra. Harishchandragad, Kalsubai, Rajmachi & more.",
    url: `${BASE_URL}/explore`,
    images: [
      {
        url: `${BASE_URL}/Off-Route-Logo.png`,
        width: 800,
        height: 600,
        alt: "Trek Destinations in Maharashtra – Off Route Adventure",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Trekking Destinations in Maharashtra",
    description:
      "16+ destinations — forts, waterfalls, mountains & more. Harishchandragad, Kalsubai, Rajmachi. Browse now!",
  },
};

const categories = [
  { title: "Forts & History", count: 8, icon: <Castle className="h-6 w-6" /> },
  { title: "Waterfalls", count: 3, icon: <Waves className="h-6 w-6" /> },
  { title: "Mountains & Peaks", count: 4, icon: <Mountain className="h-6 w-6" /> },
  { title: "Lakes & Camping", count: 3, icon: <TreePine className="h-6 w-6" /> },
];

export default function ExplorePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Explore Destinations", href: "/explore" },
        ]}
      />
      <section className="py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6">
              🗺️ Discover India
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Explore Our{" "}
              <span className="text-green-300">Destinations</span>
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Discover the beauty of India through our handpicked adventure
              destinations. From ancient forts to pristine waterfalls.
            </p>
          </div>
        </div>
      </section>

      {/* Destination Categories */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-3">
              Browse by Category
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Adventure
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300"
              >
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-3 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">{category.title}</h3>
                <p className="text-gray-400 text-xs">{category.count} destinations</p>
                <div className="mt-3 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Places We&apos;ve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Explored
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Mountain className="h-16 w-16 text-white/50" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-white mb-1">
                    <MapPin className="h-4 w-4 text-green-300" />
                    <span className="font-semibold text-sm">{image.location}</span>
                  </div>
                  <p className="text-white/75 text-xs">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl shadow-green-200">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.1),_transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                View our complete list of tour packages and book your next adventure today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/plans"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 hover:scale-105 transition-all shadow-lg"
                >
                  View All Plans <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/25 hover:bg-white/20 transition-all"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
