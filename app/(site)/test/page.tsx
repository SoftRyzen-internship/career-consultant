'use client';

import { Button } from '@/components/Button';

const page = () => {
  return (
    <div className="max-w-[300px] w-full mx-auto">
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
    </div>
  );
};

export default page;