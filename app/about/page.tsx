"use client";
import AnimatedNumber from "@/components/AnimatedNumber";
import StructuredData from '@/components/StructuredData';
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Award, BookOpen, CheckCircle, Heart, Sparkles, Target, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";



// Types
interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  label: string;
}

interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface JourneyItem {
  year: string;
  event: string;
}

// Data
const achievements: Achievement[] = [
  { icon: Users, number: "10000+", label: "Students Taught" },
  { icon: Award, number: "95%", label: "Success Rate" },
  { icon: BookOpen, number: "9+", label: "Years Experience" },
  { icon: Heart, number: "100%", label: "Commitment" },
];

const values: Value[] = [
  {
    icon: Heart,
    title: "Student-Centric Approach",
    description: "Every student is unique. We adapt our teaching to suit individual learning styles."
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description: "Our focus is on achieving concrete results—better grades and deeper understanding."
  },
  {
    icon: CheckCircle,
    title: "Quality Education",
    description: "We maintain the highest standards with updated curriculum and modern techniques."
  },
];

const journey: JourneyItem[] = [
  {
    year: "2016",
    event: "Disha Class was founded with a vision to provide quality, accessible education in Nawada."
  },
  {
    year: "2018",
    event: "Celebrated a 90%+ success rate in our very first batch of board exam students."
  },
  {
    year: "2020",
    event: "Expanded our facilities to serve over 200 students annually, becoming a trusted name."
  },
  {
    year: "2022",
    event: "Launched comprehensive online classes to support students during the pandemic."
  },
  {
    year: "2025",
    event: "Proudly celebrating over 500 successful students and continuing to innovate."
  },
];

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};



