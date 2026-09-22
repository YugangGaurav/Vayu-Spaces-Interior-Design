"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { studioConfig } from "@/data/config";

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const encodedMessage = encodeURIComponent(studioConfig.whatsappMessage);
  const whatsappUrl = `https://wa.me/${studioConfig.whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on desktop */}
      <div
        className={`hidden sm:block px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-300 pointer-events-none glass-card ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
        aria-hidden="true"
      >
        <span className="text-studio-charcoal font-medium">Chat on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Connect with Vayu Spaces Studio on WhatsApp"
      >
        {/* Subtle pulsing background ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10 group-hover:opacity-0"
          aria-hidden="true"
        />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
      </a>
    </div>
  );
};
