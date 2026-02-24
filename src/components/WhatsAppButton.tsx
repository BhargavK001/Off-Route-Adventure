"use client";

import { COMPANY_INFO } from "@/lib/constants";
import { WhatsAppColorIcon } from "./SocialIcons";

export default function WhatsAppButton() {
  return (
    <a
      href={COMPANY_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all hover:scale-110 drop-shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppColorIcon className="w-16 h-16" />
    </a>
  );
}
