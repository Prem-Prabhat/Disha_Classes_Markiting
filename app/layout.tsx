import ErrorBoundary from '@/components/ErrorBoundary';
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';
import StructuredData from '@/components/StructuredData';
import { ToastProvider } from '@/components/ToastProvider';
import WhatsAppButton from '@/components/WhatsAppButton';
import { validateEnv } from '@/lib/env';
import { generateMetadata, generateOrganizationSchema } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = generateMetadata({
  title: SITE.title,
  description: SITE.description,
  keywords: [
    'Disha Class',
    'Disha Classes Nawada',
    // ... rest of keywords
    'best computer class in nawada'
  ]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Validate environment variables in development
  if (process.env.NODE_ENV === 'development') {
    validateEnv();
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <link rel="manifest" href="/manifest.json" />
        <StructuredData data={generateOrganizationSchema()} />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ErrorBoundary>
            <ToastProvider>
              <Navbar />
              <main className="min-h-[70vh] pt-20" role="main">{children}</main>
              <Footer />
              <WhatsAppButton />
            </ToastProvider>
          </ErrorBoundary>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

