import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHero } from '@/components/PageHero';
import { OrderConfirmation } from '@/components/OrderConfirmation';

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Your Odette Oils order has been received.',
};

export default function OrderConfirmationPage() {
  return (
    <>
      <PageHero
        eyebrow="Order Received"
        title={
          <>
            A small <span className="italic gold-text">moment</span> of thanks.
          </>
        }
      />
      <Suspense fallback={null}>
        <OrderConfirmation />
      </Suspense>
    </>
  );
}
