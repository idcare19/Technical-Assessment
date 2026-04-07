# IDCARE19 — Internship Website (React + Vite)

A modern, responsive, single-page multipurpose website built for a Frontend/Full-Stack internship technical assessment.

## Live Sections

The page includes all required sections in logical order:

1. Sticky Menubar (smooth scrolling)
2. Hero / Slider-style intro with CTA
3. Services
4. Products
5. CTA block
6. Why Choose Us
7. FAQs (accordion)
8. Feedbacks (auto-moving testimonial carousel)
9. Blogs preview
10. Contact form (EmailJS-ready)
11. Map
12. Footer

## Tech Stack

- React 19
- Vite 8
- Vanilla CSS (mobile-first)
- EmailJS (`@emailjs/browser`) for contact form delivery
- ESLint for code quality

## Performance & SEO Highlights

- Mobile-first responsive layout
- WebP image usage
- Lazy loading for below-the-fold images and map iframe
- Explicit image dimensions / aspect ratio to reduce CLS
- JSON-LD schemas:
  - `FAQPage`
  - `Article`
  - `BreadcrumbList`
- SEO metadata in `index.html` (title, description, OG tags, canonical)
- `robots.txt` and `sitemap.xml` included in `public/`
- Compression/caching example in `public/.htaccess`

## Project Structure

- `src/components/` — reusable page sections
- `src/data/` — content data (services, products, faq, testimonials, blogs)
- `src/styles/` — global and section styles
- `public/` — static SEO/server files (`robots.txt`, `sitemap.xml`, `.htaccess`)

## Local Setup

1. Install dependencies
	- `npm install`
2. Start development server
	- `npm run dev`
3. Run lint
	- `npm run lint`
4. Create production build
	- `npm run build`

## Environment Variables (EmailJS)

Create/update `.env` in project root:

- `VITE_EMAILJS_SERVICE_ID=your_service_id`
- `VITE_EMAILJS_TEMPLATE_ID=your_template_id`
- `VITE_EMAILJS_PUBLIC_KEY=your_public_key`

After editing `.env`, restart the dev server.

### EmailJS Notes

- Make sure your EmailJS template includes matching variables such as:
  - `from_name`
  - `from_email`
  - `message`
  - `reply_to`
- In EmailJS dashboard security settings, allow local dev origins (for example `http://localhost:5173` and `http://localhost:5174`).

## NPM Scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Deployment

You can deploy on:

- Vercel
- Netlify
- GitHub Pages

Before final submission, replace the demo domain in:

- `index.html`
- `src/components/SeoSchemas.jsx`
- `public/robots.txt`
- `public/sitemap.xml`

## Internship Submission Checklist

- [x] All required sections included
- [x] Responsive design across devices
- [x] Contact form integrated (EmailJS-ready)
- [x] SEO basics + schema markup
- [x] Robots + sitemap included
- [x] Lint/build passing

## Recommended Final Step

Take a Lighthouse/PageSpeed screenshot (target **90+ Performance** and **90+ SEO**) and include it in your repository (e.g. `docs/lighthouse-score.png`).