// 1. Hero Section
// --- Premium Spotlight Card (Reused from Home Page) ---
function SpotlightCard({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.1)" }: { children: React.ReactNode; className?: string; spotlightColor?: string }) {
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

// 1. Hero Section (Upgraded with Micro-interactions)
const AboutHero = () => (
  <section className="relative py-24 md:py-32 overflow-hidden bg-background">
    {/* Premium Ambient Background (Subtle & Deep - Consistent with Home) */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten opacity-70 animate-blob" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten opacity-70 animate-blob animation-delay-2000" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="space-y-8"
      >
        {/* Badge with Ping Effect */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-300 backdrop-blur-sm mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          About Disha Class
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground font-heading">
          Shaping the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">
            Future of Education
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
          More than just a coaching institute. We are a community dedicated to nurturing academic excellence, critical thinking, and holistic growth.
        </p>

      </motion.div>
    </div>
  </section>
);

// 2. Achievements Section (Upgraded with Spotlight Cards)
const Achievements = () => (
  <section className="py-24 relative z-10" aria-labelledby="achievements-heading">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          const numericValue = Number(achievement.number.replace(/[^\d]/g, '')) || 0;
          const suffix = achievement.number.replace(/\d/g, '');

          // Assign different colors/gradients based on index for variety
          const colors = [
            "from-blue-500/20 to-cyan-500/20 text-blue-500",
            "from-purple-500/20 to-pink-500/20 text-purple-500",
            "from-cyan-500/20 to-teal-500/20 text-cyan-500",
            "from-indigo-500/20 to-violet-500/20 text-indigo-500",
          ];
          const colorClass = colors[index % colors.length];

          return (
            <motion.div key={achievement.label} variants={fadeUp} className="h-full">
              <SpotlightCard className="h-full" spotlightColor="rgba(59, 130, 246, 0.15)">
                <div className="p-8 text-center flex flex-col items-center h-full justify-center space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass.split(" ")[0]} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className={`w-8 h-8 ${colorClass.split(" ")[2]}`} />
                  </div>

                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white flex justify-center items-baseline tracking-tight">
                      <AnimatedNumber to={numericValue} />
                      <span>{suffix}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      {achievement.label}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

// 3. Educator Profile Section (Glassmorphic & Premium)
const EducatorProfile = () => (
  <section className="py-24 relative overflow-hidden" aria-labelledby="educator-heading">
    {/* Decorative Background Blob */}
    {/* Decorative Background Blob */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-lighten" />
    <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-lighten" />

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="order-2 lg:order-1 relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-blue-500/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
            <Image
              src="/teacher-portrait.jpg"
              alt="Abodh Kumar, Educator at Disha Class"
              width={600}
              height={700}
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-0 left-0 p-6 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white font-bold text-lg">Abodh Kumar</p>
              <p className="text-white/80 text-sm">Founder & Lead Educator</p>
            </div>
          </div>

          {/* Back Blob */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 -z-10" />
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-300 mb-6">
            <Sparkles className="w-3 h-3" />
            <span>Lead Educator</span>
          </div>

          <h2 id="educator-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Meet the Mentor <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">Abodh Kumar</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            With over <span className="font-semibold text-foreground">9 years</span> of experience, Abodh Sir simplifies complex concepts into intuitive stories. His unique teaching methodology focuses on key concept clarity, sparking genuine curiosity in students.
          </p>

          <div className="space-y-4">
            {[
              "M.Sc. in Mathematics & B.Ed. Qualified",
              "Specialist in CBSE & Bihar Board Patterns",
              "Consistent 95%+ Results in Boards"
            ].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-500/30 transition-colors shadow-sm"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// 4. Core Values Section (Premium Spotlight Grid)
const OurValues = () => (
  <section className="py-24 relative overflow-hidden" aria-labelledby="values-heading">
    {/* Ambient Background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten" />
    </div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <motion.div
        className="text-center mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-300 mb-6">
          <Sparkles className="w-3 h-3" />
          <span>Our Philosophy</span>
        </div>
        <h2 id="values-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
          Core Values that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">Drive Us</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          The principles that drive our educational mission and guide everything we do.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {values.map((value, index) => {
          const IconComponent = value.icon;
          // Gradients for icons - Strictly Cool/Cosmic Theme
          const gradients = [
            "from-purple-500 to-indigo-500",
            "from-blue-500 to-cyan-500",
            "from-pink-500 to-rose-500"
          ];
          const currentGradient = gradients[index % gradients.length];

          return (
            <motion.div key={value.title} variants={fadeUp} className="h-full">
              <SpotlightCard className="h-full" spotlightColor="rgba(168, 85, 247, 0.15)">
                <div className="p-10 h-full flex flex-col items-start">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${currentGradient} flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {value.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

// 5. Journey / Timeline Section (Interactive Tabs - Premium & Compact)
const OurJourney = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden bg-background" aria-labelledby="journey-heading">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-300 mb-6">
            <Sparkles className="w-3 h-3" />
            <span>Our Legacy</span>
          </div>
          <h2 id="journey-heading" className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            A Decade of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">Excellence</span>
          </h2>
        </motion.div>

        {/* Tab Navigation (Year Pills) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {journey.map((item, index) => (
            <button
              key={item.year}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${activeTab === index
                ? "text-white border-blue-500 shadow-lg shadow-blue-500/25"
                : "text-muted-foreground border-transparent hover:bg-white/50 dark:hover:bg-white/5 hover:border-gray-200 dark:hover:border-white/10"
                }`}
            >
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.year}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content Area (Fixed Height) */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full"
            >
              <SpotlightCard className="h-full w-full max-w-3xl mx-auto" spotlightColor="rgba(6, 182, 212, 0.2)">
                <div className="p-8 md:p-12 h-full flex flex-col items-center text-center justify-center relative overflow-hidden">
                  {/* Large Year Background (Watermark) */}
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-gray-100 dark:text-white/5 pointer-events-none select-none z-0 tracking-tighter">
                    {journey[activeTab].year}
                  </span>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 shadow-xl shadow-cyan-500/30 mx-auto">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {journey[activeTab].year}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                      {journey[activeTab].event}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

// 6. Vision and Call-to-Action Section (Premium Cosmic Gradient)
const VisionCTA = () => (
  <section className="relative py-24 overflow-hidden">
    {/* Cosmic Background */}
    <div className="absolute inset-0 bg-[#020817] dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="relative z-20 max-w-4xl mx-auto px-4 text-center"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-blue-200 mb-8 backdrop-blur-md">
        <Sparkles className="w-3 h-3 text-blue-400" />
        <span>Join the Movement</span>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
        Ready to Shape the <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Future?
        </span>
      </h2>
      <p className="text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl mx-auto">
        Join the best community of learners in Nawada. Experience education that goes beyond textbooks and transforms lives.
      </p>

      <Button
        asChild
        size="lg"
        className="relative group bg-white text-blue-900 hover:bg-blue-50 hover:text-blue-700 px-8 py-6 text-lg font-bold rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-blue-900/20"
      >
        <a
          href={SITE.whatsAppUrl("I want to join Disha Class!")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative z-10 flex items-center gap-2">
            Join Our Mission
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        </a>
      </Button>
    </motion.div>
  </section>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StructuredData />
      <AboutHero />
      <Achievements />
      <EducatorProfile />
      <OurValues />
      <OurJourney />
      <VisionCTA />
    </main>
  );
}