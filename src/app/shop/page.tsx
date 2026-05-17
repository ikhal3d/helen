import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ShopGrid } from '@/components/ShopGrid';

export const metadata: Metadata = {
  title: 'Shop the Collection',
  description:
    'Cold-pressed botanical oils for face, hair and beard. Each formula is small-batch, vegan and science-led.',
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="The Collection"
        title={
          <>
            Oils for the way{' '}
            <span className="italic gold-text">you live.</span>
          </>
        }
        subtitle="Three rituals. One philosophy. Pick the oil that meets your skin, hair and beard exactly where they are right now."
      />
      <section className="py-12 md:py-20">
        <div className="container-luxe">
          <ShopGrid />
        </div>
      </section>
    </>
  );
}
