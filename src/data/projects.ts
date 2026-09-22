export interface ProjectMaterial {
  name: string;
  category: string;
  description: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  tone: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption: string;
  orientation?: "landscape" | "portrait" | "wide";
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  category: "Villa Interiors" | "Luxury Apartment" | "Penthouse" | "Modern Residence" | "Heritage Renovation";
  designStyle: string;
  year: string;
  area: string;
  client: string;
  duration: string;
  shortDescription: string;
  overview: string[];
  concept: string;
  materials: ProjectMaterial[];
  colorPalette: ColorSwatch[];
  heroImage: string;
  featuredImage: string;
  galleryImages: ProjectImage[];
  quote?: {
    text: string;
    author: string;
  };
}

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "courtyard-residence",
    title: "The Courtyard Residence",
    subtitle: "A light-sculpted sanctuary centered around an inward tropical green court.",
    location: "Sadashivnagar, Bangalore",
    category: "Villa Interiors",
    designStyle: "Tropical Modern Architecture",
    year: "2026",
    area: "4,850 sq.ft.",
    client: "Aditi & Rohan Rao",
    duration: "14 Months",
    shortDescription:
      "A serene standalone villa integrating Bangalore's temperate cross-breezes, hand-troweled lime wash walls, and an introspective central water court.",
    overview: [
      "The Courtyard Residence reimagines tropical modernism for an elite residential enclave in Sadashivnagar. Designed for an avid art-collecting family, the spatial plan wraps around a double-height open courtyard that draws soft morning daylight deep into the private living quarters.",
      "The layout eliminates narrow hallways in favor of wide gallery passages. Custom Burma teak wooden louvers filter harsh noon sunlight, casting kinetic linear shadows across honed grey Kota stone floors throughout the day.",
    ],
    concept:
      "Inward privacy meets atmospheric openness. The dialogue between mineral textures, living water, and lush indoor greenery anchors the soul of the home.",
    materials: [
      { name: "Raw Lime Plaster", category: "Wall Finishes", description: "Hand-applied slaked mineral lime with subtle river silt texture." },
      { name: "Honed Grey Kota Stone", category: "Flooring", description: "Velvet-touch matte natural sedimentary stone with seamless jointing." },
      { name: "Reclaimed Burma Teak", category: "Joinery & Screens", description: "Salvaged historic timber treated with organic matte hardwax oils." },
      { name: "Unlacquered Brass", category: "Architectural Hardware", description: "Custom milled handles that acquire a graceful living patina over time." },
    ],
    colorPalette: [
      { name: "Bone Calcite", hex: "#F3F1EC", tone: "Warm Light" },
      { name: "Sadashiv Moss", hex: "#7E8578", tone: "Botanical Earth" },
      { name: "Aged Teak", hex: "#5C4033", tone: "Deep Organic" },
      { name: "Muted Champagne", hex: "#D8C7A9", tone: "Soft Metallic" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        alt: "Double-height living room facing the internal water courtyard",
        caption: "Double-height living salon overlooking the reflecting pool and private garden.",
        orientation: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
        alt: "Custom timber joinery and curated reading library",
        caption: "Curated reading library with floor-to-ceiling teak shelving and low lounge seating.",
        orientation: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=85",
        alt: "Minimalist dining room with monolithic quartzite table",
        caption: "Custom monolithic dining table carved from a single slab of quartzite stone.",
        orientation: "landscape",
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        alt: "Master suite with bespoke timber details and linen drapery",
        caption: "Master suite with concealed acoustic paneling and soft linen draperies.",
        orientation: "portrait",
      },
    ],
    quote: {
      text: "Every detail in our Sadashivnagar home felt deeply intentional. Vayu Spaces understood how we wanted to live and gather as a family.",
      author: "Aditi & Rohan Rao, Bangalore",
    },
  },
  {
    id: "proj-2",
    slug: "casa-verde",
    title: "Casa Verde Penthouse",
    subtitle: "A botanical sky sanctuary suspended above Bangalore's central skyline.",
    location: "Lavelle Road, Bangalore",
    category: "Penthouse",
    designStyle: "Biophilic Contemporary Luxury",
    year: "2026",
    area: "3,800 sq.ft.",
    client: "Vikram & Maya Singhania",
    duration: "11 Months",
    shortDescription:
      "A sky-level residence combining exposed board-formed concrete, vein-cut travertine islands, and lush terrace garden perimeters.",
    overview: [
      "Perched on the 28th floor in Lavelle Road, Casa Verde was conceived as an elevated garden pavilion in harmony with Bangalore's verdant heritage. Unnecessary partition walls were removed to create expansive 270-degree skyline views.",
      "A tactile rhythm of hand-fluted silver travertine, smoked French oak floorboards, and raw cast concrete establishes an organic equilibrium against panoramic city horizons.",
    ],
    concept:
      "Urban biophilic luxury. Embedding sensory landscape terraces directly into the daily living zones to create uninterrupted communion with fresh air and greenery.",
    materials: [
      { name: "Silver Travertine", category: "Natural Stone", description: "Vein-cut Italian travertine with open textural pores and honed finish." },
      { name: "Smoked French Oak", category: "Flooring", description: "Wide engineered timber planks with a matte wire-brushed finish." },
      { name: "Architectural Concrete", category: "Ceiling & Columns", description: "Board-formed architectural concrete with delicate wood grain imprints." },
      { name: "Blackened Steel", category: "Framing", description: "Slender hot-rolled metal profiles for floor-to-ceiling sliding partitions." },
    ],
    colorPalette: [
      { name: "Cloud Travertine", hex: "#E3DFD5", tone: "Neutral Light" },
      { name: "Cubbon Moss", hex: "#4A5D4E", tone: "Organic Accent" },
      { name: "Smoked Oak", hex: "#3A342D", tone: "Deep Ground" },
      { name: "Soft Cashmere", hex: "#C7BEB0", tone: "Warm Mid-tone" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
        alt: "Open concept penthouse living and terrace",
        caption: "Seamless threshold between the indoor salon and landscaped perimeter sky terrace.",
        orientation: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85",
        alt: "Gourmet culinary island in silver travertine",
        caption: "Monolithic travertine island paired with smoked oak cabinetry and integrated induction.",
        orientation: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
        alt: "Sky lounge terrace surrounded by native grasses",
        caption: "Outdoor sky lounge surrounded by native Bangalore ferns and fragrant night jasmine.",
        orientation: "landscape",
      },
      {
        url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85",
        alt: "Freestanding stone bathtub with skyline views",
        caption: "Honed stone soaking tub overlooking twilight city lights in the master en-suite.",
        orientation: "portrait",
      },
    ],
    quote: {
      text: "Vayu Spaces transformed an ordinary high-rise apartment into a meditative sky sanctuary. The airiness and natural materials feel restorative every day.",
      author: "Vikram Singhania, Bangalore",
    },
  },
  {
    id: "proj-3",
    slug: "monochrome-house",
    title: "Monochrome House",
    subtitle: "A masterclass in quiet brutalist warmth, shadow play, and acoustic serenity.",
    location: "Indiranagar, Bangalore",
    category: "Modern Residence",
    designStyle: "Tonal Architectural Minimalism",
    year: "2025",
    area: "4,200 sq.ft.",
    client: "Devashish & Meera Kapur",
    duration: "16 Months",
    shortDescription:
      "A private residence exploring charcoal microcement, fluted black basalt, and warm walnut millwork hidden within Indiranagar.",
    overview: [
      "Monochrome House demonstrates the profound tranquility of a disciplined, dark material palette. Rather than relying on bright white surfaces, space is sculpted through directional sunlight falling across nuanced matte surfaces.",
      "The residence balances deep charcoal lime wash with warm walnut cabinetry, architectural bronze accents, and hand-knotted silk rugs, creating an acoustic cocoon of stillness in vibrant East Bangalore.",
    ],
    concept:
      "Tonal minimalism and tactile warmth. Exploring how textured shadow, acoustic dampening, and deep hues induce immediate psychological calm.",
    materials: [
      { name: "Charcoal Microcement", category: "Surfaces", description: "Seamless mineral coating across ceilings, walls, and cabinetry." },
      { name: "Black Basalt", category: "Masonry", description: "Volcanic stone with a water-jet fluted surface." },
      { name: "American Walnut", category: "Joinery", description: "Quarter-sawn dark timber treated with natural hardwax oil." },
      { name: "Cast Bronze", category: "Details", description: "Hand-cast sculptural pulls and recessed architectural lighting niches." },
    ],
    colorPalette: [
      { name: "Obsidian Mineral", hex: "#1A1A1A", tone: "Deep Anchor" },
      { name: "Charcoal Silk", hex: "#323130", tone: "Matte Dark" },
      { name: "Warm Walnut", hex: "#6F4F38", tone: "Organic Timber" },
      { name: "Bone Ivory", hex: "#ECEAE4", tone: "Crisp Relief" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        alt: "Moody living room with low-profile Italian sofa",
        caption: "Deep charcoal living salon with low-slung custom bouclé upholstery.",
        orientation: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
        alt: "Cantilevered floating walnut staircase",
        caption: "Cantilevered walnut staircase appearing to float against textured microcement.",
        orientation: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=85",
        alt: "Private tasting lounge and basalt credenza",
        caption: "Private conversational salon with temperature-controlled glass display cases.",
        orientation: "landscape",
      },
    ],
    quote: {
      text: "Coming home in Indiranagar feels like stepping into another dimension of quiet luxury. The architectural lighting and craftsmanship are breathtaking.",
      author: "Devashish Kapur, Bangalore",
    },
  },
  {
    id: "proj-4",
    slug: "glass-house-villa",
    title: "The Glass House Villa",
    subtitle: "A contemporary pavilion dissolving the boundary between indoor living and woodland landscape.",
    location: "Whitefield, Bangalore",
    category: "Villa Interiors",
    designStyle: "Contemporary Glass & Timber",
    year: "2025",
    area: "5,400 sq.ft.",
    client: "Aditya & Sanjana Parekh",
    duration: "15 Months",
    shortDescription:
      "An expansive villa wrapped in thermal low-iron glass facades, cast-in-situ ivory terrazzo, and natural rain gardens in Whitefield.",
    overview: [
      "Nestled among mature eucalyptus and rain trees, The Glass House Villa opens entirely to prevailing cross-breezes. Deep cantilevered eaves protect the interiors from intense afternoon glare.",
      "Cast terrazzo floors embedded with river quartz flow seamlessly from the main living salon to the poolside deck, creating a continuous, uninterrupted entertaining floor plate.",
    ],
    concept:
      "Weightless architecture. Creating protective domestic shelter while remaining completely immersed in natural foliage and Bangalore's salubrious climate.",
    materials: [
      { name: "Cast Terrazzo", category: "Flooring", description: "Seamless ivory terrazzo with local river quartz and grey granite aggregate." },
      { name: "Champagne Anodized Aluminum", category: "Glazing", description: "Ultra-slim thermal break window profiles with motorized track sliding." },
      { name: "Honed Quartzite", category: "Fireplace & Plinths", description: "Natural hard stone with subtle crystalline luminescence." },
      { name: "Natural Cane & Linen", category: "Textiles", description: "Custom woven headboards and breathable sheer acoustic draperies." },
    ],
    colorPalette: [
      { name: "Terrazzo Cream", hex: "#EAE7DF", tone: "Luminous Ground" },
      { name: "Forest Canopy", hex: "#2E3D30", tone: "Organic Accent" },
      { name: "Champagne Metal", hex: "#D1C3AD", tone: "Soft Metallic" },
      { name: "Charcoal Shadow", hex: "#1C1C1B", tone: "Anchor Contrast" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
        alt: "Open pavilion living room opening towards the pool deck",
        caption: "Sliding glass facade retracted completely, opening the main living room to the garden.",
        orientation: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85",
        alt: "Private outdoor courtyard shower in master wing",
        caption: "Private open-air courtyard shower lined with living tropical ferns in Whitefield.",
        orientation: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
        alt: "Dining room framed by timber louvers",
        caption: "Dining room framed by kinetic timber louvers and tranquil pool views.",
        orientation: "landscape",
      },
    ],
    quote: {
      text: "Vayu Spaces gave us a home where everyday life feels like a perpetual retreat. The indoor-outdoor connection is pure bliss.",
      author: "Aditya & Sanjana Parekh, Bangalore",
    },
  },
  {
    id: "proj-5",
    slug: "atelier-27",
    title: "Atelier 27",
    subtitle: "A collector's residence celebrating neoclassical poise and mid-century modernism.",
    location: "Koramangala, Bangalore",
    category: "Luxury Apartment",
    designStyle: "Warm Japandi & Neoclassical Fusion",
    year: "2025",
    area: "2,600 sq.ft.",
    client: "Tara & Kabir Mehra",
    duration: "9 Months",
    shortDescription:
      "An art collector's residence in Koramangala featuring museum-grade illumination, boiserie wall paneling, and brushed brass fixtures.",
    overview: [
      "Atelier 27 serves as both a comfortable family sanctuary and a private gallery for an extensive collection of modern Indian art.",
      "Precision wall paneling conceals smart storage, central HVAC returns, and acoustic baffles, while subtle picture rails allow rotating art displays without damaging delicate lime finishes.",
    ],
    concept:
      "Where classical discipline meets contemporary art curation. Seamless visual rhythm and understated luxury in Koramangala.",
    materials: [
      { name: "Belgian Flax Linen", category: "Textiles", description: "Bespoke acoustic drapery and upholstered wall panels." },
      { name: "Calacatta Gold Marble", category: "Stone", description: "Honed white Italian marble with bold golden-grey veining." },
      { name: "Brushed Champagne Brass", category: "Metal", description: "Precision CNC milled cabinet inlays and slim shelf supports." },
      { name: "Bleached Ash Wood", category: "Wood", description: "Light timber flooring and acoustic pocket doors." },
    ],
    colorPalette: [
      { name: "Calacatta White", hex: "#FAF8F5", tone: "Luminous Base" },
      { name: "Gilded Champagne", hex: "#D6C3A5", tone: "Subtle Warmth" },
      { name: "Dusty Taupe", hex: "#9E9488", tone: "Mid Earth" },
      { name: "Deep Petrol", hex: "#23333C", tone: "Jewel Accent" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
        alt: "Art display living salon with museum track lighting",
        caption: "Gallery-style salon designed around curated contemporary artworks.",
        orientation: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
        alt: "Marble plinth fireplace and conversational salon",
        caption: "Low marble plinth fireplace with concealed mist vapor flame technology.",
        orientation: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1400&q=85",
        alt: "Private study and library with floor-to-ceiling ash shelving",
        caption: "Private study with fluted glass doors and integrated leather writing desk.",
        orientation: "landscape",
      },
    ],
    quote: {
      text: "The lighting choreography alone transformed how we live with our art in Koramangala. Vayu Spaces has the refined sensibility of an international gallerist.",
      author: "Tara & Kabir Mehra, Bangalore",
    },
  },
  {
    id: "proj-6",
    slug: "heritage-bungalow",
    title: "The Heritage Bungalow",
    subtitle: "A sensitive architectural restoration weaving colonial arches, cane work, and modern Italian discipline.",
    location: "Jayanagar, Bangalore",
    category: "Heritage Renovation",
    designStyle: "Indo-Modern Heritage Restoration",
    year: "2024",
    area: "4,100 sq.ft.",
    client: "Sameer & Priyadarshini Rao",
    duration: "18 Months",
    shortDescription:
      "A sensitive heritage transformation preserving soaring timber rafters and verandas of an ancestral residence in South Bangalore.",
    overview: [
      "The Heritage Bungalow restored the majestic vaulted timber ceilings and generous verandas of an ancestral home in Jayanagar while inserting contemporary thermal insulation, concealed plumbing, and minimalist fixtures.",
      "The result is a timeless juxtaposition: authentic colonial brickwork arches and handmade clay tiles coexisting with bespoke bronze joinery, frameless glass showers, and curated bespoke furniture.",
    ],
    concept:
      "Preserving memory while engineering effortless modern comfort. Honoring Bangalore's architectural past with contemporary restraint.",
    materials: [
      { name: "Bangalore Terracotta Tile", category: "Flooring", description: "Handmade clay tiles treated with organic beeswax polish." },
      { name: "Restored Jackwood", category: "Ceiling Trusses", description: "Century-old timber trusses preserved with non-toxic natural oils." },
      { name: "Hand-Woven Cane", category: "Wardrobes & Screens", description: "Artisanal cane weaving providing natural ventilation in wardrobes." },
      { name: "Brushed Gunmetal", category: "Fixtures", description: "Minimalist modern plumbing fixtures creating crisp visual contrast." },
    ],
    colorPalette: [
      { name: "Jayanagar Ochre", hex: "#D4A359", tone: "Heritage Warmth" },
      { name: "Clay Terracotta", hex: "#A65B3E", tone: "Earthy Ceramic" },
      { name: "Aged Jackwood", hex: "#4A3222", tone: "Historic Timber" },
      { name: "Soft Salt White", hex: "#F5F3ED", tone: "Lime Wash" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85",
    featuredImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85",
        alt: "High-ceiling veranda with arches and cane lounge chairs",
        caption: "Restored grand veranda opening towards the tranquil garden court in Jayanagar.",
        orientation: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
        alt: "Heritage bedroom with four-poster bed and cane wardrobes",
        caption: "Master suite with bespoke cane cabinetry and soaring exposed roof rafters.",
        orientation: "portrait",
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1400&q=85",
        alt: "Internal courtyard restored with native granite paving",
        caption: "Internal courtyard restored with native Sadarahalli granite and vintage lanterns.",
        orientation: "landscape",
      },
    ],
    quote: {
      text: "The sensitivity with which Vayu Spaces treated our family's ancestral bungalow in Jayanagar was exceptional. They gave history a graceful new life.",
      author: "Sameer Rao, Bangalore",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
