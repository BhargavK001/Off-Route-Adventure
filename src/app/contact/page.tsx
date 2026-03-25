"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  Loader2,
  ChevronRight,
  Compass,
} from "lucide-react";
import { InstagramColorIcon, WhatsAppColorIcon } from "@/components/SocialIcons";
import { COMPANY_INFO } from "@/lib/constants";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ReviewFormData {
  name: string;
  email: string;
  rating: string;
  feedback: string;
}

const testimonials = [
  {
    name: "Rahul Sharma",
    rating: 5,
    feedback:
      "Amazing experience at Harishchandragad! The trek leaders were very experienced and made us feel safe throughout. Highly recommended!",
    destination: "Harishchandragad",
  },
  {
    name: "Priya Patel",
    rating: 5,
    feedback:
      "The Kalsubai trek was incredible. The sunrise view from the top was breathtaking. Great organization and friendly group.",
    destination: "Kalsubai",
  },
  {
    name: "Amit Deshmukh",
    rating: 4,
    feedback:
      "Loved the Pawna Lake camping experience. Perfect for a weekend getaway. The bonfire and music made it memorable.",
    destination: "Pawna Lake",
  },
  {
    name: "Sneha Kulkarni",
    rating: 5,
    feedback:
      "Corporate retreat with Off Route Adventure was the best team-building activity we've had. Everyone loved it!",
    destination: "Corporate Event",
  },
];

/* ── Topographic contour SVG (consistent with About/Book) ── */
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
          id="topo-cnt"
          x="0"
          y="0"
          width="320"
          height="240"
          patternUnits="userSpaceOnUse"
        >
          <ellipse cx="160" cy="120" rx="140" ry="90" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <ellipse cx="160" cy="120" rx="105" ry="65" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <ellipse cx="160" cy="120" rx="72" ry="42" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <ellipse cx="160" cy="120" rx="42" ry="22" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <ellipse cx="160" cy="120" rx="18" ry="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo-cnt)" />
    </svg>
  );
}

const inputCls =
  "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow duration-200";

const labelCls = "block text-xs font-semibold text-gray-500 uppercase tracking-[0.1em] mb-2";

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-7">
      <span className="text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] shrink-0">
        {index}
      </span>
      <span className="flex-1 h-px bg-gray-100" />
      <h2 className="text-sm font-bold text-gray-900 uppercase tracking-[0.12em] shrink-0">
        {title}
      </h2>
    </div>
  );
}

