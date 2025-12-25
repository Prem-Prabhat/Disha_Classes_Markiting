'use client';

import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/site';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

// Background pattern component
const BackgroundPattern: React.FC = () => (
    <div
        className="absolute inset-0 w-full h-full opacity-5"
        style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
    />
);

export default function CTASection() {
    // WhatsApp handler
    const handleWhatsApp = () => {
        if (SITE.whatsAppUrl && typeof SITE.whatsAppUrl === 'function' && SITE.phone) {
            const message = "Hi! I'm interested in classes at Disha Class. Can you share more info?";
            window.open(SITE.whatsAppUrl(message), "_blank");
        }
    };

    return (
        <section
            className="relative py-20 bg-primary text-primary-foreground overflow-hidden"
            aria-labelledby="cta-heading"
        >
            <BackgroundPattern />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        id="cta-heading"
                        className="text-3xl md:text-5xl font-extrabold mb-6"
                    >
                        Ready to Unlock Your Potential?
                    </h2>
                    <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
                        Your journey towards better marks and deeper understanding starts
                        with a single step.
                    </p>
                </motion.div>

                {/* Main CTA Card */}
                <motion.div
                    className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h3 className="text-2xl font-bold text-yellow-300 mb-8">
                        Book Your Free Demo Class
                    </h3>

                    <div className="flex flex-col sm:flex-row justify-center gap-x-8 gap-y-4 text-primary-foreground/90 mb-10">
                        {[
                            "1-on-1 with an Expert",
                            "Clear Your Doubts",
                            "No Obligation",
                        ].map((item, idx) => (
                            <motion.div
                                key={item}
                                className="flex items-center justify-center gap-2"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.15 }}
                            >
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span className="font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="text-lg px-8 py-6 bg-yellow-400 text-gray-900 font-bold 
                       hover:bg-yellow-500 hover:scale-105 transition-all duration-300 
                       rounded-lg shadow-lg"
                        >
                            <a
                                href="https://dishaclasses.akamai.net.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Check out our courses"
                            >
                                <span>Check out our Courses</span>
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleWhatsApp}
                            className="text-lg px-8 py-6 border-2 border-green-400 text-green-600 
                       hover:bg-green-600 hover:text-white transition-all duration-300 
                       rounded-lg backdrop-blur-sm"
                            aria-label="Contact us on WhatsApp"
                        >
                            <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                            <span>WhatsApp Us</span>
                        </Button>
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-primary-foreground/80 text-lg">
                        Have questions? <span>We&apos;re here to help.</span>
                    </p>
                    {SITE.phoneDisplay && (
                        <p className="text-primary-foreground/90 font-semibold mt-2">
                            Call us: {SITE.phoneDisplay}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
