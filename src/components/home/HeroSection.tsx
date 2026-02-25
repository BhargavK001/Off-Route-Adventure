import Link from "next/link";
import { ArrowRight, Mountain, MapPin, Users, Star } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
            {/* Background gradient layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-green-950 to-gray-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,197,94,0.15),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.1),_transparent_60%)]" />

            {/* Animated floating orbs */}
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl" />

            {/* Mountain silhouette at bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 200" fill="none" className="w-full opacity-10">
                    <path d="M0 200L60 180L120 160L180 120L240 140L300 80L360 100L420 60L480 90L540 40L600 70L660 30L720 50L780 20L840 60L900 40L960 80L1020 50L1080 90L1140 60L1200 100L1260 70L1320 120L1380 90L1440 60V200H0Z" fill="currentColor" className="text-green-400" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm mb-8 animate-[heroFadeUp_0.8s_ease-out_both]">
                    <Mountain className="h-4 w-4 text-green-400" />
                    <span className="text-green-300 text-sm font-medium">India&apos;s Adventure Awaits</span>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
                    <span className="inline-block animate-[heroFadeUp_0.8s_ease-out_0.2s_both]">Beyond the Map,</span>
                    <br />
                    <span className="relative inline-block animate-[heroFadeUp_0.8s_ease-out_0.5s_both]">
                        Into the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                            Wild
                        </span>
                        <svg className="absolute -bottom-2 left-0 w-full animate-[heroDrawLine_1s_ease-out_1s_both]" viewBox="0 0 200 8" fill="none">
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
                <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed animate-[heroFadeUp_0.8s_ease-out_0.7s_both]">
                    Explore India&apos;s most breathtaking trails, forts, and hidden gems.
                    <br className="hidden md:block" />
                    Safe. Exciting. Affordable.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-[heroFadeUp_0.8s_ease-out_0.9s_both]">
                    <Link
                        href="/book"
                        className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-emerald-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                    >
                        Book Your Adventure
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/plans"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all"
                    >
                        View All Plans
                    </Link>
                </div>

                {/* Stats bar */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 animate-[heroFadeUp_0.8s_ease-out_1.1s_both]">
                    <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-9 h-9 rounded-full bg-green-500/15 flex items-center justify-center">
                            <MapPin className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-bold text-white">20+</p>
                            <p className="text-xs text-gray-400">Destinations</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-9 h-9 rounded-full bg-green-500/15 flex items-center justify-center">
                            <Users className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-bold text-white">500+</p>
                            <p className="text-xs text-gray-400">Happy Trekkers</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <div className="w-9 h-9 rounded-full bg-green-500/15 flex items-center justify-center">
                            <Star className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-bold text-white">4.9</p>
                            <p className="text-xs text-gray-400">Avg Rating</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}

