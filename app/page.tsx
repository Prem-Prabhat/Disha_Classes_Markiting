import HeroCarousel from '@/components/home/HeroCarousel';
import StructuredData from '@/components/shared/StructuredData';
import { carouselImages, demoVideos } from '@/data/home';
import { generateCourseSchema, generateLocalBusinessSchema } from '@/lib/seo';
import dynamic from 'next/dynamic';

const ClassProgramsMinimalist = dynamic(() => import('@/components/home/ClassProgramsMinimalist'));
const CTASection = dynamic(() => import('@/components/home/CTASection'));
const WhyChooseSection = dynamic(() => import('@/components/home/WhyChooseSection'));
const TestimonialsCarousel = dynamic(() => import('@/components/home/TestimonialsCarousel'));
const YouTubePreview = dynamic(() => import('@/components/home/YouTubePreview'));

export default function HomePage() {
  return (
    <>
      <StructuredData data={generateCourseSchema()} />
      <StructuredData data={generateLocalBusinessSchema()} />
      <main>
        {/* Hero Carousel */}
        <section className="container-balanced" aria-label="Hero carousel showcasing Disha Class">
          <HeroCarousel images={carouselImages} />
        </section>

        {/* Why Choose Section */}
        <WhyChooseSection />

        {/* Our Classes - Now Self-Contained */}
        <ClassProgramsMinimalist />

        {/* YouTube Previews */}
        <YouTubePreview videos={demoVideos} />

        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* Final CTA */}
        <CTASection />
      </main>
    </>
  );
}
