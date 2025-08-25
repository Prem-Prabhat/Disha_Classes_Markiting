import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import ContactForm from '@/components/forms/ContactForm';
import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: `Contact — ${SITE.title}`,
  description: 'Get in touch with Disha Class. Location and contact details.',
  openGraph: {
    title: `Contact — ${SITE.title}`,
    description: 'Get in touch with Disha Class. Location and contact details.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `Contact — ${SITE.title}`,
    description: 'Get in touch with Disha Class. Location and contact details.',
  },
};

export default function ContactPage() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.addressLine1)}`;

  return (
    <main>
      <section className="container-balanced py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-primary font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span>We&apos;re here to help.</span> Reach out via phone, email, or visit us at our location in Nawada.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Contact Info & Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold border-b pb-2 mb-6">
                Contact Details
              </h2>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <Button asChild variant="outline" className="h-11 gap-2 justify-start">
                  <a href={`tel:${SITE.phone}`} aria-label="Call us">
                    <Phone className="h-4 w-4" />
                    <span>{SITE.phoneDisplay}</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-11 gap-2 justify-start">
                  <a href={`mailto:${SITE.email}`} aria-label="Email us">
                    <Mail className="h-4 w-4" />
                    <span>{SITE.email}</span>
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold border-b pb-2 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Right Column: Map & Address */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Find Us In Nawada</h2>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:bg-muted/50 p-3 rounded-lg transition-colors"
                aria-label="View location on Google Maps"
              >
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  {SITE.addressLine1}
                </p>
              </a>
            </div>

            {/* Conditional Map Rendering */}
            {SITE.googleMapsEmbedUrl ? (
              <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-sm">
                <iframe
                  title="Google Maps location of Disha Class"
                  className="h-full w-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={SITE.googleMapsEmbedUrl}
                />
              </div>
            ) : (
              <div className="aspect-video w-full flex items-center justify-center bg-muted rounded-lg border border-dashed">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Map is currently unavailable.</p>
                </div>
              </div>
            )}

            <Button asChild className="w-full sm:w-auto h-11" size="lg">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to Disha Class"
              >
                Get Directions
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}