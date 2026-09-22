"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { studioConfig } from "@/data/config";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? "glass-nav-scrolled py-3.5 sm:py-4"
            : "glass-nav py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo on Left */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-bronze"
            aria-label={`${studioConfig.name} - Home`}
          >
            <span className="font-serif text-xl sm:text-2xl tracking-wider text-studio-obsidian font-normal">
              {studioConfig.name.toUpperCase()}
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-ultra text-studio-stone font-sans uppercase font-medium">
              {studioConfig.eyebrow}
            </span>
          </Link>

          {/* Desktop Navigation in Center */}
          <nav
            className="hidden xl:flex items-center space-x-7"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs tracking-widest uppercase font-sans py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-studio-obsidian font-semibold"
                      : "text-studio-charcoal/70 hover:text-studio-obsidian"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-studio-bronze"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              showArrow
              className="hidden sm:inline-flex"
            >
              Start Your Project
            </Button>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full border border-studio-charcoal/15 bg-white/60 hover:bg-white text-studio-obsidian transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-bronze"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
