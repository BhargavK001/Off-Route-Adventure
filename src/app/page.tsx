import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import { BreadcrumbSchema, FAQSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

// Dynamically import below-the-fold components (ssr:true so Googlebot indexes them)
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'), { ssr: true });
const DestinationsSection = dynamic(() => import('@/components/home/DestinationsSection'), { ssr: true });
const CtaSection = dynamic(() => import('@/components/home/CtaSection'), { ssr: true });

const homepageFaqs = [
  {
    question: "How can I plan a low-budget or cheap trekking trip in Maharashtra for 2025-2026?",
    answer:
      "Off Route Adventure is your go-to low-budget trip planner. We offer affordable day treks starting from ₹799 and weekend camping packages from ₹1,199. Our aim is to provide cheap yet high-quality adventure experiences without compromising on safety or authenticity.",
  },
  {
    question: "Why is Off Route Adventure considered a trusted and authentic trekking group?",
    answer:
      "With years of experience and a team of certified trek leaders, we have built a reputation as a trusted adventure group in Pune and Mumbai. We focus on providing authentic Sahyadri experiences, taking you through off-route trails that capture the true essence of Maharashtra's heritage and nature.",
  },
  {
    question: "What are the best offbeat treks to experience in 2026?",
    answer:
      "For 2026, we are expanding our 'Off-Route' catalog to include even more hidden gems. Treks like Andharban, Sandhan Valley, and the AMK expedition remain our top picks for enthusiasts seeking an authentic and uncrowded adventure. Early bookings for 2026 are already open!",
  },
  {
    question: "Are your budget-friendly treks safe for beginners and solo travelers?",
    answer:
      "Yes! Being budget-friendly doesn't mean we cut corners on safety. Every 'cheap' trek we organize still includes experienced guides, first-aid support, and a trusted community environment, making it perfect for beginners and solo adventurers looking for an authentic group experience.",
  },
  {
    question: "How do I book an affordable trek with a trusted planner?",
    answer:
      "You can browse our upcoming schedule on the 'Plans' page. As a trusted trip planner, we ensure a transparent booking process. Simply click 'Book Now' or WhatsApp us at +91 92704 28541 to start your low-budget adventure today!",
  },
];

export default function Home() {
  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }]} />
      <FAQSchema faqs={homepageFaqs} />

      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <DestinationsSection />
      <CtaSection />

      {/* FAQ Section */}
      <section
        className="py-10 bg-gray-50"
        aria-label="Frequently asked questions about trekking with Off Route Adventure"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-3">
                ❓ Common Questions
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                  Questions
                </span>
              </h2>
              <p className="text-gray-500 text-sm">
                Everything you need to know before your adventure.
              </p>
            </div>
            <div className="space-y-3">
              {homepageFaqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <summary
                    className="flex items-center justify-between cursor-pointer p-4 text-left font-semibold text-gray-900 hover:text-green-700 transition-colors text-sm"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span
                      className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold group-open:rotate-45 transition-transform duration-200"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div
                    className="px-4 pb-4 text-gray-600 leading-relaxed text-sm"
                  >
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
