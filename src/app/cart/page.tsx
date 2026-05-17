import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { CartPage } from '@/components/CartPage';

export const metadata: Metadata = {
  title: 'Your Bag',
  description: 'Review the contents of your shopping bag before checkout.',
};

export default function Cart() {
  return (
    <>
      <PageHero
        eyebrow="Your Bag"
        title={
          <>
            A considered <span className="italic gold-text">selection.</span>
          </>
        }
      />
      <CartPage />
    </>
  );
}
