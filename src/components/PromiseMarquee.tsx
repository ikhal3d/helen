'use client';

import { motion } from 'framer-motion';

const promises = [
  'Cold-pressed botanicals',
  'Cruelty-free always',
  'Science-led formulations',
  'Made in small batches',
  'Vegan & ethically sourced',
  '100% natural, never synthetic',
];

export const PromiseMarquee = () => (
  <section className="relative overflow-hidden py-6 border-y border-cream-200 bg-cream-100/60">
    <motion.div
      className="flex items-center gap-10 whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    >
      {[...promises, ...promises, ...promises].map((p, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-10 font-display italic text-2xl text-ink-400"
        >
          {p}
          <span className="inline-block h-1 w-1 rounded-full bg-gold-400" />
        </span>
      ))}
    </motion.div>
  </section>
);
