"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, BookOpen, Target, Heart, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { SITE } from "@/lib/site";
import AnimatedNumber from "@/components/AnimatedNumber";
import StructuredData from '@/components/StructuredData';
import { generateLocalBusinessSchema } from '@/lib/seo';

{/*
export const metadata: Metadata = {
  title: `About Us — ${SITE.title}`,
  description: `Learn about the journey, values, and vision of Disha Class, a leading coaching center in Nawada for Math & Science.`,
  openGraph: {
    title: `About Us — ${SITE.title}`,
    description: `Discover the mission behind Disha Class.`,
    url: `${SITE.url}/about`,
    images: [`${SITE.url}/open-graph.png`], 
  },
  twitter: {
    title: `About Us — ${SITE.title}`,
    description: `Learn about the journey, values, and vision of Disha Class.`,
    images: [`${SITE.url}/open-graph.png`],
  }
};
*/}

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

// Main Page Component
export default function AboutPage() {
  return (
    <>
      <StructuredData data={generateLocalBusinessSchema()} />
      <main className="bg-background text-foreground">
      <AboutHero />
      <Achievements />
      <EducatorProfile />
      <OurValues />
             <OurJourney />
       <VisionCTA />
       </main>
     </>
   );
 }

// 1. Hero Section
const AboutHero = () => (
  <motion.section
    className="py-20 text-center bg-muted/30"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
  >
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
        About Disha Class
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Nurturing academic excellence in Mathematics & Science for the bright minds of Nawada.
      </p>
    </div>
  </motion.section>
);

// 2. Achievements Section
const Achievements = () => (
  <section className="py-16" aria-labelledby="achievements-heading">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {achievements.map((achievement) => {
          const IconComponent = achievement.icon;

          const numericValue = parseInt(achievement.number.replace(/\D/g, ''), 10);
          const suffix = achievement.number.replace(/\d/g, '');

          return (
            <motion.div key={achievement.label} variants={fadeUp}>
              <Card className="text-center p-6 border bg-card shadow-md hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <IconComponent className="w-10 h-10 text-primary mx-auto mb-3" />

                  <div className="text-3xl font-bold text-foreground mb-1 flex justify-center items-baseline">
                    <AnimatedNumber to={numericValue} />
                    <span>{suffix}</span>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {achievement.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

// 3. Educator Profile Section
const EducatorProfile = () => (
  <section className="py-16 bg-muted/30" aria-labelledby="educator-heading">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <Image
              src="/teacher-portrait.jpg"
              alt="Abodh Kumar, Educator at Disha Class"
              width={500}
              height={600}
              className="rounded-xl shadow-xl w-full object-cover max-h-[600px]"
              priority
            />
            <div className="absolute inset-0 rounded-xl bg-primary/5 pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="order-1 lg:order-2"
        >
          <h2 id="educator-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet Our Educator
          </h2>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Abodh Kumar
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
            With a passion for teaching and a commitment to student success, Abodh Kumar brings over 8 years of experience to the classroom, simplifying complex concepts and inspiring students to achieve their best.
          </p>

          <div className="space-y-4">
            {[
              "M.Sc. in Mathematics & B.Ed. qualified",
              "Expert in CBSE & State Board Curriculums",
              "Proven track record of top results"
            ].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-start gap-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// 4. Core Values Section
const OurValues = () => (
  <section className="py-16" aria-labelledby="values-heading">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 id="values-heading" className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Our Core Values
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
          return (
            <motion.div key={value.title} variants={fadeUp}>
              <Card className="p-8 border bg-card shadow-md hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 h-full">
                <CardContent className="p-0 text-center">
                  <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

// 5. Journey / Timeline Section
const OurJourney = () => (
  <section className="py-16 bg-muted/30" aria-labelledby="journey-heading">
    <div className="max-w-4xl mx-auto px-4">
      <motion.h2
        id="journey-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Our Journey
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-border -translate-x-1/2" />

        {journey.map((item, index) => (
          <motion.div
            key={`${item.year}-${index}`}
            className="relative mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="flex items-center md:justify-normal md:odd:flex-row-reverse">
              {/* Empty div for spacing on alternating sides */}
              <div className="hidden md:block w-1/2" />

              <div className="z-10 absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center -translate-x-1/2 shadow-lg">
                <Award className="w-4 h-4" />
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 p-4">
                <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border bg-card md:odd:-translate-x-8 md:even:translate-x-8">
                  <CardContent className="p-0">
                    <p className="font-bold text-primary mb-2 text-lg">
                      {item.year}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.event}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);



// 6. Vision and Call-to-Action Section
const VisionCTA = () => (
  <section className="py-20 text-center bg-primary text-primary-foreground">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="max-w-4xl mx-auto px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Our Vision for the Future
      </h2>
      <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
        We aim to be the leading educational institution in Nawada, empowering every student to achieve their dreams through innovative and dedicated teaching.
      </p>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
      >
        <a
          href="https://dishaclasses.akamai.net.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our web application to join our mission"
        >
          <span>Join Our Mission</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </Button>
    </motion.div>
  </section>
);