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
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#f7f3ec]/30 -z-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column - Sticky Heading */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-bold tracking-wide mb-6">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    Package Details
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
                    What's{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                      Included
                    </span>
                  </h2>
                  
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-md">
                    Everything you need for a safe and memorable adventure. We believe in complete transparency with no hidden costs.
                  </p>

                  {/* Decorative Image */}
                  <div className="hidden lg:block relative h-72 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image 
                      src="https://res.cloudinary.com/dlgjwovla/image/upload/c_fill,f_auto,g_auto,q_auto,w_800/v1774371363/IMG-20251221-WA0005_huxwpf.jpg" 
                      alt="Vasota Fort Trekking Gear" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Inclusions/Exclusions */}
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="space-y-6"
                >
                  {/* Included */}
                  <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full blur-[50px] -mr-20 -mt-20 pointer-events-none group-hover:bg-green-100 transition-colors duration-500" />
                    
                    <div className="flex items-center gap-5 mb-8 relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-200/50 text-white transform group-hover:scale-110 transition-transform duration-500">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Included in package</h3>
                    </div>
                    
                    <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-8 relative">
                      {included.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3.5 w-3.5 text-green-700" />
                          </div>
                          <span className="font-semibold text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  {/* Not Included */}
                  <motion.div variants={fadeUp} className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-200 relative overflow-hidden group hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm text-red-500 transform group-hover:scale-110 transition-transform duration-500">
                        <XCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Not Included</h3>
                    </div>
                    
                    <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                      {notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 opacity-80">
                          <XCircle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CTA — CUSTOM PLANS ───────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dlgjwovla/image/upload/v1774371185/IMG_20260319_234929_440_wlzryq.jpg"
            alt="Custom adventure trip planning background – Off Route Adventure"
            fill
            sizes="100vw"
            className="object-cover grayscale-[60%] opacity-20"
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
