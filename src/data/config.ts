export interface StudioConfig {
  name: string;
  shortName: string;
  tagline: string;
  eyebrow: string;
  description: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    full: string;
  };
  serviceAreas: string[];
  workingHours: string;
  socials: {
    instagram: string;
    pinterest: string;
    linkedin: string;
    facebook: string;
  };
  googleMapsEmbedUrl: string;
  siteUrl: string;
  gaId?: string;
  googleSiteVerification?: string;
}

export const studioConfig: StudioConfig = {
  name: "Vayu Spaces",
  shortName: "Vayu",
  tagline: "Spaces Designed Around You.",
  eyebrow: "INTERIOR ARCHITECTURE & DESIGN · BANGALORE",
  description:
    "Vayu Spaces is a premier interior design studio in Bangalore, creating thoughtful residential, villa, and apartment interiors that combine aesthetics, functionality, and personality.",
  email: "hello@vayuspaces.com",
  phone: "+91 98450 24680",
  whatsappNumber: "919845024680",
  whatsappMessage:
    "Hi, I'm interested in discussing an interior design project in Bangalore with Vayu Spaces. I'd love to know more about your services.",
  address: {
    street: "Level 3, 100 Feet Road",
    neighborhood: "HAL 2nd Stage, Indiranagar",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    postalCode: "560038",
    full: "Level 3, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bangalore, Karnataka 560038, India",
  },
  serviceAreas: [
    "Indiranagar",
    "Lavelle Road",
    "Koramangala",
    "Sadashivnagar",
    "Whitefield",
    "Sarjapur Road",
    "HSR Layout",
    "Jayanagar",
    "North Bangalore",
  ],
  workingHours: "Monday – Saturday: 10:00 AM – 7:00 PM (By Appointment Only)",
  socials: {
    instagram: "https://instagram.com/vayuspaces",
    pinterest: "https://pinterest.com/vayuspaces",
    linkedin: "https://linkedin.com/company/vayuspaces",
    facebook: "https://facebook.com/vayuspaces",
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9749539454174!2d77.63945287517942!3d12.973418987342173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7751a0211%3A0x6e9f528dc9076f82!2s100%20Feet%20Rd%2C%20HAL%202nd%20Stage%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  siteUrl: "https://vayuspaces.com",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
};
