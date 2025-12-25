import { generateMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
    title: 'Our Classes',
    description: 'Explore our Math and Science courses for Class 10th, 11th, and 12th in Nawada. Foundation courses for JEE and NEET available.',
    url: '/classes',
    keywords: ['Math classes Nawada', 'Science classes Nawada', 'Class 10 coaching', 'Class 12 Physics', 'Chemistry coaching']
});

export default function ClassesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
