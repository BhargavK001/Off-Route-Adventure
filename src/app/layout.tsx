import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import GlobalJsonLd from "@/components/JsonLd";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const BASE_URL = "https://www.offrouteadventure.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#15803d",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Off Route Adventure – Trekking in Maharashtra | Adventure Tours India",
    template: "%s | Off Route Adventure",
  },
  icons: {
    icon: "/Off-Route-Logo.png",
    shortcut: "/Off-Route-Logo.png",
    apple: "/Off-Route-Logo.png",
  },
  description:
    "Off Route Adventure offers safe, trusted & affordable trekking tours in Maharashtra for 2025-2026. Explore authentic offbeat forts, low-budget weekend trips from Pune & Mumbai. Your trusted adventure trip planner for Sahyadri treks and India tours.",
  keywords: [
    "trekking in Maharashtra 2025",
    "trekking in Maharashtra 2026",
    "cheap trekking packages Maharashtra",
    "low budget trip planner India",
    "trusted adventure tours",
    "authentic trekking experiences",
    "best treks Maharashtra 2026",
    "adventure tours Maharashtra",
    "Sahyadri treks",
    "trekking near Pune",
    "trekking near Mumbai",
    "Maharashtra trekking packages",
    "Kalsubai trek",
    "Kalsubai Peak",
    "highest peak in Maharashtra",
    "Vasota trek",
    "Vasota Fort trek",
    "Harishchandragad trek",
    "Rajmachi fort trek",
    "Lohagad fort trek",
    "Bhimashankar trek",
    "Sinhagad fort trek",
    "weekend treks from Pune",
    "fort trekking Maharashtra",
    "camping in Maharashtra",
    "Pawna Lake camping",
    "adventure travel India",
    "hiking in Maharashtra",
    "affordable trekking packages Maharashtra",
    "guided trekking tours Maharashtra",
    "Andharban Jungle Trek",
    "Andharban dark forest trek",
    "Devkund Waterfall trek",
    "Sandhan Valley trek",
    "Valley of Shadows trek",
    "Harihar Fort trek",
    "AMK Trek",
    "monsoon treks Maharashtra 2025",
    "monsoon treks Maharashtra 2026",
    "night trekking near Pune",
    "offbeat destinations near Mumbai",
    "hidden gems Sahyadri 2025",
    "hidden gems Sahyadri 2026",
    "best treks Maharashtra",
  ],
  authors: [{ name: "Off Route Adventure" }],
  creator: "Off Route Adventure",
  publisher: "Off Route Adventure",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Off Route Adventure – Trekking in Maharashtra | Adventure Tours India",
    description:
      "Explore Maharashtra with Off Route Adventure — safe, exciting & affordable treks to Harishchandragad, Kalsubai, Rajmachi, Lohagad & more. Weekend treks from Pune. Book Now!",
    url: BASE_URL,
    siteName: "Off Route Adventure",
    images: [
      {
        url: `${BASE_URL}/Off-Route-Logo.png`,
        width: 800,
        height: 600,
        alt: "Off Route Adventure – Trekking & Adventure Tours in Maharashtra, India",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_IN",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off Route Adventure – Trekking in Maharashtra",
    description:
      "Safe, exciting & affordable treks in Maharashtra. Harishchandragad, Kalsubai, Rajmachi & more. Book your adventure today!",
    images: [
      {
        url: `${BASE_URL}/Off-Route-Logo.png`,
        alt: "Off Route Adventure Logo",
      },
    ],
    creator: "@offrouteadventure",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.5204;73.8567",
    ICBM: "18.5204, 73.8567",
    "revisit-after": "7 days",
    "rating": "general",
    "google-adsense-account": "ca-pub-9815394093320774"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable} antialiased font-sans`}>
        <GlobalJsonLd />
        <Header />
        <main className="pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9815394093320774"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}


