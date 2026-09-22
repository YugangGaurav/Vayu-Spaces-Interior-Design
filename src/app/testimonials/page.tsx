import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Client Testimonials & Patrons — Vayu Spaces",
  description:
    "Read reflections and experiences from private homeowners, art collectors, and patrons who partnered with Vayu Spaces.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-studio-ivory text-studio-obsidian min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24 border-b border-studio-charcoal/10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-studio-bronzeDark mb-4">
            <span>PATRON REFLECTIONS</span>
            <span className="opacity-40">—</span>
            <span>EXPERIENCES OF SANCTUARY</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-studio-obsidian tracking-tight leading-[1.05]">
            In the Words <br />
            of Our Patrons.
          </h1>
          <p className="mt-8 font-sans text-lg sm:text-xl text-studio-stone font-light leading-relaxed max-w-3xl">
            Designing a home is an intimate collaboration of trust, vulnerability, and shared artistic vision. Here is how our patrons describe living within their realized spaces.
          </p>
        </div>
      </section>

      {/* Editorial Testimonials Stacked List */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="space-y-16 sm:space-y-24">
          {testimonials.map((test, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={test.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 border-b border-studio-charcoal/10 last:border-0"
              >
                {/* Number & Project Link on Left */}
                <div className="lg:col-span-4 flex flex-col">
                  <span className="font-mono text-xs tracking-widest text-studio-bronzeDark font-semibold">
                    REF. 0{index + 1}
                  </span>
                  <span className="mt-4 font-serif text-2xl sm:text-3xl text-studio-obsidian font-normal">
                    {test.client}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-sans text-studio-stone mt-1">
                    {test.role}
                  </span>

                  <div className="mt-6 pt-4 border-t border-studio-charcoal/10 flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-studio-stone">
                      Commission
                    </span>
                    <Link
                      href={`/projects/${test.projectSlug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-serif text-studio-obsidian hover:text-studio-bronzeDark transition-colors group"
                    >
                      <span>{test.project}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <span className="text-xs text-studio-stone">
                      {test.location} · {test.year}
                    </span>
                  </div>
                </div>

                {/* Large Quote Block on Right */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <Quote className="w-10 h-10 text-studio-bronzeDark/30 mb-6" />
                  <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-studio-obsidian font-light leading-relaxed">
                    &ldquo;{test.quote}&rdquo;
                  </blockquote>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-studio-cream border-t border-studio-charcoal/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans block mb-3">
            YOUR VISION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-obsidian">
            Ready to Begin Your Spatial Journey?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-studio-stone font-light leading-relaxed">
            Our studio accepts private commissions across India. We would be honored to understand your aspirations.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Commence A Design Dialogue
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
