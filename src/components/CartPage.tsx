'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart, cartTotals } from '@/lib/cartStore';
import { formatPrice } from '@/lib/utils';

export const CartPage = () => {
  const items = useCart((s) => s.items);
  const discountPercent = useCart((s) => s.discountPercent);
  const discountCode = useCart((s) => s.discountCode);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const applyDiscount = useCart((s) => s.applyDiscount);
  const removeDiscount = useCart((s) => s.removeDiscount);

  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const { subtotal, discount, shipping, total, itemCount } = cartTotals(
    items,
    discountPercent,
    10
  );

  if (items.length === 0) {
    return (
      <div className="py-32 text-center">
        <div className="container-luxe max-w-xl">
          <h2 className="heading-section">Your bag is empty</h2>
          <p className="body-lg mt-5">
            Begin your ritual. Three oils, intentionally formulated, await.
          </p>
          <Link href="/shop" className="btn-primary mt-10">
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            Discover the Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-luxe py-20 grid lg:grid-cols-[1.5fr_1fr] gap-12">
      <div>
        <div className="flex items-end justify-between mb-10">
          <h2 className="heading-section">
            Your bag <span className="text-ink-300 text-2xl ml-2">· {itemCount}</span>
          </h2>
        </div>

        <ul className="divide-y divide-cream-200 border-y border-cream-200">
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <motion.li
                key={item.slug}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 80 }}
                className="py-8 flex gap-6"
              >
                <div
                  className="relative h-32 w-24 shrink-0 rounded-2xl overflow-hidden"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${item.accent}55 0%, transparent 70%), linear-gradient(180deg, #F9F4EC 0%, #EFE0CB 100%)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="h-20 w-11 rounded-xl"
                      style={{
                        background: `linear-gradient(180deg, ${item.accent} 0%, ${item.accent}aa 60%, ${item.accent} 100%)`,
                      }}
                    >
                      <div className="h-2 w-4 mx-auto rounded-t bg-ink-500/60" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href={`/product/${item.slug}`}
                        className="font-display text-2xl text-ink-500 hover:text-gold-600"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs uppercase tracking-widest text-ink-300 mt-1">
                        {item.volume}
                      </p>
                    </div>
                    <p className="font-display text-xl text-ink-500">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 rounded-full border border-cream-200">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        className="inline-flex h-9 w-9 items-center justify-center text-ink-400 hover:text-gold-600"
                        aria-label="Decrease"
                      >
                        <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        className="inline-flex h-9 w-9 items-center justify-center text-ink-400 hover:text-gold-600"
                        aria-label="Increase"
                      >
                        <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.slug)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink-300 hover:text-gold-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                      Remove
                    </button>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      <aside className="lg:sticky lg:top-28 self-start space-y-6">
        <div className="card-luxe p-8 space-y-5">
          <h3 className="font-display text-2xl text-ink-500">Order summary</h3>
          <div className="divider-gold" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-ink-300">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            {discountPercent > 0 && (
              <div className="flex justify-between text-gold-600">
                <span>Discount ({discountCode} · {discountPercent}%)</span>
                <span>−{formatPrice(discount)}</span>
              </div>
            )}
            <div className="flex justify-between text-ink-300">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Complimentary' : formatPrice(shipping)}</span>
            </div>
          </div>
          <div className="divider-gold" />
          <div className="flex justify-between items-baseline">
            <span className="font-display text-xl text-ink-500">Total</span>
            <span className="font-display text-3xl text-ink-500">
              {formatPrice(total)}
            </span>
          </div>

          <Link href="/checkout" className="btn-primary w-full">
            Begin Checkout
          </Link>
          <Link
            href="/shop"
            className="block text-center text-xs uppercase tracking-widest text-ink-300 hover:text-gold-600"
          >
            Continue shopping
          </Link>
        </div>

        <div className="card-luxe p-8 space-y-4">
          <div className="flex items-center gap-2 text-[0.72rem] uppercase tracking-widest-2 text-gold-500">
            <Tag className="h-3.5 w-3.5" strokeWidth={1.5} />
            Have a code?
          </div>
          {discountCode ? (
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm">
                <span className="font-medium text-ink-500">{discountCode}</span>
                <span className="text-ink-300"> · {discountPercent}% off</span>
              </span>
              <button
                type="button"
                onClick={removeDiscount}
                className="text-xs uppercase tracking-widest text-ink-300 hover:text-gold-600"
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="flex items-stretch gap-2">
              <input
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError('');
                }}
                placeholder="e.g. HELEN10"
                className="flex-1 rounded-full border border-cream-200 px-4 py-2.5 text-sm focus:border-gold-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  const ok = applyDiscount(code);
                  if (!ok) setError('That code is not valid.');
                  else setCode('');
                }}
                className="rounded-full bg-ink-500 text-cream-50 px-5 text-xs uppercase tracking-widest hover:bg-gold-600 transition-colors"
              >
                Apply
              </button>
            </div>
          )}
          {error && <p className="text-xs text-red-500">{error}</p>}
          <p className="text-xs text-ink-300">
            Try <span className="font-medium text-ink-500">HELEN10</span> or{' '}
            <span className="font-medium text-ink-500">WELCOME15</span>.
          </p>
        </div>

        <p className="text-xs text-ink-300 leading-relaxed">
          Taxes calculated at checkout. Shipping is complimentary on orders over A$120.
          Secure payments via Stripe and PayPal.
        </p>
      </aside>
    </div>
  );
};
