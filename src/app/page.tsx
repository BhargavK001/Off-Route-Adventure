import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import { BreadcrumbSchema, FAQSchema } from '@/components/JsonLd';

// Dynamically import components that are below the fold
// We use ssr: true (default) so Googlebot can still crawl and index the entire page content
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'), {
  ssr: true
});
const DestinationsSection = dynamic(() => import('@/components/home/DestinationsSection'), {
  ssr: true
});
const CtaSection = dynamic(() => import('@/components/home/CtaSection'), {
  ssr: true
});

const homepageFaqs = [
  {
    question: "What types of treks does Off Route Adventure offer?",
    answer:
      "We offer day treks, night treks, multi-day expeditions, fort treks, waterfall treks, and mountain peak treks across Maharashtra and India. Our destinations include Harishchandragad, Kalsubai, Rajmachi, Lohagad, Bhimashankar, Andharban, and many more. We also organize camping trips at Pawna Lake and multi-day tours to Hampi, Manali, and Dudhsagar Falls.",
  },
  {
    question: "Are the treks safe for beginners?",
    answer:
      "Yes! We have treks suitable for all fitness levels — from easy day trips to Sinhagad and Lohagad (rated beginner-friendly) to challenging treks like Harishchandragad and Kalsubai. Our certified trek leaders are trained in first aid and emergency response, and every trek is planned with safety as the top priority.",
  },
  {
    question: "How much do trekking packages cost?",
    answer:
      "Our packages start from just ₹799 for day trips like Sinhagad. Weekend treks and camping range from ₹999 to ₹1,799. Multi-day tours like Hampi (₹7,999), Golden Temple (₹8,999), and Manali (₹9,999) include transportation, meals, accommodation, and experienced trek leaders.",
  },
  {
    question: "Where is Off Route Adventure based?",
    answer:
      "Off Route Adventure is based in Pune, Maharashtra, India. We organize treks and tours primarily across Maharashtra's Sahyadri (Western Ghats) mountain range, with select trips to destinations across India like Manali, Amritsar, and Goa.",
  },
  {
    question: "What is included in your trekking packages?",
    answer:
      "Our packages typically include transportation (as mentioned), experienced trek leader, first aid support, meals (where applicable), camping equipment (for camping trips), and entry fees and permits. Personal expenses, travel insurance, and personal trekking gear are not included.",
  },
  {
    question: "How do I book a trek?",
    answer:
      "You can book a trek through our website by visiting the 'Book Now' page, or contact us directly via WhatsApp at +91 92704 28541. Our team will confirm your booking and share all trip details within 24 hours.",
  },
];

export default function Home() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }]} />
      <FAQSchema faqs={homepageFaqs} />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <DestinationsSection />
      <CtaSection />

      {/* FAQ Section for SEO & GEO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                ❓ Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                  Questions
                </span>
              </h2>
              <p className="text-gray-500 text-lg">
                Everything you need to know before your adventure.
              </p>
            </div>
            <div className="space-y-4">
              {homepageFaqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-left font-semibold text-gray-900 hover:text-green-700 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
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

