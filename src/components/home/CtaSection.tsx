import Link from "next/link";

export default function CtaSection() {
    return (
        <section className="py-12 bg-green-600">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready for Your Next Adventure?
                </h2>
                <p className="text-base text-green-100 mb-6 max-w-lg mx-auto">
                    Join thousands of happy adventurers who have explored India with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/book"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all text-sm"
                    >
                        Book Your Trip
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all text-sm"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
