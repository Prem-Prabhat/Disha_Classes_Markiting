import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmailViaEmailJS } from '@/lib/emailjs';
import { env } from '@/lib/env';

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

    const useEmail = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (useEmail) {
      try {
        await sendEmailViaEmailJS({
          serviceId: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          templateId: env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          publicKey: env.NEXT_PUBLIC_EMAILJS_USER_ID!,
          templateParams: {
            form_type: 'contact',
            name: parsed.name,
            email: parsed.email,
            message: parsed.message,
            recipient: env.EMAIL_RECIPIENT ?? ''
          }
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Fallback to in-memory storage if email fails
        inMemoryContacts.push(parsed);
      }
    } else {
      inMemoryContacts.push(parsed);
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    const msg = e?.message || 'Invalid request';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

