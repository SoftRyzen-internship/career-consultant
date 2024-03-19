'use client';

import { Button } from '@/components/Button';
import { LinkOrder } from '@/components/LinkOrder';
import { LinkTelegram } from '@/components/LinkTelegram';

const page = () => {
  return (
    <div className=" w-full mx-auto">
      <p className="mb-[20px]">test page</p>
      <Button
        type="submit"
        onClick={() => {
          console.log('hi');
        }}
        isSubmitted={false}
        isSubmitError={false}
        disabled={false}
      >
        Read more
      </Button>
      <LinkOrder />
      <LinkTelegram />
    </div>
  );
};

export default page;
