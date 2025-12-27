"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function TestimonialsCarousel() {
    const [direction, setDirection] = useState < "left" | "right" > ("left");

    return (
        <section className="py-16 bg-gray-50 dark:bg-[#030303] overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-50 dark:bg-[#030303] -z-10" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none hidden dark:block" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none hidden dark:block" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6 border border-blue-200 dark:border-blue-800/50 backdrop-blur-sm">
                        ✨ Student Success Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight font-heading">
                        Real Results,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                            Real Stories
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Don&apos;t just take our word for it. See what our toppers have to say about their journey with Disha Class.
                    </p>
                    {/* Subtle Interaction Hint */}
                    <p className="text-sm text-gray-400 dark:text-gray-600 mt-4 animate-pulse">
                        ← Use arrows to control direction & speed →
                    </p>
                </div>

                {/* Infinite Marquee with Controls */}
                <div className="relative group">
                    {/* Left Control */}
                    <button
                        onClick={() => setDirection("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-white/80 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all opacity-0 group-hover:opacity-100 translate-x-4 md:-translate-x-12"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-white" />
                    </button>

                    {/* Right Control */}
                    <button
                        onClick={() => setDirection("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-white/80 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 md:translate-x-12"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700 dark:text-white" />
                    </button>

                    <div className="relative flex flex-col items-center justify-center overflow-hidden antialiased py-4">
                        <InfiniteMovingCards
                            items={Testimonials}
                            direction={direction}
                            speed="slow"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
