import React from "react";
import Link from "next/link";
import { studioConfig } from "@/data/config";
import { Instagram, Linkedin, Facebook, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-obsidian text-studio-ivory pt-20 sm:pt-28 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Pre-Footer Call to Action Banner */}
        <div className="pb-16 sm:pb-24 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-studio-champagne/80 font-sans block mb-4">
                06 — COMMENCE A DIALOGUE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]">
                Let&apos;s Create Your Space.
              </h2>
              <p className="mt-6 font-sans text-base sm:text-lg text-studio-sand/70 max-w-2xl font-light leading-relaxed">
                Whether you are conceiving a standalone private villa, a high-rise penthouse sanctuary, or a sensitive heritage restoration, our studio welcomes private commissions.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Start Your Project
              </Button>
              <Button href="/projects" variant="glass" size="lg">
                Explore Projects
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 py-16 sm:py-20 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="inline-block focus:outline-none">
              <span className="font-serif text-2xl sm:text-3xl tracking-wider text-studio-ivory block font-normal">
                {studioConfig.name.toUpperCase()}
              </span>
              <span className="text-[9px] tracking-ultra text-studio-champagne/70 font-sans uppercase font-medium mt-1 block">
                {studioConfig.eyebrow}
              </span>
            </Link>
            <p className="mt-6 font-sans text-sm text-studio-sand/70 leading-relaxed font-light max-w-sm">
              {studioConfig.description}
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href={studioConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-studio-ivory hover:text-studio-bronze flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={studioConfig.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-studio-ivory hover:text-studio-bronze flex items-center justify-center transition-all"
                aria-label="Pinterest"
              >
                <span className="font-serif font-bold text-sm leading-none">P</span>
              </a>
              <a
                href={studioConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-studio-ivory hover:text-studio-bronze flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={studioConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-studio-ivory hover:text-studio-bronze flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest text-studio-champagne/80 font-sans font-semibold block mb-6">
              Navigation
            </span>
            <ul className="space-y-3 font-sans text-sm font-light text-studio-sand/80">
              <li>
                <Link href="/" className="hover:text-studio-bronze transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-studio-bronze transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-studio-bronze transition-colors">
                  Architectural Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-studio-bronze transition-colors">
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-studio-bronze transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-studio-bronze transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-studio-bronze transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-studio-champagne/80 font-sans font-semibold block mb-6">
              Studio Location & Contact
            </span>
            <div className="space-y-4 font-sans text-sm font-light text-studio-sand/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-studio-bronze mt-1 shrink-0" />
                <span>{studioConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-studio-bronze shrink-0" />
                <a
                  href={`mailto:${studioConfig.email}`}
                  className="hover:text-studio-bronze transition-colors"
                >
                  {studioConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-studio-bronze shrink-0" />
                <a
                  href={`tel:${studioConfig.phone.replace(/\s+/g, "")}`}
                  className="hover:text-studio-bronze transition-colors"
                >
                  {studioConfig.phone}
                </a>
              </div>
              <div className="pt-2 text-xs text-studio-stone">
                <span className="font-semibold text-studio-champagne/70 block uppercase tracking-widest mb-1">
                  Studio Hours
                </span>
                {studioConfig.workingHours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-studio-stone font-light">
          <div>
            © {new Date().getFullYear()} {studioConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-studio-ivory transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">/</span>
            <Link href="/terms" className="hover:text-studio-ivory transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
