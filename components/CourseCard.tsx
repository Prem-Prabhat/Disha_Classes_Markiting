'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  title: string;
  grade: '10' | '11' | '12';
  duration: string;
  highlights: string[];
};

export default function CourseCard({ title, grade, duration, highlights }: Props) {
  return (
    <motion.div className="card p-6 flex flex-col" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs rounded bg-secondary px-2 py-1">Class {grade}</span>
      </div>
      <p className="text-sm text-muted-foreground mt-1">{duration}</p>
      <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
        {highlights.map((h) => (
          <li key={h}>• {h}</li>
        ))}
      </ul>
      <div className="mt-5">
        <Link href="/admission" className="btn btn-primary h-10 w-full">
          Enquire Now
        </Link>
      </div>
    </motion.div>
  );
}

