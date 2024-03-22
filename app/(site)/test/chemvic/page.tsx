'use client';

import { Container } from '@/components/Container';
import { HeroPlate } from '@/components/HeroPlate';
import { HeroPlates } from '@/components/HeroPlates';
import { Slider } from '@/components/Slider';
import { Footer } from '@/layout/Footer';

import hero from '@/data/hero.json';
import footer from '@/data/footer.json';

const page = () => {
  const { plates } = hero;
  return (
    <>
      <Container>
        <div className=" pt-20">
          <HeroPlates data={plates} />
          <div className="md:hidden pt-20">
            <Slider data={plates} component={HeroPlate} section={'hero'} />
          </div>
        </div>
      </Container>
      <Footer footer={footer} sheet={'main'} />
    </>
  );
};

export default page;
