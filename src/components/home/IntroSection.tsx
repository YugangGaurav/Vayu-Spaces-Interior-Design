import React from "react";
import Image from "next/image";
import Link from "next/link";
import { studioStats } from "@/data/about";
import { Button } from "@/components/ui/Button";

export const IntroSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-studio-ivory text-studio-obsidian">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Architectural Image on Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden border border-studio-charcoal/10 bg-studio-sand/40">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="Architectural living volume with natural daylight in Bangalore"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Architectural Floating Caption Box */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 max-w-xs glass-card p-6 border border-studio-charcoal/10 shadow-lg">
              <span className="text-[10px] tracking-widest uppercase font-mono text-studio-bronzeDark block">
                Spatial Ethos
              </span>
              <p className="mt-2 font-serif text-lg text-studio-obsidian leading-snug">
                “Light and void are the primary building blocks of tranquility.”
              </p>
            </div>
          </div>

          {/* Editorial Text on Right */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 text-xs tracking-widest uppercase font-sans text-studio-bronzeDark mb-4">
              <span>01</span>
              <span className="opacity-40">—</span>
              <span>PHILOSOPHY & ETHOS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.08] text-studio-obsidian">
              We Design Spaces <br />
              With Character.
            </h2>

            <div className="mt-8 space-y-5 font-sans text-base sm:text-lg text-studio-stone font-light leading-relaxed">
              <p>
                At Vayu Spaces, we believe a home in Bangalore should be a sanctuary—a private refuge where architecture, human ritual, and natural materiality converge in quiet elegance.
              </p>
              <p>
                Rather than adhering to fleeting decorative trends, our work is grounded in spatial permanence and functionality. We chisel away the unnecessary to reveal honest textures: hand-troweled lime wash, monolithic stone slabs, and warm timber joinery that patinas with dignity over decades.
              </p>
              <p>
                Every project begins with deep listening. We translate the unique rhythm of your daily life into tailored volumes where light breathes freely and every corner holds intention.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <Button href="/about" variant="outline" size="md" showArrow>
                About Our Studio
              </Button>
              <Link
                href="/services"
                className="text-xs font-sans tracking-widest uppercase text-studio-charcoal/70 hover:text-studio-bronzeDark transition-colors font-medium border-b border-transparent hover:border-studio-bronzeDark pb-0.5"
              >
                Our Services →
              </Link>
            </div>
          </div>
        </div>

        {/* Live Statistics Counters Grid */}
        <div className="mt-24 sm:mt-32 pt-16 border-t border-studio-charcoal/10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {studioStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-studio-obsidian tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold text-studio-charcoal">
                {stat.label}
              </span>
              <p className="mt-1.5 text-xs text-studio-stone/80 font-light leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
