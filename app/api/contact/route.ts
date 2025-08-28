import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmailViaEmailJS } from '@/lib/emailjs';
import { env } from '@/lib/env';
import { RateLimiter, sanitizeInput } from '@/lib/security';

// Initialize rate limiter
const rateLimiter = new RateLimiter(5, 60000); // 5 requests per minute

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type Contact = z.infer<typeof contactSchema>;
const inMemoryContacts: Contact[] = [];

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const clientIP =
      req.headers.get("x-forwarded-for") || (req as any).ip || "unknown";

    if (!rateLimiter.isAllowed(clientIP)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Sanitize inputs
    const sanitizedBody = {
      name: sanitizeInput(body.name || ""),
      email: sanitizeInput(body.email || ""),
      message: sanitizeInput(body.message || ""),
    };

    const parsed = contactSchema.parse(sanitizedBody);

    // FIXED: Private Key ko bhi check karna zaroori hai
    const useEmail =
      env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      process.env.EMAILJS_PRIVATE_KEY; // <-- Private key check जोड़ा गया

    if (useEmail) {
      try {
        await sendEmailViaEmailJS({
          serviceId: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          templateId: env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          publicKey: env.NEXT_PUBLIC_EMAILJS_USER_ID!,
          privateKey: process.env.EMAILJS_PRIVATE_KEY!, // <-- Private key pass kiya gaya
          templateParams: {
            form_type: "contact",
            name: parsed.name,
            email: parsed.email,
            message: parsed.message,
            recipient: env.EMAIL_RECIPIENT ?? "",
          },
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        inMemoryContacts.push(parsed);
      }
    } else {
      inMemoryContacts.push(parsed);
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (e: any) {
    console.error("Contact API error:", e);
    const msg = e?.message || "Invalid request data";
    return NextResponse.json(
      {
        success: false,
        error: msg,
      },
      { status: 400 }
    );
  }
}






