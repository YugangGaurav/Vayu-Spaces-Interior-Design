"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services, Service } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

const serviceCategories = ["All", "Residential", "Commercial", "Turnkey & Consultation"] as const;

export const ServiceList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);

  const displayedServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  const currentActiveService =
    services.find((s) => s.id === activeServiceId) || displayedServices[0] || services[0];

  return (
    <div>
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
        {serviceCategories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                const firstMatch =
                  cat === "All" ? services[0] : services.find((s) => s.category === cat);
                if (firstMatch) setActiveServiceId(firstMatch.id);
              }}
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Services List Rows */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-studio-charcoal/10 border-y border-studio-charcoal/10">
          {displayedServices.map((service) => {
            const isActive = currentActiveService.id === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                className={`group py-6 sm:py-7 transition-all duration-300 cursor-pointer ${
                  isActive ? "bg-studio-sand/20 px-4 -mx-4" : "hover:bg-studio-sand/10 px-0"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono tracking-widest text-studio-bronzeDark font-medium mt-1 shrink-0">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-studio-obsidian group-hover:text-studio-bronzeDark transition-colors">
                        <Link href={`/services#${service.id}`}>{service.title}</Link>
                      </h3>
                      <p className="mt-2 font-sans text-sm text-studio-stone font-light leading-relaxed max-w-xl">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/services#${service.id}`}
                    className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-studio-charcoal/15 flex items-center justify-center text-studio-charcoal group-hover:border-studio-bronze group-hover:bg-studio-bronze group-hover:text-studio-obsidian transition-all duration-300"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Mobile Image inline preview */}
                <div className="mt-4 lg:hidden overflow-hidden rounded-none aspect-[16/9] relative border border-studio-charcoal/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Dynamic Image Reveal Showcase */}
        <div className="hidden lg:block lg:col-span-5 sticky top-28">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-studio-charcoal/10 glass-card p-3">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={currentActiveService.image}
                alt={currentActiveService.title}
                fill
                priority
                sizes="(max-width: 1280px) 40vw, 500px"
                className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-studio-ivory">
                <span className="text-[10px] tracking-widest uppercase font-mono text-studio-champagne">
                  {currentActiveService.number} · {currentActiveService.category}
                </span>
                <h4 className="font-serif text-2xl text-white mt-1">
                  {currentActiveService.title}
                </h4>
                <p className="text-xs text-studio-sand/80 mt-1 font-light line-clamp-2">
                  {currentActiveService.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
