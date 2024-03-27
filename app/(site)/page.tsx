import { Requests } from '@/sections/Requests';
import { Reviews } from '@/sections/Reviews';
import { WhatChoose } from '@/sections/WhatChoose';
import { Feedback } from '@/sections/Feedback';

export default function Home() {
  return (
    <>
      <Requests />
      <WhatChoose />
      <Reviews />
      <Feedback />
    </>
  );
}
