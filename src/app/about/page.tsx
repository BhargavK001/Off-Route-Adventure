import { Metadata } from "next";
import { Mountain, Shield, Users, Award, Heart, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Off Route Adventure - a rapidly growing trekking organization with certified expertise, experienced trek leaders, and a safety-first approach.",
};

const values = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Safety First",
    description:
      "Every adventure is planned with safety as our top priority. Our leaders are trained in first aid and emergency response.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Leaders",
    description:
      "Our certified trek leaders have years of experience navigating terrains across India.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Quality Experience",
    description:
      "We curate experiences that create lasting memories while ensuring comfort and enjoyment.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion for Adventure",
    description:
      "Born from a love for the outdoors, we share our passion through every trek we organize.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Customized Tours",
    description:
      "From corporate retreats to family adventures, we tailor experiences to your needs.",
  },
  {
    icon: <Mountain className="h-8 w-8" />,
    title: "Diverse Destinations",
    description:
      "Explore forts, waterfalls, mountains, and beaches - we cover the best of India.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-green-100">
              Discover the story behind Off Route Adventure and our passion for
              creating unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="text-gray-900">Off Route Adventure</strong> is a rapidly growing trekking
                    organization dedicated to helping people explore the incredible
                    landscapes of India. What started as a passion project among
                    friends has grown into a trusted name in adventure travel.
                  </p>
                  <p>
                    We believe that adventure should be accessible to everyone. That&apos;s
                    why we focus on providing safe, exciting, and affordable travel
                    experiences. Whether you&apos;re a first-time trekker or an experienced
                    hiker, we have something for you.
                  </p>
                  <p>
                    Our team of certified trek leaders brings years of expertise and
                    local knowledge to every expedition. We take pride in our
                    safety-first approach, ensuring that every adventure is not just
                    thrilling but also secure.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 flex items-center justify-center h-80">
                <Mountain className="h-32 w-32 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Off Route Adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Treks Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">16+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Corporate Retreats
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Looking for a unique team-building experience? We offer customizable
              corporate nature retreats that combine adventure with team bonding.
              Contact us to create a memorable experience for your team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
