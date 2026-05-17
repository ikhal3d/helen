'use client';

import { motion } from 'framer-motion';
import { benefitIcons } from '@/components/icons';

const benefits = [
  {
    icon: 'leaf' as const,
    title: 'Purely Botanical',
    text: 'Twelve oils or fewer. No fragrance, fillers, alcohols or synthetic preservatives. Ever.',
  },
  {
    icon: 'shield' as const,
    title: 'Science-Backed',
    text: 'Formulated by a biomedical scientist. Each ingredient earns its place through peer-reviewed evidence.',
  },
  {
    icon: 'drop' as const,
    title: 'Cold-Pressed',
    text: 'Never heated. The full vitamin, antioxidant and fatty-acid profile of each plant remains intact.',
  },
  {
    icon: 'heart' as const,
    title: 'Skin-Kind',
    text: 'Dermatologist-tested for sensitivity. Suitable for reactive, acne-prone and rosacea-prone skin.',
  },
  {
    icon: 'sparkle' as const,
    title: 'Multi-Use Rituals',
    text: 'One oil for the face. One for the lengths. One for the beard. All you actually need.',
  },
  {
    icon: 'sun' as const,
    title: 'Ethically Made',
    text: 'Small-batch, vegan, cruelty-free, and produced with carbon-neutral logistics.',
  },
];

export const Benefits = () => (
  <section className="relative py-28 md:py-40">
    <div className="container-luxe">
      <div className="max-w-3xl mx-auto text-center">
        <span className="eyebrow justify-center">Why Helen</span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="heading-section mt-5 text-balance"
        >
          Skincare with{' '}
          <span className="italic text-gold-600">nothing to hide.</span>
        </motion.h2>
        <p className="body-lg mt-6 max-w-xl mx-auto text-pretty">
          Six promises we make on every bottle. Six reasons our customers come
          back, refill after refill.
        </p>
      </div>

      <div className="mt-20 grid gap-px bg-gold-100/50 rounded-3xl overflow-hidden border border-gold-100/60 lg:grid-cols-3 md:grid-cols-2">
        {benefits.map((b, i) => {
          const Icon = benefitIcons[b.icon];
          return (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative p-10 bg-cream-50 hover:bg-cream-100 transition-colors duration-500"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-50 text-gold-600 group-hover:bg-gold-gradient group-hover:text-cream-50 transition-all duration-500">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl text-ink-500 mt-6">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{b.text}</p>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);
