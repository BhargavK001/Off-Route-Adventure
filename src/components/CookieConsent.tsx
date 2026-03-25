"use client";

import { useState, useEffect } from "react";
import { Cookie, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptConsent = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
    };

    const declineConsent = () => {
        localStorage.setItem("cookie-consent", "false");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="bg-white rounded-3xl shadow-2xl shadow-green-900/10 border border-green-50 p-6 md:p-8 relative overflow-hidden group">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500" />

                <div className="relative">
                    <div className="flex items-start gap-4 mb-5">
                        <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-green-600">
                            <Cookie className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">We respect your privacy</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We use cookies to enhance your experience and show you relevant ads. By clicking accept, you agree to our use of cookies.
                            </p>
                        </div>
                        <button
                            onClick={declineConsent}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <button
                            onClick={acceptConsent}
                            className="w-full sm:flex-1 py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-2xl transition-all shadow-lg shadow-green-200 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 className="h-4 w-4" />
                            Accept All
                        </button>
                        <Link
                            href="/privacy-policy"
                            className="w-full sm:w-auto text-center py-3 px-6 text-gray-500 hover:text-green-700 text-sm font-semibold transition-colors"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
