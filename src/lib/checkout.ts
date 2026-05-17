'use client';

import { loadStripe, type Stripe } from '@stripe/stripe-js';
import type { CartItem } from '@/types';

let stripePromise: Promise<Stripe | null> | null = null;

export function getStripe() {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if (!key) return null;
  if (!stripePromise) {
    stripePromise = loadStripe(key);
  }
  return stripePromise;
}

export type CheckoutPayload = {
  items: CartItem[];
  discountCode: string | null;
  discountPercent: number;
  customer: {
    email: string;
    name: string;
    address: string;
    suburb: string;
    state: string;
    postcode: string;
    country: string;
  };
  successUrl: string;
  cancelUrl: string;
};

export async function createStripeCheckout(payload: CheckoutPayload) {
  const endpoint = process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_ENDPOINT;
  if (!endpoint) {
    throw new Error(
      'Stripe checkout endpoint is not configured. Set NEXT_PUBLIC_STRIPE_CHECKOUT_ENDPOINT.'
    );
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Checkout API failed (${res.status}): ${text || 'unknown error'}`);
  }
  const data = (await res.json()) as { url?: string; sessionId?: string };
  return data;
}
