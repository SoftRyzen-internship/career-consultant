import { Requests } from '@/sections/Requests';
import { Reviews } from '@/sections/Reviews';
import { WhatChoose } from '@/sections/WhatChoose';
import { Feedback } from '@/sections/Feedback';
import { Services } from '@/sections/Services';
import { Hero } from '@/sections/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <Requests />
      <Services />
      <WhatChoose />
      <Reviews />
      <Feedback />
    </>
  );
}
