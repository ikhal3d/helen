'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { cn } from '@/lib/utils';

type Filter = 'all' | 'face' | 'hair' | 'beard';
type Sort = 'featured' | 'price-asc' | 'price-desc';

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All Oils' },
  { value: 'face', label: 'Face' },
  { value: 'hair', label: 'Hair' },
  { value: 'beard', label: 'Beard' },
];

const sorts: { value: Sort; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price · Low to High' },
  { value: 'price-desc', label: 'Price · High to Low' },
];

export const ShopGrid = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<Sort>('featured');

  const visible = useMemo(() => {
    let list = filter === 'all' ? products : products.filter((p) => p.category === filter);
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [filter, sort]);

  return (
    <>
      <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-cream-200">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={cn(
                'relative inline-flex items-center rounded-full px-5 py-2.5 text-[0.72rem] uppercase tracking-widest-2 transition-all duration-300',
                filter === f.value
                  ? 'bg-ink-500 text-cream-50'
                  : 'border border-cream-200 text-ink-400 hover:border-gold-300 hover:text-gold-600'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <label className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-ink-300">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full border border-cream-200 bg-cream-50 px-4 py-2 text-ink-500 focus:border-gold-400 focus:outline-none"
          >
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <motion.div
        key={`${filter}-${sort}`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-ink-300">
          No oils match that filter. Try another.
        </p>
      )}
    </>
  );
};
