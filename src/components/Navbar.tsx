'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/lib/cartStore';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const items = useCart((s) => s.items);
  const openCart = useCart((s) => s.openCart);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 inset-x-0 z-40 transition-all duration-500',
          scrolled
            ? 'glass border-b border-gold-100/60'
            : 'bg-transparent'
        )}
      >
        <div className="container-luxe flex h-20 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Odette Oils home"
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-gold-gradient opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="absolute inset-0.5 rounded-full bg-cream-50" />
              <span className="relative font-display text-xl text-gold-600">O</span>
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-2xl tracking-tight text-ink-500">
                Odette
              </span>
              <span className="text-[0.6rem] tracking-widest-2 uppercase text-gold-500">
                Botanical Oils
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-[0.78rem] uppercase tracking-widest-2 transition-colors',
                    active
                      ? 'text-gold-600'
                      : 'text-ink-400 hover:text-gold-600'
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px w-8 bg-gold-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCart}
              className="relative inline-flex items-center justify-center h-11 w-11 rounded-full border border-cream-200 hover:border-gold-300 text-ink-500 hover:text-gold-600 transition-all"
              aria-label="Open shopping cart"
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    key={itemCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gold-gradient px-1 text-[0.65rem] font-medium text-cream-50 shadow-gold"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-cream-200 text-ink-500"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-cream-50 border-l border-cream-200 shadow-luxe"
            >
              <div className="flex h-20 items-center justify-between px-6">
                <span className="font-display text-2xl text-ink-500">Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-200 text-ink-500"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex flex-col px-6 pt-6 gap-2">
                {links.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.07, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-4 border-b border-cream-200 font-display text-3xl text-ink-500 hover:text-gold-600"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto px-6 py-10 text-sm text-ink-300 space-y-1">
                <p className="font-medium text-ink-500">Stay in touch</p>
                <p>hello@odetteoils.com</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
