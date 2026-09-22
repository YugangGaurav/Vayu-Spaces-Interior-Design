import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        studio: {
          ivory: "#FBFBF9",
          cream: "#F5F4F0",
          sand: "#E9E6DF",
          stone: "#9C978E",
          charcoal: "#1C1B1A",
          obsidian: "#0D0D0C",
          bronze: "#C5A880",
          bronzeDark: "#9A7B54",
          champagne: "#E8D8C3",
          goldMuted: "#BFA37E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
        "glass-elevated": "0 20px 40px -15px rgba(0, 0, 0, 0.12)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
