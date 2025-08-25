'use client'

import type { Metadata } from 'next';
import ClassProgramsMinimalist from '@/components/ClassProgramsMinimalist';
import HeroCarousel from '@/components/Crousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { Button } from '@/components/ui/button';
import YouTubePreview from '@/components/YouTubePreview';
import { ClassLevels, Features } from '@/lib/data';
import { SITE } from '@/lib/site';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import Image from 'next/image';

// Types
interface CarouselImage {
  src: string;
  alt: string;
}

interface DemoVideo {
  videoId: string;
  title: string;
  description: string;
}

// Carousel images
const images: CarouselImage[] = [
  {
    src: "/backstudents.webp",
    alt: 'Students sitting together with books',
  },
  {
    src: "/classroom front.webp",
    alt: 'A classroom filled with students and a teacher',
  },
  {
    src: "/banner.webp",
    alt: 'A promotional banner for Disha Class',
  },
  {
    src: "/holi.webp",
    alt: 'Students celebrating Holi at Disha Class',
  },
  {
    src: "/newcoutout.webp",
    alt: 'News coverage of Disha Class',
  },
  {
    src: "/prize taking.webp",
    alt: 'Students receiving prizes at Disha Class',
  },
  {
    src: "/partbhaSamman.webp",
    alt: 'Partbha Samman ceremony at Disha Class',
  },
  {
    src: "/hero-education.jpg",
    alt: 'Students learning together at Disha Class',
  }
];

// Features and courses from lib
const features = Features;
const courses = ClassLevels;

// Demo videos data
const demoVideos: DemoVideo[] = [
  {
    videoId: "wajPbbu__UY",
    title: "प्रकाश क्या है? | प्रकाश का परावर्तन | class 10 physics",
    description: "Get a feel for the actual class teaching with this detailed video on प्रकाश (light)."
  },
  {
    videoId: "v9JJJV91ZCg",
    title: "12th Physics | Optics | Physics Numericals",
    description: "इस वीडियो में हम 4 डायोप्टर क्षमता वाले लेंस की फोकस दूरी को समझेंगे। सरल भाष में, हम देखेंगे कि कैसे लेंस का फोकस दूरी उसके डायोप्टर क्षमता पर निर्भर करता है।"
  }
];

// Background pattern component
const BackgroundPattern: React.FC = () => (
  <div
    className="absolute inset-0 w-full h-full opacity-5"
    style={{
      backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}
    aria-hidden="true"
  />
);

// WhatsApp handler
const handleWhatsApp = () => {
  if (SITE.whatsAppUrl && typeof SITE.whatsAppUrl === 'function') {
    const message = "Hi! I'm interested in classes at Disha Class. Can you share more info?";
    window.open(SITE.whatsAppUrl(message), "_blank");
  }
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Carousel */}
      <section className="container-balanced" aria-label="Hero carousel showcasing Disha Class">
        <HeroCarousel images={images} />
      </section>

      {/* Why Choose Section */}
      <section className="container-balanced py-16 lg:py-24" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="why-choose-heading" className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
              Why Choose <span className="text-primary">Disha Class?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every student can shine with the right guidance. We combine clear teaching,
              regular practice, and personal support to unlock your true potential.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              className="w-full relative rounded-2xl overflow-hidden shadow-xl min-h-[300px] lg:min-h-[450px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/classroom front.webp"
                alt="Students actively learning in Disha Class classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
            </motion.div>

            {/* Features */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={`feature-${index}`}
                    className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 hover:shadow-sm group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Classes */}
      <section className="container-balanced py-16 bg-muted/30" aria-labelledby="classes-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClassProgramsMinimalist />
        </div>
      </section>

      {/* YouTube Previews */}
      <section className="container-balanced py-16" aria-labelledby="demo-videos-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <YouTubePreview videos={demoVideos} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-balanced py-16 bg-muted/30" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative py-20 bg-primary text-primary-foreground overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <BackgroundPattern />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              id="cta-heading"
              className="text-3xl md:text-5xl font-extrabold mb-6"
            >
              Ready to Unlock Your Potential?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Your journey towards better marks and deeper understanding starts
              with a single step.
            </p>
          </motion.div>

          {/* Main CTA Card */}
          <motion.div
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-8">
              Book Your Free Demo Class
            </h3>

            <div className="flex flex-col sm:flex-row justify-center gap-x-8 gap-y-4 text-primary-foreground/90 mb-10">
              {[
                "1-on-1 with an Expert",
                "Clear Your Doubts",
                "No Obligation",
              ].map((item, idx) => (
                <motion.div
                  key={item}
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-yellow-400 text-gray-900 font-bold 
                         hover:bg-yellow-500 hover:scale-105 transition-all duration-300 
                         rounded-lg shadow-lg"
              >
                <a
                  href="https://dishaclasses.akamai.net.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Check out our courses"
                >
                  <span>Check out our Courses</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsApp}
                className="text-lg px-8 py-6 border-2 border-green-400 text-green-600 
                         hover:bg-green-600 hover:text-white transition-all duration-300 
                         rounded-lg backdrop-blur-sm"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                <span>WhatsApp Us</span>
              </Button>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-primary-foreground/80 text-lg">
              Have questions? We're here to help.
            </p>
            {SITE.phoneDisplay && (
              <p className="text-primary-foreground/90 font-semibold mt-2">
                Call us: {SITE.phoneDisplay}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}