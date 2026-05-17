'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { FloatingLeaf, GoldOrb } from '@/components/Botanicals';
import { Particles } from '@/components/Particles';
import { ProductBottle } from '@/components/ProductBottle';
import { products } from '@/lib/products';

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  const hero = products[0];

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-nude-fade"
    >
      <Particles density={50} />

      <GoldOrb size={700} top="-200px" left="-150px" opacity={0.45} />
      <GoldOrb size={520} bottom="-220px" right="-180px" opacity={0.35} delay={4} />

      <FloatingLeaf variant={1} top="6%" left="3%" size={210} rotate={-25} opacity={0.45} />
      <FloatingLeaf variant={4} top="55%" left="6%" size={170} rotate={18} opacity={0.4} delay={2} />
      <FloatingLeaf variant={2} bottom="8%" left="22%" size={220} rotate={-8} opacity={0.35} delay={1} />
      <FloatingLeaf variant={1} top="12%" right="6%" size={240} rotate={28} opacity={0.4} delay={3} />
      <FloatingLeaf variant={5} bottom="14%" right="9%" size={200} rotate={-15} opacity={0.45} delay={1.5} />
      <FloatingLeaf variant={4} top="40%" right="18%" size={140} rotate={6} opacity={0.3} delay={2.5} />

      <motion.div
        style={{ y, opacity }}
        className="container-luxe relative z-10 pt-32 pb-24 lg:pt-40"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="eyebrow justify-center lg:justify-start"
            >
              Pure · Botanical · Science-Backed
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="heading-hero mt-6 text-balance"
            >
              Skin tells the
              <br />
              truth.{' '}
              <span className="font-script text-gold-500 text-[1.3em] leading-none">
                Listen
              </span>{' '}
              to it.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="body-lg mt-7 max-w-xl mx-auto lg:mx-0"
            >
              Cold-pressed botanical oils for face, hair and beard. Crafted in
              small batches by a biomedical scientist who believes the most
              powerful skincare lives inside a single, well-chosen seed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link href="/shop" className="btn-primary">
                Discover the Collection
              </Link>
              <Link href="/about" className="btn-ghost">
                <span className="border-b border-ink-500/20 pb-0.5">
                  Meet Helen
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              className="mt-12 flex items-center gap-6 justify-center lg:justify-start text-sm text-ink-300"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-300 text-gold-300"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span>
                <span className="text-ink-500 font-medium">4.9</span> from 1,247 reviews
              </span>
            </motion.div>
          </div>

          <motion.div
            style={{ scale }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 -m-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-gold-200/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-gold-200/30"
              />
            </div>
            <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-gold-200/40 via-cream-100/0 to-sage-100/30 blur-2xl" />
            <ProductBottle
              accent={hero.hero.accent}
              deepAccent={hero.hero.deepAccent}
              size={340}
              label={hero.name}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="absolute bottom-6 inset-x-0 flex flex-col items-center text-ink-300"
      >
        <span className="text-[0.65rem] uppercase tracking-widest-2 mb-2">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
      </motion.div>
    </section>
  );
};
