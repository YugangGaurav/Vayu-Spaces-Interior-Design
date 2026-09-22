import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { WhyVayuSection } from "@/components/home/WhyVayuSection";
import { ServiceList } from "@/components/home/ServiceList";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const featuredTestimonial = testimonials[0];

  return (
    <div className="flex flex-col">
      {/* Cinematic Hero */}
      <HeroSection />

      {/* Brand Introduction & Design Philosophy */}
      <IntroSection />

      {/* Why Vayu Spaces */}
      <WhyVayuSection />

      {/* Services Overview */}
      <section className="py-24 sm:py-32 lg:py-40 bg-studio-ivory text-studio-obsidian">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeading
            number="03"
            eyebrow="STUDIO DISCIPLINES"
            title="Comprehensive Interior Architecture."
            subtitle="From initial spatial concept and material choreography to modular kitchens and turnkey Bangalore execution."
            align="split"
          />

          <div className="mt-12 sm:mt-16">
            <ServiceList />
          </div>

          <div className="mt-16 pt-8 border-t border-studio-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm font-sans text-studio-stone font-light">
              Looking for specialized villa, penthouse, or boutique office architecture in Bangalore?
            </p>
            <Button href="/services" variant="outline" size="sm" showArrow>
              Explore All 10 Services
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <FeaturedProjects />

      {/* Editorial Materiality & Craft Banner */}
      <section className="py-24 sm:py-32 bg-studio-obsidian text-studio-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest text-studio-champagne/80 font-sans block mb-4">
                05 — MATERIAL HONESTY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.08]">
                Sensory Textures <br />
                That Patina With Dignity.
              </h2>
              <p className="mt-6 font-sans text-base sm:text-lg text-studio-sand/70 font-light leading-relaxed">
                We believe that a truly luxurious space is felt as much as it is seen. We source unlacquered metals that evolve with human touch, porous sedimentary stones that absorb daylight gently, and reclaimed timbers that carry centuries of narrative.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-white/10 text-xs font-sans text-studio-sand/80">
                <div>
                  <span className="font-serif text-lg text-studio-champagne block mb-1">Slaked Lime</span>
                  <p className="font-light text-studio-stone">Hand-troweled mineral breathability</p>
                </div>
                <div>
                  <span className="font-serif text-lg text-studio-champagne block mb-1">Vein-cut Travertine</span>
                  <p className="font-light text-studio-stone">Tactile porous earth grounding</p>
                </div>
              </div>

              <div className="mt-10">
                <Button href="/gallery" variant="glass" size="md" showArrow>
                  Browse Materiality in Gallery
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-white/10 glass-card">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                  alt="Close-up detail of natural timber joinery and lime wash"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Patron Testimonial */}
      <section className="py-24 sm:py-32 bg-studio-cream text-studio-obsidian">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans block mb-6">
            06 — PATRON PERSPECTIVE
          </span>

          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-obsidian leading-snug">
            &ldquo;{featuredTestimonial.quote}&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-col items-center justify-center">
            <span className="font-sans text-sm uppercase tracking-widest font-semibold text-studio-obsidian">
              {featuredTestimonial.client}
            </span>
            <span className="text-xs font-sans text-studio-stone mt-1">
              {featuredTestimonial.role} · {featuredTestimonial.project} ({featuredTestimonial.location})
            </span>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium text-studio-bronzeDark hover:text-studio-obsidian transition-colors border-b border-studio-bronzeDark pb-0.5"
            >
              <span>Read All Client Experiences</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
