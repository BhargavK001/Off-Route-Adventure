import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';

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

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <DestinationsSection />
      <CtaSection />
    </>
  );
}
