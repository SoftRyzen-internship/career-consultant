'use client';

// import { Button } from '@/components/Button';
// import { NavBar } from '@/components/NavBar/NavBar';
// import { Element } from 'react-scroll';

import { FeedbackCard } from '@/components/FeedbackCard';
import feedbackData from '@/data/feedback.json';

const page = () => {
  const data = feedbackData.feedback;

  return (
    <>
      <div className="container w-full mx-auto">
        <p className="mb-[20px]">Stepan&apos;s test page</p>
        {/* ---------------------------------------------------Btn--------------------------------------------------- */}
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
        {/* ---------------------------------------------------NavBar--------------------------------------------------- */}

        {/* <NavBar />

        <Element name="test1" className="requestSection">
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
        {/* ---------------------------------------------------FeedbackCard--------------------------------------------------- */}

        {/* <FeedbackCard data={data1}/> */}
        {/* ---------------------------------------------------Modal--------------------------------------------------- */}

        {data.map(item => {
          return (
            <div key={item.name} className="mb-[20px]">
              <FeedbackCard data={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
