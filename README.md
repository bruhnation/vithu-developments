# Vithu Developments — Modern marketing site (demo)

A static, client-ready redesign of [vithudevelopmentsltd.com](https://vithudevelopmentsltd.com/). No backend — contact form shows a thank-you state only.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (light scroll animations)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for preview / deploy

```bash
npm run build
npm run start
```

Deploy to Vercel or any Node.js host that supports Next.js.

## Pages

| Route | Content |
|-------|---------|
| `/` | Hero, intro, services preview, trust points, CTA |
| `/about` | Company story |
| `/services` | Custom homes, remodeling, kitchen, design-build |
| `/gallery` | Photo grid (uses current site images as placeholders) |
| `/faq` | Accordion FAQs from original copy |
| `/contact` | Info + demo form |

## Customization

Edit copy, images, and nav in `src/data/site.ts`.

To wire the contact form for production, replace the submit handler in `src/views/Contact.tsx` with Formspree, Netlify Forms, or similar.
