import React from "react";
import type { Metadata } from "next";
import { studioConfig } from "@/data/config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Vayu Spaces",
  description: "Privacy policy and client data confidentiality terms of Vayu Spaces studio.",
};

export default function PrivacyPage() {
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
          Privacy & Confidentiality Policy
        </h1>

        <div className="space-y-6 font-sans text-sm sm:text-base text-studio-stone font-light leading-relaxed">
          <p>
            At {studioConfig.name}, client privacy and the absolute discretion surrounding private residential commissions are sacred principles of our practice.
          </p>

          <h2 className="font-serif text-2xl text-studio-obsidian pt-6">
            1. Client Data & Commission Confidentiality
          </h2>
          <p>
            Any personal details, floor plans, financial budgets, property addresses, and project communications shared through our website or direct consultations remain strictly confidential. We do not sell, rent, or distribute client information to third-party marketing entities.
          </p>

          <h2 className="font-serif text-2xl text-studio-obsidian pt-6">
            2. Photography & Publication Rights
          </h2>
          <p>
            All architectural photography of completed residences is captured and shared solely with the express written consent of our patrons. Client anonymity is meticulously preserved upon request, with identifiers and specific street numbers omitted from public case studies.
          </p>

          <h2 className="font-serif text-2xl text-studio-obsidian pt-6">
            3. Digital Analytics & Inquiries
          </h2>
          <p>
            Our website utilizes basic technical telemetry to evaluate site performance and visitor navigation. Information submitted through our contact form is solely used to respond to your specific architectural inquiry.
          </p>

          <h2 className="font-serif text-2xl text-studio-obsidian pt-6">
            4. Inquiries & Contact
          </h2>
          <p>
            For questions regarding privacy, confidentiality covenants, or data removal, please contact the studio directly at{" "}
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
