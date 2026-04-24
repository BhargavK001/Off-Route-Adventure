import { Metadata } from "next";
import {
  Shield,
  Users,
  Award,
  Heart,
  Target,
  Mountain,
  ArrowRight,
  MapPin,
  Calendar,
  Star,
  ChevronRight,
  Compass,
  Tent,
} from "lucide-react";
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
    canonical: "/about",
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
    icon: Shield,
    title: "Safety First",
    index: "01",
    description:
      "Every expedition is engineered around safety. Our leaders hold first-aid certifications and follow structured emergency protocols on every route.",
  },
  {
    icon: Users,
    title: "Expert Leadership",
    index: "02",
    description:
      "Our certified trek leaders bring years of terrain experience across India's most demanding landscapes — from Sahyadri ridges to high-altitude passes.",
  },
  {
    icon: Award,
    title: "Quality Experience",
    index: "03",
    description:
      "We curate journeys that go beyond a trek. Every detail — route selection, logistics, rest points — is designed to create lasting memories.",
  },
  {
    icon: Heart,
    title: "Passion-Driven",
    index: "04",
    description:
      "Born from a genuine love for the outdoors, we share that passion through every expedition we organize and every trail we explore.",
  },
  {
    icon: Target,
    title: "Tailored Adventures",
    index: "05",
    description:
      "From corporate retreats to family escapes, we build experiences around your group's goals, pace, and comfort level.",
  },
  {
    icon: Mountain,
    title: "Diverse Terrain",
    index: "06",
    description:
      "Forts, waterfalls, jungle trails, coastal cliffs — our destinations span the full breadth of India's incredible natural geography.",
  },
];

const stats = [
  { value: "500+", label: "Travelers Guided", icon: Users },
  { value: "50+", label: "Treks Completed", icon: Tent },
  { value: "16+", label: "Destinations", icon: MapPin },
  { value: "4.8", label: "Average Rating", icon: Star },
];

const milestones = [
  {
    year: "2022",
    label: "Founded in Pune",
    detail: "Three friends, one shared obsession with the Sahyadri hills.",
  },
  {
    year: "2023",
    label: "Certified Leaders",
    detail: "Full team certified in first aid and wilderness emergency response.",
  },
  {
    year: "2023",
    label: "First 100 Trekkers",
    detail: "Word spread fast — we crossed our first hundred trekkers in season one.",
  },
  {
    year: "2024",
    label: "Corporate Programs",
    detail:
      "Launched structured corporate retreat packages for teams across Pune.",
  },
  {
    year: "2025",
    label: "500+ Community",
    detail:
      "Our trekker community crossed 500 members and keeps growing every season.",
  },
];

/* ─────────────────────────────────────── */
/* Topographic contour SVG (inline, no deps) */
/* ─────────────────────────────────────── */
function TopoTexture() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="topo-pattern"
          x="0"
          y="0"
          width="320"
          height="240"
          patternUnits="userSpaceOnUse"
        >
          <ellipse
            cx="160"
            cy="120"
            rx="140"
            ry="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <ellipse
            cx="160"
            cy="120"
            rx="105"
            ry="65"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <ellipse
            cx="160"
            cy="120"
            rx="72"
            ry="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <ellipse
            cx="160"
            cy="120"
            rx="42"
            ry="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <ellipse
            cx="160"
            cy="120"
            rx="18"
            ry="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo-pattern)" />
    </svg>
  );
}

/* Mountain skyline SVG */
function MountainSkyline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 180"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      preserveAspectRatio="none"
    >
      <path
        d="M0 180 L0 130 L80 80 L160 110 L280 30 L400 90 L520 50 L640 100 L760 20 L900 85 L1020 45 L1140 95 L1260 55 L1380 90 L1440 70 L1440 180 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ─────────────────────────────────────── */
