"use client";

import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Benefits, CourseOptions, FaqData, MinimalistPrograms } from "@/lib/data";
import { SITE } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Trophy,
  X
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// External Student Portal URL
const STUDENT_PORTAL_URL = "https://dishaclasses.akamai.net.in/";

export default function ClassesPage() {
  const [openFaq, setOpenFaq] = useState < number | null > (null);
  const [selectedClass, setSelectedClass] = useState < number | null > (null);

  return (
    <main className="min-h-screen bg-white dark:bg-[#030303] overflow-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 text-sm font-medium text-blue-600 dark:text-blue-300 mb-8">
              <GraduationCap className="w-4 h-4" />
              <span>Our Programs</span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Master Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">
                Board Exams
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Specialized coaching for Class 10th, 11th & 12th with expert
              faculty, proven strategies, and personalized attention to help
              you achieve top results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={STUDENT_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                <GraduationCap className="w-5 h-5" />
                Access Student Portal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={SITE.whatsAppUrl("I want a free demo class")}
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Free Demo Class
              </a>
            </div>

            {/* Secondary Link */}
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              New student? <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Enquire for admission →</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Class
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tailored programs designed for each academic level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MinimalistPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard
                  className="h-full cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  spotlightColor={program.spotlight}
                >
                  <div
                    className="p-8 h-full flex flex-col"
                    onClick={() => setSelectedClass(selectedClass === index ? null : index)}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${program.gradient} ${program.iconColor}`}
                      >
                        <program.icon className="w-7 h-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                        {program.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      {program.description}
                    </p>

                    {/* Proof */}
                    <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Sparkles className="w-4 h-4" />
                        Key Result
                      </div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {program.proof}
                      </p>
                    </div>

                    {/* CTA */}
                    <a
                      href={STUDENT_PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
                    >
                      {program.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Options Section */}
      <section className="relative py-20 px-6 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Flexible Learning Options
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the mode of learning that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CourseOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {option.isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                      ⭐ RECOMMENDED
                    </span>
                  </div>
                )}
                <div
                  className={`h-full p-8 rounded-2xl border-2 ${option.isRecommended
                    ? "border-yellow-400 dark:border-yellow-500/50 bg-white dark:bg-white/5"
                    : "border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02]"
                    }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${option.bgColor} dark:bg-white/5`}
                  >
                    <option.icon className={`w-7 h-7 ${option.textColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {option.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 dark:text-gray-600 flex-shrink-0" />
                        )}
                        <span
                          className={
                            feature.included
                              ? "text-gray-700 dark:text-gray-300"
                              : "text-gray-400 dark:text-gray-600"
                          }
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`block w-full py-3 text-center font-semibold rounded-xl transition-all ${option.isRecommended
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg"
                      : "bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10"
                      }`}
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Students Love Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10"
              >
                <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Got questions? We&apos;ve got answers.
            </p>
          </motion.div>

          <div className="space-y-4">
            {FaqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Trophy className="w-16 h-16 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Excel?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful students who transformed their
                academic journey with Disha Class.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={STUDENT_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:shadow-xl transition-all group"
                >
                  <GraduationCap className="w-5 h-5" />
                  Go to Student Portal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold rounded-xl hover:bg-white/20 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}