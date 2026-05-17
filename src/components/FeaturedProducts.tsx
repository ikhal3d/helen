'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

export const FeaturedProducts = () => (
  <section id="collection" className="relative py-28 md:py-40">
    <div className="container-luxe">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="eyebrow"
          >
            The Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="heading-section mt-5 text-balance"
          >
            Three oils. Endless rituals.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="body-lg mt-5 text-pretty"
          >
            Each formula is a quiet edit, never an excess. Twelve botanicals or
            fewer, cold-pressed, traceable to the farm. Designed to live on your
            shelf — and become the most-used thing on it.
          </motion.p>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-widest-2 text-ink-500 hover:text-gold-600 transition-colors self-start md:self-end"
        >
          View all oils
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);
