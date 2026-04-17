import Link from "next/link";
import Image from "next/image";
import { Mountain, Star, ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function DestinationsSection() {
    const featuredDestinations = destinations.slice(0, 6);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Popular Destinations
                    </h2>
                    <p className="text-sm text-gray-600 max-w-xl mx-auto">
                        Discover our most loved adventure destinations across India.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {featuredDestinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
                        >
                            <div className="h-40 relative bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center overflow-hidden">
                                {destination.image && destination.image.startsWith('http') ? (
                                    <Image
                                        src={destination.image}
                                        alt={`${destination.name} Trek – Adventure Tour in Maharashtra | Off Route Adventure`}
                                        fill
                                        priority={featuredDestinations.indexOf(destination) < 2}
                                        className={`object-cover ${destination.imagePosition || 'object-center'}`}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                ) : (
                                    <Mountain className="h-12 w-12 text-white/80" />
                                )}
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-1.5">
                                    <h3 className="text-base font-bold text-gray-900">
                                        {destination.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star className="h-3.5 w-3.5 fill-current" />
                                        <span className="text-xs text-gray-600">4.8</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                                    {destination.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-lg font-bold text-green-600">
                                            ₹{destination.price.toLocaleString()}
                                        </span>
                                        <span className="text-gray-500 text-xs ml-1">
                                            / {destination.duration}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/treks/${destination.id}`}
                                        className="px-3 py-1.5 bg-green-600 text-white rounded-full text-xs font-medium hover:bg-green-700 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link
                        href="/plans"
                        className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all text-sm"
                    >
                        View All Plans
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
