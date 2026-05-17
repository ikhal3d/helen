'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FloatingLeaf } from '@/components/Botanicals';

export const HelenStory = () => (
  <section className="relative py-28 md:py-40 overflow-hidden">
    <FloatingLeaf variant={2} top="8%" right="-4%" size={300} rotate={-10} opacity={0.3} />
    <FloatingLeaf variant={5} bottom="6%" left="-6%" size={260} rotate={20} opacity={0.25} delay={1.5} />

    <div className="container-luxe relative grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gold-100">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 30% 20%, rgba(229,199,121,0.45) 0%, transparent 60%), linear-gradient(180deg, #F9F4EC 0%, #EFE0CB 60%, #C9A77F 100%)',
            }}
          />
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg viewBox="0 0 300 380" className="w-3/4 h-auto" fill="none">
              <defs>
                <linearGradient id="portraitBg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                  <stop offset="100%" stopColor="rgba(229,199,121,0.6)" />
                </linearGradient>
                <radialGradient id="halo" cx="0.5" cy="0.4" r="0.6">
                  <stop offset="0%" stopColor="rgba(229,199,121,0.55)" />
                  <stop offset="100%" stopColor="rgba(229,199,121,0)" />
                </radialGradient>
              </defs>
              <circle cx="150" cy="140" r="135" fill="url(#halo)" />
              <ellipse cx="150" cy="120" rx="58" ry="70" fill="url(#portraitBg)" stroke="#B0822C" strokeWidth="0.5" />
              <path
                d="M88 200c10-25 30-40 62-40s52 15 62 40v160H88V200Z"
                fill="url(#portraitBg)"
                stroke="#B0822C"
                strokeWidth="0.5"
              />
              <path
                d="M150 60c-22 0-38 18-40 42-1 14 6 28 18 36"
                stroke="#8E6622"
                strokeWidth="0.6"
                fill="none"
              />
              <path
                d="M150 60c22 0 38 18 40 42 1 14-6 28-18 36"
                stroke="#8E6622"
                strokeWidth="0.6"
                fill="none"
              />
              <text
                x="150"
                y="345"
                textAnchor="middle"
                fontFamily="serif"
                fontStyle="italic"
                fontSize="22"
                fill="#1F1B14"
              >
                Helen
              </text>
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-8 -right-8 glass rounded-2xl px-6 py-5 max-w-[14rem] shadow-soft"
        >
          <p className="text-[0.65rem] uppercase tracking-widest-2 text-gold-500">
            Founder & Formulator
          </p>
          <p className="mt-2 font-display text-xl text-ink-500 leading-tight">
            Helen, BSc<br />Biomedical Science
          </p>
        </motion.div>
      </motion.div>

      <div>
        <span className="eyebrow">A Letter from Helen</span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="heading-section mt-5 text-balance"
        >
          “I built the line I could not find on the shelf.”
        </motion.h2>
        <div className="mt-8 space-y-5 text-pretty body-lg">
          <p>
            I trained as a biomedical scientist and spent years in pathology
            labs, watching how the body responds — or fails to respond — to the
            molecules we apply to it. I have always loved skincare, but I could
            not find products that held up to the standard I expected as a
            scientist and as a woman.
          </p>
          <p>
            Most contained two real botanicals and twenty things I would not
            want absorbed into my bloodstream. So I started formulating at home,
            for me and the people I love. Helen is the answer to that search:
            quiet, considered, and honest about every drop.
          </p>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 mt-10 text-[0.78rem] uppercase tracking-widest-2 text-ink-500 hover:text-gold-600 transition-colors"
        >
          Read the full story
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  </section>
);
