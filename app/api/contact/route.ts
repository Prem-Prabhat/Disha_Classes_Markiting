import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmailViaEmailJS } from '@/lib/emailjs';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type Contact = z.infer<typeof contactSchema>;
const inMemoryContacts: Contact[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.parse(body);

    const useEmail = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (useEmail) {
      await sendEmailViaEmailJS({
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
        templateParams: {
          form_type: 'contact',
          name: parsed.name,
          email: parsed.email,
          message: parsed.message,
          recipient: process.env.EMAIL_RECIPIENT ?? ''
        }
      });
    } else {
      inMemoryContacts.push(parsed);
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    const msg = e?.message || 'Invalid request';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

