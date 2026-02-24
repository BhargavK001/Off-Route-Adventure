import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Off Route Adventure – Beyond the Map, Into the Wild",
    template: "%s | Off Route Adventure",
  },
  icons: {
    icon: "/Off-Route-Logo.png",
    shortcut: "/Off-Route-Logo.png",
    apple: "/Off-Route-Logo.png",
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
    images: [
      {
        url: "/Off-Route-Logo.png",
        width: 800,
        height: 600,
        alt: "Off Route Adventure Logo",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off Route Adventure – Beyond the Map, Into the Wild",
    description:
      "Explore India with Off Route Adventure – Safe, Exciting, Affordable treks and tours.",
    images: ["/Off-Route-Logo.png"],
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
        <main className="pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
