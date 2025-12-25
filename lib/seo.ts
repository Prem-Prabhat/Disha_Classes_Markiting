import { Metadata } from "next";
import { SITE } from "./site";

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  // FIXED: Removed 'product' as it's not supported by Next.js Metadata['openGraph']['type']
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetadata(config: SEOConfig): Metadata {
  const title = config.title ? `${config.title} — ${SITE.title}` : SITE.title;
  const description = config.description || SITE.description;
  const url = config.url ? `${SITE.url}${config.url}` : SITE.url;
  const image = config.image
    ? `${SITE.url}${config.image}`
    : `${SITE.url}/open-graph.png`;

  return {
    title,
    description,
    keywords: config.keywords || [
      "Disha Class",
      "Disha Classes Nawada",
      "coaching center",
      "Math & Science",
      "10th class",
      "11th class",
      "12th class",
      "Nawada",
      "Bihar",
      "education",
      "tutoring",
      "board exam preparation",
      "Physics coaching",
      "Chemistry classes",
      "Biology coaching",
      "JEE foundation",
      "NEET foundation",
      "BSEB coaching",
      "CBSE coaching",
      "Abodh Kumar",
    ],
    authors: [{ name: SITE.author }],
    creator: SITE.author,
    publisher: SITE.title,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: config.type || "website",
      locale: "en_IN",
      url,
      title,
      description,
      siteName: SITE.title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: config.publishedTime,
      modifiedTime: config.modifiedTime,
      authors: [SITE.author],
      section: config.section,
      tags: config.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Abodh_kumar8",
      site: "@Abodh_kumar8",
    },
    alternates: {
      canonical: url,
    },
    category: "education",
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.title,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/logo.jpg`,
    image: `${SITE.url}/open-graph.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLine1,
      addressLocality: "Nawada",
      addressRegion: "Bihar",
      postalCode: "805110",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      SITE.youtubeUrl,
      SITE.instagramUrl,
      SITE.facebookUrl,
      SITE.twitterUrl,
    ].filter(Boolean), // Filter out any undefined URLs
    founder: {
      "@type": "Person",
      name: SITE.author,
      jobTitle: "Founder & Educator",
    },
    foundingDate: "2016",
  };
}

export function generateCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Math & Science Coaching for 10th, 11th, 12th",
    description:
      "Comprehensive coaching for 10th, 11th, and 12th grade students in Mathematics and Science.",
    provider: {
      "@type": "EducationalOrganization",
      name: SITE.title,
      url: SITE.url,
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.title,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/logo.jpg`,
    image: `${SITE.url}/open-graph.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLine1,
      addressLocality: "Nawada",
      addressRegion: "Bihar",
      postalCode: "805110",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.8903,
      longitude: 85.5343,
    },
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "₹₹",
    openingHours: "Mo,Tu,We,Th,Fr,Sa 08:00-20:00",
    sameAs: [
      SITE.youtubeUrl,
      SITE.instagramUrl,
      SITE.facebookUrl,
      SITE.twitterUrl,
    ].filter(Boolean),
  };
}

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE.url}${crumb.url}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateVideoSchema(video: {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate || new Date().toISOString(),
    embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
  };
}
