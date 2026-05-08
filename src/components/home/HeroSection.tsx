"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mountain } from "lucide-react";
import { destinations } from "@/data/destinations";

const CAROUSEL_IMAGES = [
    {
        url: "/images/hero/hampi.webp",
        alt: "Hampi UNESCO World Heritage Adventure – Off Route Adventure Maharashtra Treks"
    },
    {
        url: "/images/hero/kalsubai.webp",
        alt: "Kalsubai Peak Trekking – Highest Peak in Maharashtra | Off Route Adventure"
    },
    {
        url: "/images/hero/manali.webp",
        alt: "Manali Himalayan Mountain Expedition – Adventure Tours India"
    },
    {
        url: "/images/hero/harihargad.webp",
        alt: "Harihargad Fort Trek Sahyadri – Fort Trekking Maharashtra"
    },
    {
        url: "/images/hero/kalu-waterfall.webp",
        alt: "Kalu Waterfall Trek – Majestic Sahyadri Waterfall Experience"
    },
];

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section
                className="relative min-h-[85svh] min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-950 pb-16"
                aria-label="Off Route Adventure – Trekking and Adventure Tours in Maharashtra"
            >
                <style dangerouslySetInnerHTML={{
                    __html: `
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .marquee {
                    animation: marquee 35s linear infinite;
                }
                .marquee-container:hover .marquee {
                    animation-play-state: paused;
                }
            `}} />
                {/* Background Images Carousel */}
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    {CAROUSEL_IMAGES.map((img, index) => (
                        <div
                            key={img.url}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                        >
                            <Image
                                src={img.url}
                                alt={img.alt}
                                fill
                                priority={index === 0}
                                fetchPriority={index === 0 ? "high" : "low"}
                                loading={index === 0 ? "eager" : "lazy"}
                                sizes="100vw"
                                className="object-cover scale-105 animate-[heroZoom_20s_linear_infinite]"
                            />
                        </div>
                    ))}
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/45 backdrop-brightness-[0.85]" />
                </div>

                {/* Background gradient layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60 pointer-events-none" aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,197,94,0.1),_transparent_60%)]" aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.05),_transparent_60%)]" aria-hidden="true" />

                {/* Animated floating orbs */}
                <div className="absolute top-20 left-[10%] w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
                <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} aria-hidden="true" />



                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 text-center text-white">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm mb-5 animate-[heroFadeUp_0.8s_ease-out_both]">
                        <Mountain className="h-4 w-4 text-green-400" aria-hidden="true" />
                        <span className="text-green-300 text-sm font-medium">India&apos;s Adventure Awaits</span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight max-w-5xl mx-auto drop-shadow-2xl">
                        <span className="block text-base sm:text-lg md:text-xl lg:text-2xl text-green-400 mb-1.5 font-medium tracking-normal animate-[heroFadeUp_0.8s_ease-out_0.1s_both]">
                            Trekking &amp; Adventure in Maharashtra
                        </span>
                        <span className="inline-block animate-[heroFadeUp_0.8s_ease-out_0.2s_both]">Beyond the Map,</span>
                        <br />
                        <span className="relative inline-block animate-[heroFadeUp_0.8s_ease-out_0.5s_both]">
                            Into the{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                                Wild
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full animate-[heroDrawLine_1s_ease-out_1s_both]" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                                <path d="M2 6C50 2 150 2 198 6" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" className="will-change-transform [stroke-dasharray:200] [stroke-dashoffset:200] animate-[heroStrokeDraw_1s_ease-out_1s_forwards]" />
                                <defs>
                                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                                        <stop stopColor="#4ade80" />
                                        <stop offset="1" stopColor="#2dd4bf" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg mb-5 text-gray-100 max-w-2xl mx-auto leading-relaxed animate-[heroFadeUp_0.8s_ease-out_0.7s_both] drop-shadow-lg">
                        Explore India&apos;s most breathtaking trails, forts, and hidden gems.
                        <br className="hidden sm:block" />
                        Safe. Exciting. Affordable.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-7 animate-[heroFadeUp_0.8s_ease-out_0.9s_both]">
                        <Link
                            href="/book"
                            className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-emerald-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 text-sm w-full sm:w-auto"
                        >
                            Book Your Adventure
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/plans"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all text-sm w-full sm:w-auto"
                        >
                            View All Plans
                        </Link>
                    </div>
                </div>
            </section>

            {/* Separated Interactive Marquee Gallery */}
            <section className="bg-white py-12 overflow-hidden border-b border-gray-100">
                <div className="text-center mb-6">
                    <span className="text-sm font-bold text-green-700 tracking-wider uppercase">Explore the Trails</span>
                </div>
                <div className="w-full relative marquee-container px-4">
                    {/* Fade edges */}
                    <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="flex w-max marquee">
                        {/* Double the array to create an infinite loop effect */}
                        {[...destinations.slice(0, 8), ...destinations.slice(0, 8)].map((dest, idx) => (
                            <Link
                                href={`/treks/${dest.id}`}
                                key={`${dest.id}-${idx}`}
                                className="block relative w-48 h-32 md:w-64 md:h-40 mx-3 rounded-2xl overflow-hidden shrink-0 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:z-20 group border border-gray-200"
                            >
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    sizes="(max-width: 768px) 192px, 256px"
                                    className={`object-cover ${dest.imagePosition || 'object-center'} opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4">
                                    <span className="text-white text-base font-bold truncate w-full shadow-sm">{dest.name}</span>
                                    <span className="text-green-300 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center mt-1">
                                        View Details <ArrowRight className="w-3 h-3 ml-1" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
