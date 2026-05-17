'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check, Mail, Package } from 'lucide-react';
import { useCart } from '@/lib/cartStore';

export const OrderConfirmation = () => {
  const params = useSearchParams();
  const clear = useCart((s) => s.clear);
  const [orderId, setOrderId] = useState<string>('');

  useEffect(() => {
    const session = params.get('session_id');
    const order = params.get('order');
    setOrderId(order || session || `HLN-${Date.now()}`);
    clear();
  }, [clear, params]);

  return (
    <div className="container-luxe py-24 max-w-3xl text-center">
      <motion.span
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient text-cream-50 shadow-gold mx-auto"
      >
        <Check className="h-8 w-8" strokeWidth={1.5} />
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="heading-section mt-10 text-balance"
      >
        Thank you. Your ritual is on its way.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 1 }}
        className="body-lg mt-6"
      >
        We have received your order and will hand-pack it from the Melbourne
        studio within 48 hours. A confirmation email with your tracking details
        will arrive shortly.
      </motion.p>

      {orderId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-cream-100 px-6 py-3 text-sm text-ink-400"
        >
          <Package className="h-4 w-4 text-gold-500" strokeWidth={1.5} />
          Order reference{' '}
          <span className="font-medium text-ink-500">{orderId}</span>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 1 }}
        className="mt-14 grid sm:grid-cols-2 gap-6 text-left"
      >
        <div className="card-luxe p-8">
          <Mail className="h-5 w-5 text-gold-500" strokeWidth={1.5} />
          <h3 className="font-display text-xl text-ink-500 mt-4">
            Watch your inbox
          </h3>
          <p className="text-sm leading-relaxed text-ink-300 mt-2">
            Your order confirmation and tracking link will arrive shortly. If you
            do not see it within an hour, please check your junk folder.
          </p>
        </div>
        <div className="card-luxe p-8">
          <Package className="h-5 w-5 text-gold-500" strokeWidth={1.5} />
          <h3 className="font-display text-xl text-ink-500 mt-4">
            Hand-packed in Melbourne
          </h3>
          <p className="text-sm leading-relaxed text-ink-300 mt-2">
            Your oils are bottled to order from our latest small batch. Carbon-neutral
            shipping in protective glass.
          </p>
        </div>
      </motion.div>

      <div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/shop" className="btn-outline">
          Continue browsing
        </Link>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};
