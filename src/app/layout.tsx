import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

// Dynamically import Footer with SSR enabled for SEO
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata: Metadata = {
  title: {
    default: "Off Route Adventure – Beyond the Map, Into the Wild",
    template: "%s | Off Route Adventure",
  },
  description:
    "Explore India with Off Route Adventure – Safe, Exciting, Affordable treks and tours. Book your next adventure to forts, waterfalls, and mountains across India.",
  keywords: [
    "trekking",
    "adventure",
    "tours",
    "India",
    "Maharashtra",
    "hiking",
    "camping",
    "travel",
  ],
  authors: [{ name: "Off Route Adventure" }],
  openGraph: {
    title: "Off Route Adventure – Beyond the Map, Into the Wild",
    description:
      "Explore India with Off Route Adventure – Safe, Exciting, Affordable treks and tours.",
    url: "https://offrouteadventure.com",
    siteName: "Off Route Adventure",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off Route Adventure – Beyond the Map, Into the Wild",
    description:
      "Explore India with Off Route Adventure – Safe, Exciting, Affordable treks and tours.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://offrouteadventure.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
