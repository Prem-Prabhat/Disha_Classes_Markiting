import { sendEmailViaEmailJS } from '@/lib/emailjs';
import { env } from '@/lib/env';
import { RateLimiter, sanitizeInput } from '@/lib/security';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Rate limiting: 5 requests per hour per IP
const rateLimiter = new RateLimiter(5, 3600000);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  _timing: z.number().optional(),
  _recaptcha: z.string().optional(),
});

type Contact = { name: string; email: string; message: string };
const inMemoryContacts: Contact[] = [];

// Verify reCAPTCHA token with Google
async function verifyRecaptcha(token: string): Promise<{ success: boolean; score: number }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey || secretKey === 'your_secret_key_here') {
    // If no secret key configured, skip verification
    return { success: true, score: 1 };
  }

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await res.json();
    return {
      success: data.success ?? false,
      score: data.score ?? 0,
    };
  } catch (e) {
    console.error('reCAPTCHA verification failed:', e);
    return { success: false, score: 0 };
  }
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const clientIP =
      req.headers.get("x-forwarded-for")?.split(',')[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!rateLimiter.isAllowed(clientIP)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Timing check
    if (body._timing && body._timing < 2000) {
      console.log('Bot detected: too fast', body._timing);
      return NextResponse.json({ success: true, message: "Message sent" });
    }

    // reCAPTCHA verification
    if (body._recaptcha) {
      const recaptchaResult = await verifyRecaptcha(body._recaptcha);
      if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
        console.log('Bot detected by reCAPTCHA, score:', recaptchaResult.score);
        return NextResponse.json({ success: true, message: "Message sent" }); // Fake success
      }
    }

    // Sanitize inputs
    const sanitizedBody = {
      name: sanitizeInput(body.name || ""),
      email: sanitizeInput(body.email || ""),
      message: sanitizeInput(body.message || ""),
    };

    // Validate
    const parsed = z.object({
      name: z.string().min(2),
      email: z.string().email(),
      message: z.string().min(10),
    }).parse(sanitizedBody);

    // Send emails
    const useEmail =
      env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      process.env.EMAILJS_PRIVATE_KEY;

    if (useEmail) {
      const templateParams = {
        name: parsed.name,
        message: parsed.message,
        email: parsed.email,
        title: parsed.message,
      };

      try {
        // Auto-reply to student
        await sendEmailViaEmailJS({
          serviceId: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          templateId: env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          publicKey: env.NEXT_PUBLIC_EMAILJS_USER_ID!,
          privateKey: process.env.EMAILJS_PRIVATE_KEY!,
          templateParams,
        });

        // Admin notification
        const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
        if (adminTemplateId) {
          await sendEmailViaEmailJS({
            serviceId: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            templateId: adminTemplateId,
            publicKey: env.NEXT_PUBLIC_EMAILJS_USER_ID!,
            privateKey: process.env.EMAILJS_PRIVATE_KEY!,
            templateParams,
          });
        }
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        inMemoryContacts.push(parsed);
      }
    } else {
      inMemoryContacts.push(parsed);
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (e: any) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { success: false, error: e?.message || "Invalid request" },
      { status: 400 }
    );
  }
}
