"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { studioConfig } from "@/data/config";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Home", href: "/", number: "01" },
  { name: "About Studio", href: "/about", number: "02" },
  { name: "Services", href: "/services", number: "03" },
  { name: "Projects", href: "/projects", number: "04" },
  { name: "Gallery", href: "/gallery", number: "05" },
  { name: "Testimonials", href: "/testimonials", number: "06" },
  { name: "Contact", href: "/contact", number: "07" },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-studio-obsidian/98 text-studio-ivory backdrop-blur-2xl px-6 py-8 sm:px-12 sm:py-10 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="group flex flex-col focus:outline-none"
        >
          <span className="font-serif text-xl tracking-wider text-studio-ivory">
            {studioConfig.name.toUpperCase()}
          </span>
          <span className="text-[9px] tracking-ultra text-studio-champagne/70 font-sans uppercase">
            {studioConfig.eyebrow}
          </span>
        </Link>

        <button
          onClick={onClose}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-studio-ivory transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-bronze"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex flex-col space-y-4 my-auto py-6" aria-label="Mobile Navigation Links">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`group flex items-center justify-between py-2 border-b border-white/5 transition-all duration-200 ${
                isActive
                  ? "text-studio-bronze"
                  : "text-studio-ivory/90 hover:text-studio-bronze"
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-studio-champagne/40">
                  {link.number}
                </span>
                <span className="font-serif text-2xl sm:text-3xl tracking-tight">
                  {link.name}
                </span>
              </div>
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </nav>

      {/* Footer Details inside Menu */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-studio-sand/70 font-sans">
        <div className="flex flex-col gap-1">
          <span className="uppercase tracking-widest text-[10px] text-studio-champagne/60">
            Studio Inquiries
          </span>
          <a
            href={`mailto:${studioConfig.email}`}
            className="text-studio-ivory hover:text-studio-bronze transition-colors"
          >
            {studioConfig.email}
          </a>
          <span>{studioConfig.phone}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={studioConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-studio-ivory hover:text-studio-bronze transition-all"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={studioConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-studio-ivory hover:text-studio-bronze transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent(
              studioConfig.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-studio-ivory hover:text-studio-bronze transition-all"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
