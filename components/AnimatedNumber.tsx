"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

type AnimatedNumberProps = {
    to: number;
    from?: number;
    className?: string;
};

export default function AnimatedNumber({ to, from = 0, className }: AnimatedNumberProps) {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation only once

    useEffect(() => {
        if (isInView && ref.current) {
            const node = ref.current;

            // Framer Motion's animate function
            const controls = animate(from, to, {
                duration: 2, // Animation duration in seconds
                ease: "easeOut",
                onUpdate(value) {
                    // Update the text content of the element on each frame
                    node.textContent = Math.round(value).toString();
                },
            });

            // Cleanup function to stop animation if component unmounts
            return () => controls.stop();
        }
    }, [isInView, from, to]);

    // The element that will display the animated number
    return <p ref={ref} className={className} />;
}