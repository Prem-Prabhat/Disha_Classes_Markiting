"use client";

import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// --- Infinite Moving Cards Component ---
export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        text: string;
        name: string;
        class: string;
        score: string;
        avatar?: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef < HTMLDivElement > (null);
    const scrollerRef = React.useRef < HTMLUListElement > (null);
    const [start, setStart] = useState(false);

    const getDirection = React.useCallback(() => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    }, [direction]);

    const getSpeed = React.useCallback(() => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    }, [speed]);

    useEffect(() => {
        function addAnimation() {
            if (containerRef.current && scrollerRef.current) {
                const scrollerContent = Array.from(scrollerRef.current.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    if (scrollerRef.current) {
                        scrollerRef.current.appendChild(duplicatedItem);
                    }
                });

                // Initial set
                getDirection();
                getSpeed();
                setStart(true);
            }
        }
        addAnimation();
    }, [getDirection, getSpeed]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className={cn(
                            "relative rounded-2xl flex-shrink-0 px-8 py-6 max-w-full",
                            idx % 2 === 0 ? "w-[400px] md:w-[500px]" : "w-[350px] md:w-[420px]"
                        )}
                    >
                        {/* Custom Premium Card Design integrated directly */}
                        <div className="relative h-full flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none hover:border-blue-500/30 transition-colors">
                            <div className="absolute -top-3 -right-3">
                                <div className="bg-blue-100 dark:bg-blue-600/20 p-2 rounded-full backdrop-blur-md border border-blue-200 dark:border-blue-500/30">
                                    <Quote className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>

                            <blockquote className="relative z-20">
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic mb-6">
                                    &quot;{item.text}&quot;
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/20">
                                        <Image
                                            src={item.avatar || `https://i.pravatar.cc/150?u=${idx}`}
                                            alt={item.name}
                                            width={48}
                                            height={48}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <span className="block text-base font-bold text-gray-900 dark:text-white">
                                            {item.name}
                                        </span>
                                        <span className="block text-sm text-gray-600 dark:text-gray-400">
                                            {item.class} · <span className="text-blue-600 dark:text-blue-500 font-semibold">{item.score}</span>
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
