'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, Star, Check } from 'lucide-react';
import type { Product } from '@/types';
import { useCart } from '@/lib/cartStore';
import { formatPrice } from '@/lib/utils';
import { ProductBottle } from '@/components/ProductBottle';
import { ProductCard } from '@/components/ProductCard';
import { benefitIcons } from '@/components/icons';
import { FloatingLeaf, GoldOrb } from '@/components/Botanicals';
import { Particles } from '@/components/Particles';

type Props = {
  product: Product;
  related: Product[];
};

export const ProductDetail = ({ product, related }: Props) => {
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<'story' | 'ingredients' | 'how'>('story');
  const addItem = useCart((s) => s.addItem);

  const avgRating =
    product.reviews.reduce((acc, r) => acc + r.rating, 0) /
    Math.max(product.reviews.length, 1);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40">
        <Particles density={28} />
        <GoldOrb
          size={600}
          top="-200px"
          left="-200px"
          opacity={0.35}
        />
        <GoldOrb
          size={500}
          bottom="-160px"
          right="-180px"
          opacity={0.3}
          delay={2}
        />
        <FloatingLeaf variant={1} top="8%" left="5%" size={180} rotate={-15} opacity={0.32} />
        <FloatingLeaf variant={4} bottom="12%" right="6%" size={170} rotate={18} opacity={0.3} delay={1.5} />

        <div className="container-luxe relative">
          <nav className="text-xs uppercase tracking-widest text-ink-300 mb-12 flex items-center gap-2">
            <Link href="/" className="hover:text-gold-600">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-gold-600">Shop</Link>
            <span>/</span>
            <span className="text-ink-500">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              <div
                className="absolute inset-0 rounded-full -m-8 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${product.hero.accent}55 0%, transparent 70%)`,
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 -m-4 rounded-full border border-gold-200/40"
              />
              <ProductBottle
                accent={product.hero.accent}
                deepAccent={product.hero.deepAccent}
                size={360}
                label={product.name}
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-widest-2 text-gold-500">
                  <span>{product.category === 'face' ? 'For the Face' : product.category === 'hair' ? 'For the Hair' : 'For the Beard'}</span>
                  <span className="h-px w-8 bg-gold-300" />
                  <span>{product.volume}</span>
                </div>
                <h1 className="heading-hero mt-4 text-balance">{product.name}</h1>
                <p className="font-display italic text-2xl text-ink-400 mt-3">
                  {product.tagline}
                </p>

                <div className="mt-5 flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1 text-gold-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold-400 text-gold-400"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                  <span className="text-ink-300">
                    {avgRating.toFixed(1)} · {product.reviews.length} reviews
                  </span>
                </div>

                <div className="mt-8 flex items-baseline gap-4">
                  <span className="font-display text-4xl text-ink-500">
                    {formatPrice(product.price)}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-ink-300 line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                </div>

                <p className="mt-6 body-lg max-w-xl text-pretty">
                  {product.shortDescription}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="inline-flex items-center gap-1 rounded-full border border-cream-200 px-2 py-1.5">
                    <button
                      type="button"
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="inline-flex h-10 w-10 items-center justify-center text-ink-400 hover:text-gold-600"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <span className="w-10 text-center font-medium">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty(qty + 1)}
                      className="inline-flex h-10 w-10 items-center justify-center text-ink-400 hover:text-gold-600"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => addItem(product, qty)}
                    className="btn-primary flex-1 sm:flex-initial"
                  >
                    <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                    Add to Bag · {formatPrice(product.price * qty)}
                  </button>
                </div>

                <ul className="mt-10 flex flex-wrap gap-2">
                  {product.badges.map((b) => (
                    <li
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold-100 bg-cream-50 px-3 py-1.5 text-[0.7rem] uppercase tracking-widest text-ink-400"
                    >
                      <Check className="h-3 w-3 text-gold-500" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-xs uppercase tracking-widest text-ink-300">
                  Free shipping on orders over A$120 · Carbon-neutral delivery
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-cream-100/60">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <span className="eyebrow">Why it works</span>
            <h2 className="heading-section mt-5 text-balance">
              Every drop, chosen on purpose.
            </h2>
            <p className="body-lg mt-5">{product.longDescription}</p>
          </div>

          <div className="mt-16 grid gap-px bg-gold-100/50 rounded-3xl overflow-hidden border border-gold-100/60 md:grid-cols-2 lg:grid-cols-4">
            {product.benefits.map((b, i) => {
              const Icon = benefitIcons[b.icon];
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="p-8 bg-cream-50"
                >
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${product.hero.accent}66 0%, ${product.hero.accent}22 100%)`,
                      color: product.hero.deepAccent,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl text-ink-500 mt-5">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-300 mt-2">{b.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container-luxe">
          <div className="flex items-center gap-6 border-b border-cream-200 overflow-x-auto">
            {[
              { id: 'story' as const, label: 'The Formula' },
              { id: 'ingredients' as const, label: 'Ingredients' },
              { id: 'how' as const, label: 'How to Use' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`relative py-4 text-sm uppercase tracking-widest-2 transition-colors ${
                  tab === t.id ? 'text-ink-500' : 'text-ink-300 hover:text-ink-500'
                }`}
              >
                {t.label}
                {tab === t.id && (
                  <motion.span
                    layoutId="product-tab"
                    className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mt-12">
            {tab === 'story' && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12"
              >
                <div className="body-lg max-w-xl">
                  <p>{product.longDescription}</p>
                  <p className="mt-4">
                    Helen formulates from a biomedical-science background, with
                    every botanical chosen for its peer-reviewed evidence.
                    Nothing in the bottle is filler — and nothing is there
                    because the marketing team asked for it.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden border border-cream-200 aspect-[4/3] relative">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 70% 30%, ${product.hero.accent}55 0%, transparent 60%), linear-gradient(180deg, #F9F4EC 0%, ${product.hero.accent}22 100%)`,
                    }}
                  />
                  <ProductBottle
                    accent={product.hero.accent}
                    deepAccent={product.hero.deepAccent}
                    size={260}
                    label={product.name}
                  />
                </div>
              </motion.div>
            )}

            {tab === 'ingredients' && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-x-12 gap-y-10"
              >
                {product.ingredients.map((ing) => (
                  <div
                    key={ing.name}
                    className="flex gap-5 border-b border-cream-200 pb-8"
                  >
                    <span
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-cream-50 font-display text-xl"
                      style={{
                        background: `linear-gradient(135deg, ${product.hero.accent}, ${product.hero.deepAccent})`,
                      }}
                    >
                      {ing.name.charAt(0)}
                    </span>
                    <div>
                      <h4 className="font-display text-xl text-ink-500">{ing.name}</h4>
                      <p className="text-xs italic text-gold-500 mt-1">{ing.latin}</p>
                      <p className="text-sm leading-relaxed text-ink-300 mt-3">
                        {ing.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {tab === 'how' && (
              <motion.ol
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 max-w-4xl"
              >
                {product.howToUse.map((step, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="font-display gold-text text-4xl leading-none">
                      0{i + 1}
                    </span>
                    <p className="body-lg pt-1">{step}</p>
                  </li>
                ))}
              </motion.ol>
            )}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-cream-100/60">
        <div className="container-luxe">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="eyebrow">Reviews</span>
              <h2 className="heading-section mt-5">What customers say.</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-400 text-gold-400"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-sm text-ink-400">
                {avgRating.toFixed(1)} average · {product.reviews.length} reviews
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {product.reviews.map((r, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="card-luxe p-8"
              >
                <div className="flex items-center gap-1 text-gold-400">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star
                      key={k}
                      className="h-3.5 w-3.5 fill-gold-400 text-gold-400"
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <h4 className="font-display text-xl text-ink-500 mt-4">{r.title}</h4>
                <blockquote className="mt-3 text-sm leading-relaxed text-ink-300">
                  “{r.body}”
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-widest text-ink-300">
                  {r.name} · {r.location}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative py-24 md:py-32">
          <div className="container-luxe">
            <div className="max-w-3xl">
              <span className="eyebrow">Pairs Beautifully With</span>
              <h2 className="heading-section mt-5">Complete the ritual.</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
