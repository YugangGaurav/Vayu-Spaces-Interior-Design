# Local Image Asset Directory

This directory is ready for local architectural photography assets.

To replace any external Unsplash image with local files:
1. Save your high-resolution images here (e.g. `/public/images/projects/courtyard-residence/hero.jpg`)
2. Update the corresponding image path in `/src/data/projects.ts`, `/src/data/services.ts`, or `/src/data/gallery.ts` (e.g. `/images/projects/courtyard-residence/hero.jpg`)

All components utilize Next.js `<Image />` and will automatically optimize local files.
