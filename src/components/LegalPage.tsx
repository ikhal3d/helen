'use client';

import { motion } from 'framer-motion';

type LegalPageProps = {
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

export const LegalPage = ({ title, updated, sections }: LegalPageProps) => (
  <div className="container-luxe py-20 max-w-3xl">
    <h1 className="heading-section">{title}</h1>
    <p className="text-xs uppercase tracking-widest text-ink-300 mt-3">
      Last updated · {updated}
    </p>

    <div className="mt-12 space-y-12">
      {sections.map((s, i) => (
        <motion.section
          key={s.heading}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
        >
          <h2 className="font-display text-2xl text-ink-500">{s.heading}</h2>
          <div className="space-y-4 mt-4 text-pretty">
            {s.body.map((p, k) => (
              <p key={k} className="body-lg">
                {p}
              </p>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  </div>
);
