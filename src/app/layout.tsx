import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Italianno } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { PageTransition } from '@/components/PageTransition';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const script = Italianno({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://helenskincare.com'
  ),
  title: {
    default: 'Helen — Pure Botanical Skincare Oils',
    template: '%s · Helen Skincare',
  },
  description:
    'Helen creates science-backed botanical oils for face, hair and beard. Naturally extracted, ethically sourced, and crafted by a biomedical scientist for radiant, healthy skin.',
  keywords: [
    'natural skincare',
    'face oil',
    'hair oil',
    'beard oil',
    'botanical oils',
    'luxury skincare',
    'organic skincare',
    'biomedical skincare',
    'Helen skincare',
  ],
  authors: [{ name: 'Helen' }],
  openGraph: {
    title: 'Helen — Pure Botanical Skincare Oils',
    description:
      'Science-backed botanical oils for face, hair and beard. Crafted by a biomedical scientist.',
    type: 'website',
    siteName: 'Helen Skincare',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helen — Pure Botanical Skincare Oils',
    description:
      'Science-backed botanical oils for face, hair and beard.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${script.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        <CartDrawer />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
