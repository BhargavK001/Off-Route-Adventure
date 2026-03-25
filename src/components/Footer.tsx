import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { InstagramColorIcon, WhatsAppColorIcon } from "./SocialIcons";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500" />

      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative container mx-auto px-4 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-10 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Off-Route-Logo.png"
                alt="Off Route Adventure Logo"
                width={48}
                height={48}
                className="object-contain rounded-full bg-white ring-2 ring-green-500/30"
              />
              <div>
                <span className="text-lg font-bold tracking-tight">{COMPANY_INFO.name}</span>
                <p className="text-xs text-green-400 font-medium">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Explore India&apos;s most breathtaking trails and hidden gems. Safe, exciting, and affordable adventures await.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-green-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <Mail className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email Us</p>
                    <p className="text-sm">{COMPANY_INFO.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${COMPANY_INFO.phone}`}
                  className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <Phone className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Call Us</p>
                    <p className="text-sm">{COMPANY_INFO.phoneFormatted}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <p className="text-sm">Pune, Maharashtra, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Follow Us — right side */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              Follow Us
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay connected for trek updates and adventure stories.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                aria-label="Instagram"
              >
                <InstagramColorIcon className="h-10 w-10" />
              </a>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppColorIcon className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-green-500 text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-green-500 text-xs transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <p className="text-gray-600 text-xs">
            Crafted with ❤️ for adventure seekers
          </p>
        </div>
      </div>
    </footer>
  );
}

