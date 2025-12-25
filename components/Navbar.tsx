"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

// Types
interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Classes", path: "/classes" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [shrink, setShrink] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;

    // Throttle checks
    if (Math.abs(currentY - lastScrollY.current) < 5) return;

    setScrolled(currentY > 10);
    setShrink(currentY > 80);

    if (currentY > lastScrollY.current && currentY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY.current = currentY;
  }, []);

  // Effect to add and remove scroll listener
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const isActive = (path: string): boolean => pathname === path;

  const handleWhatsApp = () => {
    if (SITE.whatsAppUrl && SITE.phone) {
      const message =
        "Hi! I'm interested in classes at Disha Class. Can you share more info?";
      window.open(SITE.whatsAppUrl(message), "_blank");
    }
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white/80 dark:bg-[#030303]/75 backdrop-blur-md border-b border-gray-200 dark:border-white/5 shadow-sm"
            : "bg-transparent border-b border-transparent py-2"
            }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`flex justify-between items-center transition-all duration-300 ${shrink ? "h-14" : "h-20"}`}
            >
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-3 group"
                aria-label="Disha Class Home"
              >
                <Image
                  src={SITE.logo}
                  alt="Disha Class Logo"
                  width={shrink ? 36 : 42}
                  height={shrink ? 36 : 42}
                  className="object-contain rounded-lg group-hover:scale-105 transition-transform"
                  priority
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {SITE.title}
                </span>
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path as any}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-white/5"
                      }`}
                    aria-current={isActive(item.path) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                {SITE.phone && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleWhatsApp}
                    className="text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 border border-green-200 dark:border-green-800/30 h-9 px-4 rounded-full"
                    aria-label="Contact us on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                )}
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold h-9 px-6 rounded-full shadow-lg shadow-blue-500/20 border border-blue-400/20 transition-all hover:scale-105"
                >
                  <a
                    href={SITE.lmsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Learning Management System"
                  >
                    <span>Student Login</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Theme Toggle & Mobile Menu Button */}
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <div className="md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black z-40 md:hidden"
                  onClick={closeMobileMenu}
                  aria-hidden="true"
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed inset-y-0 right-0 w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l shadow-lg z-50 md:hidden flex flex-col"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile navigation menu"
                >
                  <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-lg font-semibold">Menu</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeMobileMenu}
                      aria-label="Close menu"
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>

                  <nav className="flex-1 px-4 py-6 space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path as any} // FIXED: Type error ko theek karne ke liye
                        onClick={closeMobileMenu}
                        className={`block px-3 py-3 rounded-lg text-lg font-semibold ${isActive(item.path)
                          ? "text-white bg-blue-600"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        aria-current={isActive(item.path) ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="p-4 space-y-3 border-t">
                    {SITE.phone && (
                      <Button
                        variant="outline"
                        className="w-full justify-center text-base py-6 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                        onClick={() => {
                          handleWhatsApp();
                          closeMobileMenu();
                        }}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Contact on WhatsApp
                      </Button>
                    )}
                    <Button
                      asChild
                      className="w-full justify-center text-base py-6 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <a
                        href={SITE.lmsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                      >
                        <span>Student Login</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
