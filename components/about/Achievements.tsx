"use client";

import AnimatedNumber from "@/components/shared/AnimatedNumber";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { achievements } from "@/data/about";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";

export const Achievements = () => (
    <section className="py-24 relative z-10" aria-labelledby="achievements-heading">
        <div className="max-w-7xl mx-auto px-4">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    const numericValue = parseInt(achievement.number.replace(/\D/g, ''), 10);
                    const suffix = achievement.number.replace(/\d/g, '');

                    // Assign different colors/gradients based on index for variety
                    const colors = [
                        "from-blue-500/20 to-cyan-500/20 text-blue-500",
                        "from-purple-500/20 to-pink-500/20 text-purple-500",
                        "from-cyan-500/20 to-teal-500/20 text-cyan-500",
                        "from-indigo-500/20 to-violet-500/20 text-indigo-500",
                    ];
                    const colorClass = colors[index % colors.length];

                    return (
                        <motion.div key={achievement.label} variants={fadeUp} className="h-full">
                            <SpotlightCard className="h-full" spotlightColor="rgba(59, 130, 246, 0.15)">
                                <div className="p-8 text-center flex flex-col items-center h-full justify-center space-y-4">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass.split(" ")[0]} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500`}>
                                        <IconComponent className={`w-8 h-8 ${colorClass.split(" ")[2]}`} />
                                    </div>

                                    <div className="space-y-1">
                                        <div className="text-4xl font-bold text-gray-900 dark:text-white flex justify-center items-baseline tracking-tight">
                                            <AnimatedNumber to={numericValue} />
                                            <span>{suffix}</span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                            {achievement.label}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    </section>
);
