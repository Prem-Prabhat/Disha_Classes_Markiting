// components/TestimonialsCarousel.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonials } from "@/lib/data";

// Settings
const AUTOPLAY_INTERVAL = 4500; // ms
const VISIBLE_THRESHOLD = 0.55; // IntersectionObserver threshold

export default function TestimonialsCarousel() {
  const testimonials = Testimonials;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoplayRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // IntersectionObserver to detect active slide
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.intersectionRatio >= VISIBLE_THRESHOLD) {
            setActiveIndex(idx);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: [0.25, 0.5, 0.6, 0.75],
      }
    );

    slideRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [testimonials.length]); // Dependency added for safety

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;

    autoplayRef.current = window.setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      goToIndex(nextIndex);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused, activeIndex, testimonials.length]);

  // Function to scroll to a specific slide
  function goToIndex(idx: number) {
    const el = slideRefs.current[idx];
    if (el && containerRef.current) {
      containerRef.current.scrollTo({
        left: el.offsetLeft - containerRef.current.offsetLeft,
        behavior: "smooth",
      });
    }
  }

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    goToIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    goToIndex(nextIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, testimonials.length]); 
  return (
    <section className="py-24 bg-gray-50 dark:bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Real Results, <span className="text-blue-600 dark:text-blue-400">Real Stories</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear what our successful students have to say about their journey with Disha Class.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            aria-label="Previous testimonial"
            onClick={handlePrev}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-muted shadow-md border dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={handleNext}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-muted shadow-md border dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 absolute right-0 top-1/2 translate-x-2 -translate-y-1/2 z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={containerRef}
            className="w-full overflow-x-auto overflow-y-hidden scroll-smooth touch-pan-x no-scrollbar -mx-4 px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Student testimonials"
          >
            <div className="flex items-stretch gap-6" style={{
              paddingLeft: "clamp(12px, 6vw, 40px)",
              paddingRight: "clamp(12px, 6vw, 40px)",
            }}>
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  data-idx={idx}
                  ref={(el) => (slideRefs.current[idx] = el)}
                  className="shrink-0 w-full sm:w-[70%] md:w-[40%] lg:w-[33.333%]"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <motion.div
                    animate={{
                      opacity: activeIndex === idx ? 1 : 0.6,
                      scale: activeIndex === idx ? 1.03 : 0.98,
                      y: activeIndex === idx ? 0 : 6,
                      transition: { type: "spring", stiffness: 160, damping: 18 },
                    }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col rounded-2xl bg-white dark:bg-muted border border-gray-200/70 dark:border-neutral-700 shadow-sm p-6">
                      <CardContent className="flex flex-col gap-6 p-0 h-full">
                        <div className="flex items-start gap-4">
                          <Quote className="w-8 h-8 text-blue-300 shrink-0" />
                          <p className="text-gray-700 dark:text-gray-200 text-lg italic leading-relaxed">
                            &quot;{t.text}&quot;
                          </p>
                        </div>
                        <div className="flex items-center gap-4 pt-4 mt-auto">
                          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 dark:bg-neutral-700">
                            <Image
                              src={t.avatar || `https://i.pravatar.cc/150?u=${idx}`}
                              alt={t.name}
                              width={56}
                              height={56}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 dark:text-white text-base">
                              {t.name}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t.class}</p>
                          </div>
                          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold ml-auto">
                            {t.score}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? "bg-blue-600 scale-125" : "bg-gray-300 dark:bg-neutral-600"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}