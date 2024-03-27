'use client';
import { fetchAchievements } from '@/sanity/requests/fetchAchievements';

import { Hero } from '@/sections/Hero';
import { Footer } from '@/layout/Footer';

import footer from '@/data/footer.json';
import card from '@/data/requests.json';
import { Container } from '@/components/Container';
import { Slider } from '@/components/Slider';
import { RequestCard } from '@/components/RequestCard';
const page = async () => {
  const adminDatas = await fetchAchievements();

  return (
    <>
      <Hero adminDatas={adminDatas} />
      <Container>
        <Slider data={card} component={RequestCard} section={'requests'} />
      </Container>
      <Footer footer={footer} sheet={'main'} />
    </>
  );
};

export default page;
