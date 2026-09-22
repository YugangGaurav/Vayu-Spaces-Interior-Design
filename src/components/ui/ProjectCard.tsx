import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  project: Project;
  layout?: "hero-wide" | "standard" | "portrait" | "split";
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layout = "standard",
  priority = false,
}) => {
  const aspectStyles = {
    "hero-wide": "aspect-[16/10] md:aspect-[21/9]",
    standard: "aspect-[16/11]",
    portrait: "aspect-[4/5]",
    split: "aspect-[4/3] lg:aspect-square",
  };

  return (
    <article
      className="group relative flex flex-col"
      data-cursor="VIEW PROJECT"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block relative overflow-hidden bg-studio-sand/40 border border-studio-charcoal/10"
        aria-label={`View ${project.title} - ${project.category} in ${project.location}`}
      >
        <div className={`relative w-full ${aspectStyles[layout]} overflow-hidden`}>
          <Image
            src={project.featuredImage || project.heroImage}
            alt={project.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle gradient vignette for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Floating Category & Design Style Tag on Card */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="inline-block px-3 py-1 bg-studio-obsidian/75 text-studio-ivory text-[10px] tracking-widest uppercase font-sans backdrop-blur-md border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Floating Arrow Top Right */}
        <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-studio-ivory/80 text-studio-obsidian flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </Link>

      {/* Metadata & Typography */}
      <div className="mt-5 flex flex-col">
        <div className="flex items-baseline justify-between gap-4 text-xs font-sans text-studio-stone tracking-wider uppercase">
          <span className="text-studio-bronzeDark font-medium">{project.location}</span>
          <span className="text-studio-stone/80">{project.designStyle}</span>
        </div>

        <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-studio-obsidian font-normal group-hover:text-studio-bronzeDark transition-colors">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        <p className="mt-2.5 text-sm font-sans text-studio-stone/90 line-clamp-2 leading-relaxed font-light">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium text-studio-charcoal group-hover:text-studio-bronzeDark transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-[11px] font-mono text-studio-stone/70">{project.area}</span>
        </div>
      </div>
    </article>
  );
};
