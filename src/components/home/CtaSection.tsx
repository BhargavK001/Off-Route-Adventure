import Link from "next/link";

export default function CtaSection() {
    return (
        <section className="py-20 bg-green-600">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready for Your Next Adventure?
                </h2>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                    Join thousands of happy adventurers who have explored India with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/book"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all"
                    >
                        Book Your Trip
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
