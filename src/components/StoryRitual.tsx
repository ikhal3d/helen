'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FloatingLeaf, OilDrop } from '@/components/Botanicals';

const steps = [
  {
    n: '01',
    title: 'Harvested',
    text: 'Botanicals are sourced from small partner farms in the Mediterranean, Morocco and Australia, then chilled within hours of harvest to preserve every nutrient.',
  },
  {
    n: '02',
    title: 'Cold-Pressed',
    text: 'Never heated above 40°C. Pressure alone releases the oil, leaving the heat-sensitive vitamins, polyphenols and fatty acids fully intact.',
  },
  {
    n: '03',
    title: 'Lab-Verified',
    text: 'Every batch is tested in-house for purity, oxidation, heavy metals and microbial safety before it is bottled.',
  },
  {
    n: '04',
    title: 'Bottled by Hand',
    text: 'Filled into UV-protective glass, hand-labelled in Melbourne, and shipped in carbon-neutral packaging within 48 hours.',
  },
];

export const StoryRitual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden bg-cream-100/80"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <FloatingLeaf variant={1} top="-2%" left="-4%" size={300} rotate={-30} opacity={0.25} />
        <FloatingLeaf variant={4} bottom="-4%" right="-5%" size={320} rotate={30} opacity={0.2} delay={2} />
      </motion.div>

      <div className="container-luxe relative">
        <div className="max-w-3xl">
          <span className="eyebrow">The Ritual of Making</span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="heading-section mt-5 text-balance"
          >
            From{' '}
            <span className="font-script gold-text text-[1.3em] leading-none">
              seed
            </span>{' '}
            to skin, with intention.
          </motion.h2>
          <p className="body-lg mt-6 text-pretty max-w-2xl">
            Mass-market skincare is fast, hot and reactive. Ours is the
            opposite. The slow, methodical work behind a single bottle is what
            makes it work on your skin.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="relative p-8 rounded-3xl glass border border-gold-100/60 hover:border-gold-300 transition-colors duration-500"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl gold-text">{step.n}</span>
                <span className="h-px flex-1 bg-gold-200/60" />
                <OilDrop size={26} />
              </div>
              <h3 className="font-display text-2xl text-ink-500 mt-5">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-300 mt-3">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
