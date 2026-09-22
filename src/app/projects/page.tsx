"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

const categories = [
  "All",
  "Residential",
  "Luxury Apartment",
  "Penthouse",
  "Coastal Retreat",
  "Heritage Renovation",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-28 sm:pt-36 bg-studio-ivory text-studio-obsidian min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16 border-b border-studio-charcoal/10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-studio-bronzeDark mb-4">
            <span>SELECTED PORTFOLIO</span>
            <span className="opacity-40">—</span>
            <span>2024 — 2026</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-studio-obsidian tracking-tight leading-[1.05]">
            Architectural Works & <br />
            Private Residences.
          </h1>
          <p className="mt-8 font-sans text-lg sm:text-xl text-studio-stone font-light leading-relaxed max-w-3xl">
            An editorial collection of standalone villas, high-rise penthouses, and sensitive heritage restorations sculpted by light, raw materiality, and spatial clarity.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 text-xs font-sans tracking-widest uppercase transition-all duration-200 border ${
                  isSelected
                    ? "bg-studio-obsidian text-studio-ivory border-studio-obsidian"
                    : "bg-white/60 text-studio-charcoal border-studio-charcoal/15 hover:border-studio-charcoal"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Editorial Showcase Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-studio-stone">
              No commissions found under this category.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 text-xs font-sans uppercase tracking-widest text-studio-bronzeDark border-b border-studio-bronzeDark"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-20 sm:space-y-28">
            {/* Feature 1: Large Wide Card */}
            {filteredProjects[0] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-12">
                  <ProjectCard project={filteredProjects[0]} layout="hero-wide" priority />
                </div>
              </div>
            )}

            {/* Feature 2 & 3: Two balanced asymmetrical cards */}
            {filteredProjects.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
                {filteredProjects[1] && (
                  <div>
                    <ProjectCard project={filteredProjects[1]} layout="standard" />
                  </div>
                )}
                {filteredProjects[2] && (
                  <div className="md:pt-16">
                    <ProjectCard project={filteredProjects[2]} layout="portrait" />
                  </div>
                )}
              </div>
            )}

            {/* Feature 4, 5, 6: Remaining projects */}
            {filteredProjects.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-12 border-t border-studio-charcoal/10">
                {filteredProjects.slice(3).map((proj) => (
                  <div key={proj.id}>
                    <ProjectCard project={proj} layout="standard" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Bottom Consultation Banner */}
      <section className="py-20 bg-studio-cream border-t border-studio-charcoal/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-studio-obsidian font-light">
            Envisioning your next home?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-studio-stone font-light leading-relaxed">
            Our architectural studio welcomes commissions worldwide with specialized focus on high-end private residences.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Discuss Your Commission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
