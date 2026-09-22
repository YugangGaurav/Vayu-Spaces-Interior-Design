import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const FeaturedProjects: React.FC = () => {
  // Select first 4 projects for asymmetric home showcase
  const p1 = projects[0]; // The Courtyard Residence (Large Feature)
  const p2 = projects[1]; // Casa Verde Penthouse (Offset Portrait)
  const p3 = projects[2]; // Monochrome House (Split Standard)
  const p4 = projects[3]; // Atelier 27 (Split Standard)

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-studio-cream text-studio-obsidian">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <SectionHeading
            number="03"
            eyebrow="SELECTED COMMISSIONS"
            title="Curated Architectural Portfolio."
            subtitle="A selection of our most distinctive residential, penthouse, and retreat transformations."
            className="mb-0"
          />
          <div className="shrink-0">
            <Button href="/projects" variant="outline" size="md" showArrow>
              View All Projects
            </Button>
          </div>
        </div>

        {/* Asymmetric Editorial Project Showcase */}
        <div className="space-y-16 sm:space-y-24">
          {/* Row 1: Large Wide Featured Project paired with Offset Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-8">
              <ProjectCard project={p1} layout="hero-wide" priority />
            </div>
            <div className="lg:col-span-4 lg:pt-16">
              <ProjectCard project={p2} layout="portrait" />
            </div>
          </div>

          {/* Quote Divider in between projects */}
          <div className="py-12 border-y border-studio-charcoal/10 my-16">
            <div className="max-w-4xl mx-auto text-center px-4">
              <span className="text-[10px] uppercase tracking-ultra font-mono text-studio-bronzeDark block mb-4">
                Client Reflection · The Courtyard Residence
              </span>
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-studio-obsidian font-light leading-snug">
                “Every detail felt intentional. The team understood how we wanted the house to feel, not just how we wanted it to look.”
              </blockquote>
              <cite className="mt-4 block font-sans text-xs uppercase tracking-widest text-studio-stone not-italic">
                — Ananya & Rohan Sen, Kolkata
              </cite>
            </div>
          </div>

          {/* Row 2: Two Balanced Split Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <ProjectCard project={p3} layout="standard" />
            </div>
            <div className="md:pt-12">
              <ProjectCard project={p4} layout="standard" />
            </div>
          </div>
        </div>

        {/* Bottom Navigation Link */}
        <div className="mt-20 text-center">
          <Button href="/projects" variant="primary" size="lg" showArrow>
            Explore All 6 Completed Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};
