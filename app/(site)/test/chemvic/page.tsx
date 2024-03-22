'use client';

import { Hero } from '@/sections/Hero';

import { Footer } from '@/layout/Footer';

import footer from '@/data/footer.json';

const page = () => {
  // const { plates } = hero;
  return (
    <>
      <div className="flex flex-col items-center">
        <Hero />
      </div>
      <Footer footer={footer} sheet={'main'} />
    </>
  );
};

export default page;
