import { Metadata } from "next";
import { MapPin, Mountain } from "lucide-react";
import { galleryImages } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Explore stunning destinations across India - from historic forts to majestic waterfalls and serene mountains. View our gallery of adventure locations.",
};

export default function ExplorePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Our Destinations
            </h1>
            <p className="text-xl text-green-100">
              Discover the beauty of India through our handpicked adventure
              destinations. From ancient forts to pristine waterfalls.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] cursor-pointer"
              >
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Mountain className="h-16 w-16 text-white/60" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">{image.location}</span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Destination Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your type of adventure from our diverse range of destinations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Forts & History", count: 8, color: "from-amber-400 to-orange-500" },
              { title: "Waterfalls", count: 3, color: "from-blue-400 to-cyan-500" },
              { title: "Mountains & Peaks", count: 4, color: "from-green-400 to-emerald-500" },
              { title: "Lakes & Camping", count: 3, color: "from-purple-400 to-pink-500" },
            ].map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white`}
              >
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-white/80">{category.count} destinations</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            View our complete list of tour packages and book your next adventure
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/plans"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all"
            >
              View All Plans
            </a>
            <a
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
