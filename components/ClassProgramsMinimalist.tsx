"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { easeInOut } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ClassLevels } from "@/lib/data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

export default function ClassProgramsMinimalist() {
  return (
    <section className="bg-gray-50 dark:bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Programs Tailored for{" "}
            <span className="text-primary">Your Success</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide specialized Math & Science coaching designed to meet the
            unique challenges of each class level.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ClassLevels.map((level) => (
            <motion.div
              key={level.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                rotateX: 2,
                rotateY: 2,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="group"
            >
              <Card className="h-full flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-white dark:bg-muted shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-white/20">
                {/* Accent gradient top line */}
                <div className="relative h-1.5 w-full overflow-hidden">
                  <div
                    className={`absolute inset-0 w-1/3 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${level.accentColor}`}
                  ></div>
                </div>

                <CardHeader className="pt-8 text-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${level.accentColor} shadow-md`}
                    >
                      <level.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {level.title}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {level.subjects}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="text-center flex-grow flex flex-col px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {level.description}
                  </p>
                  <Link href="/classes" className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full group transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
