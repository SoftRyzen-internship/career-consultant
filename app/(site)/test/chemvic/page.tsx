'use client';

import { Hero } from '@/sections/Hero';

import { Footer } from '@/layout/Footer';

import footer from '@/data/footer.json';
import { Section } from '@/components/Section';

const page = () => {
  return (
    <>
      <Section isHerosection>
        <Hero />
      </Section>
      <Footer footer={footer} sheet={'main'} />
    </>
  );
};

export default page;
