import React from "react";
import { studioConfig } from "@/data/config";

interface SEOStructuredDataProps {
  type?: "Organization" | "LocalBusiness" | "CreativeWork";
  projectData?: {
    name: string;
    description: string;
    image: string;
    year: string;
    location: string;
  };
}

export const SEOStructuredData: React.FC<SEOStructuredDataProps> = ({
  type = "LocalBusiness",
  projectData,
}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: studioConfig.name,
    alternateName: studioConfig.shortName,
    description: studioConfig.description,
    url: studioConfig.siteUrl,
    logo: `${studioConfig.siteUrl}/favicon.ico`,
    telephone: studioConfig.phone,
    email: studioConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: studioConfig.address.street,
      addressLocality: studioConfig.address.city,
      addressRegion: studioConfig.address.state,
      postalCode: studioConfig.address.postalCode,
      addressCountry: studioConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9734",
      longitude: "77.6395",
    },
    areaServed: studioConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, Bangalore`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      studioConfig.socials.instagram,
      studioConfig.socials.pinterest,
      studioConfig.socials.linkedin,
      studioConfig.socials.facebook,
    ],
    priceRange: "$$$$",
  };

  if (type === "CreativeWork" && projectData) {
    const projectSchema = {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: projectData.name,
      description: projectData.description,
      image: projectData.image,
      dateCreated: projectData.year,
      creator: {
        "@type": "Organization",
        name: studioConfig.name,
        url: studioConfig.siteUrl,
      },
      contentLocation: {
        "@type": "Place",
        name: projectData.location,
      },
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
};
