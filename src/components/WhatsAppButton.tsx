"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={COMPANY_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
}