/* Page Component                         */
/* ─────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
      />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-black flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/harihargad.webp"
            alt="Harihar Fort Trek"
            className="w-full h-full object-cover grayscale-[40%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(10,10,10,1) 100%)"
            }}
          />
        </div>

        {/* Topo texture */}
        <div className="absolute inset-0 text-green-500/10 opacity-60">
          <TopoTexture />
        </div>

        {/* Hero Content Area */}
        <div className="flex-1 py-16 md:py-24 relative flex items-center">
          <div className="container mx-auto px-6 md:px-10 relative z-10 w-full">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-green-500" />
                <span className="text-green-500 text-xs font-black uppercase tracking-[0.4em]">
                  Pune, Maharashtra — Est. 2022
                </span>
              </div>

              {/* Headline */}
              <h1 
                className="font-black text-white leading-[0.85] tracking-tight mb-8"
                style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
              >
                We take you <br />
                <span className="text-green-500 italic">Off Route.</span>
              </h1>

              {/* Sub */}
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl font-medium mb-8">
                A trekking organization built by people who refused to follow the
                tourist trail. We guide you through India&apos;s raw, unfiltered
                landscapes — safely, affordably, unforgettably.
              </p>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div
          className="relative z-10 w-full overflow-hidden border-t border-b border-green-900/60 py-3"
          style={{ background: "rgba(10,10,10,0.85)" }}
        >
          <div
            className="flex gap-12 whitespace-nowrap text-green-500 text-xs font-black uppercase tracking-[0.3em]"
            style={{ animation: "marqueeScroll 28s linear infinite" }}
          >
            {[...Array(3)].map((_, ri) => (
              <span key={ri} className="flex items-center gap-12 shrink-0">
                <span>Founded 2022</span>
                <span className="text-green-800">·</span>
                <span>500+ Trekkers</span>
                <span className="text-green-800">·</span>
                <span>50+ Treks</span>
                <span className="text-green-800">·</span>
                <span>Pune, India</span>
                <span className="text-green-800">·</span>
                <span>4.8 Rating</span>
                <span className="text-green-800">·</span>
                <span>Sahyadri &amp; Beyond</span>
                <span className="text-green-800">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. STORY / FIELD NOTES ───────────────────────────── */}
      <section className="py-24 md:py-32" style={{ background: "#f7f3ec" }}>
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start max-w-6xl mx-auto">
            {/* Left: vertical label */}
            <div className="hidden md:flex md:col-span-1 justify-center pt-2">
              <span
                className="text-xs font-black uppercase tracking-[0.3em] text-green-300 select-none"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Field Notes
              </span>
            </div>

            {/* Center: text */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-green-500" />
                <span className="text-green-600 text-xs font-semibold uppercase tracking-[0.18em]">
                  Our Story
                </span>
              </div>

              <h2
                className="font-black text-gray-900 leading-tight mb-8 tracking-tight"
                style={{ fontSize: "clamp(32px, 4vw, 54px)" }}
              >
                Born from a passion
                <br />
                <span className="text-green-600">for the outdoors.</span>
              </h2>

              <div
                className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg border-l-[3px] border-green-500 pl-6"
              >
                <p>
                  <strong className="text-gray-900 font-semibold">
                    Off Route Adventure
                  </strong>{" "}
                  is a rapidly growing trekking organization born in Pune,
                  Maharashtra. What started as weekend escapes into the Sahyadri
                  hills with a handful of friends has grown into a trusted name
                  in adventure travel across India.
                </p>
                <p>
                  We believe that adventure should be accessible to everyone —
                  from first-time trekkers to seasoned hikers. Every route we
                  plan and every team we lead carries the same commitment: make
                  it safe, make it real, make it worth the journey.
                </p>
              </div>

              {/* Arrow-style bullet list */}
              <ul className="mt-8 space-y-3">
                {[
                  "Certified and experienced trek leaders",
                  "Safety-first approach on every expedition",
                  "Affordable packages for all budgets",
                  "Deep local knowledge across India's terrain",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: milestone timeline */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-4 w-4 text-green-600" />
                <span className="text-green-600 text-xs font-semibold uppercase tracking-[0.18em]">
                  Milestones
                </span>
              </div>
              <ol className="relative border-l border-green-200 space-y-0">
                {milestones.map((m, i) => (
                  <li key={i} className="pl-6 pb-7 last:pb-0 relative">
                    {/* Dot */}
                    <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white ring-1 ring-green-300" />
                    <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-0.5">
                      {m.year}
                    </p>
                    <p className="text-sm font-bold text-gray-900">{m.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                      {m.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STATS — BRUTALIST BAR ─────────────────────────── */}
      <section className="py-0 bg-gray-950 text-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="group px-8 py-14 flex flex-col items-center text-center cursor-default select-none"
                >
                  <Icon className="h-5 w-5 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <span
                    className="font-black text-white group-hover:text-green-400 transition-colors duration-300 tabular-nums leading-none"
                    style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. VALUES — FIELD REPORT CARDS ────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-green-500" />
                <span className="text-green-600 text-xs font-semibold uppercase tracking-[0.18em]">
                  What We Stand For
                </span>
              </div>
              <h2
                className="font-black text-gray-900 leading-tight tracking-tight"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                Our Core Values
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              The principles that guide every expedition we run and every
              decision we make at Off Route Adventure.
            </p>
          </div>

          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden mb-px">
            {values.slice(0, 3).map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.index}
                  className="group bg-white hover:bg-gray-950 transition-colors duration-500 p-8 flex flex-col gap-6 cursor-default"
                >
                  {/* Top: index + icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black text-gray-200 group-hover:text-green-800 uppercase tracking-[0.3em] transition-colors duration-500">
                      {value.index}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-green-50 group-hover:bg-green-900 flex items-center justify-center transition-colors duration-500">
                      <Icon className="h-4 w-4 text-green-600 group-hover:text-green-400 transition-colors duration-500" />
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="h-px bg-gray-100 group-hover:bg-green-900/60 transition-colors duration-500" />
                  {/* Text */}
                  <div>
                    <h3 className="text-gray-900 group-hover:text-white font-bold text-lg mb-2 transition-colors duration-500">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {values.slice(3).map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.index}
                  className="group bg-white hover:bg-gray-950 transition-colors duration-500 p-8 flex flex-col gap-6 cursor-default"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black text-gray-200 group-hover:text-green-800 uppercase tracking-[0.3em] transition-colors duration-500">
                      {value.index}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-green-50 group-hover:bg-green-900 flex items-center justify-center transition-colors duration-500">
                      <Icon className="h-4 w-4 text-green-600 group-hover:text-green-400 transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="h-px bg-gray-100 group-hover:bg-green-900/60 transition-colors duration-500" />
                  <div>
                    <h3 className="text-gray-900 group-hover:text-white font-bold text-lg mb-2 transition-colors duration-500">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. LEADERSHIP PHILOSOPHY ─────────────────────────── */}
      <section className="py-24 md:py-32" style={{ background: "#f7f3ec" }}>
        <div className="container mx-auto px-6 md:px-10 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: quote-style block */}
            <div>
              <Compass className="h-10 w-10 text-green-600 mb-6" />
              <blockquote className="text-gray-900 font-black leading-tight tracking-tight mb-6" style={{ fontSize: "clamp(26px, 3.2vw, 42px)" }}>
                &ldquo;The best trails are the ones nobody told you about.&rdquo;
              </blockquote>
              <p className="text-gray-600 text-sm leading-relaxed border-l-[3px] border-green-500 pl-5">
                That philosophy drives how we discover routes, train leaders, and
                build communities of adventurers who seek the real India — not
                the packaged, sanitized version.
              </p>
            </div>

            {/* Right: 2x2 highlight tiles */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Emergency First Aid",
                  sub: "All leaders certified",
                  Icon: Shield,
                },
                {
                  label: "Route Scouting",
                  sub: "Every trail pre-checked",
                  Icon: MapPin,
                },
                {
                  label: "Group Ratios",
                  sub: "1 leader per 10 trekkers",
                  Icon: Users,
                },
                {
                  label: "Seasonal Expertise",
                  sub: "Monsoon to winter routes",
                  Icon: Mountain,
                },
              ].map(({ label, sub, Icon }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-900 text-sm font-bold leading-snug mb-1">
                    {label}
                  </p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA — TERRAIN CALL ────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        {/* Mountain skyline decoration */}
        <div className="absolute bottom-0 left-0 right-0 text-green-950 opacity-60">
          <MountainSkyline />
        </div>

        {/* Topo texture */}
        <div className="absolute inset-0 text-green-900 opacity-20">
          <TopoTexture />
        </div>

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom center, rgba(21,128,61,0.18) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-10 py-28 md:py-36 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 bg-green-500" />
            <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.2em]">
              For Teams &amp; Individuals
            </span>
            <span className="h-px w-10 bg-green-500" />
          </div>

          <h2
            className="font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
          >
            Ready to go{" "}
            <span className="text-green-400">Off Route?</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you&apos;re planning a solo weekend trek, a group adventure, or a
            corporate nature retreat — we&apos;ll build the right expedition for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-900/40"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/plans"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-green-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              All Plans
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
