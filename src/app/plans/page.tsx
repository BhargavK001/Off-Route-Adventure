import { Metadata } from "next";
import Link from "next/link";
import { Mountain, Star, Clock, MapPin } from "lucide-react";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "All Plans",
  description:
    "View all our adventure tour packages - from day trips to multi-day expeditions. Affordable treks, camping, and travel experiences across India.",
};

export default function PlansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              All Tour Packages
            </h1>
            <p className="text-xl text-green-100">
              Choose from our wide range of adventure packages. From budget-friendly
              day trips to premium multi-day expeditions.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-green-600 text-white rounded-full font-medium">
              All
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Day Trips
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Treks
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Multi-Day
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Camping
            </button>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                {/* Image Placeholder */}
                <div className="h-44 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative">
                  <Mountain className="h-14 w-14 text-white/70" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 rounded-full text-sm font-semibold text-green-600">
                    ₹{destination.price.toLocaleString()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Maharashtra</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/book?destination=${destination.id}`}
                    className="block w-full py-2.5 bg-green-600 text-white text-center rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What&apos;s Included in Our Packages
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">
                  ✓ Included
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Transportation (as mentioned in package)</li>
                  <li>• Experienced trek leader</li>
                  <li>• First aid support</li>
                  <li>• Meals (where applicable)</li>
                  <li>• Camping equipment (for camping trips)</li>
                  <li>• Entry fees and permits</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">
                  ✗ Not Included
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Personal expenses</li>
                  <li>• Travel insurance</li>
                  <li>• Additional meals</li>
                  <li>• Tips and gratuities</li>
                  <li>• Personal trekking gear</li>
                  <li>• Anything not mentioned in inclusions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            We also offer custom packages for groups and corporate events.
            Contact us to plan your perfect adventure.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
