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

      <div className="relative container mx-auto px-4 max-w-6xl pt-10 pb-5">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-8 lg:gap-6">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/Off-Route-Logo.png"
                alt="Off Route Adventure Logo"
                width={40}
                height={40}
                className="object-contain rounded-full bg-white ring-2 ring-green-500/30"
              />
              <div>
                <span className="text-base font-bold tracking-tight">{COMPANY_INFO.name}</span>
                <p className="text-xs text-green-400 font-medium">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Explore India&apos;s most breathtaking trails and hidden gems. Safe, exciting, and affordable adventures await.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs"
                  >
                    <ArrowRight className="h-3 w-3 text-green-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="group flex items-start gap-2.5 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <Mail className="h-3.5 w-3.5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 mb-0.5">Email Us</p>
                    <p className="text-xs">{COMPANY_INFO.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${COMPANY_INFO.phone}`}
                  className="group flex items-start gap-2.5 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <Phone className="h-3.5 w-3.5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 mb-0.5">Call Us</p>
                    <p className="text-xs">{COMPANY_INFO.phoneFormatted}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <MapPin className="h-3.5 w-3.5 text-green-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 mb-0.5">Location</p>
                  <p className="text-xs">Pune, Maharashtra, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Follow Us — right side */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">
              Follow Us
            </h3>
            <p className="text-gray-400 text-xs mb-3">
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
                <InstagramColorIcon className="h-8 w-8" />
              </a>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppColorIcon className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-green-500 text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-green-500 text-xs transition-colors">
                Terms &amp; Conditions
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

