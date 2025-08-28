# Disha Class - Coaching Website

A modern, responsive website for Disha Class, a leading coaching center in Nawada for Math & Science education.

## 🚀 Features

- **Modern Design**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Built-in theme switching with next-themes
- **Contact Forms**: Integrated contact form with EmailJS support
- **Performance**: Optimized images, lazy loading, and efficient animations
- **Advanced SEO**: Comprehensive meta tags, Open Graph, structured data (JSON-LD), and sitemap
- **Security**: Input sanitization, rate limiting, and XSS protection
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Error Handling**: Global error boundaries and graceful error recovery
- **PWA Ready**: Web app manifest for mobile app-like experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Disha_Classes_Markiting
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Site Configuration
   SITE_TITLE=Disha Class
   SITE_DESCRIPTION=Coaching for 10th–12th Math & Science. Concept-first teaching, small batches, and weekly assessments.

   # WhatsApp Configuration
   NEXT_PUBLIC_WHATSAPP_NUMBER=8540890133

   # EmailJS Configuration (Optional - for contact form)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
   EMAIL_RECIPIENT=admin@dishaclass.com

   # Google Maps Configuration (Optional)
   NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=your_google_maps_embed_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment on Vercel

### One-Click Deployment

1. **Fork this repository** to your GitHub account
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your forked repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Environment Variables**:
   - In your Vercel project dashboard, go to "Settings" → "Environment Variables"
   - Add all the environment variables from your `.env.local` file
   - Make sure to prefix client-side variables with `NEXT_PUBLIC_`

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site automatically

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

## 🔧 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number for contact | `8540890133` |

### Optional Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SITE_TITLE` | Website title | `Disha Class` |
| `SITE_DESCRIPTION` | Website description | `Coaching for 10th–12th Math & Science...` |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID | `service_xxxxx` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID | `template_xxxxx` |
| `NEXT_PUBLIC_EMAILJS_USER_ID` | EmailJS user ID | `user_xxxxx` |
| `EMAIL_RECIPIENT` | Email recipient for contact form | `admin@dishaclass.com` |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` | Google Maps embed URL | `https://www.google.com/maps/embed?...` |

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── classes/           # Classes redirect page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── forms/            # Form components
│   └── ...               # Other components
├── lib/                  # Utility functions and configurations
│   ├── data.ts           # Static data
│   ├── emailjs.ts        # EmailJS integration
│   ├── env.ts            # Environment variables
│   ├── site.ts           # Site configuration
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── ...                   # Configuration files
```

## 🎨 Customization

### Colors and Styling
- Colors are defined in `app/globals.css` using CSS variables
- Primary color: Blue (#3B82F6)
- Accent color: Green (#22C55E)
- Dark mode is automatically handled

### Content Updates
- **Site information**: Update `lib/site.ts`
- **Static data**: Update `lib/data.ts`
- **Images**: Replace files in `public/` directory

## 🔍 SEO and Performance

- **Dynamic Meta Tags**: Automatically generated for each page with relevant keywords
- **Open Graph**: Optimized social media sharing with proper images and descriptions
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Sitemap**: Dynamic sitemap generation for all pages
- **Robots.txt**: Optimized for search engine crawling
- **Image Optimization**: Next.js Image component with WebP/AVIF support and lazy loading
- **Performance**: Core Web Vitals optimized with compression and caching
- **Security Headers**: XSS protection, content type options, and frame options

## 🐛 Troubleshooting

### Common Issues

1. **Build fails on Vercel**
   - Check that all environment variables are set
   - Ensure all dependencies are in `package.json`

2. **Contact form not working**
   - Verify EmailJS configuration
   - Check browser console for errors

3. **Images not loading**
   - Ensure images are in the `public/` directory
   - Check image paths in components

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 📄 License

This project is private and proprietary to Disha Class.

## 🤝 Support

For support or questions, contact:
- **Email**: admin@dishaclass.com
- **Phone**: +91 8540890133
- **Website**: https://www.dishaclass.in
