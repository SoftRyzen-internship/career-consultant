'use client';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';

const page = () => {
  return (
    <>
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
      <Form />
    </>
  );
};

export default page;
