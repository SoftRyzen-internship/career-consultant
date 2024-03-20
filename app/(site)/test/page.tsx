'use client';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { NavBar } from '@/components/NavBar/NavBar';
import { Element } from 'react-scroll';
import { LinkTelegram } from '@/components/LinkTelegram';
import { LinkToFeedback } from '@/components/LinkToFeedback';

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

        <NavBar />
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
        </Element>
        <Element name="target" className="feedback">
          <div className="h-[1000px] bg-orange-600 text-white text-base">
            Feedback Section with Form
          </div>
        </Element>
      </div>
      <Form />
      <div className="px-6">
        <LinkTelegram />
        <div className="mb-5"></div>
        <LinkToFeedback section="header" />
        <div className="mb-5"></div>
        <LinkToFeedback section="hero" />
        <div className="mb-5"></div>
        <LinkToFeedback section="services" />
        <div className="mb-5"></div>
        <LinkToFeedback section="mobileMenu" />
        <div className="mb-5"></div>
      </div>
    </>
  );
};

export default page;
