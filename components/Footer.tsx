"use client";

import { MapPin, Phone, Mail, Youtube, Instagram, Facebook, MessageCircle, X as TwitterX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

// Types for better TypeScript support
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface SocialIconProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  className: string;
  label: string;
}

// An array for social links for easier management
const socialLinks = [
  {
    href: SITE.youtubeUrl,
    icon: Youtube,
    className: "bg-red-600 hover:bg-red-700",
    label: "Follow us on YouTube"
  },
  {
    href: SITE.instagramUrl,
    icon: Instagram,
    className: "bg-pink-600 hover:bg-pink-700",
    label: "Follow us on Instagram"
  },
  {
    href: SITE.facebookUrl,
    icon: Facebook,
    className: "bg-blue-600 hover:bg-blue-700",
    label: "Follow us on Facebook"
  },
  {
    href: SITE.twitterUrl,
    icon: TwitterX,
    className: "bg-black hover:bg-gray-800",
    label: "Follow us on Twitter/X"
  },
];

// Reusable components for cleaner code
const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition-colors"
    >
      {children}
    </Link>
  </li>
);

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, className, label }) => {
  // Only render if href exists and is not empty
  if (!href || href.trim() === '') return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${className} p-2 rounded-full transition-colors text-white`}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};

export default function Footer() {
  const handleWhatsApp = () => {
    if (SITE.whatsAppUrl && typeof SITE.whatsAppUrl === 'function') {
      window.open(SITE.whatsAppUrl("Hello! I want to know more about Disha Class."), "_blank");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gray-900 border-t border-gray-800">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background/10 to-primary/10 opacity-50" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand & App Link */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Disha Class Logo"
                  width={56}
                  height={56}
                  className="rounded-lg object-contain transition-transform group-hover:scale-105"
                  priority={false}
                />
              </div>
              <span className="text-2xl font-bold group-hover:text-primary transition-colors">
                Disha Class
              </span>
            </Link>

            <p className="text-gray-300 text-base pr-4 leading-relaxed">
              Empowering students with excellent Math & Science education. Your success is our mission.
            </p>

            {/* WhatsApp Button - only show if whatsAppUrl exists */}
            {SITE.whatsAppUrl && (
              <Button
                onClick={handleWhatsApp}
                className="w-full justify-center bg-green-500 hover:bg-green-600 text-white h-11 transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            )}

            {/* Google Play Badge - conditionally render */}
            {SITE.googlePlayUrl && (
              <div className="mt-4">
                <a
                  href={SITE.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download our app from Google Play Store"
                  className="inline-block"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={160}
                    height={60}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            )}
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/classes">Classes</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                  Class 10th - Math & Science
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                  Class 11th - Math & Science
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                  Class 12th - Math & Science
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                  Board Exam Preparation
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              {/* Address */}
              {SITE.addressLine1 && (
                <a
                  href={SITE.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.addressLine1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-colors"
                  aria-label="View location on Google Maps"
                >
                  <MapPin className="w-5 h-5 mt-1 text-blue-300 flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors">
                    {SITE.addressLine1}
                  </span>
                </a>
              )}

              {/* Phone */}
              {SITE.phone && (
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="w-5 h-5 text-blue-300" />
                  <span className="group-hover:text-white transition-colors">
                    {SITE.phoneDisplay || SITE.phone}
                  </span>
                </a>
              )}

              {/* Email */}
              {SITE.email && (
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5 text-blue-300" />
                  <span className="group-hover:text-white transition-colors break-all">
                    {SITE.email}
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} {SITE.title}. All Rights Reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <SocialIcon key={link.href} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}