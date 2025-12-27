import { AboutHero } from "@/components/about/AboutHero";
import { Achievements } from "@/components/about/Achievements";
import { EducatorProfile } from "@/components/about/EducatorProfile";
import { OurJourney } from "@/components/about/OurJourney";
import { OurValues } from "@/components/about/OurValues";
import { VisionCTA } from "@/components/about/VisionCTA";
import StructuredData from "@/components/shared/StructuredData";
import { generateLocalBusinessSchema } from "@/lib/seo";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StructuredData data={generateLocalBusinessSchema()} />
      <AboutHero />
      <Achievements />
      <EducatorProfile />
      <OurValues />
      <OurJourney />
      <VisionCTA />
    </main>
  );
}