'use client';

import { Hero } from '@/sections/Hero';

import { Footer } from '@/layout/Footer';

import footer from '@/data/footer.json';
import { Section } from '@/components/Section';

const page = () => {
  // const { plates } = hero;
  return (
    <>
      {/* <div className="flex flex-col items-center">
        <Hero />
      </div> */}
      <Section isGeneralSection={false} isHerosection>
        <Hero />
      </Section>
      <Footer footer={footer} sheet={'main'} />
    </>
  );
};

export default page;
