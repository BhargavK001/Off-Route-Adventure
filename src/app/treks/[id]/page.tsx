import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, IndianRupee, Mountain, ArrowRight, CheckCircle } from "lucide-react";
import { destinations } from "@/data/destinations";
import { BreadcrumbSchema, TouristTripSchema } from "@/components/JsonLd";

const BASE_URL = "https://www.offrouteadventure.in";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const trek = destinations.find((d) => d.id === resolvedParams.id);

    if (!trek) return { title: "Trek Not Found" };

    let customTitle = `${trek.name} Package – ${trek.duration} | Off Route Adventure`;
    let customDesc = trek.description;
    let customKeywords: string[] = [];

    if (trek.id === "vasota") {
        customTitle = "Vasota Trek & Camping 2026 | Trusted Junkle Safari | Off Route Adventure";
        customDesc = "Experience the thrilling Vasota trek and lakeside camping in 2025-2026. Book your authentic Bamnoli Vasota jungle trek. Safe, guided, and budget-friendly.";
        customKeywords = ["Vasota trek 2026", "cheap Vasota trek", "authentic Vasota experience", "trusted trekker Pune", "Vasota jungle safari"];
    } else if (trek.id === "kalsubai") {
        customTitle = "Kalsubai Trek 2026 – Highest Peak in Maharashtra | Off Route Adventure";
        customDesc = "Conquer Kalsubai in 2026. Book your trusted Kalsubai day or night trek. Authentic Sahyadri experience with expert guides at low-budget prices.";
        customKeywords = ["Kalsubai Trek 2026", "cheap Kalsubai trek", "highest peak Maharashtra 2026", "trusted trekking group", "authentic kalsubai trek"];
    } else if (trek.id === "andharban") {
        customTitle = "Andharban Jungle Trek 2026 | Authentic Dark Forest | Off Route Adventure";
        customDesc = "Walk through the dense dark forests of Andharban in 2026. Best low-budget monsoon trek in Maharashtra. Your trusted partner for authentic Sahyadri treks.";
        customKeywords = ["Andharban trek 2026", "cheap Andharban trek", "authentic forest trek", "trusted adventure planner", "Andharban 2026"];
    } else if (trek.id === "harishchandragad") {
        customTitle = "Harishchandragad Trek 2026 | Trusted Camping | Off Route Adventure";
        customDesc = "Trek to Harishchandragad in 2026. Witness Konkan Kada with an authentic and trusted trekking group. Affordable and safe weekend adventures.";
        customKeywords = ["Harishchandragad 2026", "cheap Harishchandragad trek", "authentic Konkan Kada", "trusted camping group"];
    } else if (trek.id === "rajmachi") {
        customTitle = "Rajmachi Fort Trek 2026 | Cheap & Authentic | Off Route Adventure";
        customDesc = "Explore Rajmachi in 2026. Night trekking and lakeside camping with a trusted trip planner. Low-budget and authentic Sahyadri experience.";
        customKeywords = ["Rajmachi 2026", "cheap Rajmachi trek", "authentic Rajmachi camping", "trusted trek group Mumbai"];
    } else {
        customKeywords = [
            `${trek.name} trek 2026`,
            `${trek.name} low budget`,
            `cheap trekking ${trek.name}`,
            `authentic ${trek.name} experience`,
            `trusted trip planner ${trek.name}`,
        ];
    }

    return {
        title: customTitle,
        description: customDesc,
        keywords: customKeywords,
        alternates: {
            canonical: `/treks/${trek.id}`,
        },
        openGraph: {
            title: customTitle,
            description: customDesc,
            url: `${BASE_URL}/treks/${trek.id}`,
            images: [
                {
                    url: `${BASE_URL}${trek.image}`,
                    width: 1200,
                    height: 630,
                    alt: trek.name,
                },
            ],
            type: "website",
        },
    };
}

// Generate static params for all destinations
export async function generateStaticParams() {
    return destinations.map((dest) => ({
        id: dest.id,
    }));
}

