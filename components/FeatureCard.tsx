'use client';

import { motion } from 'framer-motion';

export default function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div className="card p-5" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}

