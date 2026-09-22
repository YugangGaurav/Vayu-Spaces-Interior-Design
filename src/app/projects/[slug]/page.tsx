import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { Button } from "@/components/ui/Button";
import { SEOStructuredData } from "@/components/common/SEOStructuredData";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Layers, Clock, UserCheck } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.location} (${project.category})`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Vayu Spaces`,
      description: project.shortDescription,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Calculate Next and Previous projects
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <article className="pt-28 sm:pt-36 bg-studio-ivory text-studio-obsidian min-h-screen">
      {/* Schema.org CreativeWork structured data */}
      <SEOStructuredData
        type="CreativeWork"
        projectData={{
          name: project.title,
          description: project.shortDescription,
          image: project.heroImage,
          year: project.year,
          location: project.location,
        }}
      />

      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-studio-stone hover:text-studio-obsidian transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Header Title & Location */}
      <header className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16 border-b border-studio-charcoal/10">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-sans text-studio-bronzeDark mb-4">
          <span>{project.category}</span>
          <span className="opacity-40">—</span>
          <span>{project.location}</span>
          <span className="opacity-40">—</span>
          <span>{project.year}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-studio-obsidian tracking-tight leading-[1.02]">
          {project.title}
        </h1>

        <p className="mt-6 font-sans text-lg sm:text-2xl text-studio-stone font-light leading-relaxed max-w-4xl">
          {project.subtitle}
        </p>
      </header>

      {/* Full-width Hero Image */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 my-12 sm:my-16">
        <div className="relative aspect-[16/10] md:aspect-[21/10] w-full overflow-hidden border border-studio-charcoal/10 bg-studio-sand/40">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Magazine Metadata Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-20 sm:mb-28">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8 border-y border-studio-charcoal/10 text-xs font-sans">
          <div>
            <span className="text-studio-stone uppercase tracking-widest block text-[10px] mb-1">
              LOCATION
            </span>
            <span className="font-medium text-studio-obsidian text-sm">
              {project.location}
            </span>
          </div>

          <div>
            <span className="text-studio-stone uppercase tracking-widest block text-[10px] mb-1">
              TYPOLOGY
            </span>
            <span className="font-medium text-studio-obsidian text-sm">
              {project.category}
            </span>
          </div>

          <div>
            <span className="text-studio-stone uppercase tracking-widest block text-[10px] mb-1">
              DESIGN STYLE
            </span>
            <span className="font-medium text-studio-obsidian text-sm">
              {project.designStyle}
            </span>
          </div>

          <div>
            <span className="text-studio-stone uppercase tracking-widest block text-[10px] mb-1">
              TOTAL AREA
            </span>
            <span className="font-medium text-studio-obsidian text-sm">
              {project.area}
            </span>
          </div>

          <div>
            <span className="text-studio-stone uppercase tracking-widest block text-[10px] mb-1">
              YEAR
            </span>
            <span className="font-medium text-studio-obsidian text-sm">
              {project.year}
            </span>
          </div>

          <div>
            <span className="text-studio-stone uppercase tracking-widest block text-[10px] mb-1">
              DURATION
            </span>
            <span className="font-medium text-studio-obsidian text-sm">
              {project.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Narrative & Concept Split */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans font-semibold block mb-3">
              DESIGN CONCEPT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-studio-obsidian font-light leading-snug">
              Quiet Equilibrium Between Void & Mass.
            </h2>
            <p className="mt-6 font-sans text-sm sm:text-base text-studio-stone font-light leading-relaxed">
              {project.concept}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6 font-sans text-base sm:text-lg text-studio-stone font-light leading-relaxed">
            <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans font-semibold block mb-3">
              PROJECT OVERVIEW
            </span>
            {project.overview.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Materials & Color Palette Editorial Section */}
      <div className="bg-studio-cream py-20 sm:py-28 border-y border-studio-charcoal/10 mb-24 sm:mb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Materials List */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans font-semibold block mb-4">
                MATERIALITY & SPECIFICATIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-studio-obsidian font-normal mb-8">
                Tactile Composition
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.materials.map((mat) => (
                  <div
                    key={mat.name}
                    className="p-5 bg-white/70 border border-studio-charcoal/10"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-mono text-studio-bronzeDark block">
                      {mat.category}
                    </span>
                    <h3 className="mt-1 font-serif text-xl text-studio-obsidian">
                      {mat.name}
                    </h3>
                    <p className="mt-2 text-xs text-studio-stone font-light leading-relaxed">
                      {mat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Swatches */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans font-semibold block mb-4">
                  CHROMATIC PALETTE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-studio-obsidian font-normal mb-8">
                  Harmonic Tones
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {project.colorPalette.map((color) => (
                    <div
                      key={color.name}
                      className="p-4 bg-white/70 border border-studio-charcoal/10 flex flex-col"
                    >
                      <div
                        className="w-full h-16 border border-black/10 mb-3"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="font-serif text-base text-studio-obsidian font-medium">
                        {color.name}
                      </span>
                      <div className="flex items-center justify-between mt-1 text-[10px] font-mono text-studio-stone">
                        <span>{color.hex}</span>
                        <span className="uppercase">{color.tone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Image Gallery with Lightbox */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-24 sm:mb-32">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-studio-bronzeDark font-sans font-semibold block mb-2">
            VISUAL DOCUMENTATION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-studio-obsidian font-light">
            Architectural Plates & Details.
          </h2>
        </div>

        <ProjectGallery
          projectTitle={project.title}
          location={project.location}
          images={project.galleryImages}
        />
      </div>

      {/* Client Quote if available */}
      {project.quote && (
        <div className="py-20 bg-studio-obsidian text-studio-ivory mb-20 sm:mb-28">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <span className="text-[10px] uppercase tracking-ultra font-mono text-studio-champagne/70 block mb-4">
              PATRON TESTIMONIAL
            </span>
            <blockquote className="font-serif text-2xl sm:text-4xl font-light text-studio-ivory leading-snug">
              &ldquo;{project.quote.text}&rdquo;
            </blockquote>
            <cite className="mt-4 block font-sans text-xs uppercase tracking-widest text-studio-sand/70 not-italic">
              — {project.quote.author}
            </cite>
          </div>
        </div>
      )}

      {/* Previous / Next Project Navigation Bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 border-t border-studio-charcoal/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col p-6 bg-studio-cream/60 border border-studio-charcoal/10 hover:border-studio-bronze transition-colors"
          >
            <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-studio-stone group-hover:text-studio-bronzeDark">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Previous Commission</span>
            </div>
            <span className="mt-2 font-serif text-2xl text-studio-obsidian font-normal">
              {prevProject.title}
            </span>
            <span className="text-xs font-sans text-studio-stone mt-0.5">
              {prevProject.location} · {prevProject.category}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col sm:items-end p-6 bg-studio-cream/60 border border-studio-charcoal/10 hover:border-studio-bronze transition-colors sm:text-right"
          >
            <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-studio-stone group-hover:text-studio-bronzeDark">
              <span>Next Commission</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <span className="mt-2 font-serif text-2xl text-studio-obsidian font-normal">
              {nextProject.title}
            </span>
            <span className="text-xs font-sans text-studio-stone mt-0.5">
              {nextProject.location} · {nextProject.category}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
