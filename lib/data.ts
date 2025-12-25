import { SITE } from '@/lib/site';
import { BookOpen, Clock, Combine, Facebook, GraduationCap, Instagram, Target, Trophy, Twitter, UserCheck, Users, Wifi, Youtube } from "lucide-react";

// Features data
const Features = [
  {
    icon: Users,
    title: "Expert Teachers",
    description: "Learn from experienced and caring faculty.",
  },
  {
    icon: Target,
    title: "Focused Learning",
    description: "Smart strategies for board exam success.",
  },
  {
    icon: Clock,
    title: "Flexible Batches",
    description: "Choose batch timing that suits your schedule.",
  },
  {
    icon: Trophy,
    title: "Top Results",
    description: "Our students consistently perform at the top.",
  },
];


// Video data
const Videos = [
  {
    videoId: "wajPbbu__UY",
    title: "Class 10th – Quadratic Equations",
    description:
      "Learn how we simplify complex topics with easy-to-follow explanations.",
  },
  {
    videoId: "v9JJJV91ZCg",
    title: "Class 12th – Modern Physics",
    description:
      "Understand difficult science laws with practical, real-world examples.",
  },
];

// Testimonials data
const Testimonials = [
  {
    name: "Priya Sharma",
    class: "Class 12th Topper",
    score: "95%",
    text: "The personalized attention and smart teaching methods at Disha Class were game-changing. I finally understood concepts that I struggled with for years!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Rahul Kumar",
    class: "Class 10th Achiever",
    score: "92%",
    text: "The teachers here are incredibly supportive and make learning fun. The regular tests helped me build confidence and manage my time effectively during the board exams.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Anjali Singh",
    class: "Class 11th Foundation",
    score: "90%",
    text: "Disha Class is the best place to build a strong foundation for Math and Science. The concepts are taught with such clarity that it makes preparing for future exams much easier.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Vikram Reddy",
    class: "Class 12th Achiever",
    score: "94%",
    text: "The study materials and mock tests were extremely helpful. The faculty is always available to clear doubts, which made a huge difference in my preparation.",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
];

// ClassLevels data
const ClassLevels = [
  {
    title: "Class 10th",
    subjects: "Math & Science",
    description:
      "Build a rock-solid foundation of core concepts to excel in your board exams.",
    icon: BookOpen,
    accentColor: "from-blue-500 to-blue-400",
  },
  {
    title: "Class 11th",
    subjects: "Math & Science",
    description:
      "Master advanced topics and develop the right strategy for competitive exams.",
    icon: GraduationCap,
    accentColor: "from-purple-500 to-purple-400",
  },
  {
    title: "Class 12th",
    subjects: "Math & Science",
    description:
      "Intensive preparation to help you score high in boards and secure your future.",
    icon: Trophy,
    accentColor: "from-green-500 to-green-400",
  },
];

// Data for the course batches
const CourseOptions = [
  {
    type: "Online",
    title: "Online Batch",
    icon: Wifi,
    description:
      "Learn from the comfort of your home with our interactive live classes.",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    features: [
      { name: "Live Interactive Classes", included: true },
      { name: "Recorded Lecture Library", included: true },
      { name: "Digital PDF Notes", included: true },
      { name: "Online Doubt Solving Sessions", included: true },
      { name: "Weekly Online Tests", included: true },
      { name: "In-Person Class Access", included: false },
    ],
  },
  {
    type: "Hybrid",
    title: "Hybrid Batch",
    icon: Combine,
    description:
      "Get the best of both worlds. Attend classes online or offline as per your convenience.",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    borderColor: "border-yellow-200",
    isRecommended: true,
    features: [
      { name: "Attend Classes Online or Offline", included: true },
      { name: "Complete Recorded Lecture Library", included: true },
      { name: "Digital & Printed Notes", included: true },
      { name: "Online & Offline Doubt Solving", included: true },
      { name: "Online & Offline Weekly Tests", included: true },
      { name: "Flexible Learning Schedule", included: true },
    ],
  },
  {
    type: "Offline",
    title: "Offline Batch",
    icon: Users,
    description:
      "Traditional classroom learning with direct interaction with our expert faculty.",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    features: [
      { name: "In-Person Classroom Coaching", included: true },
      { name: "Recorded Lecture Library", included: false },
      { name: "Printed Study Material", included: true },
      { name: "Face-to-Face Doubt Solving", included: true },
      { name: "Weekly OMR-Based Tests", included: true },
      { name: "Access to Online Portal", included: true },
    ],
  },
];

// Admission steps data
const AdmissionSteps = [
  {
    icon: UserCheck,
    title: "Fill Application",
    description: "Complete the admission form with required details",
  },
  {
    icon: BookOpen,
    title: "Free Demo Class",
    description: "Attend a complimentary demo class to experience our teaching",
  },
  {
    icon: Clock,
    title: "Schedule & Enrollment",
    description: "Choose your preferred batch timing and complete enrollment",
  },
];
// FAQ data
const FaqData = [
  {
    question: "Online classes kaise hongi?",
    answer:
      "Hamari sabhi online classes hamare app ya website ke through live hoti hain. Ismein students real-time mein teacher se baat kar sakte hain aur sawaal puchh sakte hain, bilkul ek physical classroom ki tarah.",
  },
  {
    question: "Agar online class miss ho gayi to kya hoga?",
    answer:
      "Chinta na karein! Har live class ke baad uski recording hamare app par available ho jaati hai. Aap use kabhi bhi, kitni bhi baar dekh kar apna revision kar sakte hain.",
  },
  {
    question: "Online students apne doubts kaise puchhenge?",
    answer:
      "Online students ke liye hamare paas dedicated doubt-solving sessions hote hain. Iske alawa, aap hamare WhatsApp group ya app ke chat feature ke zariye bhi apne doubts puchh sakte hain.",
  },
  {
    question: "Online study material (notes) kaise milega?",
    answer:
      "Saara study material jaise notes, assignments, aur practice sheets aapko PDF format mein hamare app par mil jayega, jise aap aasani se download kar sakte hain.",
  },
  {
    question: "Online test kaise honge?",
    answer:
      "Weekly tests hamare online portal par conduct kiye jaate hain. Ye tests bilkul board exam ke pattern par hote hain aur aapko turant result aur detailed analysis milta hai.",
  },
];

//Benefits data
const Benefits = [
  "Free demo class for new students",
  "Flexible batch timings",
  "Small batch sizes for personal attention",
  "Regular parent-teacher meetings",
  "Study materials included",
  "Regular tests and assessments",
  "Doubt clearing sessions",
  "Career guidance and counseling",
];


const MinimalistPrograms = [
  {
    title: "Class 10th",
    badge: "Foundation",
    icon: BookOpen,
    description: "Build strong fundamentals in Math & Science with regular tests and doubt-clearing sessions.",
    proof: "Avg. improvement: 30% in board scores",
    href: "/classes",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-500",
    spotlight: "rgba(6, 182, 212, 0.1)", // Cyan
    buttonText: "Explore Class 10 Program"
  },
  {
    title: "Class 11th",
    badge: "Transition",
    icon: GraduationCap,
    description: "Bridge the gap between school and competitive-level thinking with structured practice.",
    proof: "Special focus on weak-topic recovery",
    href: "/classes",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    spotlight: "rgba(168, 85, 247, 0.1)", // Purple
    buttonText: "Explore Class 11 Program"
  },
  {
    title: "Class 12th",
    badge: "Result Oriented",
    icon: Trophy,
    description: "Exam-focused preparation with revision cycles, mock tests, and result tracking.",
    proof: "50+ students scored 90+ marks",
    href: "/classes",
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-500",
    spotlight: "rgba(16, 185, 129, 0.1)", // Emerald
    buttonText: "Explore Class 12 Program"
  }
];

const FooterQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/classes" },
  { label: "Admission Enquiry", href: "/contact" },
];

const SocialMediaLinks = [
  {
    href: SITE.youtubeUrl,
    icon: Youtube,
    className: "hover:bg-red-600/10 hover:text-red-600",
    label: "Follow us on YouTube",
  },
  {
    href: SITE.instagramUrl,
    icon: Instagram,
    className: "hover:bg-pink-600/10 hover:text-pink-600",
    label: "Follow us on Instagram",
  },
  {
    href: SITE.facebookUrl,
    icon: Facebook,
    className: "hover:bg-blue-600/10 hover:text-blue-600",
    label: "Follow us on Facebook",
  },
  {
    href: SITE.twitterUrl,
    icon: Twitter,
    className: "hover:bg-white/10 hover:text-white",
    label: "Follow us on Twitter/X",
  },
];

export {
  AdmissionSteps, Benefits, ClassLevels,
  CourseOptions, FaqData, Features, FooterQuickLinks, MinimalistPrograms, SocialMediaLinks, Testimonials, Videos
};

