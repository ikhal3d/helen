import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { HelenStory } from '@/components/HelenStory';
import { FloatingLeaf } from '@/components/Botanicals';

export const metadata: Metadata = {
  title: 'Our Story · Meet Helen',
  description:
    'Helen is a biomedical scientist and former personal trainer who founded a botanical skincare line built on evidence, ritual and uncompromising sourcing.',
};

const milestones = [
  {
    year: '2012',
    title: 'Biomedical Science, BSc',
    text: 'Graduates with a focus on biochemistry and cell biology. Begins working in clinical pathology.',
  },
  {
    year: '2015',
    title: 'Pathology Laboratory',
    text: 'Five years as a senior laboratory technician deepens an obsession with what works under a microscope, and what does not.',
  },
  {
    year: '2018',
    title: 'Certified Personal Trainer',
    text: 'A parallel career in functional health and wellness, working with clients on nutrition, recovery and sleep.',
  },
  {
    year: '2022',
    title: 'Helen Studio',
    text: 'After years of personal formulation, Helen quietly launches the first cold-pressed face oil from her home studio.',
  },
  {
    year: '2026',
    title: 'House of Helen',
    text: 'The collection grows to three rituals. Distribution stays small-batch and direct, by design.',
  },
];

const values = [
  {
    title: 'Evidence first',
    text: 'If a botanical does not have published evidence behind it, it does not earn a place in our formulas.',
  },
  {
    title: 'Quiet luxury',
    text: 'Premium is what is left out, not what is shouted about. We do not add fragrance, fillers or fanfare.',
  },
  {
    title: 'Small by design',
    text: 'Batches are intentionally small so that no bottle sits on a shelf long enough to lose its potency.',
  },
  {
    title: 'Whole-life wellness',
    text: 'Beautiful skin is the visible side of a healthy life. We talk about both, openly.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            A scientist who built the line{' '}
            <span className="italic gold-text">she could not find.</span>
          </>
        }
        subtitle="Helen is a biomedical scientist, former personal trainer and lifelong student of nutrition. She founded this house to make skincare that meets both the rigour of the laboratory and the calm of a daily ritual."
      />

      <HelenStory />

      <section className="relative py-24 md:py-32 overflow-hidden bg-cream-100/60">
        <FloatingLeaf variant={1} top="4%" right="-5%" size={280} rotate={-15} opacity={0.18} />
        <FloatingLeaf variant={4} bottom="4%" left="-5%" size={300} rotate={18} opacity={0.18} delay={2} />
        <div className="container-luxe relative">
          <div className="max-w-3xl">
            <span className="eyebrow">The Path</span>
            <h2 className="heading-section mt-5 text-balance">
              A patient walk through science and skin.
            </h2>
          </div>

          <ol className="mt-16 relative border-l border-gold-200 max-w-3xl pl-10 space-y-12">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[3.05rem] top-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gold-300 bg-cream-50">
                  <span className="h-2 w-2 rounded-full bg-gold-gradient" />
                </span>
                <p className="text-[0.7rem] uppercase tracking-widest-2 text-gold-500">{m.year}</p>
                <h3 className="font-display text-3xl text-ink-500 mt-2">{m.title}</h3>
                <p className="body-lg mt-3 text-pretty">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <span className="eyebrow">House Principles</span>
            <h2 className="heading-section mt-5 text-balance">
              Four promises that shape every bottle.
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card-luxe p-10"
              >
                <span className="font-display gold-text text-5xl">0{i + 1}</span>
                <h3 className="font-display text-2xl text-ink-500 mt-3">{v.title}</h3>
                <p className="text-sm leading-relaxed text-ink-300 mt-4">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream-100/60">
        <div className="container-luxe text-center max-w-3xl mx-auto">
          <span className="eyebrow justify-center">A Final Word</span>
          <h2 className="heading-section mt-5">
            <span className="italic gold-text">Slow</span> skincare for the
            people we love.
          </h2>
          <p className="body-lg mt-6">
            Helen began this house for her children, her family and her closest
            friends. She hopes it becomes part of your evenings, too.
          </p>
          <Link href="/shop" className="btn-primary mt-10">
            Explore the Collection
          </Link>
        </div>
      </section>
    </>
  );
}
