import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import GlobalJsonLd from "@/components/JsonLd";

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
    "Off Route Adventure offers safe, exciting & affordable trekking tours in Maharashtra. Explore forts like Harishchandragad, Kalsubai, Rajmachi & more. Book weekend treks from Pune & Mumbai. Guided Sahyadri treks, camping, and adventure travel across India.",
  keywords: [
    "trekking in Maharashtra",
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
    "Vasota jungle camping",
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
    "corporate trekking Maharashtra",
    "Andharban trek",
    "Dudhsagar Falls trip",
    "Manali tour package",
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
  alternates: {
    canonical: BASE_URL,
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
      </body>
    </html>
  );
}

