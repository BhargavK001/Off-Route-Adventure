import { Metadata } from "next";
import { Shield, Lock, Eye, FileText, Bell, Globe } from "lucide-react";
import { BreadcrumbSchema } from "@/components/JsonLd";

const BASE_URL = "https://www.offrouteadventure.in";

export const metadata: Metadata = {
    title: "Privacy Policy | Off Route Adventure",
    description: "Learn how Off Route Adventure collects, uses, and protects your personal information. Our privacy policy explains our commitment to your data security.",
    alternates: {
        canonical: "/privacy-policy",
    },
};

export default function PrivacyPolicy() {
    const lastUpdated = "March 25, 2026";

    return (
        <>
            <BreadcrumbSchema
                items={[
                    { name: "Home", href: "/" },
                    { name: "Privacy Policy", href: "/privacy-policy" },
                ]}
            />

            {/* Hero Section */}
            <section className="py-20 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
                        <p className="text-lg text-gray-600">
                            Your trust is our most valuable asset. This policy explains how we handle your information with the same care we take on our treks.
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

                            {/* Introduction */}
                            <div className="prose prose-green max-w-none">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="h-6 w-6 text-green-700" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Introduction</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Welcome to <strong>Off Route Adventure</strong>. We believe that exploring the wild should be safe, and so should your digital experience with us. This Privacy Policy details the types of personal information we receive and collect when you use our website, and how we safeguard that information.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    By using our site, you agree to the collection and use of information in accordance with this policy. We don&apos;t sell your data—period. We only use it to make your trek bookings smoother and our site better.
                                </p>
                            </div>

                            {/* Information Collection */}
                            <div className="prose prose-green max-w-none">
                                <div className="flex items-center gap-3 mb-4">
                                    <Eye className="h-6 w-6 text-green-700" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    When you visit Off Route Adventure, we might collect info in two ways:
                                </p>
                                <ul className="text-gray-700 space-y-2 mt-4">
                                    <li><strong>Personal Info:</strong> This includes your name, email address, and phone number when you fill out a contact form or book a trek. We need this to send you trek details and emergency updates.</li>
                                    <li><strong>Usage Data:</strong> We collect non-identifying info like your browser type, the pages you visit, and how long you stay. This helps us understand which treks are popular so we can plan more of them!</li>
                                </ul>
                            </div>

                            {/* AdSense and Cookies */}
                            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <Bell className="h-6 w-6 text-green-700" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Cookies & Advertising</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    We use cookies to enhance your experience. A cookie is a small file stored on your computer that helps us remember your preferences.
                                </p>
                                <div className="mt-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Google AdSense</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        We use Google AdSense to serve ads when you visit our website. Google, as a third-party vendor, uses cookies (like the DART cookie) to serve ads based on your visit to this and other sites on the Internet.
                                    </p>
                                    <p className="text-gray-700 text-sm leading-relaxed italic">
                                        You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
                                    </p>
                                </div>
                            </div>

                            {/* How We Use Info */}
                            <div className="prose prose-green max-w-none">
                                <div className="flex items-center gap-3 mb-4">
                                    <Globe className="h-6 w-6 text-green-700" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Data</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    We use your information effectively to:
                                </p>
                                <ul className="text-gray-700 space-y-2 mt-4">
                                    <li>Provide and maintain our service, including monitoring the usage of our Service.</li>
                                    <li>Manage your Trek Bookings and keep you updated on itinerary changes.</li>
                                    <li>Contact you with newsletters or marketing materials (only if you&apos;ve expressed interest).</li>
                                    <li>Improve our website based on the feedback and info we receive from you.</li>
                                </ul>
                            </div>

                            {/* Data Security */}
                            <div className="prose prose-green max-w-none">
                                <div className="flex items-center gap-3 mb-4">
                                    <Lock className="h-6 w-6 text-green-700" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Security of Your Data</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. We use SSL encryption across our entire site to keep your connection private.
                                </p>
                            </div>

                            {/* Contact Us */}
                            <div className="prose prose-green max-w-none border-t border-gray-100 pt-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <FileText className="h-6 w-6 text-green-700" />
                                    <h2 className="text-2xl font-bold text-gray-900 m-0">Questions?</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    If you have any questions about this Privacy Policy, please reach out to us. We&apos;re happy to clarify anything.
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
