'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ToastProvider';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Enter a valid phone').max(15),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  grade: z.enum(['10', '11', '12']),
  message: z.string().min(10, 'Tell us briefly about your goals')
});

type FormValues = z.infer<typeof schema>;

export default function AdmissionForm() {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const res = await fetch('/api/admission', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
      });
      
      const responseData = await res.json();
      
      if (!res.ok) {
        throw new Error(responseData?.error || `Request failed with status: ${res.status}`);
      }
      
      if (responseData.success) {
        addToast({ title: 'Application submitted successfully!', description: 'We will contact you shortly.', type: 'success' });
        reset();
      } else {
        throw new Error(responseData?.error || 'Failed to submit application');
      }
    } catch (e: any) {
      console.error('Admission form error:', e);
      addToast({ 
        title: 'Error submitting application', 
        description: e.message || 'Please try again later.', 
        type: 'error' 
      });
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
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
          <input id="phone" aria-label="Phone" className="input" placeholder="WhatsApp / Phone" {...register('phone')} />
          {formState.errors.phone && <p className="text-red-600 text-sm mt-1">{formState.errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email (optional)</label>
          <input id="email" aria-label="Email" className="input" placeholder="name@example.com" {...register('email')} />
          {formState.errors.email && <p className="text-red-600 text-sm mt-1">{formState.errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="grade" className="block text-sm font-medium mb-1">Class</label>
        <select id="grade" aria-label="Class" className="input" {...register('grade')}>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        {formState.errors.grade && <p className="text-red-600 text-sm mt-1">{formState.errors.grade.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea id="message" aria-label="Message" className="textarea" rows={5} placeholder="Briefly share goals or challenges" {...register('message')} />
        {formState.errors.message && <p className="text-red-600 text-sm mt-1">{formState.errors.message.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary h-11" disabled={loading} aria-busy={loading}>
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}

