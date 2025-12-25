import { generateMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
    title: 'About Us',
    description: 'Learn about the journey, values, and vision of Disha Class, a leading coaching center in Nawada for Math & Science.',
    url: '/about',
});

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
