"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  url: string;
  alt: string;
  caption?: string;
  project?: string;
  location?: string;
}

export interface LightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 sm:p-8 text-studio-ivory"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-widest text-studio-champagne/80 font-sans">
            {currentIndex + 1} / {images.length}
          </span>
          {currentImage.project && (
            <span className="text-sm font-serif text-studio-ivory mt-0.5">
              {currentImage.project} {currentImage.location ? `· ${currentImage.location}` : ""}
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-bronze"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation: Previous */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-bronze"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Center Image Container */}
      <div
        className="relative max-w-6xl max-h-[82vh] w-full mx-4 sm:mx-16 flex flex-col items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[65vh] sm:h-[75vh]">
          <Image
            src={currentImage.url}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 1280px) 95vw, 1200px"
            priority
            className="object-contain"
          />
        </div>

        {/* Caption */}
        {currentImage.caption && (
          <p className="mt-4 text-center font-sans text-xs sm:text-sm text-studio-sand/80 max-w-2xl px-4 leading-relaxed font-light tracking-wide">
            {currentImage.caption}
          </p>
        )}
      </div>

      {/* Navigation: Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-bronze"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
