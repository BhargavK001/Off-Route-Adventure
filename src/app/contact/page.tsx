"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Loader2,
  Compass,
  Quote,
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

/* ── Topographic contour SVG ── */
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
  "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200";

const labelCls = "block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2";

function SectionHeader({ index, title, dark = false }: { index: string; title: string; dark?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-7"
    >
      <span className={`text-[11px] font-black ${dark ? "text-green-900" : "text-gray-300"} uppercase tracking-[0.3em] shrink-0`}>
        {index}
      </span>
      <span className={`flex-1 h-px ${dark ? "bg-green-900/20" : "bg-gray-100"}`} />
      <h2 className={`text-sm font-bold ${dark ? "text-white" : "text-gray-900"} uppercase tracking-[0.12em] shrink-0`}>
        {title}
      </h2>
    </motion.div>
  );
}

/* ── Animated Heartbeat Stars ── */
function StarRating({
  value,
  onChange
}: {
  value: number;
  onChange: (val: number) => void
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1 bg-gray-50 p-3 rounded-xl border border-gray-100 shadow-inner w-fit">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          type="button"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          whileHover={{ scale: 1.2, rotate: 10, filter: "drop-shadow(0 0 8px rgba(250, 204, 21, 0.5))" }}
          whileTap={{ scale: 0.9 }}
          className="relative transition-colors duration-200"
        >
          <Star
            className={`h-6 w-6 ${star <= (hovered || value)
              ? "text-yellow-400 fill-current"
              : "text-gray-200"
              }`}
          />
          {(star <= value) && (
            <motion.div
              layoutId="star-glow"
              className="absolute inset-0 blur-md bg-yellow-400/30 rounded-full -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          )}
        </motion.button>
      ))}
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

  const triggerSparkles = () => {
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const onContactSubmit = async (data: ContactFormData) => {
    setContactSubmitting(true);
    setContactStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "contact" }),
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
          type: "review",
          subject: "New Review Submission",
          feedback: data.feedback,
        }),
      });
      if (response.ok) {
        setReviewStatus("success");
        triggerSparkles();
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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as any }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.15 } },
    viewport: { once: true }
  };

  return (
    <div className="bg-white">
      {/* ── 1. HERO — THE DISPATCH CENTER ───────────────────── */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-black">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" as any }}
            src="/images/hero/hampi.webp"
            alt="Hampi Expedition"
            className="w-full h-full object-cover grayscale-[30%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(10,10,10,1) 100%)"
            }}
          />
        </div>

        <div className="absolute inset-0 text-green-500/10">
          <TopoTexture />
        </div>

        <motion.span
          aria-hidden="true"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 0.08 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute right-0 bottom-0 leading-none font-black tracking-tighter text-green-400 select-none pointer-events-none hidden md:block"
          style={{ fontSize: "clamp(100px, 15vw, 220px)" }}
        >
          CONTACT
        </motion.span>

        <div className="relative z-10 container mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <motion.div
              {...fadeInUp}
              className="flex items-center gap-4 mb-8"
            >
              <span className="h-px w-12 bg-green-500" />
              <span className="text-green-500 text-xs font-black uppercase tracking-[0.4em]">
                Beyond the Map — Live dispatch
              </span>
            </motion.div>
            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-black text-white leading-[0.85] tracking-tight mb-8"
              style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
            >
              Start Your <br />
              <span className="text-green-500 italic">Off-Route</span> Journey.
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl font-medium"
            >
              Have a question about a peak or a trail? Our veteran guides are standing by at the base camp.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 2. COMMS & FORM ─────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: "#fafafa" }}>
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Comms Cards */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-green-500" />
                <span className="text-gray-400 text-[11px] font-black uppercase tracking-[0.3em]">
                  Dispatch Channels
                </span>
              </div>

              {[
                {
                  href: `mailto:${COMPANY_INFO.email}`,
                  icon: Mail,
                  label: "Email",
                  value: COMPANY_INFO.email
                },
                {
                  href: `tel:+91${COMPANY_INFO.phone}`,
                  icon: Phone,
                  label: "Voice",
                  value: COMPANY_INFO.phoneFormatted
                },
                {
                  icon: MapPin,
                  label: "Base Camp",
                  value: "Pune, Maharashtra"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-start gap-6 p-7 rounded-[32px] bg-white border border-gray-100 hover:border-green-200 hover:shadow-[0_20px_50px_-10px_rgba(22,163,74,0.1)] transition-all duration-500"
                    >
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-700 group-hover:rotate-6 transition-all duration-500">
                        <item.icon className="h-5 w-5 text-green-700 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1.5">{item.label}</p>
                        <p className="text-gray-900 font-bold group-hover:text-green-700 transition-colors text-base tracking-tight">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-6 p-7 rounded-[32px] bg-white border border-gray-100">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-green-700" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1.5">{item.label}</p>
                        <p className="text-gray-900 font-bold text-base tracking-tight">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Socials */}
              <motion.div variants={fadeInUp} className="pt-8">
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-5">Social Frequency</p>
                <div className="flex gap-4">
                  {[
                    { href: COMPANY_INFO.whatsappLink, icon: WhatsAppColorIcon, label: "WhatsApp" },
                    { href: COMPANY_INFO.instagram, icon: InstagramColorIcon, label: "Instagram" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center hover:shadow-xl transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="h-8 w-8" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <SectionHeader index="01" title="Transmission Box" />
              <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={labelCls}>Operator Name</label>
                    <input
                      type="text"
                      {...contactForm.register("name", { required: true })}
                      className={inputCls}
                      placeholder="Your handle"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Secure Email</label>
                    <input
                      type="email"
                      {...contactForm.register("email", { required: true })}
                      className={inputCls}
                      placeholder="trekker@offrouteadventure.in"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Direct Line</label>
                    <input
                      type="tel"
                      {...contactForm.register("phone")}
                      className={inputCls}
                      placeholder="+91 --- --- ----"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelCls}>Objective (Subject)</label>
                    <input
                      type="text"
                      {...contactForm.register("subject", { required: true })}
                      className={inputCls}
                      placeholder="Inquiry / Feedback"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className={labelCls}>Mission Details</label>
                  <textarea
                    {...contactForm.register("message", { required: true })}
                    rows={5}
                    className={`${inputCls} resize-none`}
                    placeholder="Describe your query in detail..."
                  />
                </div>

                <AnimatePresence>
                  {contactStatus === "success" && (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-green-50 border border-green-200 rounded-2xl p-5 flex items-center gap-4"
                    >
                      <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-700" />
                      </div>
                      <span className="text-green-900 text-sm font-black uppercase tracking-wider">Signals Received! We&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={contactSubmitting}
                  whileHover={{ scale: 1.02, backgroundColor: "#059669" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-16 flex items-center justify-center gap-4 bg-green-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-green-600/20 disabled:opacity-60 text-sm uppercase tracking-[0.3em]"
                >
                  {contactSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      Send Transmission
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. TESTIMONIALS & RATING ──────────────────────── */}
      <section className="py-12 md:py-20 bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <motion.div
              {...fadeInUp}
              className="inline-flex items-center gap-2 mb-4 bg-green-950/30 px-4 py-1.5 rounded-full border border-green-900/50"
            >
              <Compass className="h-3 w-3 text-green-500 animate-spin-slow" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-green-400">
                Member reports
              </span>
            </motion.div>
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-[0.9]"
            >
              Voices from <br />
              <span className="text-green-500 italic">The Wilderness.</span>
            </motion.h2>
          </div>

          {/* Scrolling Carousel */}
          <div className="relative mb-12">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory px-4 md:px-0"
            >
              {testimonials.map((review, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex-none w-[280px] md:w-[350px] snap-center bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 relative group/card"
                >
                  <Quote className="absolute -top-4 -right-4 h-16 w-16 text-white/5 rotate-12 transition-transform group-hover/card:scale-110" />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${i < review.rating
                              ? "text-green-500 fill-current"
                              : "text-zinc-800 fill-current"
                              }`}
                          />
                        ))}
                      </div>
                      <p className="text-zinc-300 text-base font-medium mb-6 leading-relaxed tracking-tight">
                        &ldquo;{review.feedback}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-green-900/20 text-green-500 flex items-center justify-center text-xs font-black border border-green-500/20">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-white uppercase text-[9px] tracking-[0.2em]">{review.name}</p>
                        <p className="text-green-700 text-[10px] uppercase font-black tracking-[0.3em] mt-1.5">
                          {review.destination}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Rating Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] -mt-4 md:-mt-6 relative z-20"
          >
            <SectionHeader index="02" title="File Your Report" />
            <form onSubmit={reviewForm.handleSubmit(onReviewSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-7">
                <div className="space-y-2">
                  <label className={labelCls}>Field Operator Handle</label>
                  <input
                    type="text"
                    {...reviewForm.register("name", { required: true })}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className={labelCls}>Secure Email</label>
                  <input
                    type="email"
                    {...reviewForm.register("email", { required: true })}
                    className={inputCls}
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className={labelCls}>Mission Satisfaction (Stars)</label>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <StarRating
                    value={selectedRating}
                    onChange={(val) => {
                      setSelectedRating(val);
                      reviewForm.setValue("rating", val.toString());
                    }}
                  />
                  <AnimatePresence>
                    {selectedRating > 0 && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-green-700 font-black uppercase text-[10px] tracking-widest bg-green-50 px-4 py-2 rounded-full border border-green-100"
                      >
                        {selectedRating === 5 ? "Elite Expedition" : "Successful Summit"}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  type="hidden"
                  {...reviewForm.register("rating", { required: true })}
                />
              </div>

              <div className="space-y-2">
                <label className={labelCls}>Field Observations</label>
                <textarea
                  {...reviewForm.register("feedback", { required: true })}
                  rows={4}
                  className={`${inputCls} resize-none`}
                  placeholder="The route, the team, the experience..."
                />
              </div>

              <AnimatePresence>
                {reviewStatus === "success" && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-green-700 text-white rounded-[32px] p-8 text-center flex flex-col items-center gap-4 shadow-2xl shadow-green-600/40"
                  >
                    <CheckCircle className="h-10 w-10 text-white" />
                    <h3 className="font-black text-xl uppercase tracking-tighter">Transmission Secured!</h3>
                    <p className="text-green-50 text-xs font-medium opacity-90">Thank you for helping us chart the unknown. Stay wild.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {reviewStatus !== "success" && (
                <motion.button
                  type="submit"
                  disabled={reviewSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-12 flex items-center justify-center gap-4 bg-black text-white font-black rounded-xl transition-all shadow-2xl disabled:opacity-60 text-xs uppercase tracking-[0.3em]"
                >
                  {reviewSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Uploading Report...
                    </>
                  ) : (
                    <>
                      Archive Field Report
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
