export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
}

export interface StudioValue {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface StudioStat {
  value: string;
  label: string;
  description: string;
}

export const studioStats: StudioStat[] = [
  { value: "15+", label: "Projects Completed", description: "Bespoke residences and luxury villas crafted across Bangalore's premier enclaves." },
  { value: "8+", label: "Years in Bangalore", description: "Dedicated to progressive contemporary interior architecture and design." },
  { value: "10+", label: "Prime Enclaves", description: "Commissions in Indiranagar, Lavelle Road, Sadashivnagar, Whitefield & Koramangala." },
  { value: "100%", label: "Design Focused", description: "Uncompromised commitment to material authenticity, functionality, and client intimacy." },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Dialogue, site orientation & sensory aspirations",
    description:
      "We begin with open-ended conversation to understand not just functional spatial requirements, but how you awaken, cook, gather, and find solace in your home.",
    timeline: "Weeks 1–2",
  },
  {
    number: "02",
    title: "Understand",
    subtitle: "Micro-climate, light mapping & spatial volume analysis",
    description:
      "We analyze the structural layout, natural sun paths, prevailing Bangalore cross-breezes, acoustic considerations, and structural opportunities to establish clear architectural boundaries.",
    timeline: "Weeks 3–4",
  },
  {
    number: "03",
    title: "Conceptualize",
    subtitle: "Spatial narratives, volumetric blocking & material mood boards",
    description:
      "We present tactile material palettes—lime washes, timber grains, stone slabs—alongside volumetric layout studies to establish the emotional temperature of the space.",
    timeline: "Weeks 5–7",
  },
  {
    number: "04",
    title: "Design",
    subtitle: "3D architectural visualization & construction documentation",
    description:
      "Every millwork detail, custom electrical reveal, stone cutting schedule, modular kitchen layout, and lighting plan is resolved into comprehensive technical drawings and photorealistic renders.",
    timeline: "Weeks 8–12",
  },
  {
    number: "05",
    title: "Execute",
    subtitle: "Craftsman coordination, factory millwork & site supervision",
    description:
      "Our architects supervise site progress relentlessly across Bangalore. We coordinate directly with master stone masons, factory carpenters, and lighting engineers to ensure zero compromise.",
    timeline: "Months 4–10",
  },
  {
    number: "06",
    title: "Deliver",
    subtitle: "White-glove styling, artwork installation & ceremonial handover",
    description:
      "We install bespoke furniture, commission draperies, test ambient lighting scenes, and style the home before presenting you with the keys and a comprehensive Care Manual.",
    timeline: "Handover Week",
  },
];

export const studioValues: StudioValue[] = [
  {
    number: "01",
    title: "Material Honesty",
    description: "We celebrate authentic, unadorned materials—natural lime, unpolished stone, living brass, and solid timber that patina gracefully over generations.",
  },
  {
    number: "02",
    title: "Sensory Stillness",
    description: "Luxury is not excess; it is the deliberate elimination of visual noise to create spaces that induce psychological calm and clarity.",
  },
  {
    number: "03",
    title: "Architectural Precision",
    description: "Every junction, shadow gap, and recessed light reveal is engineered with microscopic discipline so the technology disappears into the background.",
  },
  {
    number: "04",
    title: "Bangalore Context",
    description: "Whether a sky-level penthouse on Lavelle Road or a private villa in Sadashivnagar, each interior responds to Bangalore's unique light, garden heritage, and urban rhythms.",
  },
];

export const studioLeadership: TeamMember[] = [
  {
    name: "Arya Mukherjee",
    role: "Principal Architect & Founder",
    bio: "With architectural training in Milan and over a decade of practice in Bangalore, Arya leads the studio's spatial vision with an emphasis on brutalist warmth, light choreography, and modern Indian living.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Devina Sengupta",
    role: "Director of Interiors & Materiality",
    bio: "Devina spearheads material research, modular kitchen engineering, and bespoke millwork fabrication, collaborating with generational master artisans and international hardware innovators.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
];
