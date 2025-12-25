# 🎓 दिशा Class (Disha Class) - Enterprise Learning Platform

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-dishaclass.in-blue?style=for-the-badge)](https://dishaclass.in)
![Project Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Built%20With-Next.js%2015%20%7C%20TypeScript%20%7C%20Tailwind-blue?style=for-the-badge&logo=next.js)

> **"Bridging the gap between potential and performance."**
> A production-grade learning platform focused on performance, clarity, and real-world usability for students and parents.
>
> 📝 *This repository contains the public-facing marketing and landing pages for the Disha Class platform. The LMS core is maintained separately.*

---

## ✨ Key Highlights: The Production Standard

This project goes beyond a traditional website and focuses on delivering a polished, production-grade digital experience. Every pixel has been crafted with a strong design philosophy, focusing on aesthetics, performance, and user psychology.

### 🎨 Visual Excellence
- **Aurora Gradients & Glassmorphism:** Deep, rich backgrounds (`bg-[#030303]`) paired with subtle, frosted-glass cards (`backdrop-blur-md`) create a modern, depth-focused interface.
- **Micro-Interactions:** Everything feels alive. Buttons glow on hover, cards lift subtly (`hover:-translate-y-1`), and icons pulse with life.
- **Bento Grid Layouts:** Information is organized in clean, structured "Bento" grids, making complex data easy to digest.
- **Spotlight Effects:** Interactive lighting effects on cards (`SpotlightCard`) that follow the cursor, adding a layer of sophistication found in top-tier SaaS products.

---

## 🏫 Real-World Context

Disha Class is not a demo project. It is built for a real coaching institute operating in **Bihar**, serving students from Tier-3 cities with real constraints:

- **Constraint:** Low to medium internet speeds.
- **Solution:** Aggressive lazy loading and highly optimized assets.
- **Audience:** First-time digital users.
- **Context:** Mobile-first access (90% traffic).

Design and performance decisions were made specifically keeping these real-world constraints in mind, ensuring the "Premium" feel doesn't compromise accessibility.

---
### ⚡ Performance & SEO
- **Lazy Loading Architecture:** Heavy components (`Programs`, `Testimonials`, `Maps`) are loaded only when they enter the viewport, ensuring lightning-fast Initial Load Time (LCP).
- **Optimized Assets:** Images are automatically optimized by Next.js, with strict aspect ratio controls to prevent Layout Shifts (CLS).
- **SEO-Optimized Architecture:** Metadata-driven SEO using Next.js App Router, dynamic sitemaps, structured data (Schema.org), and mobile-first indexing.
- **Accessibility Considerations:** Semantic HTML, proper contrast ratios, and keyboard-friendly interactions to ensure inclusive usability.

---

## 🛠️ Tech Stack

Built using modern, production-ready web technologies:

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) - The React Framework for the Web.
- **Language:** [TypeScript](https://www.typescriptlang.org/) - For robust, type-safe code reliability.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS for rapid, bespoke design.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library for React.
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful, consistent, and lightweight icons.
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Bulletproof form validation.
- **Email Service:** [EmailJS](https://www.emailjs.com/) - Serverless email functionality for Contact forms.

---

## 🚀 Getting Started

Follow these steps to run the marketing platform locally.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/disha-class-marketing.git
cd disha-class-marketing
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment
Create a `.env.local` file in the root directory. You **must** provide the following keys for full functionality (especially the Contact Form):

```env
# Public Variables (Required for UI/Forms)
NEXT_PUBLIC_WHATSAPP_NUMBER=918540890133
NEXT_PUBLIC_SITE_TITLE="दिशा Class"
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL="https://www.google.com/maps/embed?..."

# EmailJS Configuration (Required for Contact Page)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

```bash
📦 disha-class-marketing
 ┣ 📂 app                  # Next.js App Router Pages
 ┃ ┣ 📂 about              # About Us Page
 ┃ ┣ 📂 classes            # Programs/Classes Page
 ┃ ┣ 📂 contact            # Contact & Enquiry Page
 ┃ ┗ 📄 page.tsx           # Homepage (Landing)
 ┣ 📂 components           # Reusable UI Components
 ┃ ┣ 📂 ui                 # Base UI Elements (Buttons, Inputs)
 ┃ ┣ 📄 Navbar.tsx         # Premium Glass Navbar
 ┃ ┣ 📄 Footer.tsx         # Consistent Dark Footer
 ┃ ┗ 📄 ClassPrograms...   # Feature-rich Program Cards
 ┣ 📂 lib                  # Utilities & Configuration
 ┃ ┣ 📄 data.ts            # Centralized Content Data
 ┃ ┣ 📄 env.ts             # Environment Validation Logic
 ┃ ┗ 📄 site.ts            # Site-wide Constants
 ┗ 📄 tailwind.config.ts   # Design System Config
```

---

## ⚙️ Engineering Principles

This project follows a strict internal quality standard:

1.  **Consistent Component Reuse:** Utilizing a unified design system (`SpotlightCard`, `Button`) to maintain visual consistency.
2.  **Performance-First Architecture:** Every new feature is weighed against its impact on Core Web Vitals.
3.  **Design-System Driven:** Adhering to the `bg-[#030303]` theme and glassmorphic principles for a cohesive brand identity.

---

<p align="center">
  Built with ❤️ by <a href="https://premprabhat.site" target="_blank"><strong>Prem Prabhat</strong></a>
  <br />
  <span style="font-size: 0.8em; color: gray;">Full Stack Developer | Building production-grade web systems</span>
</p>
