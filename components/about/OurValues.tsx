"use client";

import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { values } from "@/data/about";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const OurValues = () => (
    <section className="py-24 relative overflow-hidden" aria-labelledby="values-heading">
        {/* Ambient Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
                className="text-center mb-16"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-300 mb-6">
                    <Sparkles className="w-3 h-3" />
                    <span>Our Philosophy</span>
                </div>
                <h2 id="values-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                    Core Values that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">Drive Us</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                    The principles that drive our educational mission and guide everything we do.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {values.map((value, index) => {
                    const IconComponent = value.icon;
                    // Gradients for icons - Strictly Cool/Cosmic Theme
                    const gradients = [
                        "from-purple-500 to-indigo-500",
                        "from-blue-500 to-cyan-500",
                        "from-pink-500 to-rose-500"
                    ];
                    const currentGradient = gradients[index % gradients.length];

                    return (
                        <motion.div key={value.title} variants={fadeUp} className="h-full">
                            <SpotlightCard className="h-full" spotlightColor="rgba(168, 85, 247, 0.15)">
                                <div className="p-10 h-full flex flex-col items-start">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${currentGradient} flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500`}>
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-base">
                                        {value.description}
                                    </p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    </section>
);
