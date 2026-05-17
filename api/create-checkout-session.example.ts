/**
 * ============================================================
 * Stripe Checkout — Serverless Function (Vercel / Netlify shape)
 * ============================================================
 *
 * This file is an *example*. It is NOT bundled with the static
 * GitHub Pages build (the site is exported with `next export`).
 *
 * Deploy this function separately to any provider that runs
 * Node.js (Vercel, Netlify, AWS Lambda, Cloudflare Workers with
 * the Stripe Workers SDK, etc.), then point the front-end at it
 * via `NEXT_PUBLIC_STRIPE_CHECKOUT_ENDPOINT`.
 *
 * Required environment variables on the serverless host:
 *   STRIPE_SECRET_KEY            sk_live_… or sk_test_…
 *   ALLOWED_ORIGIN               https://yourdomain.com
 *   AUSTRALIA_SHIPPING_CENTS     1000   (A$10)
 *   FREE_SHIPPING_THRESHOLD_CENTS 12000 (A$120)
 *
 * The endpoint accepts a POST body with the shape:
 *   {
 *     items:            CartItem[],
 *     discountCode:     string | null,
 *     discountPercent:  number,
 *     customer:         { email, name, address, … },
 *     successUrl:       string,
 *     cancelUrl:        string
 *   }
 *
 * Returns: { url: string }   (Stripe Checkout hosted page)
 * ============================================================
 */

import Stripe from 'stripe';

type CartItem = {
  slug: string;
  name: string;
  price: number;
  volume: string;
  quantity: number;
};

type Payload = {
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

// ---- Vercel-style handler ------------------------------------------------
export default async function handler(req: any, res: any) {
  // CORS — GitHub Pages serves the site from a different origin.
  const origin = process.env.ALLOWED_ORIGIN ?? '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    res.status(500).json({ error: 'Stripe secret key is not configured.' });
    return;
  }

  const stripe = new Stripe(secretKey, { apiVersion: '2024-06-20' });

  try {
    const body: Payload =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const subtotalCents = body.items.reduce(
      (sum, item) => sum + Math.round(item.price * 100) * item.quantity,
      0
    );

    const freeShippingThreshold = Number(
      process.env.FREE_SHIPPING_THRESHOLD_CENTS ?? 12000
    );
    const flatShipping = Number(process.env.AUSTRALIA_SHIPPING_CENTS ?? 1000);
    const shippingCents =
      subtotalCents >= freeShippingThreshold ? 0 : flatShipping;

    // ----- Stripe coupon (optional) -----------------------------------------
    let discountId: string | undefined;
    if (body.discountCode && body.discountPercent > 0) {
      const coupon = await stripe.coupons.create({
        percent_off: body.discountPercent,
        duration: 'once',
        name: `Helen · ${body.discountCode}`,
      });
      discountId = coupon.id;
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: body.customer.email,
      success_url: body.successUrl,
      cancel_url: body.cancelUrl,
      shipping_address_collection: {
        allowed_countries: ['AU', 'NZ', 'US', 'GB', 'SG', 'CA'],
      },
      shipping_options:
        shippingCents === 0
          ? [
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: { amount: 0, currency: 'aud' },
                  display_name: 'Complimentary Australian shipping',
                },
              },
            ]
          : [
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: { amount: shippingCents, currency: 'aud' },
                  display_name: 'Australian standard delivery',
                  delivery_estimate: {
                    minimum: { unit: 'business_day', value: 3 },
                    maximum: { unit: 'business_day', value: 5 },
                  },
                },
              },
            ],
      line_items: body.items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: 'aud',
          unit_amount: Math.round(item.price * 100),
          product_data: {
            name: item.name,
            description: `${item.volume} · Helen Botanical Skincare`,
            metadata: { slug: item.slug },
          },
        },
      })),
      discounts: discountId ? [{ coupon: discountId }] : undefined,
      automatic_tax: { enabled: false },
      metadata: {
        customer_name: body.customer.name,
        customer_address: body.customer.address,
        customer_suburb: body.customer.suburb,
        customer_state: body.customer.state,
        customer_postcode: body.customer.postcode,
        customer_country: body.customer.country,
        discount_code: body.discountCode ?? '',
      },
    });

    res.status(200).json({ url: session.url, sessionId: session.id });
  } catch (e: any) {
    console.error('[stripe-checkout]', e);
    res
      .status(500)
      .json({ error: e?.message ?? 'Failed to create Stripe checkout session.' });
  }
}