export default function ContactPage() {
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState<"success" | "error" | null>(null);
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewStatus, setReviewStatus] = useState<"success" | "error" | null>(null);
  const [selectedRating, setSelectedRating] = useState(0);

  const contactForm = useForm<ContactFormData>();
  const reviewForm = useForm<ReviewFormData>();

  const onContactSubmit = async (data: ContactFormData) => {
    setContactSubmitting(true);
    setContactStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setContactStatus("success");
        contactForm.reset();
      } else {
        setContactStatus("error");
      }
    } catch {
      setContactStatus("error");
    } finally {
      setContactSubmitting(false);
    }
  };

  const onReviewSubmit = async (data: ReviewFormData) => {
    setReviewSubmitting(true);
    setReviewStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          subject: "New Review Submission",
          message: `Rating: ${data.rating}/5\n\nFeedback: ${data.feedback}`,
        }),
      });
      if (response.ok) {
        setReviewStatus("success");
        reviewForm.reset();
        setSelectedRating(0);
      } else {
        setReviewStatus("error");
      }
    } catch {
      setReviewStatus("error");
    } finally {
      setReviewSubmitting(false);
    }
  };

  return (
    <>
      {/* ── 1. HERO — THE DISPATCH CENTER ───────────────────── */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/hampi.webp"
            alt="Hampi Expedition"
            className="w-full h-full object-cover opacity-80 grayscale-[40%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(10,26,10,0.7) 0%, rgba(10,26,10,0.95) 100%)"
            }}
          />
        </div>

        {/* Topo texture */}
        <div className="absolute inset-0 text-green-900 opacity-20">
          <TopoTexture />
        </div>

        {/* Ghost text */}
        <span
          aria-hidden="true"
          className="absolute right-0 bottom-0 leading-none font-black tracking-tighter text-green-900 select-none pointer-events-none hidden md:block"
          style={{ fontSize: "clamp(100px, 15vw, 220px)", opacity: 0.15 }}
        >
          CONTACT
        </span>

        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(21,128,61,0.2) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-green-500" />
              <span className="text-green-400 text-xs font-semibold uppercase tracking-[0.2em]">
                Station Checkpoint — All Comms Open
              </span>
            </div>
            <h1
              className="font-black text-white leading-[0.92] tracking-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              Get in
              <br />
              <span className="text-green-400">Touch.</span>
            </h1>
            <p className="text-green-200/70 text-base md:text-lg leading-relaxed max-w-lg">
              Whether it&apos;s a query about a route or just a general check-in,
              we&apos;re standing by. Message us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. COMMS & FORM ─────────────────────────────────── */}
      <section className="py-20 md:py-32" style={{ background: "#f7f3ec" }}>
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Comms Cards */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-green-500" />
                <span className="text-green-600 text-[10px] font-black uppercase tracking-[0.2em]">
                  Dispatch Channels
                </span>
              </div>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-green-200 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-green-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-gray-900 font-bold group-hover:text-green-700 transition-colors leading-tight">
                    {COMPANY_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:+91${COMPANY_INFO.phone}`}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-green-200 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-green-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Voice
                  </p>
                  <p className="text-gray-900 font-bold group-hover:text-green-700 transition-colors leading-tight">
                    {COMPANY_INFO.phoneFormatted}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-gray-900 font-bold leading-tight">
                    Pune, Maharashtra
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-8">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                  Signal Strength
                </p>
                <div className="flex gap-4">
                  <a
                    href={COMPANY_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center hover:scale-105 transition-all shadow-sm"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppColorIcon className="h-7 w-7" />
                  </a>
                  <a
                    href={COMPANY_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center hover:scale-105 transition-all shadow-sm"
                    aria-label="Instagram"
                  >
                    <InstagramColorIcon className="h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <SectionHeader index="01" title="Send a Message" />
              <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Name *</label>
                    <input
                      type="text"
                      {...contactForm.register("name", { required: true })}
                      className={inputCls}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input
                      type="email"
                      {...contactForm.register("email", { required: true })}
                      className={inputCls}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Phone</label>
                    <input
                      type="tel"
                      {...contactForm.register("phone")}
                      className={inputCls}
                      placeholder="10-digit mobile"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Subject *</label>
                    <input
                      type="text"
                      {...contactForm.register("subject", { required: true })}
                      className={inputCls}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Message *</label>
                  <textarea
                    {...contactForm.register("message", { required: true })}
                    rows={5}
                    className={`${inputCls} resize-none`}
                    placeholder="Your detailed message..."
                  />
                </div>

                {contactStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-green-800 text-sm font-medium">Message dispatched successfully!</span>
                  </div>
                )}

                {contactStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                    <span className="text-red-800 text-sm font-medium">Failed to dispatch. Please try again.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={contactSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-green-100 disabled:opacity-60 text-sm uppercase tracking-widest"
                >
                  {contactSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TRAVELER LOGS (REVIEWS) ──────────────────────── */}
      <section className="py-24 md:py-32" style={{ background: "#0f0f0f" }}>
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 bg-green-950/40 px-3 py-1 rounded-full border border-green-900">
              <Compass className="h-3 w-3 text-green-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-500">
                Member Logs
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              What our <span className="text-green-400">Travelers say.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Real field reports from adventurers who went off route with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="group bg-zinc-900 rounded-3xl p-8 border border-white/5 hover:border-green-900/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < review.rating
                          ? "text-green-400 fill-current"
                          : "text-zinc-800 fill-current"
                          }`}
                      />
                    ))}
                  </div>
                  <p className="text-zinc-400 text-sm mb-8 leading-relaxed italic">
                    &ldquo;{review.feedback}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center text-white text-[11px] font-black">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">{review.name}</p>
                    <p className="text-green-600 text-[10px] uppercase font-bold tracking-widest mt-0.5">
                      {review.destination}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-black">
            <SectionHeader index="02" title="Share Your Experience" />
            <form onSubmit={reviewForm.handleSubmit(onReviewSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Name *</label>
                  <input
                    type="text"
                    {...reviewForm.register("name", { required: true })}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={labelCls}>Email *</label>
                  <input
                    type="email"
                    {...reviewForm.register("email", { required: true })}
                    className={inputCls}
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>Rating *</label>
                <div className="flex gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100 w-fit">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => {
                        setSelectedRating(star);
                        reviewForm.setValue("rating", star.toString());
                      }}
                      className="transition-transform active:scale-95"
                    >
                      <Star
                        className={`h-7 w-7 ${star <= selectedRating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-200"
                          }`}
                      />
                    </button>
                  ))}
                </div>
                <input
                  type="hidden"
                  {...reviewForm.register("rating", { required: true })}
                />
              </div>

              <div>
                <label className={labelCls}>Field Report *</label>
                <textarea
                  {...reviewForm.register("feedback", { required: true })}
                  rows={4}
                  className={`${inputCls} resize-none`}
                  placeholder="Tell us about the route, the team, and the experience..."
                />
              </div>

              {reviewStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 text-sm font-medium text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Log submitted. Thank you for the feedback!
                </div>
              )}

              {reviewStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-sm font-medium text-red-800">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Log failure. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={reviewSubmitting}
                className="w-full flex items-center justify-center gap-3 py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.01] shadow-lg disabled:opacity-60 text-sm uppercase tracking-widest"
              >
                {reviewSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Log
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
