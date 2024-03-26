'use client';

import { Button } from '@/components/Button';
// import { NavBar } from '@/components/NavBar/NavBar';
import { Element } from 'react-scroll';
import { Logo } from '@/components/Logo';
import { Socials } from '@/components/Socials';
import { LinkTelegram } from '@/components/LinkTelegram';
import { LinkToFeedback } from '@/components/LinkToFeedback';
import { RequestCard } from '@/components/RequestCard';
import { WhatChoose } from '@/sections/WhatChoose';

import requests from '@/data/requests.json';

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

        {/* <NavBar /> */}
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
      <Logo />

      <Socials />
      <div className="mb-5"></div>
      <div className="px-3">
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
        <ul>
          {requests.map(request => {
            return (
              <RequestCard
                key={request.id}
                request={request}
                className="mb-5"
              />
            );
          })}
        </ul>
      </div>
      <WhatChoose />
    </>
  );
};

export default page;
