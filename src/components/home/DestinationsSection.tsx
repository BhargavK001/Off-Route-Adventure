import Link from "next/link";
import { Mountain, Star, ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function DestinationsSection() {
    const featuredDestinations = destinations.slice(0, 6);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Popular Destinations
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our most loved adventure destinations across India.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredDestinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                <Mountain className="h-16 w-16 text-white/80" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {destination.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star className="h-4 w-4 fill-current" />
                                        <span className="text-sm text-gray-600">4.8</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {destination.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-green-600">
                                            ₹{destination.price.toLocaleString()}
                                        </span>
                                        <span className="text-gray-500 text-sm ml-1">
                                            / {destination.duration}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/treks/${destination.id}`}
                                        className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/plans"
                        className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all"
                    >
                        View All Plans
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
