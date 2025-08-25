## Disha Class (dishaclass.com)

Modern, mobile-first coaching website for Classes 10–12 (Math & Science). Built with Next.js App Router, TypeScript, Tailwind, Framer Motion, next-themes, react-hook-form + zod, and EmailJS-ready API routes.

### Quick Start

1. Install
   ```bash
   npm install
   ```

2. Configure environment variables (create `.env.local` in project root)
   ```env
   # Display/config
   SITE_TITLE="Disha Class"
   SITE_DESCRIPTION="Coaching for 10th–12th Math & Science."

   # Public config
   NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
   NEXT_PUBLIC_YOUTUBE_VIDEO_ID=dQw4w9WgXcQ
   NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL="https://www.google.com/maps/embed?pb=..."

   # EmailJS (optional - enables email delivery)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key

   # Optional recipient for templates that use it
   EMAIL_RECIPIENT=you@example.com
   ```

3. Run
   ```bash
   npm run dev
   ```

4. Open
   - http://localhost:3000

### EmailJS Setup

- Create a Service (SERVICE_ID), a Template (TEMPLATE_ID), and note your Public Key (PUBLIC_KEY).
- Include variables in your template: `form_type`, `name`, `phone`, `email`, `grade`, `message`, `recipient`.
- Add the following to `.env.local`:
  ```
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
  NEXT_PUBLIC_EMAILJS_USER_ID=...
  EMAIL_RECIPIENT=...
  ```
- Without these, the API routes will store submissions in memory (for local testing) and respond success.

### Tech

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS with HSL design tokens
- Framer Motion for subtle animations
- next-themes for dark mode
- react-hook-form + zod for forms and validation
- EmailJS REST via server routes (`/api/admission`, `/api/contact`)
- Basic custom toast provider
- SEO metadata per page + JSON-LD on Home
- Static `sitemap.xml` and `robots.txt`

### Project Structure

- App pages: `app/` (Home, About, Classes, Admission, Contact, Online Classes)
- Components: `components/` (Navbar, Footer, Hero, FeatureCard, CourseCard, TestimonialSlider, InstructorCard, ThemeToggle, WhatsAppButton, ToastProvider)
- Server routes: `app/api/admission/route.ts`, `app/api/contact/route.ts`
- Lib: `lib/site.ts` (site config), `lib/emailjs.ts` (email helper)
- Public assets: `public/` images

### Design

- Primary: `hsl(221 83% 53%)` (blue)
- Accent: `hsl(142 71% 45%)` (green)
- Mobile-first; accessible labels; visible focus; ARIA attributes.

### Deploy on Vercel

1. Push this repo to GitHub.
2. Import repo on Vercel.
3. Add the same environment variables in Vercel Project Settings → Environment Variables.
4. Deploy. Ensure `SITE_TITLE`, `SITE_DESCRIPTION`, `NEXT_PUBLIC_*` vars are set.

### Notes

- Update `sitemap.xml` with canonical URLs when deploying to your domain.
- Replace `public/*` placeholders with real assets (logo, og image, favicon).
- You may install shadcn/ui later if desired; current components use Tailwind with shadcn-like tokens and patterns.

### Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production
- `npm run lint` — ESLint
- `npm run format` — Prettier write

