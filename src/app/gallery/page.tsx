"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";
import { Maximize2 } from "lucide-react";

const categories = [
  "All",
  "Living",
  "Dining",
  "Master Suite",
  "Materiality",
  "Kitchen",
  "Courtyard",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = filteredItems.map((item) => ({
    url: item.image,
    alt: item.title,
    caption: item.caption,
    project: item.project,
    location: item.location,
  }));

  return (
    <div className="pt-28 sm:pt-36 bg-studio-ivory text-studio-obsidian min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16 border-b border-studio-charcoal/10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-studio-bronzeDark mb-4">
            <span>VISUAL ARCHIVE</span>
            <span className="opacity-40">—</span>
            <span>ATMOSPHERIC STILLS</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-studio-obsidian tracking-tight leading-[1.05]">
            Spatial Materiality & <br />
            Architectural Light.
          </h1>
          <p className="mt-8 font-sans text-lg sm:text-xl text-studio-stone font-light leading-relaxed max-w-3xl">
            A photographic archive capturing our explorations in texture, joinery details, natural sun paths, and tranquil living volumes.
          </p>
        </div>

        {/* Category Filters */}
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

      {/* Masonry-Style Gallery Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item, idx) => {
            const aspectClass =
              item.aspectRatio === "tall"
                ? "aspect-[3/4]"
                : item.aspectRatio === "square"
                ? "aspect-square"
                : "aspect-[16/10]";

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="break-inside-avoid group cursor-pointer select-none"
                data-cursor="VIEW"
              >
                <div
                  className={`relative w-full ${aspectClass} overflow-hidden border border-studio-charcoal/10 bg-studio-sand/40`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-studio-ivory">
                    <div className="self-end">
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-studio-champagne">
                        {item.category} · {item.location}
                      </span>
                      <h3 className="font-serif text-xl text-white mt-1">
                        {item.title}
                      </h3>
                      <span className="text-xs font-sans text-studio-sand/80 block mt-0.5 font-light">
                        {item.project}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtitle Caption */}
                <div className="mt-2.5 flex items-baseline justify-between text-xs font-sans text-studio-stone font-light px-1">
                  <span>{item.title}</span>
                  <span className="text-[11px] font-mono text-studio-bronzeDark">
                    {item.location}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentIndex((prev) =>
            prev > 0 ? prev - 1 : filteredItems.length - 1
          )
        }
        onNext={() =>
          setCurrentIndex((prev) =>
            prev < filteredItems.length - 1 ? prev + 1 : 0
          )
        }
      />
    </div>
  );
}
