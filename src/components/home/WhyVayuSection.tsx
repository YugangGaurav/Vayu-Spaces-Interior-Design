import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, Sparkles, Wind, ShieldCheck } from "lucide-react";

export const WhyVayuSection: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      number: "01",
      title: "Spaces Designed Around You",
      subtitle: "Tailored to Your Daily Living Rituals",
      description:
        "We reject repetitive template layouts. Every floor plan begins with an understanding of how your family awakens, cooks, gathers, works, and finds rest.",
    },
    {
      icon: Sparkles,
      number: "02",
      title: "Material Honesty & Tactile Warmth",
      subtitle: "Authentic Finishes That Age With Dignity",
      description:
        "We prioritize honest mineral textures: breathable lime plasters, fluted stones, seasoned solid woods, and living metals that feel luxurious to the touch.",
    },
    {
      icon: Wind,
      number: "03",
      title: "Engineered for Bangalore Living",
      subtitle: "Micro-climate, Light & Biophilic Airflow",
      description:
        "Taking full advantage of Bangalore's unique climate, our designs invite natural breezes, lush balcony landscapes, and dynamic daylight into your home.",
    },
    {
      icon: ShieldCheck,
      number: "04",
      title: "Turnkey Predictability",
      subtitle: "Single-Point Accountability, Zero Hidden Costs",
      description:
        "From preliminary 3D visualization to factory millwork fabrication and white-glove site delivery, we ensure clear milestone schedules and budget transparency.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-studio-cream text-studio-obsidian border-t border-studio-charcoal/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          number="02"
          eyebrow="THE VAYU ADVANTAGE"
          title="Why Homeowners Choose Vayu Spaces."
          subtitle="A contemporary architectural practice rooted in design integrity, craftsmanship, and peace of mind."
          align="split"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <GlassCard
                key={pillar.number}
                padding="md"
                hoverEffect
                className="flex flex-col justify-between border-studio-charcoal/10 hover:border-studio-bronze/40"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-studio-charcoal/10">
                    <span className="font-mono text-xs font-semibold text-studio-bronzeDark">
                      PILLAR {pillar.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-studio-bronze/15 text-studio-bronzeDark flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-studio-obsidian font-normal">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-sans text-studio-bronzeDark uppercase tracking-wide block mt-1">
                    {pillar.subtitle}
                  </span>
                  <p className="mt-4 text-sm text-studio-stone font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
