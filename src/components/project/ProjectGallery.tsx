"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectImage } from "@/data/projects";
import { Lightbox } from "@/components/ui/Lightbox";
import { Maximize2 } from "lucide-react";

export interface ProjectGalleryProps {
  projectTitle: string;
  location: string;
  images: ProjectImage[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projectTitle,
  location,
  images,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = images.map((img) => ({
    url: img.url,
    alt: img.alt,
    caption: img.caption,
    project: projectTitle,
    location,
  }));

  return (
    <>
      <div className="space-y-12 sm:space-y-16">
        {images.map((img, idx) => {
          const isWide = img.orientation === "wide";
          const isPortrait = img.orientation === "portrait";

          return (
            <figure
              key={img.url}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer select-none"
              data-cursor="ZOOM"
            >
              <div
                className={`relative overflow-hidden border border-studio-charcoal/10 bg-studio-sand/40 ${
                  isWide
                    ? "aspect-[16/9] sm:aspect-[21/9]"
                    : isPortrait
                    ? "aspect-[4/5] max-w-2xl mx-auto"
                    : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-studio-obsidian/80 text-studio-ivory text-xs font-sans tracking-widest uppercase backdrop-blur-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              {img.caption && (
                <figcaption className="mt-4 flex items-baseline justify-between text-xs font-sans text-studio-stone font-light">
                  <span className="max-w-xl">{img.caption}</span>
                  <span className="font-mono text-studio-bronzeDark text-[11px] shrink-0 ml-4">
                    FIG. {String(idx + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
        }
        onNext={() =>
          setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
        }
      />
    </>
  );
};
