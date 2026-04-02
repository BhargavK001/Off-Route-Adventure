import { Metadata } from "next";
import { MapPin, Mountain, Waves, TreePine, Castle, ArrowRight, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { getAllDestinationGalleries, type DestinationGallery } from "@/lib/cloudinary";
import InteractiveGallery from "@/components/explore/InteractiveGallery";

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
    canonical: "/explore",
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
  { title: "Forts & History", count: 8, icon: <Castle className="h-7 w-7" />, color: "text-amber-500", bg: "bg-amber-50" },
  { title: "Waterfalls", count: 3, icon: <Waves className="h-7 w-7" />, color: "text-blue-500", bg: "bg-blue-50" },
  { title: "Mountains & Peaks", count: 4, icon: <Mountain className="h-7 w-7" />, color: "text-green-600", bg: "bg-green-50" },
  { title: "Lakes & Camping", count: 3, icon: <TreePine className="h-7 w-7" />, color: "text-purple-500", bg: "bg-purple-50" },
];

export default async function ExplorePage() {
  let galleries: DestinationGallery[] = [];

  try {
    galleries = await getAllDestinationGalleries();
    console.log("[EXPLORE] Fetched galleries:", galleries.length, "destinations, images per gallery:", galleries.map(g => `${g.folderName}:${g.images.length}`));
  } catch (error) {
    console.error("[EXPLORE] Failed to fetch galleries:", error);
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Explore Destinations", href: "/explore" },
        ]}
      />
      <section className="relative pt-12 pb-4 md:pt-16 md:pb-6 overflow-hidden bg-gradient-to-b from-green-50/50 to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">

            {/* Left Hand Text */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-100 shadow-sm text-green-700 text-sm font-bold mx-auto lg:mx-0 tracking-wide">
                <MapPin className="h-4 w-4" />
                <span>Maharashtra's Best Kept Secrets</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Every Trail Tells A <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                  Different Story.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Discover the beauty of India through our handpicked adventure
                destinations. From ancient forts towering in the clouds to pristine waterfalls hidden deep in the forest.
              </p>
            </div>

            {/* Right Hand Image Collage */}
            <div className="relative h-[350px] md:h-[450px] lg:h-[550px] w-full hidden sm:block">
              {(() => {
                const heroImages = galleries.flatMap(g => g.images).slice(0, 3).map(img => img.public_id);
                if (heroImages.length < 3) return null; // Fallback if no images

                return (
                  <>
                    {/* Image 1 - Main Center */}
                    <div className="absolute right-[5%] top-[10%] w-[55%] h-[65%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white transform hover:rotate-2 hover:scale-[1.02] transition-all duration-500">
                      <Image src={`https://res.cloudinary.com/dlgjwovla/image/upload/c_fill,f_auto,g_auto,q_auto,w_800/${heroImages[0]}`} alt="Destination 1" fill className="object-cover" priority sizes="(max-width: 1024px) 50vw, 33vw" />
                    </div>
                    {/* Image 2 - Top Left */}
                    <div className="absolute left-[5%] top-0 w-[45%] h-[55%] rounded-3xl overflow-hidden shadow-lg z-10 opacity-95 border-4 border-white transform -rotate-6 hover:rotate-0 hover:z-30 transition-all duration-500">
                      <Image src={`https://res.cloudinary.com/dlgjwovla/image/upload/c_fill,f_auto,g_auto,q_auto,w_800/${heroImages[1]}`} alt="Destination 2" fill className="object-cover" sizes="(max-width: 1024px) 33vw, 25vw" />
                    </div>
                    {/* Image 3 - Bottom Left */}
                    <div className="absolute left-[15%] bottom-[5%] w-[50%] h-[55%] rounded-3xl overflow-hidden shadow-xl z-30 border-4 border-white transform rotate-3 hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
                      <Image src={`https://res.cloudinary.com/dlgjwovla/image/upload/c_fill,f_auto,g_auto,q_auto,w_800/${heroImages[2]}`} alt="Destination 3" fill className="object-cover" sizes="(max-width: 1024px) 33vw, 25vw" />
                    </div>
                  </>
                );
              })()}
              {/* Decorative BG element */}
              <div className="absolute right-[20%] bottom-[20%] w-40 h-40 bg-emerald-200 rounded-full blur-[80px] -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* Destination Categories */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-950 tracking-tight mb-3">Browse by Category</h2>
              <p className="text-gray-500">Find the perfect terrain for your next adventure.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 cursor-pointer shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${category.bg} ${category.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="scale-75 md:scale-100 flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-950 mb-1 leading-tight">{category.title}</h3>
                <p className="text-gray-500 text-[11px] sm:text-xs md:text-sm font-medium">{category.count} destinations</p>

                <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Cloudinary Images */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100/50 border border-green-200 text-green-700 text-sm font-semibold mb-4">
              Real Shots, Real Adventure
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Places We&apos;ve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Explored
              </span>
            </h2>
          </div>

          {galleries.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <Mountain className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg">Gallery loading... Check back soon!</p>
            </div>
          ) : (
            <InteractiveGallery galleries={galleries} />
          )}
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
