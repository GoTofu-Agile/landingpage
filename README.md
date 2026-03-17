## Tofu Landing Page

Marketing landing page for **Tofu**, a synthetic PM interview and product discovery tool.  
Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4** using the same Apple‑inspired design system as the main TofuOS app.

---

### Tech Stack

- **Framework**: Next.js 16 (App Router, `src/app`)
- **Language**: TypeScript
- **Styling**:
  - Tailwind CSS v4 via `@tailwindcss/postcss`
  - Design tokens defined in `src/app/globals.css`
- **Icons**: `lucide-react`
- **Deployment**: Vercel

---

### Getting Started (Local Development)

1. **Install dependencies**

```bash
npm install
```

2. **Run the dev server**

```bash
npm run dev
```

The app will start on `http://localhost:3000` (or the next available port, e.g. `3001`).

---

### Available Scripts

- **`npm run dev`** – Start the local development server.
- **`npm run build`** – Create an optimized production build.
- **`npm start`** – Run the production build locally.

---

### Project Structure (High Level)

- `src/app/layout.tsx` – Root layout, fonts, global styles, metadata.
- `src/app/page.tsx` – Main marketing landing page content.
- `src/app/globals.css` – Design tokens, global styles, and Tailwind layer import.
- `next.config.mjs` – Next.js configuration.
- `postcss.config.mjs` – Tailwind v4 PostCSS plugin configuration.

---

### Deployment Notes (Vercel)

- The project is designed to deploy on **Vercel** with zero custom configuration:
  - Build command: `npm run build`
  - Output: Next.js default
- Ensure the following files are committed before deploying:
  - `next.config.mjs`
  - `postcss.config.mjs`
  - `tsconfig.json`
  - `src/app/globals.css`

---

### Design & Copy Tweaks

The landing page is intentionally lightweight and static.  
To update headlines, CTAs, or sections:

- Edit hero + sections in `src/app/page.tsx`.
- Adjust global look & feel (colors, radii, typography) in `src/app/globals.css`.

Changes are fully static and will be picked up automatically on the next Vercel deployment.

