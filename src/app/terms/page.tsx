import { Metadata } from "next";
import { FileText, ClipboardCheck, Info, MapPin, AlertCircle, HelpCircle, Bell } from "lucide-react";
import { BreadcrumbSchema } from "@/components/JsonLd";

const BASE_URL = "https://www.offrouteadventure.in";

export const metadata: Metadata = {
    title: "Terms and Conditions | Off Route Adventure",
    description: "Read the rules and guidelines for using the Off Route Adventure website and booking our treks and adventure tours.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsConditions() {
    const lastUpdated = "March 25, 2026";

    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", href: "/" },
                    { name: "Terms and Conditions", href: "/terms" },
                ]}
            />

            {/* Hero Section */}
            <section className="py-20 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
                        <p className="text-lg text-gray-600">
                            Clear rules for safe adventures. By using our site, you agree to these terms.
                        </p>
                        <p className="mt-4 text-sm text-gray-500 font-medium">Last Updated: {lastUpdated}</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">

                        <div className="grid gap-12">

                            {/* Acceptance of Terms */}
                            <div className="prose prose-green max-w-none">
                                <div className="flex items-center gap-3 mb-4">
                                    <ClipboardCheck className="h-6 w-6 text-green-600" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Acceptance of Terms</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Welcome to <strong>Off Route Adventure</strong>. These Terms and Conditions govern your use of our website and our trekking services. By accessing or using our website, you agree to follow and be bound by these rules. If you don&apos;t agree with any part of these terms, we kindly ask you not to use our site or services.
                                </p>
                            </div>

                            {/* Booking & Payments */}
                            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <FileText className="h-6 w-6 text-green-600" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Bookings & Payments</h2>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        We try to make booking your next adventure as easy as possible. Here&apos;s how it works:
                                    </p>
                                    <ul className="text-gray-700 space-y-2 text-sm ml-4 list-disc">
                                        <li>All bookings are subject to availability. Exploring the mountains has its limits!</li>
                                        <li>Full or partial payment is required to confirm your spot on a trek.</li>
                                        <li>We reserve the right to cancel or reschedule a trek due to weather conditions or safety concerns. Your safety is non-negotiable.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Cancellation & Refunds */}
                            <div className="prose prose-green max-w-none">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertCircle className="h-6 w-6 text-green-600" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Cancellation & Refunds</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    We understand that plans change. However, as an adventure organization, we make non-refundable arrangements for your trek in advance. Our refund policy is as follows:
                                </p>
                                <ul className="text-gray-700 space-y-2 mt-4">
                                    <li><strong>7+ Days before trek:</strong> 50% refund or full credit for a future trek.</li>
                                    <li><strong>Less than 7 days:</strong> No refund possible as preparations are already finalized.</li>
                                    <li><strong>No Show:</strong> No refund or credit will be provided.</li>
                                </ul>
                            </div>

                            {/* Health & Safety */}
                            <div className="prose prose-green max-w-none">
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="h-6 w-6 text-green-600" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Health & Safety Liability</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Adventure activities involve inherent risks. By participating, you acknowledge these risks. We require all participants to follow the instructions of our certified trek leaders at all times. Off Route Adventure is not liable for injuries or loss of property resulting from non-compliance with safety guidelines or unpredictable natural events.
                                </p>
                            </div>

                            {/* Site Content */}
                            <div className="prose prose-green max-w-none">
                                <div className="flex items-center gap-3 mb-4">
                                    <Info className="h-6 w-6 text-green-600" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Intellectual Property</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    All content on this site, including trek route descriptions, photographs, and our logo, is the property of Off Route Adventure. Please don&apos;t use our content for commercial purposes without our written permission. We love it when you share our treks on social media, just give us a shout-out!
                                </p>
                            </div>

                            {/* Changes to Terms */}
                            <div className="prose prose-green max-w-none">
                                <div className="flex items-center gap-3 mb-4">
                                    <Bell className="h-6 w-6 text-green-600" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Changes to These Terms</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    We might update these terms from time to time as our small organization grows. When we do, we&apos;ll update the date at the top of this page. We encourage you to check back whenever you&apos;re planning a new adventure with us.
                                </p>
                            </div>

                            {/* Contact Us */}
                            <div className="prose prose-green max-w-none border-t border-gray-100 pt-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <HelpCircle className="h-6 w-6 text-green-600" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Need Clarification?</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    If something in these terms isn&apos;t clear, just ask! We&apos;re trekkers, not lawyers, and we&apos;re here to make things simple.
                                </p>
                                <p className="text-gray-900 font-bold mt-4">Email: off.route.adventure.11@gmail.com</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
