import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "glass" | "outline" | "minimal";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  onClick,
  type = "button",
  disabled = false,
  target,
  rel,
  "aria-label": ariaLabel,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-bronze focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group select-none";

  const sizeStyles = {
    sm: "text-xs tracking-wider uppercase px-4 py-2 gap-1.5",
    md: "text-xs tracking-widest uppercase px-6 py-3.5 gap-2",
    lg: "text-sm tracking-widest uppercase px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-studio-bronze text-studio-obsidian hover:bg-[#B39369] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-studio-charcoal text-studio-ivory hover:bg-studio-obsidian hover:-translate-y-0.5 active:translate-y-0",
    glass:
      "glass-button text-studio-charcoal dark:text-studio-ivory hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-studio-charcoal/20 text-studio-charcoal hover:border-studio-charcoal hover:bg-studio-charcoal hover:text-studio-ivory hover:-translate-y-0.5 active:translate-y-0",
    minimal:
      "px-0 py-1 bg-transparent text-studio-charcoal hover:text-studio-bronze tracking-widest uppercase border-b border-studio-charcoal/20 hover:border-studio-bronze",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
