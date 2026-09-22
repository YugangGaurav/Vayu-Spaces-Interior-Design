export interface Service {
  number: string;
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Turnkey & Consultation";
  subtitle: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
  image: string;
}

export const services: Service[] = [
  {
    number: "01",
    id: "residential-interiors",
    title: "Residential Interiors",
    category: "Residential",
    subtitle: "Complete home transformations tailored to contemporary living rituals.",
    shortDescription:
      "Comprehensive interior design for independent homes and residences, synthesizing space planning, bespoke millwork, and tactile materiality.",
    description:
      "We approach residential interiors with deep reverence for how families interact, rest, and entertain in Bangalore. Every room transition, lighting axis, and storage reveal is mapped to optimize daily ease while cultivating an atmosphere of quiet luxury.",
    deliverables: [
      "Full-home architectural layout & 3D visualization",
      "Custom timber cabinetry & bespoke furniture fabrication",
      "Curated material finishes (lime wash, Italian stone, warm wood)",
      "Integrated lighting design & smart home coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    id: "apartment-interiors",
    title: "Apartment Interiors",
    category: "Residential",
    subtitle: "Sophisticated high-rise urban living maximizing light, volume, and view corridors.",
    shortDescription:
      "High-density luxury interventions that eliminate clutter through concealed storage, fluid circulation, and refined acoustic control.",
    description:
      "Designing for modern Bangalore apartments requires spatial discipline and clever volume optimization. We dissolve visual barriers with fluted glass partitions, integrated pocket doors, and customized wall paneling to create airy, serene sky-level sanctuaries.",
    deliverables: [
      "Open-concept structural reconfigurations",
      "Concealed architectural wardrobes & utility storage",
      "Acoustic floor & ceiling treatments",
      "Automated shading & layered atmospheric illumination",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    id: "villa-interiors",
    title: "Villa Interiors",
    category: "Residential",
    subtitle: "Expansive private estates balancing architectural grandeur with intimate warmth.",
    shortDescription:
      "Tailored interior architecture for luxury villas and row houses in Bangalore's prime residential enclaves.",
    description:
      "For expansive standalone villas, we choreograph high double-height volumes, private courtyards, and grand living halls. Our palettes marry local stone and seasoned timber with imported marbles and bespoke brass joinery to establish generational permanence.",
    deliverables: [
      "Multi-level estate space planning & visual cohesion",
      "Grand staircase & double-height foyer treatments",
      "Private garden courtyards & terrace lounges",
      "Fine art curation & custom sculptural lighting",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    id: "living-room-design",
    title: "Living Room Design",
    category: "Residential",
    subtitle: "The emotional centerpiece of the home, crafted for conversation and quiet stillness.",
    shortDescription:
      "Bespoke formal salons and family lounges with sculptural furniture, statement plinths, and nuanced lighting.",
    description:
      "The living room sets the emotional tone for the entire residence. We design conversational groupings, low-slung Italian-inspired upholstery, fluted stone credenzas, and ambient cove lighting that together foster effortless hospitality.",
    deliverables: [
      "Custom entertainment consoles & acoustic feature walls",
      "Monolithic stone coffee plinths & display shelving",
      "Bespoke rugs, drapery & tactile upholstery selection",
      "Multi-scene lighting controls for day and evening",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    id: "bedroom-design",
    title: "Bedroom Design",
    category: "Residential",
    subtitle: "Restorative sleeping suites wrapped in acoustic softness and gentle daylight.",
    shortDescription:
      "Master and guest bedroom sanctuaries featuring custom upholstered headboards, walk-in closets, and blackout elegance.",
    description:
      "We design bedrooms as sensory retreat chambers that promote deep deceleration. Concealed HVAC vents, linen-wrapped acoustic paneling, soft bouclé textures, and warm timber floors combine to create deeply restful sleeping spaces.",
    deliverables: [
      "Integrated bed backdrops & floating bedside tables",
      "Walk-in dressing rooms with back-lit glass wardrobes",
      "Acoustic isolation & motorized blackout automation",
      "En-suite vanity & spa bathroom harmonization",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "06",
    id: "modular-kitchen",
    title: "Modular Kitchen",
    category: "Residential",
    subtitle: "High-precision culinary spaces balancing German engineering with luxury stone craft.",
    shortDescription:
      "Ergonomic, heavy-duty modular kitchens with seamless hardware, quartz islands, and organized storage systems.",
    description:
      "Understanding modern Indian cooking rituals alongside international culinary standards, our kitchens integrate Blum and Hettich hardware, anti-fingerprint matte acrylics, concealed spice pantries, and monolithic breakfast islands.",
    deliverables: [
      "Ergonomic work-triangle workflow optimization",
      "Custom sintered stone or quartz countertops & backsplashes",
      "Heavy-duty internal pull-outs, tandem boxes & corner carousels",
      "Concealed high-suction ventilation & appliance integration",
    ],
    image:
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "07",
    id: "commercial-interiors",
    title: "Commercial Interiors",
    category: "Commercial",
    subtitle: "Memorable spatial identities for boutique hotels, flagship stores, and dining venues.",
    shortDescription:
      "Experiential commercial spaces designed to reinforce brand prestige and provide elevated visitor journeys.",
    description:
      "In commercial environments, every square foot must deliver aesthetic impact and functional endurance. We translate brand identity into physical touchpoints, durable commercial materials, and photogenic lighting.",
    deliverables: [
      "Brand narrative & spatial concept translation",
      "High-traffic durable luxury finish schedules",
      "Bespoke reception desks & sculptural feature elements",
      "Commercial statutory compliance & timeline phasing",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "08",
    id: "office-interiors",
    title: "Office Interiors",
    category: "Commercial",
    subtitle: "Inspiring workspaces in Bangalore's tech and venture corridors fostering focus and culture.",
    shortDescription:
      "Executive suites, creative studios, and hybrid corporate headquarters designed for acoustic calm and productive synergy.",
    description:
      "We design modern workspaces that transcend sterile cubicles. Incorporating natural light, biophilic greenery, acoustic booths, collaborative breakout lounges, and ergonomic executive suites tailored for high-performing teams.",
    deliverables: [
      "Hybrid workplace occupancy & circulation planning",
      "Executive boardrooms with integrated AV conferencing",
      "Acoustic baffles, telephone pods & quiet focus zones",
      "Reception lounge & branded pantry experiences",
    ],
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "09",
    id: "turnkey-projects",
    title: "Turnkey Interior Projects",
    category: "Turnkey & Consultation",
    subtitle: "Stress-free end-to-end design-and-build management from first sketch to final key.",
    shortDescription:
      "Single-point responsibility encompassing design, procurement, factory fabrication, civil work, and white-glove handover.",
    description:
      "Our turnkey model eliminates vendor friction and budget creep. As your single accountable partner, our site project managers oversee quality control, factory millwork precision, timeline adherence, and final home styling.",
    deliverables: [
      "Complete design, procurement & construction management",
      "Direct factory carpentry & rigorous site supervision",
      "Transparent milestone-based budget & timeline schedules",
      "White-glove handover with comprehensive Warranty & Care kit",
    ],
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "10",
    id: "space-planning",
    title: "Space Planning & Consultation",
    category: "Turnkey & Consultation",
    subtitle: "Strategic architectural advisory to unlock structural efficiency and aesthetic clarity.",
    shortDescription:
      "Expert spatial consultations, vastu-aligned flow assessments, and material mood boards before you break ground.",
    description:
      "Whether evaluating a newly purchased apartment shell or preparing for an extensive villa renovation, our architects assess floor plans, natural light axes, civil modifications, and furnish comprehensive concept presentations.",
    deliverables: [
      "Detailed 2D furniture layout & circulation mapping",
      "Civil modification & wall removal feasibility",
      "Material, texture & chromatic mood boards",
      "Preliminary budget estimation & phasing roadmap",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  },
];
