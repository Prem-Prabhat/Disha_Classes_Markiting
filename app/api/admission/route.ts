import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmailViaEmailJS } from '@/lib/emailjs';
import { env } from '@/lib/env';
import { RateLimiter, sanitizeInput } from '@/lib/security';

// Initialize rate limiter
const rateLimiter = new RateLimiter(3, 60000); // 3 requests per minute for admission

const admissionSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone must be at least 10 characters').max(15, 'Phone must be at most 15 characters'),
  email: z.string().email('Invalid email format').optional().or(z.literal('')),
  grade: z.enum(['10', '11', '12'], { required_error: 'Please select a grade' }),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type Admission = z.infer<typeof admissionSchema>;
const inMemoryAdmissions: Admission[] = [];

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || req.ip || 'unknown';
    if (!rateLimiter.isAllowed(clientIP)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Too many requests. Please try again later.' 
      }, { status: 429 });
    }

    const body = await req.json();
    
    // Sanitize inputs
    const sanitizedBody = {
      name: sanitizeInput(body.name || ''),
      phone: sanitizeInput(body.phone || ''),
      email: body.email ? sanitizeInput(body.email) : '',
      grade: body.grade,
      message: sanitizeInput(body.message || '')
    };
    
    const parsed = admissionSchema.parse(sanitizedBody);

    const useEmail = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (useEmail) {
      try {
        await sendEmailViaEmailJS({
          serviceId: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          templateId: env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          publicKey: env.NEXT_PUBLIC_EMAILJS_USER_ID!,
          templateParams: {
            form_type: 'admission',
            name: parsed.name,
            phone: parsed.phone,
            email: parsed.email || 'Not provided',
            grade: parsed.grade,
            message: parsed.message,
            recipient: env.EMAIL_RECIPIENT ?? ''
          }
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Fallback to in-memory storage if email fails
        inMemoryAdmissions.push(parsed);
      }
    } else {
      inMemoryAdmissions.push(parsed);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Admission application submitted successfully' 
    });
  } catch (e: any) {
    console.error('Admission API error:', e);
    const msg = e?.message || 'Invalid request data';
    return NextResponse.json({ 
      success: false, 
      error: msg 
    }, { status: 400 });
  }
}
