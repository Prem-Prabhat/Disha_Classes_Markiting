"use client";

import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import { SITE } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const VisionCTA = () => (
    <section className="relative py-24 overflow-hidden">
        {/* Cosmic Background */}
        <div className="absolute inset-0 bg-[#020817] dark:bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent z-10"></div>
        </div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative z-20 max-w-4xl mx-auto px-4 text-center"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-blue-200 mb-8 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>Join the Movement</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
                Ready to Shape the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Future?
                </span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Join the best community of learners in Nawada. Experience education that goes beyond textbooks and transforms lives.
            </p>

            <Button
                asChild
                size="lg"
                className="relative group bg-white text-blue-900 hover:bg-blue-50 hover:text-blue-700 px-8 py-6 text-lg font-bold rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-blue-900/20"
            >
                <a
                    href={SITE.whatsAppUrl("I want to join Disha Class!")}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Join Our Mission
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                </a>
            </Button>
        </motion.div>
    </section>
);
