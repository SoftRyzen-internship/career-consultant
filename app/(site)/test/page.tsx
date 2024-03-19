'use client';

// import { Button } from '@/components/Button';
import { Socials } from '@/components/Socials';

const page = () => {
  return (
    <div className="container w-full mx-auto">
      <p className="mb-[20px]">test page</p>
      {/* <div className="max-w-[300px] w-full mx-auto">
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
      </div> */}
      <Socials />
    </div>
  );
};

export default page;
