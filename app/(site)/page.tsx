import HeroPlate from '@/components/HeroPlate/HeroPlate';
import plates from '@/data/hero.json';

export default function Home() {
  const { quantity, description } = plates.plates[0];
  return (
    <>
      <HeroPlate quantity={quantity} description={description} />
    </>
  );
}
