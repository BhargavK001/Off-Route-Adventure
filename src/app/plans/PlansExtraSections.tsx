"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle, XCircle, Mountain, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Note: Use regular img or Image as needed

const included = [
  "Transportation (as mentioned in package)",
  "Experienced trek leader",
  "First aid support",
  "Meals (where applicable)",
  "Camping equipment (for camping trips)",
  "Entry fees and permits",
];

const notIncluded = [
  "Personal expenses",
  "Travel insurance",
  "Additional meals",
  "Tips and gratuities",
  "Personal trekking gear",
  "Anything not mentioned in inclusions",
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PlansExtraSections() {
  return (
    <>
      {/* ── 3. PACKAGE INCLUSIONS ───────────────────────────── */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-24" style={{ background: "#f7f3ec" }}>
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-10 shadow-none"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-green-500" />
              <span className="text-green-700 text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em]">
                Package Details
              </span>
              <span className="h-px w-8 bg-green-500" />
            </div>
            <h2
              className="font-black text-gray-900 leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
            >
              What&apos;s Included
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
              Everything you need for a safe and memorable adventure. No hidden
              costs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm"
          >
            {/* Included */}
            <motion.div variants={fadeUp} className="bg-white p-8 md:p-10">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
                <CheckCircle className="h-5 w-5 text-green-700" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-6">
                Included in package
              </h3>
              <ul className="space-y-4 text-sm md:text-base">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Not Included */}
            <motion.div variants={fadeUp} className="bg-gray-50/80 p-8 md:p-10">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-6 border border-red-100">
                <XCircle className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-6">
                Not Included
              </h3>
              <ul className="space-y-4 text-sm md:text-base">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500">
                    <XCircle className="h-4 w-4 text-red-300 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. CTA — CUSTOM PLANS ───────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dlgjwovla/image/upload/v1774371185/IMG_20260319_234929_440_wlzryq.jpg"
            alt="Custom trip background"
            className="w-full h-full object-cover grayscale-[60%] opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,26,10,0.95) 0%, rgba(10,10,10,0.9) 100%)",
            }}
          />
        </div>

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom center, rgba(21,128,61,0.18) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-10 py-16 md:py-24 text-center max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="w-14 h-14 mx-auto bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Mountain className="h-7 w-7 text-green-400" />
            </div>

            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-green-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                Custom Packages
              </span>
            </div>

            <h2
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
            >
              Can&apos;t Find What You&apos;re{" "}
              <span className="text-green-400">Looking For?</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8">
              We also offer custom packages for groups, college trips, and
              corporate events. Let&apos;s build the perfect expedition tailored to
              your pace and goals.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-green-950 text-sm md:text-base font-black rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Design Custom Trek <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
