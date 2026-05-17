'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart, cartTotals } from '@/lib/cartStore';
import { formatPrice } from '@/lib/utils';
import { OilDrop } from '@/components/Botanicals';

export const CartDrawer = () => {
  const isOpen = useCart((s) => s.isOpen);
  const closeCart = useCart((s) => s.closeCart);
  const items = useCart((s) => s.items);
  const discountPercent = useCart((s) => s.discountPercent);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);

  const { subtotal, discount, itemCount } = cartTotals(items, discountPercent);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50"
        >
          <div
            className="absolute inset-0 bg-ink-500/40 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 right-0 w-full max-w-md bg-cream-50 shadow-luxe flex flex-col"
          >
            <header className="flex items-center justify-between px-6 h-20 border-b border-cream-200">
              <div>
                <p className="text-[0.7rem] uppercase tracking-widest-2 text-gold-500">
                  Your selection
                </p>
                <h2 className="font-display text-2xl text-ink-500">
                  Shopping Bag{itemCount > 0 ? ` · ${itemCount}` : ''}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-200 text-ink-500 hover:border-gold-300 hover:text-gold-600 transition-colors"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="relative">
                    <OilDrop size={70} />
                    <span className="absolute inset-0 rounded-full bg-gold-100 blur-3xl opacity-50 -z-10" />
                  </div>
                  <h3 className="font-display text-2xl text-ink-500 mt-6">
                    Your bag is empty
                  </h3>
                  <p className="text-sm text-ink-300 mt-2 max-w-xs">
                    Begin your ritual. Discover oils crafted with intention and
                    rooted in science.
                  </p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="btn-primary mt-8"
                  >
                    <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                    Explore the Shop
                  </Link>
                </div>
              ) : (
                <ul className="space-y-6">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.li
                        key={item.slug}
                        layout
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{ duration: 0.4 }}
                        className="flex gap-4"
                      >
                        <div
                          className="relative h-24 w-20 shrink-0 overflow-hidden rounded-2xl"
                          style={{
                            background: `radial-gradient(circle at 50% 30%, ${item.accent}55 0%, transparent 70%), linear-gradient(180deg, #F9F4EC 0%, #EFE0CB 100%)`,
                          }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className="h-14 w-9 rounded-full shadow-inner"
                              style={{
                                background: `linear-gradient(180deg, ${item.accent} 0%, ${item.accent}88 60%, ${item.accent} 100%)`,
                              }}
                            >
                              <div className="h-1.5 w-3 mx-auto rounded-t bg-ink-500/60" />
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between gap-2">
                            <div>
                              <Link
                                href={`/product/${item.slug}`}
                                onClick={closeCart}
                                className="font-display text-lg text-ink-500 leading-tight hover:text-gold-600 transition-colors"
                              >
                                {item.name}
                              </Link>
                              <p className="text-xs uppercase tracking-widest text-ink-200 mt-1">
                                {item.volume}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.slug)}
                              className="text-ink-200 hover:text-gold-600 transition-colors"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <div className="inline-flex items-center gap-1 rounded-full border border-cream-200">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.slug, item.quantity - 1)
                                }
                                className="inline-flex h-8 w-8 items-center justify-center text-ink-400 hover:text-gold-600 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3 w-3" strokeWidth={1.5} />
                              </button>
                              <span className="w-6 text-center text-sm">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.slug, item.quantity + 1)
                                }
                                className="inline-flex h-8 w-8 items-center justify-center text-ink-400 hover:text-gold-600 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3 w-3" strokeWidth={1.5} />
                              </button>
                            </div>
                            <p className="text-sm font-medium text-ink-500">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <footer className="border-t border-cream-200 px-6 py-6 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-ink-300">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-gold-600">
                      <span>Discount ({discountPercent}%)</span>
                      <span>−{formatPrice(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-ink-300">
                    <span>Shipping</span>
                    <span>{subtotal >= 120 ? 'Complimentary' : 'Calculated at checkout'}</span>
                  </div>
                </div>
                <div className="divider-gold" />
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-xl text-ink-500">Total</span>
                  <span className="font-display text-2xl text-ink-500">
                    {formatPrice(subtotal - discount)}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="btn-primary w-full"
                >
                  Begin Checkout
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block text-center text-xs uppercase tracking-widest text-ink-300 hover:text-gold-600 transition-colors"
                >
                  View full bag
                </Link>
              </footer>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
