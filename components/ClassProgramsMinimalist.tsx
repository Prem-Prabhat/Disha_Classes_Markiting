"use client";

import { MinimalistPrograms } from "@/lib/data";
import { SITE } from "@/lib/site";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import React, { MouseEvent } from "react";

// --- Premium Spotlight Card ---
function SpotlightCard({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.1)" }: { children: React.ReactNode; className?: string; spotlightColor?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden rounded-2xl transition-colors duration-500 hover:border-blue-500/30 dark:hover:border-blue-500/30 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full ring-1 ring-inset ring-transparent group-hover:ring-white/10 transition-all duration-500 rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default function ClassProgramsMinimalist() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden bg-white dark:bg-[#030303]">

      {/* Premium Ambient Background (Subtle & Deep) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten opacity-70" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 text-xs font-semibold text-blue-600 dark:text-blue-300 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Our Programs
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Designed for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">Real Outcomes.</span>
            </h2>

            <p className="font-sans text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Specialized coaching tailored to the unique academic needs of every class level, ensuring strong foundations and top results.
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MinimalistPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Link href={program.href} className="block h-full">
                <SpotlightCard className="h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1" spotlightColor={program.spotlight}>
                  <div className="p-8 h-full flex flex-col">

                    {/* Header: Icon + Badge */}
                    <div className="flex justify-between items-start mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${program.gradient} ${program.iconColor} shadow-inner transition-transform duration-500 group-hover:brightness-110 group-hover:scale-105`}>
                        <program.icon className="w-7 h-7" />
                      </div>
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-500 dark:text-gray-400`}>
                        {program.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                        {program.description}
                      </p>
                    </div>

                    {/* Footer: Result + Action */}
                    <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex flex-col justify-end min-h-[100px]">

                      {/* Key Result Area */}
                      <div className="mb-4">
                        <div className="flex items-center gap-1.5 mb-2 text-gray-400 dark:text-gray-500">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Key Result</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                          {program.proof}
                        </p>
                      </div>

                      {/* Action Link with Text */}
                      <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-auto">
                        <span>{program.buttonText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>

                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Soft CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a href={SITE.whatsAppUrl("I need help choosing a program")} target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors">
            <MessageCircle className="w-4 h-4" />
            Not sure? Talk to an Expert
          </a>
        </motion.div>

      </div>
    </section>
  );
}
