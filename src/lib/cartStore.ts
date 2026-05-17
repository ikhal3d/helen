'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { CartItem, Product } from '@/types';

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  discountCode: string | null;
  discountPercent: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  applyDiscount: (code: string) => boolean;
  removeDiscount: () => void;
};

const DISCOUNTS: Record<string, number> = {
  ODETTE10: 10,
  WELCOME15: 15,
  RADIANCE: 20,
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      discountCode: null,
      discountPercent: 0,

      addItem: (product, quantity = 1) => {
        const existing = get().items.find((i) => i.slug === product.slug);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.slug === product.slug
                ? { ...i, quantity: i.quantity + quantity }
                : i
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [
              ...get().items,
              {
                slug: product.slug,
                name: product.name,
                price: product.price,
                volume: product.volume,
                quantity,
                accent: product.hero.accent,
              },
            ],
            isOpen: true,
          });
        }
      },

      removeItem: (slug) =>
        set({ items: get().items.filter((i) => i.slug !== slug) }),

      updateQuantity: (slug, quantity) => {
        if (quantity <= 0) {
          set({ items: get().items.filter((i) => i.slug !== slug) });
          return;
        }
        set({
          items: get().items.map((i) =>
            i.slug === slug ? { ...i, quantity } : i
          ),
        });
      },

      clear: () =>
        set({ items: [], discountCode: null, discountPercent: 0 }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set({ isOpen: !get().isOpen }),

      applyDiscount: (code) => {
        const trimmed = code.trim().toUpperCase();
        const percent = DISCOUNTS[trimmed];
        if (percent) {
          set({ discountCode: trimmed, discountPercent: percent });
          return true;
        }
        set({ discountCode: null, discountPercent: 0 });
        return false;
      },

      removeDiscount: () =>
        set({ discountCode: null, discountPercent: 0 }),
    }),
    {
      name: 'odette-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function cartTotals(
  items: CartItem[],
  discountPercent = 0,
  shippingCents = 0
) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = (subtotal * discountPercent) / 100;
  const shipping = subtotal >= 120 ? 0 : shippingCents;
  const total = Math.max(0, subtotal - discount + shipping);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { subtotal, discount, shipping, total, itemCount };
}
