import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms under which Odette Oils provides this site and our products.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <LegalPage
        title="Terms of Service"
        updated="May 2026"
        sections={[
          {
            heading: '1. Acceptance',
            body: [
              'By using this site or buying from us you agree to these terms. If you do not agree, please do not use the site.',
            ],
          },
          {
            heading: '2. Products',
            body: [
              'Odette Oils products are cosmetic items intended for external use only. They are not medicines, do not treat or diagnose any condition, and are not a substitute for professional medical advice.',
              'If you have a known allergy to any of the ingredients listed on a product, please do not use that product. Discontinue use and seek medical advice if irritation occurs.',
            ],
          },
          {
            heading: '3. Orders & payment',
            body: [
              'All prices are shown in Australian Dollars unless otherwise indicated. An order is confirmed once you receive an email from us containing your order reference. We reserve the right to cancel an order in cases of suspected fraud, stock unavailability, or pricing errors.',
              'Payments are processed by Stripe and PayPal. We do not store full card details on our servers.',
            ],
          },
          {
            heading: '4. Shipping & delivery',
            body: [
              'Australian orders are dispatched from our Melbourne studio within 48 hours of payment, Monday to Friday. International orders may be subject to customs duties or taxes which are the responsibility of the recipient.',
              'Delivery times are estimates only and we cannot guarantee specific arrival dates once a parcel has left our studio.',
            ],
          },
          {
            heading: '5. Returns & refunds',
            body: [
              'We offer a 30-day satisfaction guarantee on opened bottles. If an Odette oil does not work for your skin, write to hello@odetteoils.com within 30 days of delivery and we will arrange a refund or exchange.',
              'Refunds are issued to the original payment method. Shipping costs are non-refundable unless the return is due to a fault on our part.',
            ],
          },
          {
            heading: '6. Intellectual property',
            body: [
              'All content on this site, including text, images, logos, branding and packaging design, is the property of Odette Oils and may not be reproduced without written permission.',
            ],
          },
          {
            heading: '7. Liability',
            body: [
              'To the maximum extent permitted by law, our total liability arising from your use of this site or our products is limited to the amount you paid for the relevant order. Nothing in these terms excludes liability that cannot be excluded under Australian Consumer Law.',
            ],
          },
          {
            heading: '8. Governing law',
            body: [
              'These terms are governed by the laws of Victoria, Australia. Any dispute will be subject to the exclusive jurisdiction of the courts of Victoria.',
            ],
          },
        ]}
      />
    </>
  );
}
