'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ToastProvider';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Provide a brief message')
});
type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const res = await fetch('/api/contact', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData?.error || `HTTP error! status: ${res.status}`);
      }
      
      const json = await res.json();
      addToast({ title: 'Message sent', description: 'We will reply soon.', type: 'success' });
      reset();
    } catch (e: any) {
      console.error('Form submission error:', e);
      addToast({ title: 'Error', description: e.message || 'Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 grid gap-4 max-w-2xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
        <input id="name" aria-label="Full Name" className="input" placeholder="Your name" {...register('name')} />
        {formState.errors.name && <p className="text-red-600 text-sm mt-1">{formState.errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input id="email" aria-label="Email" className="input" placeholder="name@example.com" {...register('email')} />
        {formState.errors.email && <p className="text-red-600 text-sm mt-1">{formState.errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea id="message" aria-label="Message" className="textarea" rows={5} placeholder="Share your query..." {...register('message')} />
        {formState.errors.message && <p className="text-red-600 text-sm mt-1">{formState.errors.message.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary h-11" disabled={loading} aria-busy={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

