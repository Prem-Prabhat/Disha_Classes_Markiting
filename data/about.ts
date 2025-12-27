import { Achievement, JourneyItem, Value } from "@/types";
import { Award, BookOpen, CheckCircle, Heart, Target, Users } from "lucide-react";

export const achievements: Achievement[] = [
    { icon: Users, number: "10000+", label: "Students Taught" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: BookOpen, number: "9+", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Commitment" },
];

export const values: Value[] = [
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

export const journey: JourneyItem[] = [
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
