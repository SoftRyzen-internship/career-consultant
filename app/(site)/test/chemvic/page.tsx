import { fetchAchievements } from '@/sanity/requests/fetchAchievements';

import { Hero } from '@/sections/Hero';
import { Footer } from '@/layout/Footer';

import footer from '@/data/footer.json';

const page = async () => {
  const adminDatas = await fetchAchievements();

  return (
    <>
      <Hero adminDatas={adminDatas} />

      <Footer footer={footer} sheet={'main'} />
    </>
  );
};

export default page;
