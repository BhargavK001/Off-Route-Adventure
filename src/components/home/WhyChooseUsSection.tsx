import { FEATURES } from "@/lib/constants";
import {
    Shield,
    Wallet,
    Users,
    Building,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="h-8 w-8" />,
    Wallet: <Wallet className="h-8 w-8" />,
    Users: <Users className="h-8 w-8" />,
    Building: <Building className="h-8 w-8" />,
};

export default function WhyChooseUsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide the best adventure experience with safety and affordability as our top priorities.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                                {iconMap[feature.icon] || <Shield className="h-8 w-8" />}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
