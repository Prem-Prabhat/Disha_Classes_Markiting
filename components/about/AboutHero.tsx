"use client";

import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";

export const AboutHero = () => (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        {/* Premium Ambient Background (Subtle & Deep - Consistent with Home) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten opacity-70 animate-blob" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten opacity-70 animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="space-y-8"
            >
                {/* Badge with Ping Effect */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-300 backdrop-blur-sm mx-auto">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    About Disha Class
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground font-heading">
                    Shaping the <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">
                        Future of Education
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                    More than just a coaching institute. We are a community dedicated to nurturing academic excellence, critical thinking, and holistic growth.
                </p>

            </motion.div>
        </div>
    </section>
);
