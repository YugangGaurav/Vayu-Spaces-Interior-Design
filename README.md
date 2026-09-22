# Vayu Spaces — Luxury Interior Architecture & Design Studio

A production-grade, static interior architecture studio website crafted with a luxury editorial aesthetic, modern glassmorphism UI, smooth scroll-based interactions, dynamic project case studies, and an interactive masonry gallery with lightbox.

Designed for high-end presentation to clients, showcasing the design ethos of **VAYU SPACES** (Bangalore, India).

---

## Key Highlights

- **Brand & Location**: Vayu Spaces · Indiranagar, Bangalore, Karnataka, India.
- **Aesthetic**: Luxury editorial design language inspired by *Architectural Digest*, *Vogue Living*, and *Aesop*.
- **Glassmorphism UI**: Refined frosted glass navigation bar, floating cards, subtle 1px borders, and soft shadows.
- **Why Vayu Spaces**: Dedicated value section detailing personalized space planning, tactile material honesty, climate-responsive Bangalore design, and turnkey transparency.
- **10 Core Services**: From residential villas, apartments, and modular kitchens to commercial and workspace interiors.
- **Dynamic Case Studies**: Statically pre-rendered architectural case studies with material palettes, chromatic swatches, spec ribbons, design styles, and full-resolution visual documentation.
- **Interactive Lightbox**: Accessible modal with keyboard navigation (Escape, Left/Right arrows), light dismiss, and image counter.
- **Floating WhatsApp Integration**: Fixed bottom-right glass action button configured from a single central configuration file.
- **Interactive Enquiry Form**: Validated multi-field form with property type selection, budget ranges, feedback state, and mailto fallback.
- **Google Maps Integration**: Framed architectural embed container showing Bangalore Indiranagar atelier.
- **Technical SEO & Analytics**: Automated XML sitemap, `robots.txt`, Schema.org structured data (`HomeAndConstructionBusiness` & `VisualArtwork`), and conditional Google Analytics 4 integration.
- **100% Static & Standalone**: Zero database, zero backend, zero authentication. Ready for one-click deployment on GitHub Pages, Vercel, or Netlify.

---

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) with GitHub Actions
- **Typography**: Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans (Clean Modern Sans)

---

## Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/YugangGaurav/Vayu-Spaces-Interior-Design.git
cd "Vayu-Spaces-Interior-Design"
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export
```bash
npm run build
```
This exports a static, production-ready website into the `out/` folder.

---

## GitHub Pages Deployment (Ready to Go)

This repository is **100% GitHub Pages ready** with an automated GitHub Actions deployment pipeline (`.github/workflows/deploy.yml`), static HTML export (`output: 'export'`), unoptimized image support, and `.nojekyll` preconfigured.

### Quick Setup Steps:

1. **Push your changes to GitHub**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages automated static deployment"
   git push origin main
   ```

2. **Enable GitHub Pages via GitHub Actions**:
   - Go to your repository on GitHub: `https://github.com/YugangGaurav/Vayu-Spaces-Interior-Design`
   - Click **Settings** (tab at top)
   - In the left sidebar, click **Pages**
   - Under **Build and deployment** > **Source**, change from **Deploy from a branch** to **GitHub Actions**

3. **Automatic Deployment**:
   - GitHub Actions will automatically run the `.github/workflows/deploy.yml` workflow.
   - Within 1–2 minutes, your website will be live at:
     **`https://yuganggaurav.github.io/Vayu-Spaces-Interior-Design/`**
     (or your custom domain if configured under Pages settings).

---

## Centralized Configuration & Data Architecture

All content is organized into clean, typed TypeScript data files for effortless updating:

| File | Purpose |
| --- | --- |
| `/src/data/config.ts` | Studio name, Bangalore address, phone, WhatsApp number & message, Google Map embed URL, social links, and Google Analytics ID. |
| `/src/data/projects.ts` | 6 complete architectural case studies (specs, design style, overview, concept, materials, palette, hero & gallery images). |
| `/src/data/services.ts` | 10 architectural disciplines with descriptions, deliverable checklists, and imagery. |
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

## License

© 2026 Vayu Spaces. All rights reserved.
