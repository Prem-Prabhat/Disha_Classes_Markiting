"use client";

import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";

export const EducatorProfile = () => (
    <section className="py-24 relative overflow-hidden" aria-labelledby="educator-heading">
        {/* Decorative Background Blob */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-lighten" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-lighten" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Side */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="order-2 lg:order-1 relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-blue-500/10 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                        <Image
                            src="/teacher-portrait.jpg"
                            alt="Abodh Kumar, Educator at Disha Class"
                            width={600}
                            height={700}
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute bottom-0 left-0 p-6 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="text-white font-bold text-lg">Abodh Kumar</p>
                            <p className="text-white/80 text-sm">Founder & Lead Educator</p>
                        </div>
                    </div>

                    {/* Back Blob */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 -z-10" />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="order-1 lg:order-2"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-300 mb-6">
                        <Sparkles className="w-3 h-3" />
                        <span>Lead Educator</span>
                    </div>

                    <h2 id="educator-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                        Meet the Mentor <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">Abodh Kumar</span>
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        With over <span className="font-semibold text-foreground">9 years</span> of experience, Abodh Sir simplifies complex concepts into intuitive stories. His unique teaching methodology focuses on key concept clarity, sparking genuine curiosity in students.
                    </p>

                    <div className="space-y-4">
                        {[
                            "M.Sc. in Mathematics & B.Ed. Qualified",
                            "Specialist in CBSE & Bihar Board Patterns",
                            "Consistent 95%+ Results in Boards"
                        ].map((item, index) => (
                            <motion.div
                                key={item}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-500/30 transition-colors shadow-sm"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <span className="text-foreground font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);
