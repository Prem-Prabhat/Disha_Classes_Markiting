'use client';

import { SITE } from '@/lib/site';
import { animate, motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, GraduationCap, Trophy } from 'lucide-react';
import Image from 'next/image';
import { MouseEvent, useEffect, useRef } from 'react';

// --- Animated Counter Component ---
function Counter({ from = 0, to, suffix = "", duration = 2 }: { from?: number, to: number, suffix?: string, duration?: number }) {
    const nodeRef = useRef < HTMLSpanElement > (null);
    const inView = useInView(nodeRef, { once: true, margin: "-10px" });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration,
            onUpdate(value) {
                if (node) node.textContent = Math.round(value) + suffix;
            },
            ease: "easeOut"
        });

        return () => controls.stop();
    }, [from, to, suffix, duration, inView]);

    return <span ref={nodeRef} />;
}

// --- Spotlight Card Component ---
function SpotlightCard({ children, className = "", spotlightColor = "rgba(59, 130, 246, 0.15)" }: { children: React.ReactNode; className?: string; spotlightColor?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 overflow-hidden rounded-2xl ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          ${spotlightColor},
                          transparent 80%
                        )
                      `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
}

const features = [
    {
        icon: GraduationCap,
        title: "Expert Teachers",
        description: "10+ years experience in board-focused teaching",
        proof: { value: 10, suffix: "+ Years Exp.", label: "Mentors for State Toppers" },
        colSpan: "lg:col-span-1",
        gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
        icon: CheckCircle2,
        title: "Focused Learning",
        description: "Daily practice sheets & weekly performance tracking",
        proof: { value: 35, suffix: "%", label: "Avg. Score Improvement" },
        colSpan: "lg:col-span-1",
        gradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
        icon: Trophy,
        title: "Top Results",
        description: "Our consistent focus on basics creates district toppers.",
        proof: { value: 90, suffix: "+", label: "Marks in Boards (50+ Students)" },
        colSpan: "lg:col-span-2", // Hero card
        gradient: "from-orange-500/10 to-red-500/10"
    },
    {
        icon: Clock,
        title: "Flexible Batches",
        description: "Morning & evening batches for school-going students",
        proof: { value: 12, suffix: " Hours", label: "7:00 AM - 7:00 PM" },
        colSpan: "lg:col-span-2",
        gradient: "from-emerald-500/10 to-teal-500/10"
    },
];

export default function WhyChooseSection() {
    return (
        <section className="relative py-16 lg:py-24 overflow-hidden bg-white dark:bg-[#030303]">
            {/* Aurora Background Effects (Mesh Gradients) - Opacity Reduced & Blur Increased */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[160px] animate-blob mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[160px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[160px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

                {/* Section Header - Spacing Fixed */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold text-xs sm:text-sm mb-6 border border-blue-100 dark:border-blue-800 backdrop-blur-sm">
                            ✨ Why Students Love Us
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            More Than Just <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                                A Coaching Class
                            </span>
                        </h2>
                        <p className="font-sans text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            We don't just teach chapters; we build confidence. Experience a learning system designed for your success.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT: Sticky Image Visual (Takes 5 cols) */}
                    <div className="lg:col-span-5 relative lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 dark:shadow-black/60 border border-gray-200 dark:border-white/10 group">
                                <Image
                                    src="/classroom front.webp"
                                    alt="Classroom Interaction at Disha Class"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                {/* Subtle Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-semibold mb-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        Live Classroom
                                    </div>
                                    <p className="font-heading text-3xl font-bold mb-2 leading-tight">Where Strong Foundations Create Toppers</p>
                                    <p className="text-gray-300 text-lg">Join the league of successful students.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Bento Grid (Takes 7 cols) */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className={feature.colSpan}>
                                <SpotlightCard className="h-full">
                                    <div className="p-8 h-full flex flex-col relative z-10">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-gray-900 dark:text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                            <feature.icon className="w-7 h-7" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                            {feature.title}
                                        </h3>
                                        {/* Increased line height for mobile reading comfort */}
                                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-loose flex-grow">
                                            {feature.description}
                                        </p>

                                        {/* Animated Counter Micro-proof */}
                                        <div className="pt-6 border-t border-gray-100 dark:border-white/5">
                                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                                                <Counter to={feature.proof.value} suffix={feature.proof.suffix} />
                                            </p>
                                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                                                {feature.proof.label}
                                            </p>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Soft CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <a
                        href={SITE.whatsAppUrl("I have some questions about Disha Class.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-gray-900 dark:text-white font-medium text-lg">
                            Still confused? <span className="text-gray-500 dark:text-gray-400">Chat with us directly</span>
                        </span>
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
