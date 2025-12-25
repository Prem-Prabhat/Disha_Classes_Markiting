import HeroCarousel from '@/components/HeroCarousel';
import StructuredData from '@/components/StructuredData';
import { generateCourseSchema, generateLocalBusinessSchema } from '@/lib/seo';
import dynamic from 'next/dynamic';

const ClassProgramsMinimalist = dynamic(() => import('@/components/ClassProgramsMinimalist'));
const CTASection = dynamic(() => import('@/components/sections/CTASection'));
const WhyChooseSection = dynamic(() => import('@/components/sections/WhyChooseSection'));
const TestimonialsCarousel = dynamic(() => import('@/components/TestimonialsCarousel'));
const YouTubePreview = dynamic(() => import('@/components/YouTubePreview'));

// Types
interface CarouselImage {
  src: string;
  alt: string;
}

interface DemoVideo {
  videoId: string;
  title: string;
  description: string;
}

// Carousel images
const images: CarouselImage[] = [
  {
    src: "/backstudents.webp",
    alt: 'Students sitting together with books',
  },
  {
    src: "/classroom front.webp",
    alt: 'A classroom filled with students and a teacher',
  },
  {
    src: "/banner.webp",
    alt: 'A promotional banner for Disha Class',
  },
  {
    src: "/holi.webp",
    alt: 'Students celebrating Holi at Disha Class',
  },
  {
    src: "/newcoutout.webp",
    alt: 'News coverage of Disha Class',
  },
  {
    src: "/prize taking.webp",
    alt: 'Students receiving prizes at Disha Class',
  },
  {
    src: "/partbhaSamman.webp",
    alt: 'Partbha Samman ceremony at Disha Class',
  },
  {
    src: "/hero-education.jpg",
    alt: 'Students learning together at Disha Class',
  }
];

// Demo videos data
const demoVideos: DemoVideo[] = [
  {
    videoId: "wajPbbu__UY",
    title: "प्रकाश क्या है? | प्रकाश का परावर्तन | class 10 physics",
    description: "Get a feel for the actual class teaching with this detailed video on प्रकाश (light)."
  },
  {
    videoId: "v9JJJV91ZCg",
    title: "12th Physics | Optics | Physics Numericals",
    description: "इस वीडियो में हम 4 डायोप्टर क्षमता वाले लेंस की फोकस दूरी को समझेंगे। सरल भाष में, हम देखेंगे कि कैसे लेंस का फोकस दूरी उसके डायोप्टर क्षमता पर निर्भर करता है।"
  }
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={generateCourseSchema()} />
      <StructuredData data={generateLocalBusinessSchema()} />
      <main>
        {/* Hero Carousel */}
        <section className="container-balanced" aria-label="Hero carousel showcasing Disha Class">
          <HeroCarousel images={images} />
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
