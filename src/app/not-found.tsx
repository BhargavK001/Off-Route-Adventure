import Link from "next/link";
import { Compass, ArrowRight, MapPin, Home, Phone } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Off Route Adventure",
  description: "It looks like you've wandered off the route. Let us help you find your way back to base camp with our trekking and adventure plans.",
};

export default function NotFound() {
  const popularTreks = [
    { name: "Kalsubai Peak Trek", id: "kalsubai" },
    { name: "Harishchandragad Trek", id: "harishchandragad" },
    { name: "Andharban Forest Trek", id: "andharban" },
    { name: "Vasota Jungle Trek", id: "vasota" },
    { name: "Rajmachi Fort Camping", id: "rajmachi" },
    { name: "Manali Tour Package", id: "manali" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Decorative background contour lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-green-900 select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Animated Compass Icon */}
        <div className="w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center border border-green-200 shadow-sm animate-pulse">
          <Compass className="h-12 w-12 text-green-700 animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-800 text-xs font-black uppercase tracking-[0.2em] mb-4">
          Error 404
        </span>

        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mb-6">
          Wandered <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
            Off The Route?
          </span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
          Don&apos;t worry, even the best explorers get lost sometimes. Let&apos;s get you back to base camp or show you some exciting trails.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl transition-all shadow-md gap-2"
          >
            <Home className="h-4 w-4" /> Back to Base Camp
          </Link>
          <Link
            href="/plans"
            className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-xl border border-gray-200 transition-all shadow-sm gap-2"
          >
            View All Plans <ArrowRight className="h-4 w-4 text-gray-400" />
          </Link>
        </div>

        {/* Popular treks list to pass link juice (SEO optimization) */}
        <div className="border-t border-gray-200/60 pt-8 text-left">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-green-600" /> Popular Trekking Routes
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {popularTreks.map((trek) => (
              <Link
                key={trek.id}
                href={`/treks/${trek.id}`}
                className="group flex items-center justify-between p-3 rounded-lg bg-white border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all"
              >
                <span className="text-sm font-semibold text-gray-700 group-hover:text-green-700 transition-colors">
                  {trek.name}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* Help link */}
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 hover:underline"
          >
            <Phone className="h-3 w-3" /> Need assistance? Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
