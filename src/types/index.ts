export type ProductBenefit = {
  title: string;
  description: string;
  icon: 'leaf' | 'drop' | 'sun' | 'sparkle' | 'shield' | 'heart';
};

export type ProductIngredient = {
  name: string;
  latin: string;
  description: string;
};

export type ProductReview = {
  name: string;
  location: string;
  rating: number;
  title: string;
  body: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: 'face' | 'hair' | 'beard';
  volume: string;
  price: number;
  compareAtPrice?: number;
  shortDescription: string;
  longDescription: string;
  hero: {
    accent: string;
    deepAccent: string;
  };
  benefits: ProductBenefit[];
  ingredients: ProductIngredient[];
  howToUse: string[];
  reviews: ProductReview[];
  badges: string[];
};

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  volume: string;
  quantity: number;
  accent: string;
};
