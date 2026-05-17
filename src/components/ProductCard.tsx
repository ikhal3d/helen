'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import type { Product } from '@/types';
import { useCart } from '@/lib/cartStore';
import { formatPrice } from '@/lib/utils';
import { ProductBottle } from '@/components/ProductBottle';

type ProductCardProps = {
  product: Product;
  index?: number;
};

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const addItem = useCart((s) => s.addItem);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group card-luxe"
    >
      <Link
        href={`/product/${product.slug}`}
        className="block relative aspect-[4/5] overflow-hidden"
        style={{
          background: `linear-gradient(180deg, #FDFBF7 0%, ${product.hero.accent}22 70%, ${product.hero.accent}33 100%)`,
        }}
      >
        <div
          className="absolute inset-0 product-glow opacity-50 group-hover:opacity-90 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 60%, ${product.hero.accent}66 0%, transparent 60%)`,
          }}
        />

        <div className="absolute inset-0 flex items-end justify-center pb-6 transition-transform duration-700 group-hover:-translate-y-4">
          <div className="scale-90 group-hover:scale-100 transition-transform duration-700">
            <ProductBottle
              accent={product.hero.accent}
              deepAccent={product.hero.deepAccent}
              size={220}
              label={product.name}
            />
          </div>
        </div>

        <div className="absolute top-5 left-5 flex flex-wrap gap-1.5">
          {product.compareAtPrice && (
            <span className="rounded-full bg-gold-gradient px-3 py-1 text-[0.6rem] uppercase tracking-widest text-cream-50 shadow-gold">
              Featured
            </span>
          )}
          <span className="rounded-full glass px-3 py-1 text-[0.6rem] uppercase tracking-widest text-ink-500">
            {product.volume}
          </span>
        </div>

        <span className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/80 text-ink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </span>
      </Link>

      <div className="px-6 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-widest-2 text-gold-500 mb-1">
              {product.category === 'face'
                ? 'For the Face'
                : product.category === 'hair'
                  ? 'For the Hair'
                  : 'For the Beard'}
            </p>
            <Link
              href={`/product/${product.slug}`}
              className="font-display text-2xl text-ink-500 leading-tight hover:text-gold-600 transition-colors"
            >
              {product.name}
            </Link>
          </div>
          <div className="text-right">
            {product.compareAtPrice && (
              <p className="text-xs text-ink-200 line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            )}
            <p className="font-display text-xl text-ink-500">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-300 line-clamp-2">
          {product.tagline}
        </p>

        <button
          type="button"
          onClick={() => addItem(product)}
          className="mt-6 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-widest-2 text-ink-500 hover:text-gold-600 transition-colors"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-500/15 group-hover:border-gold-400 group-hover:bg-gold-50 transition-all">
            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
          Add to Bag
        </button>
      </div>
    </motion.article>
  );
};
