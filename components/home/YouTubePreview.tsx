"use client";

import StructuredData from "@/components/shared/StructuredData";
import { generateVideoSchema } from "@/lib/seo";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface VideoCardProps {
    videoId: string;
    title: string;
    description: string;
    index: number;
}

const VideoCard = ({ videoId, title, description, index }: VideoCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <motion.div
            className="group relative w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
        >
            {/* Abstract Decorative Glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 hidden dark:block" />

            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 shadow-xl dark:shadow-2xl">
                {/* Browser-like Header (Optional Polish) */}
                <div className="h-8 bg-gray-100 dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-white/5 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto text-[10px] font-mono text-gray-500 dark:text-gray-500 tracking-wider">disha-class-demo.mp4</div>
                </div>

                {/* Video Area */}
                <div className="relative aspect-video bg-black">
                    {!isPlaying ? (
                        <div
                            className="relative w-full h-full cursor-pointer overflow-hidden"
                            onClick={handlePlay}
                        >
                            <Image
                                src={thumbnailUrl}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Dark Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* Ripple Effect */}
                                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20 delay-100" />
                                    <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Text Content Overlay */}
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-md">
                                    <span className="text-xs font-semibold text-blue-300 tracking-wide uppercase">Class Demo</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2 leading-tight">
                                    {title}
                                </h3>
                                <p className="text-sm text-gray-300 line-clamp-2 max-w-md">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default function YouTubePreview({
    videos,
}: {
    videos: { videoId: string; title: string; description: string }[];
}) {
    return (
        <section className="py-16 bg-gray-50 dark:bg-[#030303] relative overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-500/5 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 font-semibold text-sm mb-6 border border-purple-200 dark:border-purple-800/50 backdrop-blur-sm">
                        📺 Experience Our Classroom
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight font-heading">
                        Teaching that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Connects</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        No boring lectures. Just conceptual clarity, energy, and results. Watch a 2-minute preview.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {videos.map((video, index) => (
                        <div key={video.videoId}>
                            <StructuredData
                                data={generateVideoSchema({
                                    videoId: video.videoId,
                                    title: video.title,
                                    description: video.description,
                                    thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
                                })}
                            />
                            <VideoCard
                                index={index}
                                videoId={video.videoId}
                                title={video.title}
                                description={video.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
