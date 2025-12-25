"use client";

import { Button } from "@/components/ui/button";
import { FooterQuickLinks, MinimalistPrograms, SocialMediaLinks } from "@/lib/data";
import { SITE } from "@/lib/site";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ----------------- Types -----------------
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

// ----------------- Social Links -----------------
// ----------------- Social Links Data Moved to @/lib/data -----------------

// ----------------- Footer Link -----------------
const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <li className="group">
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm flex items-center gap-1.5 hover:translate-x-1"
        >
          <span className="w-0 h-[1px] bg-blue-400 group-hover:w-3 transition-all duration-300" />
          {children}
        </a>
      ) : (
        <Link
          href={href as any}
          className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm flex items-center gap-1.5 hover:translate-x-1"
        >
          <span className="w-0 h-[1px] bg-blue-400 group-hover:w-3 transition-all duration-300" />
          {children}
        </Link>
      )}
    </li>
  );
};

// ----------------- Social Icon -----------------
const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  icon: Icon,
  className,
  label,
}) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${className} relative p-2.5 rounded-full transition-all duration-300 text-gray-400 bg-white/5 border border-white/10 hover:scale-110 hover:shadow-lg group overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Icon className="w-5 h-5 relative z-10" />
    </a>
  );
};

// ----------------- Footer -----------------
export default function Footer() {
  const [hoveredProgram, setHoveredProgram] = useState < number | null > (null);

  const handleWhatsApp = () => {
    if (typeof SITE.whatsAppUrl === "function") {
      window.open(
        SITE.whatsAppUrl("Hello! I want to know more about Disha Class."),
        "_blank"
      );
    } else if (typeof SITE.whatsAppUrl === "string") {
      window.open(SITE.whatsAppUrl, "_blank");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gray-100 dark:bg-[#030303] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      {/* Grid Background Pattern - Inverted for Light Mode */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] dark:opacity-[0.15] invert dark:invert-0 pointer-events-none" />

      {/* Consistent Premium Aurora Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten opacity-50" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-gray-900 dark:text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md group-hover:bg-blue-500/30 transition-all duration-300" />
                <Image
                  src="/logo.jpg"
                  alt="Disha Class Logo"
                  width={48}
                  height={48}
                  className="relative rounded-xl object-contain ring-1 ring-gray-200 dark:ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300 group-hover:scale-105"
                  priority={false}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div>
                <span className="text-xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-600 dark:from-white dark:via-blue-200 dark:to-gray-400 group-hover:to-blue-600 dark:group-hover:to-white transition-all block">
                  दिशा Class
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-500 flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-2.5 h-2.5" />
                  Since 2016
                </span>
              </div>
            </Link>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering students with excellent{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">Math & Science</span>{" "}
              education. Bridging the gap between potential and performance.
            </p>

            {/* WhatsApp Button with Enhanced Style */}
            {(typeof SITE.whatsAppUrl === "string" ||
              typeof SITE.whatsAppUrl === "function") && (
                <Button
                  onClick={handleWhatsApp}
                  className="group relative w-full sm:w-auto px-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white h-11 rounded-full shadow-lg shadow-green-500/25 border border-green-400/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 overflow-hidden"
                  aria-label="Contact us on WhatsApp"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <MessageCircle className="w-4 h-4 mr-2 relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">Chat on WhatsApp</span>
                </Button>
              )}

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-3 font-medium tracking-wider uppercase">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {SocialMediaLinks.map((link, index) => (
                  <SocialIcon key={`${link.href}-${index}`} {...link} />
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="group">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {FooterQuickLinks.map((link, index) => (
                  <FooterLink key={index} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                Our Programs
              </h3>
              <ul className="space-y-4">
                {MinimalistPrograms.map((program, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHoveredProgram(index)}
                    onMouseLeave={() => setHoveredProgram(null)}
                  >
                    <Link
                      href={program.href as any}
                      className="group/program flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                    >
                      <span className="text-[10px] font-mono text-gray-500 dark:text-gray-600 mr-3 group-hover/program:text-blue-500 transition-colors font-bold">
                        0{index + 1}
                      </span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-2.5 transition-all duration-300 ${hoveredProgram === index ? "w-4" : ""
                          } ${index === 0
                            ? "bg-cyan-500 group-hover/program:bg-cyan-400 group-hover/program:shadow-lg group-hover/program:shadow-cyan-400/50"
                            : index === 1
                              ? "bg-purple-500 group-hover/program:bg-purple-400 group-hover/program:shadow-lg group-hover/program:shadow-purple-400/50"
                              : "bg-emerald-500 group-hover/program:bg-emerald-400 group-hover/program:shadow-lg group-hover/program:shadow-emerald-400/50"
                          }`}
                      />
                      <span className="group-hover/program:translate-x-1 transition-transform duration-300">
                        {program.title}
                      </span>
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover/program:opacity-100 transition-all duration-300 -translate-y-1 group-hover/program:translate-y-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full" />
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {/* Address */}
                  {SITE.addressLine1 && (
                    <a
                      href={
                        SITE.googleMapsUrl ||
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          SITE.addressLine1
                        )}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group/contact relative"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300" />
                        <MapPin className="relative w-5 h-5 text-gray-500 group-hover/contact:text-blue-500 dark:group-hover/contact:text-blue-400 transition-all duration-300 mt-0.5 group-hover/contact:scale-110" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/contact:text-gray-900 dark:group-hover/contact:text-gray-200 transition-colors">
                        {SITE.addressLine1}
                      </span>
                    </a>
                  )}

                  {/* Phone */}
                  {SITE.phone && (
                    <a
                      href={`tel:${SITE.phone}`}
                      className="flex items-center gap-3 group/contact relative"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-md opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300" />
                        <Phone className="relative w-5 h-5 text-gray-500 group-hover/contact:text-green-600 dark:group-hover/contact:text-green-400 transition-all duration-300 group-hover/contact:scale-110 group-hover/contact:rotate-12" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/contact:text-gray-900 dark:group-hover/contact:text-gray-200 transition-colors">
                        {SITE.phoneDisplay || SITE.phone}
                      </span>
                    </a>
                  )}

                  {/* Email */}
                  {SITE.email && (
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-center gap-3 group/contact relative"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-yellow-500/20 rounded-lg blur-md opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300" />
                        <Mail className="relative w-5 h-5 text-gray-500 group-hover/contact:text-yellow-600 dark:group-hover/contact:text-yellow-400 transition-all duration-300 group-hover/contact:scale-110" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/contact:text-gray-900 dark:group-hover/contact:text-gray-200 transition-colors break-all">
                        {SITE.email}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-gray-200 dark:border-white/5 mt-16 pt-8">
          {/* Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-500 text-xs text-center md:text-left">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-gray-400 font-medium">{SITE.title}</span>
                <span className="text-gray-600">•</span>
                <span>All Rights Reserved</span>
              </p>
              <p className="mt-2 flex items-center gap-1.5 justify-center md:justify-start">
                <span>Built with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>by</span>
                <a
                  href="https://premprabhat.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 border-b border-dashed border-gray-600 hover:border-blue-400 hover:scale-105 inline-block font-medium"
                >
                  Prem Prabhat
                </a>
              </p>
            </div>

            {/* Social Links (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              {SocialMediaLinks.map((link, index) => (
                <SocialIcon key={`bottom-${link.href}-${index}`} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </footer>
  );
}