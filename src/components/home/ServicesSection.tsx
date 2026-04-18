import { SERVICES } from "@/lib/constants";
import {
    MapPin,
    Mountain,
    Zap,
    Headphones,
    Bus,
    Hotel,
    Map,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="h-5 w-5" aria-hidden="true" />,
    Mountain: <Mountain className="h-5 w-5" aria-hidden="true" />,
    Zap: <Zap className="h-5 w-5" aria-hidden="true" />,
    Headphones: <Headphones className="h-5 w-5" aria-hidden="true" />,
    Bus: <Bus className="h-5 w-5" aria-hidden="true" />,
    Hotel: <Hotel className="h-5 w-5" aria-hidden="true" />,
    Map: <Map className="h-5 w-5" aria-hidden="true" />,
};

export default function ServicesSection() {
    return (
        <section className="py-10" aria-label="Our travel services">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Our Services
                    </h2>
                    <p className="text-sm text-gray-600 max-w-xl mx-auto">
                        Comprehensive travel services to make your adventure seamless and memorable.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors animate-fade-in-up"
                            style={{ animationDelay: `${index * 60}ms` }}
                        >
                            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0" aria-hidden="true">
                                {iconMap[service.icon] || <MapPin className="h-5 w-5" />}
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-xs leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
