"use client"

import { SITE } from "@/lib/site"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

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

    return (
        <section className={`relative pt-12 pb-12 lg:pt-20 lg:pb-16 overflow-hidden ${className ?? ""}`}>
            {/* Background Gradient elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                    {/* LEFT: Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold text-xs sm:text-sm mb-4 border border-blue-100 dark:border-blue-800 animate-fade-in backdrop-blur-sm">
                                🚀 Admissions Open for 2026-27
                            </span>
                            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white mb-4">
                                Expert Coaching for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                                    Class 10–12 Students in Bihar
                                </span>
                            </h1>
                            <p className="font-sans text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Personalized Math & Science coaching with experienced teachers, focused attention, and real academic improvement — both offline and online.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://dishaclasses.akamai.net.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn h-12 sm:h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 rounded-xl transition-all hover:-translate-y-1"
                            >
                                Check Our Courses
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </a>
                            <a
                                href={SITE.whatsAppUrl("Hello! I want to know more about Disha Class.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn h-12 sm:h-14 px-8 text-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 rounded-xl transition-all hover:-translate-y-1"
                                onClick={(e) => {
                                    if (!SITE.phone) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                <MessageCircle className="w-5 h-5 mr-2 text-green-500" /> Chat on WhatsApp
                            </a>
                        </div>

                        {/* Trust Badges - Styled as a strip */}
                        <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-800">
                            <div>
                                <h4 className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white">500+</h4>
                                <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Trusted Students</p>
                            </div>
                            <div className="w-px h-8 sm:h-10 bg-gray-200 dark:bg-gray-800" />
                            <div>
                                <h4 className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white">100%</h4>
                                <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Success Rate</p>
                            </div>
                            <div className="w-px h-8 sm:h-10 bg-gray-200 dark:bg-gray-800" />
                            <div>
                                <h4 className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white">15+</h4>
                                <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Years Exp.</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Image Carousel - Reduced Width & Vertically Centered */}
                    <div className="flex-1 w-full relative max-w-[500px] aspect-[4/3] lg:aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] rotate-3 opacity-20 blur-2xl" />
                        <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl shadow-blue-900/10 dark:shadow-black/50 bg-white dark:bg-gray-900">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src={slides[index].src}
                                        alt={slides[index].alt || "Disha Class"}
                                        fill
                                        priority={index === 0}
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Gradient Overlay for professional photo finish - Subtle fade at bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Carousel Indicators - Refined */}
                            {total > 1 && (
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    {slides.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setIndex(i)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${i === index
                                                ? "w-6 bg-white"
                                                : "w-1.5 bg-white/50 hover:bg-white"
                                                }`}
                                            aria-label={`Go to slide ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
