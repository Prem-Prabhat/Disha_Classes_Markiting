"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface VideoCardProps {
  videoId: string;
  title: string;
  description: string;
}

const VideoCard = ({ videoId, title, description }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-muted/50 shadow-md hover:shadow-xl transition-all"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {!isPlaying ? (
        <div
          className="relative w-full aspect-video cursor-pointer"
          onClick={handlePlay}
        >
          {/* Thumbnail */}
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white group-hover:bg-black/50 transition-colors">
            <PlayCircle className="w-16 h-16 mb-2 drop-shadow-lg group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Watch Preview</span>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
          allowFullScreen
        />
      )}

      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
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
    <section className="py-24 bg-gray-50 dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            See Our Teaching in{" "}
            <span className="text-blue-600 dark:text-blue-400">Action</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get a feel for our engaging and effective teaching style. Watch a
            preview of our actual classes.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((video, index) => (
            <motion.div
              key={video.videoId}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <VideoCard
                videoId={video.videoId}
                title={video.title}
                description={video.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
