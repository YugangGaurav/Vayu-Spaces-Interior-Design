export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role: string;
  project: string;
  location: string;
  year: string;
  projectSlug: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Every detail felt intentional. The team understood how we wanted the house to feel, not just how we wanted it to look. Walking into our courtyard each morning gives us an overwhelming sense of calm.",
    client: "Ananya & Rohan Sen",
    role: "Founders, Sen Design Guild",
    project: "The Courtyard Residence",
    location: "Kolkata",
    year: "2026",
    projectSlug: "courtyard-residence",
  },
  {
    id: "test-2",
    quote:
      "Vayu Spaces transformed an ordinary high-rise box into a meditative sky sanctuary. The airiness and natural travertine textures feel restorative after hectic days in the city.",
    client: "Vikram Singhania",
    role: "Managing Director, Tech Capital",
    project: "Casa Verde Penthouse",
    location: "Bengaluru",
    year: "2026",
    projectSlug: "casa-verde",
  },
  {
    id: "test-3",
    quote:
      "Coming home feels like stepping into another dimension of quiet luxury. The architectural lighting and custom walnut cabinetry have a tactile finish that pictures simply cannot capture.",
    client: "Devashish & Meera Kapur",
    role: "Art Collectors & Philanthropists",
    project: "Monochrome House",
    location: "Mumbai",
    year: "2025",
    projectSlug: "monochrome-house",
  },
  {
    id: "test-4",
    quote:
      "The precision with which they framed our contemporary art collection within classical wall paneling was masterful. They have the refined eye of an international museum curator.",
    client: "Tara & Kabir Mehra",
    role: "Gallerists",
    project: "Atelier 27",
    location: "New Delhi",
    year: "2025",
    projectSlug: "atelier-27",
  },
  {
    id: "test-5",
    quote:
      "The seamless transition between the glass pavilion living room and the poolside reflection deck is extraordinary. They captured the spirit of Alibaug coastal living with uncompromising sophistication.",
    client: "Aditya & Sanjana Parekh",
    role: "Architectural Enthusiasts",
    project: "The Glass Pavilion",
    location: "Alibaug",
    year: "2025",
    projectSlug: "glass-pavilion",
  },
  {
    id: "test-6",
    quote:
      "The sensitivity with which Vayu Spaces treated our 150-year-old family estate in Assagao was deeply moving. They honored our ancestral heritage while providing effortless modern comfort.",
    client: "Sameer Rao",
    role: "Restaurateur & Author",
    project: "Serena Estate",
    location: "Goa",
    year: "2024",
    projectSlug: "serena-estate",
  },
];
