'use client';
// import { fetchAchievements } from '@/sanity/requests/fetchAchievements';

// import { Hero } from '@/sections/Hero';
import { Footer } from '@/layout/Footer';

import footer from '@/data/footer.json';

import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
const page = async () => {
  // const adminDatas = await fetchAchievements();

  return (
    <>
      {/* <Hero adminDatas={adminDatas} /> */}
      <Container className="pt-12">
        <SectionTitle text={'привіт всім'} />
      </Container>
      <Footer footer={footer} sheet={'main'} />
    </>
  );
};

export default page;
