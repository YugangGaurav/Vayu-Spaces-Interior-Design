"use client";

import React from "react";
import Image from "next/image";
import { studioConfig } from "@/data/config";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-end justify-start pt-32 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12 overflow-hidden bg-studio-obsidian">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
          alt="Atmospheric sunlit architectural interior in Bangalore designed by Vayu Spaces"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.78] contrast-[1.05] scale-100 animate-in fade-in zoom-in-105 duration-1000"
        />
        {/* Layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-obsidian via-studio-obsidian/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-studio-obsidian/70 via-studio-obsidian/20 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-studio-champagne text-[11px] tracking-widest uppercase font-sans mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-studio-bronze animate-pulse" />
          <span>{studioConfig.eyebrow}</span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-studio-ivory tracking-tight leading-[1.04] text-balance">
          Spaces Designed <br className="hidden sm:inline" />
          Around You.
        </h1>

        {/* Supporting text */}
        <p className="mt-6 sm:mt-8 font-sans text-base sm:text-xl text-studio-sand/85 font-light leading-relaxed max-w-2xl text-pretty">
          Thoughtful interiors that bring together functionality, personality and timeless design.
        </p>

        {/* CTA Actions */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          <Button href="/contact" variant="primary" size="lg" showArrow>
            Start Your Project
          </Button>
          <Button href="/projects" variant="glass" size="lg">
            Explore Our Work
          </Button>
        </div>

        {/* Studio Location / Quick Meta Floating Ribbon */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-12 text-xs font-sans text-studio-sand/70 tracking-widest uppercase">
          <div>
            <span className="text-studio-champagne/60 block text-[10px]">Studio Location</span>
            <span className="text-white font-medium">Bangalore, India</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/15" />
          <div>
            <span className="text-studio-champagne/60 block text-[10px]">Specialization</span>
            <span className="text-white font-medium">Villas, Apartments & Penthouses</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/15" />
          <div>
            <span className="text-studio-champagne/60 block text-[10px]">Execution</span>
            <span className="text-white font-medium">End-to-End Turnkey Delivery</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2 text-studio-sand/70 pointer-events-none select-none">
        <span className="text-[10px] tracking-ultra uppercase font-sans rotate-90 origin-right translate-x-2">
          SCROLL
        </span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden mt-6">
          <div className="w-full h-1/2 bg-studio-bronze animate-bounce" />
        </div>
      </div>
    </section>
  );
};
