'use client';

import { Hero } from '@/sections/Hero';
// import hero from '@/data/hero.json';

const page = () => {
  // const { plates } = hero;
  return (
    <>
      <div className="flex flex-col items-center">
        <Hero />
      </div>
    </>
  );
};

export default page;
