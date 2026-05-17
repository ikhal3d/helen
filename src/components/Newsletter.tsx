'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { GoldOrb, FloatingLeaf } from '@/components/Botanicals';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle'
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <GoldOrb size={600} top="-200px" left="-200px" opacity={0.4} />
      <GoldOrb size={500} bottom="-180px" right="-180px" opacity={0.3} delay={3} />
      <FloatingLeaf variant={1} top="10%" left="10%" size={140} opacity={0.25} rotate={-20} />
      <FloatingLeaf variant={4} bottom="10%" right="14%" size={160} opacity={0.25} rotate={15} delay={2} />

      <div className="container-luxe relative">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cream-50 via-cream-100 to-nude-100 border border-gold-100/80 shadow-luxe p-10 md:p-20 grain">
          <div className="max-w-2xl">
            <span className="eyebrow">The House Letter</span>
            <h2 className="heading-section mt-5 text-balance">
              Join the inner circle
            </h2>
            <p className="body-lg mt-5 max-w-xl">
              Quiet emails, never noisy. Botanical rituals, formulation
              previews, and first access to new releases. A welcome gift waits
              for new members:{' '}
              <span className="text-gold-600 font-medium">15% off your first order.</span>
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-lg"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border border-cream-200 bg-cream-50/80 px-6 py-4 text-sm placeholder:text-ink-200 focus:border-gold-400 focus:outline-none transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'submitting'}
                className="btn-primary disabled:opacity-60"
              >
                {status === 'success' ? (
                  <>
                    <Check className="h-4 w-4" strokeWidth={1.5} />
                    Welcome
                  </>
                ) : status === 'submitting' ? (
                  'Sending…'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </>
                )}
              </motion.button>
            </form>
            <p className="mt-4 text-xs text-ink-300">
              By subscribing you agree to receive emails from Helen Skincare.
              Unsubscribe in one click, anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
