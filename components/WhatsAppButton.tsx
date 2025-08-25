'use client';

import { SITE } from '@/lib/site';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsAppUrl('Hello! I have an enquiry about classes.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-40 bottom-5 right-5 md:bottom-6 md:right-6 btn h-12 w-12 rounded-full bg-[#25D366] text-white shadow-lg hover:opacity-90"
    >
      <MessageCircle className="h-5 w-5 mx-auto" />
    </a>
  );
}

