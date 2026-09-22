import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Design Services in Bangalore — Villas, Apartments & Turnkey Execution",
  description:
    "Explore Vayu Spaces' 10 comprehensive interior design services in Bangalore: residential interiors, apartments, luxury villas, living room design, modular kitchens, and turnkey projects.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-studio-ivory text-studio-obsidian">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16 border-b border-studio-charcoal/10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-studio-bronzeDark mb-4">
            <span>ARCHITECTURAL DISCIPLINES · BANGALORE</span>
            <span className="opacity-40">—</span>
            <span>END-TO-END PRACTICE</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-studio-obsidian tracking-tight leading-[1.05]">
            Thoughtful Practice. <br />
            Uncompromising Realization.
          </h1>
          <p className="mt-8 font-sans text-lg sm:text-xl text-studio-stone font-light leading-relaxed max-w-3xl">
            From preliminary volumetric space planning and modular kitchen engineering to fine woodwork fabrication and turnkey white-glove delivery across Bangalore.
          </p>
        </div>

        {/* Quick Service Anchor Navigation */}
        <div className="mt-12 pt-8 border-t border-studio-charcoal/10">
          <span className="text-[10px] uppercase tracking-ultra font-mono text-studio-stone block mb-4">
            QUICK SERVICE DIRECTORY
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-3.5 py-1.5 bg-white/70 hover:bg-studio-obsidian hover:text-white border border-studio-charcoal/15 text-xs font-sans tracking-wide text-studio-charcoal transition-all"
              >
                {service.number} · {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive Services Section */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="space-y-24 sm:space-y-36">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-12 border-t border-studio-charcoal/10 first:border-0 first:pt-0"
              >
                {/* Visual Image Showcase */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-studio-charcoal/10 bg-studio-sand/40">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Service Text & Deliverables */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs font-mono font-semibold tracking-widest text-studio-bronzeDark mb-3">
                    <span>{service.number}</span>
                    <span className="opacity-40">/</span>
                    <span className="uppercase font-sans tracking-widest">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-studio-obsidian font-normal">
                    {service.title}
                  </h2>

                  <p className="mt-2 text-sm uppercase tracking-wide font-sans text-studio-bronzeDark">
                    {service.subtitle}
                  </p>

                  <p className="mt-5 font-sans text-base text-studio-stone font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-8 pt-6 border-t border-studio-charcoal/10">
                    <span className="text-xs uppercase tracking-widest font-sans font-semibold text-studio-charcoal block mb-4">
                      Key Deliverables & Specifications
                    </span>
                    <ul className="space-y-3 font-sans text-sm text-studio-stone font-light">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-studio-bronzeDark shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <Button href="/contact" variant="outline" size="sm" showArrow>
                      Book Consultation for This Service
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-24 bg-studio-cream border-t border-studio-charcoal/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans block mb-3">
            BANGALORE STUDIO CONSULTATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-obsidian">
            Tailored Architectural Scope for Every Scale.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-studio-stone font-light leading-relaxed">
            Every architectural project begins with an exploratory design dialogue. We examine your spatial brief, architectural floor plans, and aesthetic aspirations to determine the ideal collaborative approach.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Start Your Project
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              Explore Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
