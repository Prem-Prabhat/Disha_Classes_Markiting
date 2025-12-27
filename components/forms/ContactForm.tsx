'use client';

import { useToast } from '@/components/layout/ToastProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send, Shield } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Conditionally import reCAPTCHA hook
let useGoogleReCaptcha: any;
try {
  useGoogleReCaptcha = require('react-google-recaptcha-v3').useGoogleReCaptcha;
} catch {
  useGoogleReCaptcha = () => ({ executeRecaptcha: null });
}

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Provide a brief message'),
  website: z.string().max(0).optional(), // Honeypot
});
type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState < number > (Date.now());

  // Safely get reCAPTCHA - may not be available
  let executeRecaptcha: any = null;
  try {
    const recaptcha = useGoogleReCaptcha();
    executeRecaptcha = recaptcha?.executeRecaptcha;
  } catch {
    // reCAPTCHA not available
  }

  const { register, handleSubmit, reset, formState } = useForm < FormValues > ({
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const onSubmit = useCallback(async (data: FormValues) => {
    // Honeypot check
    if (data.website && data.website.length > 0) {
      addToast({ title: 'Message sent!', description: 'Thank you.', type: 'success' });
      reset();
      return;
    }

    // Timing check (skip if form just loaded)
    const timeTaken = Date.now() - formLoadTime;
    if (formLoadTime > 0 && timeTaken < 3000) {
      addToast({ title: 'Message sent!', description: 'Thank you.', type: 'success' });
      reset();
      return;
    }

    try {
      setLoading(true);

      // Get reCAPTCHA token (if available)
      let recaptchaToken = '';
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha('contact_form');
        } catch (e) {
          console.warn('reCAPTCHA execution failed:', e);
        }
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _timing: timeTaken,
          _recaptcha: recaptchaToken,
        })
      });

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData?.error || 'Request failed');
      }

      if (responseData.success) {
        addToast({ title: 'Message sent successfully!', description: 'We will reply to you soon.', type: 'success' });
        reset();
        setFormLoadTime(Date.now());
      } else {
        throw new Error(responseData?.error || 'Failed to send message');
      }
    } catch (e: any) {
      console.error('Form error:', e);
      addToast({
        title: 'Error sending message',
        description: e.message || 'Please try again later.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  }, [executeRecaptcha, formLoadTime, addToast, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
      {/* Honeypot - hidden from users */}
      <div className="hidden">
        <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Full Name
        </label>
        <input
          id="name"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
          placeholder="Your name"
          {...register('name')}
        />
        {formState.errors.name && (
          <p className="text-red-500 text-sm">{formState.errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
          placeholder="name@example.com"
          {...register('email')}
        />
        {formState.errors.email && (
          <p className="text-red-500 text-sm">{formState.errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Message
        </label>
        <textarea
          id="message"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
          rows={5}
          placeholder="Share your query..."
          {...register('message')}
        />
        {formState.errors.message && (
          <p className="text-red-500 text-sm">{formState.errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      {/* reCAPTCHA Badge */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
        <Shield className="w-3 h-3" />
        <span>Protected by reCAPTCHA</span>
      </div>
    </form>
  );
}
