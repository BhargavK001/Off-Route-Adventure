import { SERVICES } from "@/lib/constants";
import {
    MapPin,
    Mountain,
    Zap,
    Headphones,
    Bus,
    Hotel,
    Map,
    Shield,
    Building,
    UtensilsCrossed,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="h-8 w-8" />,
    Mountain: <Mountain className="h-8 w-8" />,
    Zap: <Zap className="h-8 w-8" />,
    Headphones: <Headphones className="h-8 w-8" />,
    Bus: <Bus className="h-8 w-8" />,
    Hotel: <Hotel className="h-8 w-8" />,
    Map: <Map className="h-8 w-8" />,
    Shield: <Shield className="h-8 w-8" />,
    Building: <Building className="h-8 w-8" />,
    UtensilsCrossed: <UtensilsCrossed className="h-8 w-8" />,
};

export default function ServicesSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive travel services to make your adventure seamless and memorable.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                {iconMap[service.icon] || <MapPin className="h-8 w-8" />}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
