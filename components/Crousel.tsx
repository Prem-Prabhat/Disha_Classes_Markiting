"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { SITE } from "@/lib/site"

interface ImageItem {
  src: string
  alt: string
}

interface CarouselProps {
  images: ImageItem[]
  className?: string
  intervalMs?: number
}

export default function HeroCarousel({ images, className, intervalMs = 5000 }: CarouselProps) {
  const slides = useMemo(
    () =>
      Array.isArray(images) && images.length > 0
        ? images
        : [{ src: "/open-graph.png", alt: "Disha Class" }],
    [images]
  )

  const total = slides.length
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (total <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), intervalMs)
    return () => clearInterval(id)
  }, [total, intervalMs])

  const containerClasses = `w-full h-full relative overflow-hidden ${className ?? ""}`

  return (
    <div className={containerClasses}>
      <div className="relative h-[90vh]">
        {/* AnimatePresence for ONLY Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0.2, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={slides[index].src}
              alt={slides[index].alt || "Slide"}
              fill
              priority={index === 0}
              className="object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/70" />
          </motion.div>
        </AnimatePresence>

        {/* Static text, only animated ONCE on mount */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <motion.h2
            className="text-blue-600 text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={mounted ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Empower Your Learning Journey
          </motion.h2>
          <motion.p
            className="text-white/90 text-lg sm:text-xl max-w-2xl mb-8"
            initial={{ y: 40, opacity: 0 }}
            animate={mounted ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Join Disha Classes for expert-led courses and personalized mentoring to achieve your academic goals.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="https://dishaclasses.akamai.net.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary h-11 px-6"
            >
              Check our courses
            </a>
            <a
              href={SITE.whatsAppUrl("Hello! I want to know more about Disha Class.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline h-11 px-6 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
              style={{ borderColor: "#22c55e" }}
            >
              <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="flex gap-2 bg-black/20 backdrop-blur-sm p-2 rounded-full">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={index % total === i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${index % total === i ? "bg-white" : "bg-white/50 hover:bg-white/75"
                  }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
