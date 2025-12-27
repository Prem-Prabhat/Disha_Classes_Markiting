"use client";

import { RecaptchaProvider } from "@/components/layout/RecaptchaProvider";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/forms/ContactForm"));

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
    description: "Mon-Sat, 7AM - 7PM",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    description: "We reply within 24 hours",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: SITE.whatsAppUrl("Hello! I have a question about Disha Class."),
    description: "Instant support",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Nawada, Bihar",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.addressLine1)}`,
    description: SITE.addressLine1,
    gradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
];

export default function ContactPage() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.addressLine1)}`;

  return (
    <main className="relative min-h-screen bg-white dark:bg-[#030303] overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[160px] animate-blob mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[160px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[160px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-16 lg:py-24">
        {/* Hero Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold text-xs sm:text-sm mb-6 border border-blue-100 dark:border-blue-800 backdrop-blur-sm">
            📞 We&apos;re Here to Help
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Have questions about our classes? We&apos;re here to help you start your journey to academic excellence.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.icon === MapPin || method.icon === MessageCircle ? "_blank" : undefined}
              rel={method.icon === MapPin || method.icon === MessageCircle ? "noopener noreferrer" : undefined}
              className="block"
            >
              <SpotlightCard className="h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center ${method.iconColor} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {method.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-auto">
                    {method.description}
                  </p>
                </div>
              </SpotlightCard>
            </a>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
              <RecaptchaProvider>
                <ContactForm />
              </RecaptchaProvider>
            </div>
          </motion.div>

          {/* Right Column: Map & Address */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Find Us in Nawada
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Visit our coaching center for a free demo class.
              </p>
            </div>

            {/* Map */}
            {SITE.googleMapsEmbedUrl ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl group">
                <iframe
                  title="Google Maps location of Disha Class"
                  className="h-full w-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={SITE.googleMapsEmbedUrl}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ) : (
              <div className="aspect-video w-full flex items-center justify-center bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 dark:text-gray-400">Map unavailable</p>
                </div>
              </div>
            )}

            {/* Address Card */}
            <SpotlightCard>
              <div className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    Disha Class
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {SITE.addressLine1}
                  </p>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
}