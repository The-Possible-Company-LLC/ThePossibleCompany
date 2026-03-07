# The Possible Company — Marketing Website

> **"Anything's Possible" · "Bridging the AI Literacy Gap"**

A modern, responsive marketing website for **The Possible Company LLC** — an AI literacy and consulting firm helping small businesses, nonprofits, and community organizations adopt AI safely and practically.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) |
| Language | TypeScript |
| Routing | [React Router v6](https://reactrouter.com/) |
| Styling | Plain CSS with CSS custom properties (no UI framework) |
| Deployment target | Static hosting (GitHub Pages, Netlify, Vercel, Azure Static Web Apps) |

---

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
src/
├── main.tsx                  # React entry point
├── App.tsx                   # Router provider
├── router.tsx                # Route definitions (React Router)
│
├── pages/                    # Route-level page components
│   ├── Home.tsx              # / — Hero, services overview, audience preview
│   ├── About.tsx             # /about — Story, founder, AI timeline
│   ├── Services.tsx          # /services — Assess, Educate, Implement, Support
│   ├── WhoWeServe.tsx        # /who-we-serve — Audience cards, challenges
│   ├── Philosophy.tsx        # /philosophy — Core principles
│   ├── Resources.tsx         # /resources — Articles and guides
│   └── Contact.tsx           # /contact — Contact info + form
│
├── components/
│   ├── Layout/
│   │   ├── Layout.tsx        # Wraps Header + Outlet + Footer
│   │   ├── Header.tsx        # Sticky header with logo + nav + CTA
│   │   ├── Navigation.tsx    # NavLinks + mobile hamburger
│   │   └── Footer.tsx        # Footer with links + contact info
│   ├── HeroSection.tsx       # Reusable hero (dark/light variants)
│   ├── ServiceCard.tsx       # Card for a service pillar
│   ├── AudienceCard.tsx      # Card for an audience segment
│   ├── CallToActionSection.tsx  # Full-width CTA band
│   └── FeatureList.tsx       # Icon + title + description list
│
└── styles/
    └── global.css            # CSS custom properties, reset, utilities, all component styles

public/
├── favicon.svg               # Placeholder favicon — replace with real brand asset
└── logo.svg                  # Placeholder logo — replace with real brand asset
```

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, AI gap stats, audience preview, service pillars, CTA |
| `/about` | About | Company story, founder brief, 2023–2026 AI timeline |
| `/services` | Services | Detailed Assess / Educate / Implement / Support sections |
| `/who-we-serve` | Who We Serve | Small businesses, nonprofits, HOAs/community orgs |
| `/philosophy` | Philosophy | Literacy-first, human-centered, responsible AI, quality over quantity |
| `/resources` | Resources | Featured article + placeholder resource grid |
| `/contact` | Contact | Contact info + client-side validated form |

---

## Customization Guide

### 🖼️ Logo & Brand Assets

1. Replace `public/logo.svg` with the real The Possible Company logo.
   - Source: OneDrive / email signature / PowerPoint brand assets.
   - Recommended: horizontal lockup, SVG or PNG, ~200×50px.
2. Replace `public/favicon.svg` with the real favicon.
3. The logo is referenced in:
   - `src/components/Layout/Header.tsx`
   - `src/components/Layout/Footer.tsx`

### 🎨 Colors & Typography

All design tokens are in `src/styles/global.css` under `:root { ... }`.

Key variables to update for brand alignment:

```css
--color-primary: #1a4f8a;       /* Main brand color */
--color-accent: #0ea5e9;        /* Accent / CTA highlight */
--font-sans: 'Inter', system-ui, sans-serif;  /* Body font */
```

To change the Google Font, update the `@import` at the top of `global.css` and the `--font-sans` variable.

### ✍️ Content Priority (Customize These First)

1. **`src/pages/Home.tsx`** — Hero headline, subheading, and stat numbers
2. **`src/pages/About.tsx`** — Founder bio paragraph and company story
3. **`src/pages/Contact.tsx`** — Form backend integration (see TODO comment)
4. **`src/components/Layout/Footer.tsx`** — Verify contact details are current
5. **`src/pages/Resources.tsx`** — Replace placeholder article stubs with real content

Look for `// TODO:` comments throughout the codebase for specific sections that need real content.

### 📬 Contact Form

The contact form (`src/pages/Contact.tsx`) is **client-side only** — it validates inputs and shows a success message but does not send data anywhere.

To connect a real backend, replace the `handleSubmit` placeholder with:
- [Formspree](https://formspree.io/) (drop-in, free tier available)
- [Netlify Forms](https://docs.netlify.com/forms/setup/) (automatic with Netlify hosting)
- A custom API endpoint or Azure Function

---

## Deployment

This is a static React app deployable to any static host.

### GitHub Pages

```bash
npm run build
# Then push the dist/ folder to the gh-pages branch, or use the gh-pages npm package.
```

Add `base: '/repo-name/'` to `vite.config.ts` if deploying to a GitHub Pages sub-path.

### Netlify / Vercel

Connect your repository and set:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Azure Static Web Apps

Use the [Azure Static Web Apps GitHub Action](https://docs.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow). Set `app_location: "/"` and `output_location: "dist"`.

---

## Contact

**The Possible Company LLC**  
Nicholas Aquino  
📧 [Nick.Aquino@ThePossibleCompany.ai](mailto:Nick.Aquino@ThePossibleCompany.ai)  
📞 734-756-6012  
💼 [linkedin.com/in/nick-aquino-b725352](https://linkedin.com/in/nick-aquino-b725352)  
📍 Canton, Michigan
