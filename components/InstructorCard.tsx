'use client';

import { motion } from 'framer-motion';

export default function InstructorCard() {
  return (
    <motion.div className="card p-6 grid gap-3 md:grid-cols-[1fr,2fr]" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
      <div className="aspect-video w-full rounded bg-muted" aria-hidden />
      <div>
        <h3 className="font-semibold text-xl">Your Instructor</h3>
        <p className="text-muted-foreground mt-2">
          An experienced educator passionate about simplifying Math & Science, helping students gain confidence and excel in board and competitive exams.
        </p>
      </div>
    </motion.div>
  );
}

