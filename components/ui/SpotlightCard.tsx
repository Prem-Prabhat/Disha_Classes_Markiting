"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

export function SpotlightCard({
    children,
    className = "",
    spotlightColor = "rgba(59, 130, 246, 0.15)",
}: SpotlightCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
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
