import React from "react";
import type { Metadata } from "next";
import { studioConfig } from "@/data/config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — Vayu Spaces",
  description: "Terms and conditions of service for architectural consultations and website use.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-studio-ivory text-studio-obsidian min-h-screen">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-studio-stone hover:text-studio-obsidian transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Home</span>
        </Link>

        <h1 className="font-serif text-4xl sm:text-5xl font-light text-studio-obsidian tracking-tight mb-8">
          Terms & Conditions of Service
        </h1>

        <div className="space-y-6 font-sans text-sm sm:text-base text-studio-stone font-light leading-relaxed">
          <p>
            Welcome to the digital portfolio of {studioConfig.name}. By accessing or perusing our digital atelier, you agree to comply with the following architectural and intellectual property terms.
          </p>

          <h2 className="font-serif text-2xl text-studio-obsidian pt-6">
            1. Intellectual Property & Architectural Copyright
          </h2>
          <p>
            All architectural concepts, floor plan arrangements, 3D renderings, photography, bespoke millwork designs, and written editorial materials showcased on this website represent the exclusive intellectual property of {studioConfig.name}. Unauthorized reproduction, commercial derivation, or digital republishing without prior written consent is strictly prohibited.
          </p>

          <h2 className="font-serif text-2xl text-studio-obsidian pt-6">
            2. Project Scopes & Formal Agreements
          </h2>
          <p>
            The project descriptions, specifications, budgets, and timelines presented on this website are illustrative of our portfolio and past commissions. Each new architectural engagement is formalized through a bespoke Client-Architect Agreement setting forth detailed deliverables, schedules, and fee structures.
          </p>

          <h2 className="font-serif text-2xl text-studio-obsidian pt-6">
            3. Disclaimer of Portfolio Representations
          </h2>
          <p>
            While every effort is made to maintain precise architectural documentation, materials and finishes shown in photography naturally reflect unique lighting, seasonal variations, and custom client modifications.
          </p>

          <h2 className="font-serif text-2xl text-studio-obsidian pt-6">
            4. Studio Inquiries
          </h2>
          <p>
            If you wish to discuss licensing, press coverage, or formal architectural commissions, please contact{" "}
            <a
              href={`mailto:${studioConfig.email}`}
              className="text-studio-bronzeDark underline"
            >
              {studioConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
