import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Helen Skincare collects, uses and protects your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <LegalPage
        title="Privacy Policy"
        updated="May 2026"
        sections={[
          {
            heading: '1. Who we are',
            body: [
              'Helen Skincare ("we", "our", "us") is a small Australian online-only studio crafting botanical skincare oils. Our registered address is in Melbourne, Victoria. You can write to us at hello@helenskincare.com.',
              'This policy explains what personal information we collect, how we use it, when we share it, and the rights you have over it. It applies to anyone who visits our website or buys from us.',
            ],
          },
          {
            heading: '2. What we collect',
            body: [
              'We collect only what we need to run the shop: your name, email, shipping address, phone number, order history, and any messages you send us. When you pay, your card information is collected directly by our payment partners (Stripe and PayPal). We do not see or store full card numbers on our servers.',
              'We also collect basic analytics about how the site is used, such as pages visited and approximate location, to help us improve the experience.',
            ],
          },
          {
            heading: '3. How we use it',
            body: [
              'We use your information to process orders, send shipping updates, respond to your enquiries, and (if you have opted in) send the occasional newsletter. We do not sell your data to anyone, ever.',
              'If you subscribe to our newsletter you can unsubscribe at any time via the link at the bottom of every email.',
            ],
          },
          {
            heading: '4. Who we share it with',
            body: [
              'Limited information is shared with the partners that help us operate: Stripe and PayPal for payments, Australia Post and DHL for delivery, and email service providers for transactional and newsletter emails. Each is bound by confidentiality and data-protection obligations.',
            ],
          },
          {
            heading: '5. Cookies',
            body: [
              'We use a small number of cookies to remember your shopping bag, recognise you when you return, and measure site performance. You can disable cookies in your browser settings, though some features will stop working as expected.',
            ],
          },
          {
            heading: '6. Your rights',
            body: [
              'You can ask us at any time to see, correct, export or delete the personal information we hold on you. Write to hello@helenskincare.com and we will respond within 30 days.',
            ],
          },
          {
            heading: '7. Updates',
            body: [
              'We may update this policy from time to time. The "Last updated" date at the top will always reflect the current version.',
            ],
          },
        ]}
      />
    </>
  );
}
