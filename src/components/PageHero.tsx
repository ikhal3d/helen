'use client';

import { motion } from 'framer-motion';
import { FloatingLeaf, GoldOrb } from '@/components/Botanicals';
import { Particles } from '@/components/Particles';

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
};

export const PageHero = ({ eyebrow, title, subtitle }: PageHeroProps) => (
  <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32 bg-nude-fade">
    <Particles density={28} />
    <GoldOrb size={520} top="-180px" left="-150px" opacity={0.4} />
    <GoldOrb size={460} bottom="-160px" right="-130px" opacity={0.32} delay={3} />
    <FloatingLeaf variant={1} top="10%" left="6%" size={170} rotate={-15} opacity={0.35} />
    <FloatingLeaf variant={4} bottom="10%" right="8%" size={180} rotate={20} opacity={0.3} delay={2} />

    <div className="container-luxe relative text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="eyebrow justify-center"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="heading-hero mt-6 max-w-4xl mx-auto text-balance"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="body-lg mt-7 max-w-2xl mx-auto text-pretty"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);
