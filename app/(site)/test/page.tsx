'use client';

// import { Button } from '@/components/Button';
// import { Form } from '@/components/Form';
import { FeedbackCard } from '@/components/FeedbackCard';
// import { NavBar } from '@/components/NavBar/NavBar';
// import { Element } from 'react-scroll';
// import { Socials } from '@/components/Socials';

const page = () => {
  return (
    <>
      <div className="max-w-[384px] w-full mx-auto">
        <p className="mb-[20px]">test page</p>

        {/* <Button
          type="submit"
          onClick={() => {
            console.log('hi');
          }}
          isSubmitted={false}
          isSubmitError={false}
          disabled={false}
        >
          Read more
        </Button> */}
        <FeedbackCard />

        {/* <NavBar /> */}

        {/* <Element name="test1" className="requestSection">
          <div className="mt-[50px] h-[1000px] bg-green-500">
            requestSection
          </div>
        </Element>
        <Element name="target" className="reviewsSection">
          <div className="h-[1000px] bg-red-400">reviewsSection</div>
        </Element>
        <Element name="target" className="feedbackSection">
          <div className="h-[1000px] bg-blue-600">feedbackSection</div>
        </Element> */}
      </div>
      {/* <Form /> */}
      {/* <Socials /> */}
    </>
  );
};

export default page;
