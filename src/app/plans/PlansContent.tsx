"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mountain, Star, Clock, MapPin, ArrowRight } from "lucide-react";
import { Destination } from "@/data/destinations";

interface PlansContentProps {
  destinations: Destination[];
}

export default function PlansContent({ destinations }: PlansContentProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Day Trips", "Treks", "Multi-Day", "Camping"];

  const filteredDestinations = destinations.filter((dest) => {
    if (activeFilter === "All") return true;
    
    const duration = dest.duration.toLowerCase();
    
    if (activeFilter === "Day Trips") {
      return duration.includes("day trip") || duration.includes("day trek") || duration.includes("1 day");
    }
    if (activeFilter === "Treks") {
      return duration.includes("trek");
    }
    if (activeFilter === "Multi-Day") {
      return duration.includes("days") || duration.includes("nights");
    }
    if (activeFilter === "Camping") {
      return duration.includes("camping") || duration.includes("overnight");
    }
    
    return true;
  });

  return (
    <>
      {/* Filters */}
      <section className="py-5 bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-green-700 text-white shadow-sm"
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
      <section className="pt-16 pb-8 bg-gray-50 min-h-[50vh]">
        <div className="container mx-auto px-4">
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No packages found</h3>
              <p className="text-gray-500">We don&apos;t have any packages matching this filter right now.</p>
              <button 
                onClick={() => setActiveFilter("All")}
                className="mt-6 px-6 py-2 bg-green-700 text-white rounded-full font-medium hover:bg-green-700 transition"
              >
                View All Packages
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  {/* Image */}
                  <div className="h-44 bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center relative overflow-hidden">
                    {destination.image && destination.image.startsWith('http') ? (
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className={`object-cover ${destination.imagePosition || 'object-center'}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    ) : (
                      <Mountain className="h-14 w-14 text-white/60 group-hover:scale-110 transition-transform duration-300" />
                    )}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-white/95 rounded-full text-sm font-bold text-green-700 shadow z-10">
                      ₹{destination.price.toLocaleString()}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent z-10" />
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
                      href={`/treks/${destination.id}`}
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm text-center rounded-xl font-semibold hover:from-green-500 hover:to-emerald-500 transition-all group-hover:shadow-md group-hover:shadow-green-200"
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
