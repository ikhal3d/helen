import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title={
          <>
            A leaf that{' '}
            <span className="italic gold-text">drifted</span> off the page.
          </>
        }
        subtitle="The page you were looking for could not be found. Let us walk you back to where the oils live."
      />
      <div className="container-luxe pb-24 text-center">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </>
  );
}
