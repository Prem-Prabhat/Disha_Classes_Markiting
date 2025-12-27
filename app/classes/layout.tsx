import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Programs | Disha Class - Class 10th, 11th & 12th Coaching",
    description:
        "Specialized coaching for Class 10th, 11th & 12th in Math & Science. Expert faculty, flexible batches, and proven results. Join online, offline, or hybrid batches.",
    keywords: [
        "Class 10 coaching",
        "Class 11 coaching",
        "Class 12 coaching",
        "Board exam preparation",
        "Math Science tuition",
        "Nawada coaching",
        "Online classes",
        "Best coaching Bihar",
    ],
    openGraph: {
        title: "Our Programs | Disha Class",
        description:
            "Specialized coaching for Class 10th, 11th & 12th with expert faculty and proven results.",
        type: "website",
    },
};

export default function ClassesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
