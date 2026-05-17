'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { BotanicalLeaf } from '@/components/Botanicals';

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-forest-radial text-cream-100 mt-32">
      <div className="absolute inset-0 grain" />
      <motion.div
        className="absolute -top-20 -left-32 opacity-20"
        animate={{ rotate: [0, 6, -2, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BotanicalLeaf variant={1} style={{ width: 360, height: 'auto' }} />
      </motion.div>
      <motion.div
        className="absolute -bottom-24 -right-20 opacity-15"
        animate={{ rotate: [0, -6, 4, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BotanicalLeaf variant={4} style={{ width: 420, height: 'auto' }} />
      </motion.div>

      <div className="container-luxe relative pt-24 pb-12">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative inline-flex h-12 w-12 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gold-gradient" />
                <span className="absolute inset-0.5 rounded-full bg-forest-500" />
                <span className="relative font-display text-2xl text-gold-200">O</span>
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-3xl tracking-tight text-cream-50">
                  Odette
                </span>
                <span className="text-[0.65rem] tracking-widest-2 uppercase text-gold-200">
                  Botanical Oils
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-200/80">
              Cold-pressed botanical oils for face, hair and beard. Crafted in
              small batches by a biomedical scientist who believes nature works
              best when we leave it almost untouched.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Mail, label: 'Email', href: 'mailto:hello@odetteoils.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-200/30 text-gold-200 hover:text-cream-50 hover:bg-gold-500/20 transition-colors"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.72rem] uppercase tracking-widest-2 text-gold-200 mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="hover:text-gold-200 transition-colors">All Oils</Link></li>
              <li><Link href="/product/radiance-face-oil" className="hover:text-gold-200 transition-colors">Face Oil</Link></li>
              <li><Link href="/product/mane-ritual-hair-oil" className="hover:text-gold-200 transition-colors">Hair Oil</Link></li>
              <li><Link href="/product/noble-beard-oil" className="hover:text-gold-200 transition-colors">Beard Oil</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.72rem] uppercase tracking-widest-2 text-gold-200 mb-5">
              House of Odette
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-gold-200 transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-gold-200 transition-colors">Contact</Link></li>
              <li><Link href="/contact#faq" className="hover:text-gold-200 transition-colors">FAQ</Link></li>
              <li><a href="mailto:wholesale@odetteoils.com" className="hover:text-gold-200 transition-colors">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.72rem] uppercase tracking-widest-2 text-gold-200 mb-5">
              Care
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="hover:text-gold-200 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold-200 transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact#shipping" className="hover:text-gold-200 transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 divider-gold" />

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.72rem] uppercase tracking-widest text-cream-200/60">
          <p>© {new Date().getFullYear()} Odette Oils. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-300 animate-pulse-soft" />
            Crafted in Melbourne, Australia
          </p>
        </div>
      </div>
    </footer>
  );
};
