import type { Product } from '@/types';

export const products: Product[] = [
  {
    slug: 'radiance-face-oil',
    name: 'Radiance Face Oil',
    tagline: 'A weightless botanical elixir for luminous, balanced skin',
    category: 'face',
    volume: '30 ml',
    price: 89,
    compareAtPrice: 110,
    shortDescription:
      'A cold-pressed blend of rosehip, jojoba and sea buckthorn that drinks into the skin, leaving it soft, plump and quietly radiant.',
    longDescription:
      'Crafted in small batches and never heated, our Radiance Face Oil unites twelve botanicals chosen for their bioavailability. Each drop carries a stable matrix of vitamins A, C and E, omega-3 and omega-6 fatty acids, and naturally occurring carotenoids that visibly soften fine lines, calm redness and restore an inner-lit glow. Skin feels nourished, never greasy.',
    hero: {
      accent: '#E5C779',
      deepAccent: '#8E6622',
    },
    benefits: [
      {
        icon: 'sparkle',
        title: 'Restores Radiance',
        description:
          'Vitamin C-rich rosehip and sea buckthorn revive dull, tired skin to a healthy, luminous finish.',
      },
      {
        icon: 'drop',
        title: 'Deep Hydration',
        description:
          'Jojoba mirrors skin’s natural sebum, sealing in moisture without clogging pores.',
      },
      {
        icon: 'shield',
        title: 'Antioxidant Shield',
        description:
          'A daily defence against environmental stressors, pollution and free-radical damage.',
      },
      {
        icon: 'leaf',
        title: '100% Botanical',
        description:
          'No fragrance, no fillers, no synthetics. Just twelve cold-pressed plant oils.',
      },
    ],
    ingredients: [
      {
        name: 'Rosehip Seed Oil',
        latin: 'Rosa canina',
        description:
          'Naturally rich in trans-retinoic acid and vitamin C to brighten and renew.',
      },
      {
        name: 'Jojoba Oil',
        latin: 'Simmondsia chinensis',
        description:
          'A liquid wax ester nearly identical to skin sebum. Balances oil production.',
      },
      {
        name: 'Sea Buckthorn',
        latin: 'Hippophae rhamnoides',
        description:
          'Among the richest natural sources of omega-7 and carotenoids.',
      },
      {
        name: 'Squalane (Olive)',
        latin: 'Olea europaea',
        description:
          'Lightweight, biocompatible moisture that absorbs without residue.',
      },
      {
        name: 'Evening Primrose',
        latin: 'Oenothera biennis',
        description:
          'A source of gamma-linolenic acid that soothes reactive skin.',
      },
      {
        name: 'Frankincense',
        latin: 'Boswellia carterii',
        description:
          'A revered botanical that visibly firms and refines texture.',
      },
    ],
    howToUse: [
      'Cleanse skin with warm water and pat almost dry.',
      'Warm 3–4 drops between clean palms.',
      'Press gently into face, neck and décolleté in upward motions.',
      'Use morning and night, before SPF or as the final step in your evening ritual.',
    ],
    reviews: [
      {
        name: 'Charlotte M.',
        location: 'Melbourne',
        rating: 5,
        title: 'My skin has never looked better',
        body: 'Three weeks in and my complexion is calm, even and so luminous. I have replaced four products with this one bottle.',
      },
      {
        name: 'Aisha K.',
        location: 'Sydney',
        rating: 5,
        title: 'The texture is liquid silk',
        body: 'It absorbs immediately and leaves zero greasiness. The faint herbaceous scent is heavenly.',
      },
      {
        name: 'Naomi T.',
        location: 'Brisbane',
        rating: 5,
        title: 'Worth every cent',
        body: 'I am 47 and have rosacea. This is the only oil that has not flared my skin and the redness is genuinely fading.',
      },
    ],
    badges: ['Cold-Pressed', 'Vegan', 'Cruelty-Free', 'Made in Australia'],
  },
  {
    slug: 'mane-ritual-hair-oil',
    name: 'Mane Ritual Hair Oil',
    tagline: 'A scalp-loving tonic for soft, mirror-shine strands',
    category: 'hair',
    volume: '60 ml',
    price: 72,
    shortDescription:
      'A nourishing scalp and length treatment with rosemary, argan and amla that strengthens the follicle and gives hair an enviable, healthy gloss.',
    longDescription:
      'A weightless infusion of pure plant oils chosen to mimic the lipids your scalp naturally produces. Rosemary and peppermint stimulate microcirculation at the root, while argan, amla and camellia coat the cuticle for slip, shine and protection. The result: stronger growth, less breakage, and hair that catches the light.',
    hero: {
      accent: '#A5B587',
      deepAccent: '#4D5934',
    },
    benefits: [
      {
        icon: 'leaf',
        title: 'Stimulates Growth',
        description:
          'Clinically studied rosemary leaf supports healthy follicle function and density.',
      },
      {
        icon: 'drop',
        title: 'Mirror-Shine Finish',
        description:
          'Argan and camellia seal the cuticle for visible, light-catching gloss.',
      },
      {
        icon: 'shield',
        title: 'Strengthens Strands',
        description:
          'Amla and black seed reinforce keratin bonds to reduce breakage and split ends.',
      },
      {
        icon: 'heart',
        title: 'Soothes Scalp',
        description:
          'Calms itch and flakes with cooling peppermint and anti-inflammatory neem.',
      },
    ],
    ingredients: [
      {
        name: 'Rosemary Leaf',
        latin: 'Rosmarinus officinalis',
        description:
          'Clinically shown to match the activity of conventional growth treatments.',
      },
      {
        name: 'Argan Oil',
        latin: 'Argania spinosa',
        description:
          'Liquid gold from Morocco. Rich in vitamin E and squalene.',
      },
      {
        name: 'Amla',
        latin: 'Phyllanthus emblica',
        description:
          'An Ayurvedic strengthener, packed with bioavailable vitamin C.',
      },
      {
        name: 'Camellia Seed',
        latin: 'Camellia japonica',
        description:
          'The Japanese geisha’s secret for impossibly glossy strands.',
      },
      {
        name: 'Peppermint',
        latin: 'Mentha piperita',
        description:
          'Cools the scalp and stimulates microcirculation at the follicle.',
      },
      {
        name: 'Black Seed',
        latin: 'Nigella sativa',
        description:
          'Thymoquinone-rich oil with documented antimicrobial benefits.',
      },
    ],
    howToUse: [
      'Section dry or damp hair and apply directly to the scalp.',
      'Massage in slow circles for 2–3 minutes to stimulate blood flow.',
      'Smooth remaining oil through mid-lengths and ends.',
      'Leave for at least 30 minutes — ideal overnight — then shampoo as usual.',
    ],
    reviews: [
      {
        name: 'Priya R.',
        location: 'Perth',
        rating: 5,
        title: 'New baby hairs everywhere',
        body: 'After two months I can see real regrowth along my hairline. Genuinely impressed.',
      },
      {
        name: 'Olivia D.',
        location: 'Adelaide',
        rating: 5,
        title: 'Glass-hair status',
        body: 'My hairdresser asked what I had changed. The shine is unreal.',
      },
      {
        name: 'Jenna L.',
        location: 'Gold Coast',
        rating: 4,
        title: 'My weekly ritual',
        body: 'I leave it in overnight every Sunday. My ends are visibly healthier.',
      },
    ],
    badges: ['Cold-Pressed', 'Vegan', 'Cruelty-Free', 'Made in Australia'],
  },
  {
    slug: 'noble-beard-oil',
    name: 'Noble Beard Oil',
    tagline: 'A refined, fast-absorbing oil for a softer, sculpted beard',
    category: 'beard',
    volume: '30 ml',
    price: 65,
    shortDescription:
      'A whisper-light blend of jojoba, cedarwood and vetiver that tames coarse hair, conditions the skin beneath, and leaves a quietly masculine scent.',
    longDescription:
      'Designed with the modern gentleman in mind. A precise edit of plant oils that soften wiry strands, soothe the often-overlooked skin underneath, and lend a subtle, woody aura that lasts through the day. Non-greasy, never overpowering.',
    hero: {
      accent: '#C9A77F',
      deepAccent: '#6C4D19',
    },
    benefits: [
      {
        icon: 'drop',
        title: 'Softens Coarse Hair',
        description:
          'Jojoba and sweet almond melt into wiry beard hair for an instantly conditioned feel.',
      },
      {
        icon: 'heart',
        title: 'Calms the Skin Beneath',
        description:
          'Hemp seed and tamanu reduce redness, itch and the dreaded beard-druff.',
      },
      {
        icon: 'leaf',
        title: 'Promotes Fuller Growth',
        description:
          'Rosemary and black seed encourage thicker, denser facial hair over time.',
      },
      {
        icon: 'sparkle',
        title: 'Subtle, Refined Scent',
        description:
          'A whisper of cedarwood, vetiver and bergamot. Confident, never loud.',
      },
    ],
    ingredients: [
      {
        name: 'Jojoba Oil',
        latin: 'Simmondsia chinensis',
        description:
          'Closely mimics skin sebum. Absorbs cleanly with zero shine.',
      },
      {
        name: 'Sweet Almond',
        latin: 'Prunus dulcis',
        description:
          'Rich in oleic and linoleic acids to soften every strand.',
      },
      {
        name: 'Hemp Seed',
        latin: 'Cannabis sativa',
        description:
          'A perfect 3:1 omega-6 to omega-3 ratio for calm, healthy skin.',
      },
      {
        name: 'Tamanu',
        latin: 'Calophyllum inophyllum',
        description:
          'The Polynesian “green gold” for repairing irritated skin.',
      },
      {
        name: 'Cedarwood',
        latin: 'Cedrus atlantica',
        description:
          'A grounded, woody base note prized for its calming aroma.',
      },
      {
        name: 'Vetiver',
        latin: 'Chrysopogon zizanioides',
        description:
          'Earthy and smoky. Anchors the scent and supports skin tone.',
      },
    ],
    howToUse: [
      'Wash beard with warm water and pat dry.',
      'Dispense 4–5 drops into your palm — a little goes far.',
      'Work through the beard from root to tip, including the skin beneath.',
      'Comb through to distribute evenly. Use daily.',
    ],
    reviews: [
      {
        name: 'James W.',
        location: 'Melbourne',
        rating: 5,
        title: 'Finally an oil that does not itch',
        body: 'My beard is softer, my skin underneath has stopped flaking, and the scent is incredible.',
      },
      {
        name: 'Marco S.',
        location: 'Sydney',
        rating: 5,
        title: 'Looks heritage. Performs modern.',
        body: 'The bottle looks like it belongs on an apothecary shelf. The oil works.',
      },
      {
        name: 'Daniel H.',
        location: 'Canberra',
        rating: 5,
        title: 'My fiancée steals it',
        body: 'She uses it on her hair ends now. Have to hide it.',
      },
    ],
    badges: ['Cold-Pressed', 'Vegan', 'Cruelty-Free', 'Made in Australia'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string): Product[] {
  return products.filter((p) => p.slug !== slug);
}
