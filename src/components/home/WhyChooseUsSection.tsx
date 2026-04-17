import { FEATURES } from "@/lib/constants";
import {
    Shield,
    Wallet,
    Users,
    Building,
    MapPin,
    Mountain,
    Zap,
    Headphones,
} from "lucide-react";
import React from "react";

const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="h-7 w-7" />,
    Wallet: <Wallet className="h-7 w-7" />,
    Users: <Users className="h-7 w-7" />,
    Building: <Building className="h-7 w-7" />,
    MapPin: <MapPin className="h-7 w-7" />,
    Mountain: <Mountain className="h-7 w-7" />,
    Zap: <Zap className="h-7 w-7" />,
    Headphones: <Headphones className="h-7 w-7" />,
};

export default function WhyChooseUsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold tracking-wide mb-3">
                        Our Promise
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                        Why Choose{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                            Off Route?
                        </span>
                    </h2>
                    <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                        We provide the best adventure experience with safety and affordability as our top priorities.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            {/* Icon + number row */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-11 h-11 bg-green-50 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                                    {iconMap[feature.icon] || <Shield className="h-5 w-5" />}
                                </div>
                                <span className="text-xl font-black text-gray-100 group-hover:text-green-100 transition-colors select-none tabular-nums">
                                    0{index + 1}
                                </span>
                            </div>

                            {/* Text */}
                            <h3 className="text-sm font-bold text-gray-900 mb-1.5">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Bottom accent line */}
                            <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
