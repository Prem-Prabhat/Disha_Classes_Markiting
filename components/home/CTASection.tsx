"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";

export default function CTASection() {
    // WhatsApp handler
    const handleWhatsApp = () => {
        if (SITE.whatsAppUrl && typeof SITE.whatsAppUrl === "function" && SITE.phone) {
            const message = "Hi! I'm interested in classes at Disha Class. Can you share more info?";
            window.open(SITE.whatsAppUrl(message), "_blank");
        }
    };

    return (
        <section className="relative py-20 bg-gray-50 dark:bg-[#030303] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gray-50 dark:bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(3,3,3,1))] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <motion.div
                    className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-2xl shadow-xl dark:shadow-2xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Inner Content */}
                    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-10">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
                                <Sparkles className="w-4 h-4" />
                                <span>Admissions Open for 2026-27</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight font-heading leading-tight">
                                Turn Your Potential into <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                    Academic Excellence
                                </span>
                            </h2>

                            <div className="space-y-4">
                                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                                    Join hundreds of successful students who trusted Disha Class for their board preparation. Book your free demo class today.
                                </p>
                                <p className="text-sm font-semibold text-green-600 dark:text-green-400 flex items-center justify-center md:justify-start gap-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Trusted by 500+ students across Nawada & nearby districts
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                                {["Expert Faculty", "Personalized Attention", "Result Oriented"].map((feature) => (
                                    <div key={feature} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col-reverse md:flex-col w-full md:w-auto gap-4 shrink-0">
                            <Button
                                asChild
                                size="lg"
                                className="w-full h-14 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                            >
                                <a
                                    href="https://dishaclasses.akamai.net.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <span>Explore Courses</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleWhatsApp}
                                className="w-full h-14 border-green-600/30 dark:border-green-500/30 text-green-700 dark:text-green-400 hover:text-white hover:bg-green-600 dark:hover:bg-green-600/90 hover:border-green-600 dark:hover:border-green-500 text-lg font-semibold rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:fill-current" />
                                <span>Chat on WhatsApp</span>
                            </Button>

                            <p className="text-center text-xs text-gray-500 mt-2 order-first md:order-last">
                                No credit card required · Free Demo Available
                            </p>
                        </div>
                    </div>

                    {/* Decorative Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] dark:opacity-[0.15] invert dark:invert-0 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
