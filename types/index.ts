import { LucideIcon } from "lucide-react";

// --- Home Page Types ---
export interface CarouselImage {
    src: string;
    alt: string;
}

export interface DemoVideo {
    videoId: string;
    title: string;
    description: string;
}

// --- About Page Types ---
export interface Achievement {
    icon: LucideIcon;
    number: string;
    label: string;
}

export interface Value {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface JourneyItem {
    year: string;
    event: string;
}
