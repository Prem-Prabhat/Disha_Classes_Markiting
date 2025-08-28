import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import WhatsAppButton from '@/components/WhatsAppButton';
import { ToastProvider } from '@/components/ToastProvider';
import StructuredData from '@/components/StructuredData';
import ErrorBoundary from '@/components/ErrorBoundary';
import { SITE } from '@/lib/site';
import { validateEnv } from '@/lib/env';
import { generateMetadata, generateOrganizationSchema } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = generateMetadata({
  title: SITE.title,
  description: SITE.description,
  keywords: [
    'Disha Class',
    'Disha Classes Nawada',
    'Disha Class Nawada',
    'coaching center',
    'Math & Science',
    '10th class',
    '11th class', 
    '12th class',
    'Nawada',
    'Bihar',
    'education',
    'tutoring',
    'board exam preparation',
    'best coaching in Nawada',
    'Math teacher Nawada',
    'Science coaching Bihar'
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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

