import React from "react";

export interface SectionHeadingProps {
  number?: string;
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "split";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";
  const eyebrowColor = isDark ? "text-studio-champagne/80" : "text-studio-bronzeDark";
  const titleColor = isDark ? "text-studio-ivory" : "text-studio-obsidian";
  const subtitleColor = isDark ? "text-studio-sand/70" : "text-studio-stone";

  if (align === "split") {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 lg:mb-20 ${className}`}>
        <div className="lg:col-span-7">
          {(number || eyebrow) && (
            <div className={`flex items-center gap-2.5 text-xs tracking-widest uppercase font-sans mb-4 ${eyebrowColor}`}>
              {number && <span className="font-semibold">{number}</span>}
              {number && eyebrow && <span className="opacity-40">—</span>}
              {eyebrow && <span>{eyebrow}</span>}
            </div>
          )}
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] ${titleColor}`}>
            {title}
          </h2>
        </div>
        {subtitle && (
          <div className="lg:col-span-5">
            <p className={`font-sans text-base sm:text-lg leading-relaxed font-light ${subtitleColor}`}>
              {subtitle}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`mb-12 lg:mb-20 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {(number || eyebrow) && (
        <div
          className={`flex items-center gap-2.5 text-xs tracking-widest uppercase font-sans mb-4 ${
            align === "center" ? "justify-center" : ""
          } ${eyebrowColor}`}
        >
          {number && <span className="font-semibold">{number}</span>}
          {number && eyebrow && <span className="opacity-40">—</span>}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 font-sans text-base sm:text-lg leading-relaxed font-light ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
