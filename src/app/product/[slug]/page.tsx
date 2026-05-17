import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from '@/lib/products';
import { ProductDetail } from '@/components/ProductDetail';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: 'Product not found' };
  }
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} · Odette Oils`,
      description: product.shortDescription,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const related = getRelatedProducts(params.slug);
  return <ProductDetail product={product} related={related} />;
}
