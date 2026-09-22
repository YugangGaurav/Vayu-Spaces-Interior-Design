import React from "react";

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
  hoverEffect?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  as?: "div" | "article" | "section";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  theme = "light",
  hoverEffect = false,
  padding = "md",
  onClick,
  as: Component = "div",
}) => {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10 lg:p-12",
    xl: "p-10 sm:p-14 lg:p-16",
  };

  const isDark = theme === "dark";
  const baseCard = isDark ? "glass-card-dark text-studio-ivory" : "glass-card text-studio-charcoal";
  const hoverClass = hoverEffect
    ? "transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-glass-elevated hover:border-studio-bronze/30"
    : "";

  return (
    <Component
      className={`relative rounded-none ${baseCard} ${paddingStyles[padding]} ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};
