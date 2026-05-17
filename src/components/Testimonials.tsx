'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { FloatingLeaf } from '@/components/Botanicals';

const reviews = [
  {
    quote:
      'Helen has done what three dermatologists could not. My skin is genuinely calm for the first time in a decade.',
    name: 'Sophia A.',
    role: 'Verified buyer · Face Oil',
    accent: '#E5C779',
  },
  {
    quote:
      'I have used every premium oil on the market. This is the only one I have ever bought twice.',
    name: 'Liam P.',
    role: 'Verified buyer · Beard Oil',
    accent: '#C9A77F',
  },
  {
    quote:
      'My hair has visible regrowth at the temples. I almost cried at the bathroom mirror.',
    name: 'Mira S.',
    role: 'Verified buyer · Hair Oil',
    accent: '#A5B587',
  },
  {
    quote:
      'It feels like an heirloom product. The bottle alone earns its place on the counter.',
    name: 'Hannah J.',
    role: 'Verified buyer · Face Oil',
    accent: '#E5C779',
  },
];

export const Testimonials = () => (
  <section className="relative py-28 md:py-40 overflow-hidden bg-forest-radial text-cream-100">
    <div className="absolute inset-0 grain" />
    <FloatingLeaf variant={1} top="6%" right="-3%" size={300} rotate={20} opacity={0.18} />
    <FloatingLeaf variant={4} bottom="6%" left="-3%" size={280} rotate={-12} opacity={0.16} delay={2} />

    <div className="container-luxe relative">
      <div className="max-w-3xl">
        <span className="eyebrow text-gold-200">Voices</span>
        <h2 className="heading-section mt-5 text-cream-50 text-balance">
          Worn,{' '}
          <span className="italic text-gold-200">refilled,</span> and{' '}
          <span className="italic text-gold-200">recommended.</span>
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {reviews.map((r, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: i * 0.1 }}
            className="relative p-10 rounded-3xl border border-gold-200/15 bg-forest-500/40 backdrop-blur-sm hover:border-gold-200/40 transition-colors duration-500"
          >
            <div
              className="absolute -top-6 -right-6 h-24 w-24 rounded-full blur-2xl"
              style={{
                background: `radial-gradient(circle, ${r.accent}66 0%, transparent 70%)`,
              }}
            />
            <div className="flex items-center gap-1 text-gold-200">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star
                  key={k}
                  className="h-4 w-4 fill-gold-200 text-gold-200"
                  strokeWidth={1}
                />
              ))}
            </div>
            <blockquote className="mt-6 font-display text-2xl md:text-3xl leading-snug text-cream-50 text-pretty">
              “{r.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span
                className="inline-block h-10 w-10 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${r.accent} 0%, ${r.accent}55 100%)`,
                }}
              />
              <div>
                <p className="text-sm font-medium text-cream-50">{r.name}</p>
                <p className="text-xs uppercase tracking-widest text-gold-200/80">
                  {r.role}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
