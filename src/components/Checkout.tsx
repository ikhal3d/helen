'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, ShieldCheck, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  PayPalScriptProvider,
  PayPalButtons,
} from '@paypal/react-paypal-js';
import { useCart, cartTotals } from '@/lib/cartStore';
import { formatPrice } from '@/lib/utils';
import { createStripeCheckout, getStripe } from '@/lib/checkout';

type Customer = {
  email: string;
  name: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
};

const initialCustomer: Customer = {
  email: '',
  name: '',
  address: '',
  suburb: '',
  state: '',
  postcode: '',
  country: 'Australia',
};

export const Checkout = () => {
  const router = useRouter();
  const items = useCart((s) => s.items);
  const discountPercent = useCart((s) => s.discountPercent);
  const discountCode = useCart((s) => s.discountCode);
  const clear = useCart((s) => s.clear);

  const [customer, setCustomer] = useState<Customer>(initialCustomer);
  const [method, setMethod] = useState<'stripe' | 'paypal'>('stripe');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totals = useMemo(
    () => cartTotals(items, discountPercent, 10),
    [items, discountPercent]
  );

  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test';
  const currency = process.env.NEXT_PUBLIC_CURRENCY || 'AUD';
  const stripeConfigured = Boolean(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY &&
      process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_ENDPOINT
  );

  const valid =
    customer.email.includes('@') &&
    customer.name.length > 1 &&
    customer.address.length > 1 &&
    customer.postcode.length >= 3;

  const onStripeCheckout = async () => {
    if (!valid) {
      setError('Please complete your shipping details.');
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
      const { url, sessionId } = await createStripeCheckout({
        items,
        discountCode,
        discountPercent,
        customer,
        successUrl: `${origin}${base}/order-confirmation/?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${origin}${base}/checkout/`,
      });
      if (url) {
        window.location.href = url;
        return;
      }
      if (sessionId) {
        const stripe = await getStripe();
        if (!stripe) throw new Error('Stripe.js failed to load.');
        const result = await stripe.redirectToCheckout({ sessionId });
        if (result.error) throw new Error(result.error.message);
        return;
      }
      throw new Error('Checkout response missing url or sessionId.');
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'Unable to start checkout. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container-luxe py-24 text-center max-w-xl">
        <h2 className="heading-section">Your bag is empty</h2>
        <p className="body-lg mt-5">
          Add an oil to your bag before continuing to checkout.
        </p>
        <Link href="/shop" className="btn-primary mt-10">
          Discover the Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container-luxe py-16 grid lg:grid-cols-[1.4fr_1fr] gap-12">
      <div>
        <h2 className="heading-section">Secure checkout</h2>
        <p className="body-lg mt-3 max-w-xl">
          A quiet, encrypted handover to our payment partners.
        </p>

        <div className="mt-10 space-y-8">
          <fieldset className="space-y-6">
            <legend className="eyebrow">Contact</legend>
            <label className="block">
              <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
                Email
              </span>
              <input
                type="email"
                required
                value={customer.email}
                onChange={(e) =>
                  setCustomer({ ...customer, email: e.target.value })
                }
                className="input-luxe mt-2"
                placeholder="charlotte@email.com"
              />
            </label>
          </fieldset>

          <fieldset className="space-y-6">
            <legend className="eyebrow">Shipping</legend>
            <label className="block">
              <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
                Full name
              </span>
              <input
                type="text"
                required
                value={customer.name}
                onChange={(e) =>
                  setCustomer({ ...customer, name: e.target.value })
                }
                className="input-luxe mt-2"
                placeholder="Charlotte Moreau"
              />
            </label>
            <label className="block">
              <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
                Address
              </span>
              <input
                type="text"
                required
                value={customer.address}
                onChange={(e) =>
                  setCustomer({ ...customer, address: e.target.value })
                }
                className="input-luxe mt-2"
                placeholder="42 Collins Street"
              />
            </label>
            <div className="grid sm:grid-cols-3 gap-6">
              <label className="block sm:col-span-2">
                <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
                  Suburb / City
                </span>
                <input
                  type="text"
                  required
                  value={customer.suburb}
                  onChange={(e) =>
                    setCustomer({ ...customer, suburb: e.target.value })
                  }
                  className="input-luxe mt-2"
                />
              </label>
              <label className="block">
                <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
                  Postcode
                </span>
                <input
                  type="text"
                  required
                  value={customer.postcode}
                  onChange={(e) =>
                    setCustomer({ ...customer, postcode: e.target.value })
                  }
                  className="input-luxe mt-2"
                />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
                  State / Region
                </span>
                <input
                  type="text"
                  value={customer.state}
                  onChange={(e) =>
                    setCustomer({ ...customer, state: e.target.value })
                  }
                  className="input-luxe mt-2"
                  placeholder="VIC"
                />
              </label>
              <label className="block">
                <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
                  Country
                </span>
                <select
                  value={customer.country}
                  onChange={(e) =>
                    setCustomer({ ...customer, country: e.target.value })
                  }
                  className="input-luxe mt-2"
                >
                  <option>Australia</option>
                  <option>New Zealand</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Singapore</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="eyebrow">Payment method</legend>
            <div className="grid sm:grid-cols-2 gap-3">
              {([
                { id: 'stripe', label: 'Card · Stripe', sub: 'Visa, Mastercard, Amex, Apple Pay' },
                { id: 'paypal', label: 'PayPal', sub: 'Pay with your PayPal account' },
              ] as const).map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMethod(m.id)}
                  className={`relative text-left rounded-2xl border p-5 transition-all duration-300 ${
                    method === m.id
                      ? 'border-gold-400 bg-gold-50 shadow-soft'
                      : 'border-cream-200 hover:border-gold-200'
                  }`}
                >
                  <span className="block font-display text-xl text-ink-500">
                    {m.label}
                  </span>
                  <span className="block text-xs text-ink-300 mt-1">{m.sub}</span>
                  {method === m.id && (
                    <motion.span
                      layoutId="pay-method"
                      className="absolute top-3 right-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-gradient text-cream-50 text-[0.6rem]"
                    >
                      ✓
                    </motion.span>
                  )}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex items-start gap-3 p-4 rounded-2xl border border-red-200 bg-red-50/60 text-sm text-red-700"
          >
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" strokeWidth={1.5} />
            <p>{error}</p>
          </motion.div>
        )}

        <div className="mt-10">
          {method === 'stripe' ? (
            <button
              type="button"
              onClick={onStripeCheckout}
              disabled={submitting}
              className="btn-primary w-full sm:w-auto disabled:opacity-60"
            >
              <Lock className="h-4 w-4" strokeWidth={1.5} />
              {submitting
                ? 'Redirecting to Stripe…'
                : `Pay ${formatPrice(totals.total, currency)} with Stripe`}
            </button>
          ) : (
            <div>
              <PayPalScriptProvider
                options={{
                  clientId: paypalClientId,
                  currency,
                  intent: 'capture',
                }}
              >
                <PayPalButtons
                  style={{
                    layout: 'horizontal',
                    color: 'gold',
                    shape: 'pill',
                    label: 'pay',
                    tagline: false,
                  }}
                  disabled={!valid || submitting}
                  createOrder={(_, actions) =>
                    actions.order.create({
                      intent: 'CAPTURE',
                      purchase_units: [
                        {
                          amount: {
                            currency_code: currency,
                            value: totals.total.toFixed(2),
                          },
                          description: items
                            .map((i) => `${i.name} × ${i.quantity}`)
                            .join(', '),
                        },
                      ],
                    })
                  }
                  onApprove={async (_, actions) => {
                    if (!actions.order) return;
                    setSubmitting(true);
                    try {
                      const details = await actions.order.capture();
                      const orderId = details.id ?? `HLN-${Date.now()}`;
                      clear();
                      router.push(
                        `/order-confirmation/?provider=paypal&order=${orderId}`
                      );
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                  onError={() =>
                    setError('PayPal could not complete the transaction.')
                  }
                />
              </PayPalScriptProvider>
              {!valid && (
                <p className="text-xs text-ink-300 mt-3">
                  Complete shipping details to enable PayPal.
                </p>
              )}
            </div>
          )}
        </div>

        {!stripeConfigured && method === 'stripe' && (
          <div className="mt-4 text-xs text-ink-300 max-w-md leading-relaxed">
            <ShieldCheck className="inline h-3.5 w-3.5 mr-1 text-gold-500" />
            Stripe is in placeholder mode. Set{' '}
            <code className="px-1 bg-cream-100 rounded">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code>{' '}
            and{' '}
            <code className="px-1 bg-cream-100 rounded">
              NEXT_PUBLIC_STRIPE_CHECKOUT_ENDPOINT
            </code>{' '}
            in your environment to enable real payments.
          </div>
        )}
      </div>

      <aside className="lg:sticky lg:top-28 self-start">
        <div className="card-luxe p-8">
          <h3 className="font-display text-2xl text-ink-500">Your order</h3>
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li key={item.slug} className="flex justify-between gap-4 text-sm">
                <div>
                  <p className="font-medium text-ink-500">{item.name}</p>
                  <p className="text-xs uppercase tracking-widest text-ink-300">
                    {item.volume} · qty {item.quantity}
                  </p>
                </div>
                <p className="text-ink-500">
                  {formatPrice(item.price * item.quantity, currency)}
                </p>
              </li>
            ))}
          </ul>

          <div className="divider-gold my-6" />

          <dl className="space-y-2 text-sm">
            <div className="flex justify-between text-ink-300">
              <dt>Subtotal</dt>
              <dd>{formatPrice(totals.subtotal, currency)}</dd>
            </div>
            {totals.discount > 0 && (
              <div className="flex justify-between text-gold-600">
                <dt>Discount ({discountCode} · {discountPercent}%)</dt>
                <dd>−{formatPrice(totals.discount, currency)}</dd>
              </div>
            )}
            <div className="flex justify-between text-ink-300">
              <dt>Shipping</dt>
              <dd>
                {totals.shipping === 0
                  ? 'Complimentary'
                  : formatPrice(totals.shipping, currency)}
              </dd>
            </div>
          </dl>
          <div className="divider-gold my-6" />
          <div className="flex justify-between items-baseline">
            <span className="font-display text-xl text-ink-500">Total</span>
            <span className="font-display text-3xl text-ink-500">
              {formatPrice(totals.total, currency)}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-ink-300">
            <Lock className="h-3.5 w-3.5 text-gold-500" strokeWidth={1.5} />
            Encrypted checkout · Powered by Stripe & PayPal
          </div>
        </div>
      </aside>
    </div>
  );
};
