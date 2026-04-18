import Link from "next/link";
import Image from "next/image";
import { Mountain, Star, ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function DestinationsSection() {
    const featuredDestinations = destinations.slice(0, 6);

    return (
        <section className="py-12 bg-gray-50" aria-label="Popular trek destinations in India">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Popular Destinations
                    </h2>
                    <p className="text-sm text-gray-600 max-w-xl mx-auto">
                        Discover our most loved adventure destinations across India.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {featuredDestinations.map((destination, index) => (
                        <article
                            key={destination.id}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 animate-fade-in-up"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <div className="h-36 sm:h-40 relative bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center overflow-hidden">
                                {destination.image && destination.image.startsWith('http') ? (
                                    <Image
                                        src={destination.image}
                                        alt={`${destination.name} Trek – Trekking Tour in Maharashtra | Off Route Adventure`}
                                        fill
                                        loading={index < 2 ? "eager" : "lazy"}
                                        priority={index < 2}
                                        className={`object-cover ${destination.imagePosition || 'object-center'}`}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                ) : (
                                    <Mountain className="h-12 w-12 text-white/80" aria-hidden="true" />
                                )}
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-1.5">
                                    <h3 className="text-base font-bold text-gray-900">
                                        {destination.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-yellow-500" aria-label="Rating 4.8 out of 5">
                                        <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
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
                                        className="px-3 py-1.5 bg-green-600 text-white rounded-full text-xs font-medium hover:bg-green-700 transition-colors min-h-[36px] flex items-center"
                                        aria-label={`View details for ${destination.name} trek`}
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <Link
                        href="/plans"
                        className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all text-sm"
                    >
                        View All Plans
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
