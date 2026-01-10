import Link from "next/link";
import {
  MapPin,
  Mountain,
  Zap,
  Wallet,
  Users,
  Headphones,
  Bus,
  Hotel,
  Map,
  Shield,
  Building,
  ArrowRight,
  Star,
} from "lucide-react";
import { FEATURES, SERVICES } from "@/lib/constants";
import { destinations } from "@/data/destinations";

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="h-8 w-8" />,
  Mountain: <Mountain className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
  Wallet: <Wallet className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />,
  Headphones: <Headphones className="h-8 w-8" />,
  Bus: <Bus className="h-8 w-8" />,
  Hotel: <Hotel className="h-8 w-8" />,
  Map: <Map className="h-8 w-8" />,
  Shield: <Shield className="h-8 w-8" />,
  Building: <Building className="h-8 w-8" />,
};

export default function Home() {
  const featuredDestinations = destinations.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Beyond the Map, Into the Wild –{" "}
            <span className="text-green-400">Off Route Adventure!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Explore India with Us – Safe, Exciting, Affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all hover:scale-105"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/plans"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                  {iconMap[feature.icon]}
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

      {/* Services */}
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
                  {iconMap[service.icon]}
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

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most loved adventure destinations across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Mountain className="h-16 w-16 text-white/80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-green-600">
                        ₹{destination.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">
                        / {destination.duration}
                      </span>
                    </div>
                    <Link
                      href={`/book?destination=${destination.id}`}
                      className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/plans"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all"
            >
              View All Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of happy adventurers who have explored India with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all"
            >
              Book Your Trip
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
