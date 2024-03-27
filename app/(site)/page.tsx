import { Reviews } from '@/sections/Reviews';
import { WhatChoose } from '@/sections/WhatChoose';
import { Feedback } from '@/sections/Feedback';
import { Services } from '@/sections/Services';

export default function Home() {
  return (
    <>
      <Services />
      <WhatChoose />
      <Reviews />
      <Feedback />
    </>
  );
}
