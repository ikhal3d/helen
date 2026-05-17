'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Are Helen oils suitable for sensitive skin?',
    a: 'Yes. Every formula is fragrance-free and dermatologist-tested for sensitive, reactive, acne-prone and rosacea-prone skin. We use only food-grade, cold-pressed plant oils.',
  },
  {
    q: 'Where are the oils made?',
    a: 'In Melbourne, Australia. We hand-fill, hand-label and lab-test every batch in our small studio. Botanicals are sourced from partner farms across the Mediterranean, Morocco and Australia.',
  },
  {
    q: 'What is your shipping policy?',
    a: 'Standard delivery anywhere in Australia is A$10 and arrives within 3–5 business days. Orders over A$120 ship complimentary. International express delivery is available at checkout.',
  },
  {
    q: 'Can I return an opened bottle?',
    a: 'Yes. If a Helen oil does not work for your skin, write to us within 30 days and we will refund or exchange it — even if the bottle is opened. We test on humans, not animals.',
  },
  {
    q: 'How long do the oils last?',
    a: 'Each bottle has a 12-month shelf life from manufacture and 6 months after opening. Stored away from direct sunlight, the cold-pressed lipids stay stable thanks to the natural vitamin E content.',
  },
  {
    q: 'Are your oils pregnancy-safe?',
    a: 'The Face Oil and Hair Oil are formulated to be pregnancy-safe. For complete peace of mind, please share the full ingredient list with your obstetrician before use.',
  },
  {
    q: 'Do you offer wholesale or stockist accounts?',
    a: 'We work with a very small number of stockists. Write to wholesale@helenskincare.com with your store details and we will respond personally.',
  },
];

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-cream-200 border-y border-cream-200">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold-600"
            >
              <span className="font-display text-2xl text-ink-500">{f.q}</span>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream-200 text-ink-500">
                {isOpen ? (
                  <Minus className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="body-lg pb-8 max-w-3xl text-pretty">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
};
