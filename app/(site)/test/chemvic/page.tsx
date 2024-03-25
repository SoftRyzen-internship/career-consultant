import { fetchAchievements } from '@/sanity/requests/fetchAchievements';

import { Hero } from '@/sections/Hero';
import { Section } from '@/components/Section';
import { Footer } from '@/layout/Footer';

import footer from '@/data/footer.json';

const page = async () => {
  const adminDatas = await fetchAchievements();

  return (
    <>
      <Section isHerosection>
        <Hero adminDatas={adminDatas} />
      </Section>
      <Footer footer={footer} sheet={'main'} />
    </>
  );
};

export default page;
