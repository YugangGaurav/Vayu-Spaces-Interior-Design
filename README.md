# Vayu Spaces — Luxury Interior Architecture & Design Studio

A production-grade, static interior architecture studio website crafted with a luxury editorial aesthetic, modern glassmorphism UI, smooth scroll-based interactions, dynamic project case studies, and an interactive masonry gallery with lightbox.

Designed for high-end presentation to clients, showcasing the design ethos of **Vayu Spaces** (Kolkata · Pan-India).

---

## Key Highlights

- **Aesthetic**: Luxury editorial design language inspired by *Architectural Digest*, *Vogue Living*, and *Aesop*.
- **Glassmorphism UI**: Refined frosted glass navigation bar, floating cards, subtle 1px borders, and soft shadows.
- **Dynamic Project Case Studies**: Complete architectural case studies with material palettes, chromatic swatches, spec ribbons, and full-resolution visual documentation.
- **Interactive Lightbox**: Accessible modal with keyboard navigation (Escape, Left/Right arrows), light dismiss, and image counter.
- **Floating WhatsApp Integration**: Fixed bottom-right glass action button configured from a single central configuration file.
- **Interactive Enquiry Form**: Field validation, submission feedback state, and mailto fallback (100% static, ready for backend connection later).
- **Google Maps Integration**: Framed architectural embed container showing studio location without API key requirements.
- **Technical SEO & Analytics**: Automated XML sitemap, `robots.txt`, Schema.org structured data (`LocalBusiness` and `CreativeWork`), and conditional Google Analytics 4 integration.
- **100% Static & Standalone**: Zero database, zero backend, zero authentication. Ready for one-click deployment on GitHub Pages, Vercel, or Netlify.

---

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans (Clean Modern Sans)

---

## Getting Started

### 1. Clone & Install Dependencies
```bash
git clone <your-repo-url>
cd "Vayu Spaces"
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## Centralized Configuration & Data Architecture

All content is organized into clean, typed TypeScript data files for effortless updating:

| File | Purpose |
| --- | --- |
| `/src/data/config.ts` | Studio name, contact details, address, WhatsApp number & message, Google Map embed URL, social links, and Google Analytics ID. |
| `/src/data/projects.ts` | 6 complete architectural case studies (specs, overview, concept, materials, palette, hero & gallery images). |
| `/src/data/services.ts` | 6 architectural disciplines with descriptions, deliverable checklists, and imagery. |
| `/src/data/testimonials.ts` | 6 authentic client reviews with roles and project associations. |
| `/src/data/gallery.ts` | Curated archive of architectural photography with tags, aspect ratios, and captions. |
| `/src/data/about.ts` | Studio stats, 6-stage methodology, core values, and director bios. |

---

## Replacing Images With Local Assets

To use local project photography instead of external demo URLs:
1. Place your images in `/public/images/projects/[project-name]/`
2. Update the image paths in `/src/data/projects.ts` (e.g. `/images/projects/courtyard-residence/hero.jpg`)
3. Next.js `<Image />` will automatically optimize and serve them locally.

---

## Deployment

The website can be deployed to any static or Node.js hosting platform:
- **Vercel**: Import repository and deploy automatically with zero configuration.
- **Netlify**: Connect repo with build command `npm run build` and publish directory `.next`.
- **GitHub Pages**: Build and deploy static export directly.

---

## License

© 2026 Vayu Spaces. All rights reserved.
