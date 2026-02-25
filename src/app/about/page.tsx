import { Metadata } from "next";
import { Mountain, Shield, Users, Award, Heart, Target, CheckCircle } from "lucide-react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

const BASE_URL = "https://www.offrouteadventure.in";

export const metadata: Metadata = {
  title: "About Us – Trekking Company in Pune, Maharashtra",
  description:
    "Learn about Off Route Adventure — a rapidly growing trekking organization in Pune with certified trek leaders, 500+ happy travelers, and a safety-first approach. Specializing in Sahyadri treks, fort expeditions, and adventure tours across Maharashtra & India.",
  keywords: [
    "trekking company Pune",
    "adventure travel company India",
    "certified trek leaders Maharashtra",
    "safe trekking organization India",
    "about Off Route Adventure",
    "Sahyadri trekking experts",
    "corporate retreat adventure Pune",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Off Route Adventure – Pune's Trusted Trekking Company",
    description:
      "500+ happy travelers, 50+ treks completed, 4.8★ rating. Certified trek leaders, safety-first approach. Explore Maharashtra with us.",
    url: `${BASE_URL}/about`,
    images: [
      {
        url: `${BASE_URL}/Off-Route-Logo.png`,
        width: 800,
        height: 600,
        alt: "About Off Route Adventure – Trekking Company Pune",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Off Route Adventure – Trekking Company Pune",
    description:
      "500+ happy travelers, 50+ treks, 4.8★ rating. Certified trek leaders with a safety-first approach.",
  },
};

const values = [
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Safety First",
    description:
      "Every adventure is planned with safety as our top priority. Our leaders are trained in first aid and emergency response.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Expert Leaders",
    description:
      "Our certified trek leaders have years of experience navigating terrains across India.",
  },
  {
    icon: <Award className="h-7 w-7" />,
    title: "Quality Experience",
    description:
      "We curate experiences that create lasting memories while ensuring comfort and enjoyment.",
  },
  {
    icon: <Heart className="h-7 w-7" />,
    title: "Passion for Adventure",
    description:
      "Born from a love for the outdoors, we share our passion through every trek we organize.",
  },
  {
    icon: <Target className="h-7 w-7" />,
    title: "Customized Tours",
    description:
      "From corporate retreats to family adventures, we tailor experiences to your needs.",
  },
  {
    icon: <Mountain className="h-7 w-7" />,
    title: "Diverse Destinations",
    description:
      "Explore forts, waterfalls, mountains, and beaches - we cover the best of India.",
  },
];

const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "50+", label: "Treks Completed" },
  { value: "16+", label: "Destinations" },
  { value: "4.8★", label: "Average Rating" },
];

const storyPoints = [
  "Certified and experienced trek leaders",
  "Safety-first approach on every expedition",
  "Affordable packages for all budgets",
  "Local knowledge across India's terrain",
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
      />
      <section className="py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6">
              🏔️ Our Journey
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About{" "}
              <span className="text-green-300">Off Route Adventure</span>
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Discover the story behind Off Route Adventure and our passion for
              creating unforgettable experiences across India.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              {/* Text */}
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Born from a passion for the{" "}
                  <span className="text-green-600">outdoors</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Off Route Adventure</strong> is a rapidly growing trekking
                    organization dedicated to helping people explore the incredible
                    landscapes of India. What started as a passion project among
                    friends has grown into a trusted name in adventure travel.
                  </p>
                  <p>
                    We believe that adventure should be accessible to everyone. That&apos;s
                    why we focus on providing safe, exciting, and affordable travel
                    experiences — whether you&apos;re a first-time trekker or a seasoned hiker.
                  </p>
                </div>
                {/* Checkpoints */}
                <ul className="mt-6 space-y-3">
                  {storyPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-emerald-700 rounded-3xl p-10 flex items-center justify-center h-80 shadow-2xl shadow-green-200">
                  <Mountain className="h-28 w-28 text-white/80" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Trusted by</p>
                    <p className="text-sm font-bold text-gray-900">500+ Trekkers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-200">
                  {stat.value}
                </div>
                <div className="text-green-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 pb-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Core Values
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Off Route Adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                    {value.icon}
                  </div>
                  <span className="text-2xl font-black text-gray-100 select-none tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="pt-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl shadow-green-200">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.1),_transparent_60%)]" />
            <div className="relative">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-green-100 text-sm font-medium mb-6">
                For Teams & Organizations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Corporate Retreats &amp; Team Building
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Looking for a unique team-building experience? We offer customizable
                corporate nature retreats that combine adventure with team bonding.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 hover:scale-105 transition-all shadow-lg"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
