import { Hero } from '@/components/sections/home/hero';
import { Features } from '@/components/sections/home/features';
import { ServicesPreview } from '@/components/sections/home/services-preview';
import { Testimonials } from '@/components/sections/home/testimonials';
import { CTA } from '@/components/sections/home/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
