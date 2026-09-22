"use client";

import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device or prefers-reduced-motion
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered elements for custom cursor attributes
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        setCursorText(interactiveEl.getAttribute("data-cursor") || "VIEW");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out hidden lg:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {isHovered ? (
        <div className="relative -top-1/2 -left-1/2 flex items-center justify-center px-4 py-2 rounded-full bg-studio-bronze text-studio-obsidian text-[10px] font-sans font-semibold tracking-widest uppercase shadow-xl backdrop-blur-md animate-in zoom-in-75 duration-150">
          {cursorText}
        </div>
      ) : (
        <div className="w-3 h-3 -mt-1.5 -ml-1.5 rounded-full bg-studio-charcoal/40 backdrop-blur-xs transition-all duration-200" />
      )}
    </div>
  );
};
