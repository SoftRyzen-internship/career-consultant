'use client';

import { Services } from '@/components/ServicesCard/Services';

// import { Form } from '@/components/Form';
// import { Element } from 'react-scroll';
// import { Socials } from '@/components/Socials';
// import { LinkTelegram } from '@/components/LinkTelegram';
// import { LinkToFeedback } from '@/components/LinkToFeedback';
// import { Section } from '@/components/Section';

const page = () => {
  return (
    <>
      <div className="max-w-[384px] w-full mx-auto">
        <p className="mb-[20px]">test page</p>

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
      {/* <div className="px-6">
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
      </div> */}
      {/* <Section
        isTopPadding={true}
        isBottomPadding={true}
        className="bg-red-500"
      >
        <div>Hello</div>
      </Section>  */}
      <Services />
    </>
  );
};

export default page;
