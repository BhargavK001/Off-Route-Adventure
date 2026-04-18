"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mountain, MapPin, Users, Star } from "lucide-react";

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
        <section
            className="relative min-h-[85svh] min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-950"
            aria-label="Off Route Adventure – Trekking and Adventure Tours in Maharashtra"
        >
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

            {/* Mountain silhouette */}
            <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 1440 200" fill="none" className="w-full opacity-20">
                    <path d="M0 200L60 180L120 160L180 120L240 140L300 80L360 100L420 60L480 90L540 40L600 70L660 30L720 50L780 20L840 60L900 40L960 80L1020 50L1080 90L1140 60L1200 100L1260 70L1320 120L1380 90L1440 60V200H0Z" fill="currentColor" className="text-green-400" />
                </svg>
            </div>

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
                            <path d="M2 6C50 2 150 2 198 6" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" className="[stroke-dasharray:200] [stroke-dashoffset:200] animate-[heroStrokeDraw_1s_ease-out_1s_forwards]" />
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

                {/* Stats bar */}
                <dl className="flex flex-wrap justify-center gap-5 md:gap-8 animate-[heroFadeUp_0.8s_ease-out_1.1s_both]">
                    <div className="flex items-center gap-2 text-white/90">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
                        </div>
                        <div className="text-left">
                            <dt className="text-base font-bold">20+</dt>
                            <dd className="text-xs text-white/60 font-medium">Destinations</dd>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                            <Users className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
                        </div>
                        <div className="text-left">
                            <dt className="text-base font-bold">500+</dt>
                            <dd className="text-xs text-white/60 font-medium">Happy Trekkers</dd>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                            <Star className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
                        </div>
                        <div className="text-left">
                            <dt className="text-base font-bold">4.9</dt>
                            <dd className="text-xs text-white/60 font-medium">Avg Rating</dd>
                        </div>
                    </div>
                </dl>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-30" aria-hidden="true" />
        </section>
    );
}