export default async function TrekPage({ params }: PageProps) {
    const resolvedParams = await params;
    const trek = destinations.find((d) => d.id === resolvedParams.id);

    if (!trek) {
        notFound();
    }

    // Pre-configured FAQs for GEO
    const defaultFaqs = [
        {
            question: `Is the ${trek.name} trek safe for beginners?`,
            answer: `Yes, our guided ${trek.name} trek is safe. We provide experienced trek leaders, first aid support, and ensure all safety protocols are followed.`,
        },
        {
            question: `What should I pack for the ${trek.name} adventure?`,
            answer: "We recommend comfortable trekking shoes, a water bottle (minimum 2L), personal medications, comfortable clothing, and a light jacket.",
        },
        {
            question: `How do I book the ${trek.name} package?`,
            answer: "You can book directly through our website by clicking the 'Book Now' button and filling out the registration form. Our team will contact you to confirm.",
        }
    ];

    if (trek.id === 'vasota') {
        defaultFaqs.push({
            question: "What is the difficulty level of the Vasota Trek?",
            answer: "The Vasota Trek is considered moderate. It is a scenic jungle trek through the Koyna Wildlife Sanctuary followed by a climb to the fort, manageable by beginners with basic fitness."
        });
    }

    if (trek.id === 'kalsubai') {
        defaultFaqs.push({
            question: "Which is the highest peak in Maharashtra?",
            answer: "Kalsubai is the highest peak in Maharashtra, standing at an elevation of 1,646 meters (5,400 feet). It offers spectacular panoramic views of the Sahyadri mountains."
        });
    }

    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", href: "/" },
                    { name: "All Plans", href: "/plans" },
                    { name: trek.name, href: `/treks/${trek.id}` },
                ]}
            />
            <TouristTripSchema
                name={trek.name}
                description={trek.description}
                price={trek.price}
                duration={trek.duration}
                highlights={trek.highlights}
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src={trek.image}
                        alt={`${trek.name} Trek – Guided Adventure in Maharashtra | Off Route Adventure`}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center mt-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-600/90 text-white text-sm font-semibold mb-6 backdrop-blur-sm border border-green-400">
                        Adventure Awaits
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
                        {trek.name}
                    </h1>
                    <p className="text-xl text-green-50 max-w-2xl mx-auto drop-shadow-md lg:hidden">
                        {trek.description}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-gray-50 flex-1">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

                        {/* Main Content */}
                        <div className="flex-1 space-y-8">
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                    {trek.description}
                                </p>
                                <p className="text-gray-700 leading-relaxed text-base">
                                    {trek.detailedContent}
                                </p>
                            </div>

                            {/* Trek Details Card */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trek Details</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/50">
                                        <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Best Season</p>
                                            <p className="font-semibold text-gray-800">{trek.bestSeason}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/50">
                                        <Mountain className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Difficulty Level</p>
                                            <p className="font-semibold text-gray-800">{trek.difficulty}</p>
                                        </div>
                                    </div>
                                    {trek.altitude && (
                                        <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50/50">
                                            <MapPin className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Altitude</p>
                                                <p className="font-semibold text-gray-800">{trek.altitude}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50/50">
                                        <IndianRupee className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Price</p>
                                            <p className="font-semibold text-gray-800">₹{trek.price.toLocaleString()} per person</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* What to Pack */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Pack</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {trek.whatToPack.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Highlights</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {trek.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-green-50/50">
                                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                                            <span className="font-medium text-gray-800">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs for GEO Optimization */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {defaultFaqs.map((faq, idx) => (
                                        <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                            <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Booking Card */}
                        <div className="w-full lg:w-[400px]">
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 sticky top-24">
                                <div className="mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <IndianRupee className="h-6 w-6 text-green-600" />
                                        <span className="text-3xl font-bold text-gray-900">{trek.price.toLocaleString()}</span>
                                        <span className="text-gray-500 font-medium ml-1">per person</span>
                                    </div>
                                </div>

                                <div className="space-y-5 mb-8">
                                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Duration</p>
                                            <p className="font-bold text-gray-900">{trek.duration}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <Mountain className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Trip Type</p>
                                            <p className="font-bold text-gray-900">Guided Adventure</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Location</p>
                                            <p className="font-bold text-gray-900">Maharashtra</p>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href={`/book?destination=${trek.id}`}
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg rounded-xl font-bold hover:from-green-500 hover:to-emerald-500 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    Book Now <ArrowRight className="h-5 w-5" />
                                </Link>
                                <p className="text-center text-sm text-gray-500 mt-4 font-medium">Securely book in under 2 minutes.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Related Treks – Cross-linking to fix orphan pages */}
            {(() => {
                const relatedTreks = destinations
                    .filter((d) => d.id !== trek.id)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 4);
                return (
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-10">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-3">
                                        More Adventures
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        You May Also Like
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {relatedTreks.map((related) => (
                                        <Link
                                            key={related.id}
                                            href={`/treks/${related.id}`}
                                            className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                                        >
                                            <div className="h-40 relative">
                                                <Image
                                                    src={related.image}
                                                    alt={`${related.name} Trek – Adventure in Maharashtra | Off Route Adventure`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                                                    {related.name}
                                                </h3>
                                                <div className="flex items-center justify-between mt-2">
                                                    <span className="text-green-600 font-bold">
                                                        ₹{related.price.toLocaleString()}
                                                    </span>
                                                    <span className="text-sm text-gray-500">
                                                        {related.duration}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="text-center mt-8">
                                    <Link
                                        href="/plans"
                                        className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all"
                                    >
                                        View All Plans
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })()}
        </>
    );
}
