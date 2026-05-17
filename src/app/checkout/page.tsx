import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Checkout } from '@/components/Checkout';

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Securely complete your Helen Skincare order.',
};

export default function CheckoutPage() {
  return (
    <>
      <PageHero
        eyebrow="Checkout"
        title={
          <>
            One <span className="italic gold-text">quiet</span> moment to
            complete your order.
          </>
        }
      />
      <Checkout />
    </>
  );
}
