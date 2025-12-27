import { generateMetadata as genMeta } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = genMeta({
    title: 'Contact Us',
    description: 'Get in touch with Disha Class. Visit our location in Nawada, Bihar or contact us via phone, email, or WhatsApp for Math & Science coaching.',
    keywords: ['contact Disha Class', 'Nawada coaching center', 'Math Science tutor contact', 'Disha Class location'],
    url: '/contact'
});

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
