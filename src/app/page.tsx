import { Hero } from '@/components/Hero';
import { PromiseMarquee } from '@/components/PromiseMarquee';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { StoryRitual } from '@/components/StoryRitual';
import { Benefits } from '@/components/Benefits';
import { HelenStory } from '@/components/HelenStory';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromiseMarquee />
      <FeaturedProducts />
      <StoryRitual />
      <Benefits />
      <HelenStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
