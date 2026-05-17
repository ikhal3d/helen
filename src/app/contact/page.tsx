import type { Metadata } from 'next';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { Faq } from '@/components/Faq';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Write to Helen. We reply personally within two business days. Find shipping, returns and FAQ answers.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            We read every letter,{' '}
            <span className="italic gold-text">personally.</span>
          </>
        }
        subtitle="Whether it is a question about your ritual, a wholesale enquiry, or simply hello, we would love to hear from you."
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe grid lg:grid-cols-[1.2fr_1fr] gap-16">
          <div>
            <span className="eyebrow">Write to Helen</span>
            <h2 className="heading-section mt-5">Send a message</h2>
            <p className="body-lg mt-5 max-w-xl">
              Drop us a note. We reply from the studio within two business days,
              never automated, always thoughtful.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-8 lg:pl-10 lg:border-l lg:border-cream-200">
            <div>
              <span className="eyebrow">House Details</span>
              <h3 className="font-display text-3xl text-ink-500 mt-4">
                Odette Oils
              </h3>
              <p className="text-sm text-ink-300 mt-1">An online-only atelier</p>
            </div>

            <div className="space-y-5 text-sm">
              <a
                href="mailto:hello@odetteoils.com"
                className="flex items-start gap-4 group"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-50 text-gold-600 group-hover:bg-gold-gradient group-hover:text-cream-50 transition-all">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-[0.7rem] uppercase tracking-widest text-ink-300">
                    General enquiries
                  </span>
                  <span className="block text-ink-500 font-medium">
                    hello@odetteoils.com
                  </span>
                </span>
              </a>

              <a
                href="mailto:wholesale@odetteoils.com"
                className="flex items-start gap-4 group"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-50 text-gold-600 group-hover:bg-gold-gradient group-hover:text-cream-50 transition-all">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-[0.7rem] uppercase tracking-widest text-ink-300">
                    Wholesale
                  </span>
                  <span className="block text-ink-500 font-medium">
                    wholesale@odetteoils.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-50 text-gold-600">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-[0.7rem] uppercase tracking-widest text-ink-300">
                    Studio
                  </span>
                  <span className="block text-ink-500 font-medium">
                    Melbourne, Australia
                  </span>
                  <span className="block text-xs text-ink-300 mt-0.5">
                    Online-only · No retail visits
                  </span>
                </span>
              </div>
            </div>

            <div className="pt-8 border-t border-cream-200">
              <span className="eyebrow">Follow</span>
              <div className="mt-5 flex items-center gap-3">
                {[
                  { icon: Instagram, label: 'Instagram', href: '#' },
                  { icon: Facebook, label: 'Facebook', href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-200 text-ink-500 hover:border-gold-300 hover:text-gold-600 transition-colors"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            <div id="shipping" className="pt-8 border-t border-cream-200 text-sm text-ink-300 space-y-3">
              <span className="eyebrow">Shipping & Returns</span>
              <p className="mt-2">
                Standard Australia: A$10 (3–5 business days). Complimentary on orders over A$120.
              </p>
              <p>
                International express available at checkout. 30-day returns on opened bottles.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="faq" className="py-24 md:py-32 bg-cream-100/60">
        <div className="container-luxe">
          <div className="max-w-2xl">
            <span className="eyebrow">Common Questions</span>
            <h2 className="heading-section mt-5 text-balance">
              Everything you might wonder.
            </h2>
          </div>
          <div className="mt-12 max-w-4xl">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
