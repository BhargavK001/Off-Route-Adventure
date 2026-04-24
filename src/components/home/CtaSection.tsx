"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100 },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CtaSection() {
    const headingText = "Ready for Your Next Adventure?".split(" ");
    
    return (
        <section className="relative overflow-hidden bg-gray-950 text-white py-14 md:py-20" aria-label="Book your adventure with Off Route">
            {/* Background gradient & glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/40 via-gray-950 to-gray-950" />
                <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-green-500/10 blur-[100px] rounded-full" />
                <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-emerald-800/10 blur-[100px] rounded-full" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-10 text-center max-w-3xl">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="h-px w-8 bg-green-500/50" />
                        <span className="text-green-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                            Take the leap
                        </span>
                        <span className="h-px w-8 bg-green-500/50" />
                    </div>
                </motion.div>

                <motion.h2 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="font-black leading-tight tracking-tight mb-5 flex flex-wrap justify-center gap-x-3 gap-y-2"
                    style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
                >
                    {headingText.map((word, i) => {
                        // The last word "Adventure?" is styled green italic
                        if (i === headingText.length - 1) {
                            return (
                                <motion.span key={i} variants={wordVariants} className="text-green-500 italic block">
                                    {word}
                                </motion.span>
                            );
                        }
                        return (
                            <motion.span key={i} variants={wordVariants} className="block">
                                {word}
                            </motion.span>
                        );
                    })}
                </motion.h2>
                
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                >
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8">
                        Join thousands of happy adventurers who have explored India with us. Book your trip today or contact us to build a custom expedition.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/plans"
                            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white hover:bg-gray-100 text-green-950 text-sm md:text-base font-black rounded-xl transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
                        >
                            Explore Packages <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-transparent hover:bg-white/5 border border-white/20 text-white text-sm md:text-base font-bold rounded-xl transition-all duration-300 w-full sm:w-auto"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
