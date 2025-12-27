"use client";

import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { journey } from "@/data/about";
import { fadeUp } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";
import { useState } from "react";

export const OurJourney = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 relative overflow-hidden bg-background" aria-labelledby="journey-heading">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten" />
            </div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-300 mb-6">
                        <Sparkles className="w-3 h-3" />
                        <span>Our Legacy</span>
                    </div>
                    <h2 id="journey-heading" className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                        A Decade of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">Excellence</span>
                    </h2>
                </motion.div>

                {/* Tab Navigation (Year Pills) */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {journey.map((item, index) => (
                        <button
                            key={item.year}
                            onClick={() => setActiveTab(index)}
                            className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${activeTab === index
                                ? "text-white border-blue-500 shadow-lg shadow-blue-500/25"
                                : "text-muted-foreground border-transparent hover:bg-white/50 dark:hover:bg-white/5 hover:border-gray-200 dark:hover:border-white/10"
                                }`}
                        >
                            {activeTab === index && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 rounded-full"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.year}</span>
                        </button>
                    ))}
                </div>

                {/* Dynamic Content Area (Fixed Height) */}
                <div className="relative min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 w-full"
                        >
                            <SpotlightCard className="h-full w-full max-w-3xl mx-auto" spotlightColor="rgba(6, 182, 212, 0.2)">
                                <div className="p-8 md:p-12 h-full flex flex-col items-center text-center justify-center relative overflow-hidden">
                                    {/* Large Year Background (Watermark) */}
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-gray-100 dark:text-white/5 pointer-events-none select-none z-0 tracking-tighter">
                                        {journey[activeTab].year}
                                    </span>

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 shadow-xl shadow-cyan-500/30 mx-auto">
                                            <Award className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-foreground mb-4">
                                            {journey[activeTab].year}
                                        </h3>
                                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                            {journey[activeTab].event}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};
