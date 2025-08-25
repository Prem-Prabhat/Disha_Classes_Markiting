'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const testimonials = [
  { name: 'Aarav (Class 10)', quote: 'Concepts became crystal clear. My grades improved significantly!' },
  { name: 'Riya (Class 12)', quote: 'Loved the doubt sessions and targeted test strategy.' },
  { name: 'Kunal (Class 11)', quote: 'Personal attention helped me fix gaps quickly.' }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    controls.start({ opacity: [0, 1], y: [6, 0], transition: { duration: 0.35 } });
  }, [index, controls]);

  const t = testimonials[index];

  return (
    <div className="card p-6 text-center">
      <motion.blockquote animate={controls} className="text-lg md:text-xl">
        “{t.quote}”
      </motion.blockquote>
      <div className="mt-3 text-sm text-muted-foreground">— {t.name}</div>
      <div className="mt-4 flex justify-center gap-1">
        {testimonials.map((_, i) => (
          <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-primary' : 'bg-muted'}`} />
        ))}
      </div>
    </div>
  );
}

