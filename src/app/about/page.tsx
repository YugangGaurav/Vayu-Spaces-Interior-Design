import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { studioConfig } from "@/data/config";
import { studioStats, processSteps, studioValues, studioLeadership } from "@/data/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Studio — Interior Architecture & Design in Bangalore",
  description:
    "Discover the architectural philosophy, craftsmanship methodology, and Bangalore service areas of Vayu Spaces.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-studio-ivory text-studio-obsidian">
      {/* Hero Title Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24 border-b border-studio-charcoal/10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-studio-bronzeDark mb-4">
            <span>ABOUT VAYU SPACES</span>
            <span className="opacity-40">—</span>
            <span>BANGALORE, INDIA</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-studio-obsidian tracking-tight leading-[1.05]">
            Crafting Quiet Sanctuaries <br />
            Where Life Breathes.
          </h1>
          <p className="mt-8 font-sans text-lg sm:text-xl text-studio-stone font-light leading-relaxed max-w-3xl">
            Vayu Spaces is a private interior architecture and design practice based in Indiranagar, Bangalore, undertaking bespoke residential, villa, and penthouse commissions across the city.
          </p>
        </div>
      </section>

      {/* Studio Image & Narrative Split */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-studio-charcoal/10 bg-studio-sand/40">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85"
                alt="Architectural study of natural materials and spatial volume in Bangalore"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 font-sans text-base sm:text-lg text-studio-stone font-light leading-relaxed">
            <h2 className="font-serif text-3xl sm:text-4xl text-studio-obsidian font-normal">
              Architecture Built from Within.
            </h2>
            <p>
              In classical Sanskrit thought, <em>Vayu</em> embodies the subtle vital wind—the invisible breath that animates physical form and brings spatial harmony into being. We adopted this philosophy as our foundational design principle.
            </p>
            <p>
              An interior should never feel like a superficial decorative shell. In Bangalore, a home must emerge organically from the site&apos;s natural cross-ventilation, morning sun orientation, lush garden views, and the intimate daily habits of the inhabitants.
            </p>
            <p>
              By treating volume, void, shadow, and tactile materiality with equal architectural gravity, we craft homes that provide lasting sanctuary from the frantic tempo of urban life.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 pt-16 border-t border-studio-charcoal/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {studioStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-serif text-4xl sm:text-5xl font-light text-studio-obsidian">
                {stat.value}
              </span>
              <span className="mt-2 text-xs font-sans uppercase tracking-widest font-semibold text-studio-charcoal">
                {stat.label}
              </span>
              <p className="mt-1 text-xs text-studio-stone font-light leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The 6-Step Design Process */}
      <section className="py-24 sm:py-32 bg-studio-cream border-t border-studio-charcoal/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            number="02"
            eyebrow="METHODOLOGY & PHASING"
            title="The Architectural Journey."
            subtitle="Our disciplined 6-stage process ensures artistic fidelity, financial transparency, and stress-free execution from concept to handover."
            align="split"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <GlassCard
                key={step.number}
                padding="md"
                className="flex flex-col justify-between border-studio-charcoal/10 hover:border-studio-bronze/40 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-studio-charcoal/10 pb-4 mb-5">
                    <span className="font-mono text-xs tracking-widest font-semibold text-studio-bronzeDark">
                      PHASE {step.number}
                    </span>
                    <span className="text-[11px] font-sans tracking-wide text-studio-stone">
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-studio-obsidian font-normal">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-studio-bronzeDark font-sans tracking-wide">
                    {step.subtitle}
                  </p>
                  <p className="mt-4 text-sm text-studio-stone font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bangalore Service Enclaves */}
      <section className="py-20 sm:py-28 bg-studio-ivory border-t border-studio-charcoal/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            number="03"
            eyebrow="BANGALORE SERVICE AREAS"
            title="Active Studio Practice Across Prime Bangalore."
            subtitle="From heritage bungalows in Central & South Bangalore to contemporary high-rises and private villa communities."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mt-12">
            {studioConfig.serviceAreas.map((area) => (
              <div
                key={area}
                className="p-5 bg-white/70 border border-studio-charcoal/10 flex items-center gap-3 glass-card"
              >
                <div className="w-8 h-8 rounded-full bg-studio-bronze/15 text-studio-bronzeDark flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-serif text-lg text-studio-obsidian block">
                    {area}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-sans text-studio-stone">
                    Residential & Commercial
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Studio Values */}
      <section className="py-24 sm:py-32 bg-studio-cream border-t border-studio-charcoal/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            number="04"
            eyebrow="CORE PRINCIPLES"
            title="The Values That Guide Our Craft."
            subtitle="The uncompromising standards that shape every architectural decision in our studio."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {studioValues.map((val) => (
              <div
                key={val.number}
                className="pt-6 border-t-2 border-studio-charcoal/15 flex flex-col"
              >
                <span className="font-mono text-xs font-semibold text-studio-bronzeDark">
                  {val.number}
                </span>
                <h3 className="mt-3 font-serif text-xl sm:text-2xl text-studio-obsidian">
                  {val.title}
                </h3>
                <p className="mt-3 text-sm text-studio-stone font-light leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Leadership */}
      <section className="py-24 sm:py-32 bg-studio-ivory border-t border-studio-charcoal/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            number="05"
            eyebrow="STUDIO DIRECTORS"
            title="Leadership & Vision."
            subtitle="Headed by architects and material researchers passionate about quiet luxury and modern Bangalore living."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {studioLeadership.map((leader) => (
              <div key={leader.name} className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                <div className="relative w-full sm:w-48 aspect-[3/4] shrink-0 overflow-hidden border border-studio-charcoal/10 bg-studio-sand/40">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-studio-obsidian">
                    {leader.name}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans font-medium block mt-1">
                    {leader.role}
                  </span>
                  <p className="mt-4 text-sm text-studio-stone font-light leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-studio-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl text-studio-obsidian">
                Planning an interior project in Bangalore?
              </h3>
              <p className="text-sm text-studio-stone font-light mt-1">
                We accept a limited number of residential and villa commissions each calendar year.
              </p>
            </div>
            <Button href="/contact" variant="primary" size="md" showArrow>
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
