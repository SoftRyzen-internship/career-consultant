import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Socials } from '@/components/Socials';
import { Form } from '@/components/Form';

import data from '@/data/feedbackSection.json';
import common from '@/data/common.json';

export type IFeedback = {
  className?: string;
};

export const Feedback = ({ className = '' }: IFeedback) => {
  const { title, text } = data;
  const { moveToFeedback } = common;

  return (
    <Section
      className={classNames('bg-white', className)}
      isChooseOrFeedbackSection
      sectionId={moveToFeedback}
    >
      <div className="relative">
        <div className="absolute top-[-67px] left-0" id="feedbackId"></div>
      </div>

      <Container className="md:flex justify-between">
        <div className="xl:pt-[26px]">
          <SectionTitle
            text={title}
            center={true}
            className="mb-4 md:mb-8 xl:mb-[30px] md:text-left md:w-[248px] xl:w-[280px]"
          />
          <p className="mb-6 md:mb-[80px] xl:mb-[52px] w-[260px] mx-auto md:ml-0 font-mulish text-text02 text-sm xl:text-base xl:font-normal text-center md:text-left md:w-[248px] xl:w-[280px]">
            {text}
          </p>
          <Socials className="w-[279px] mx-auto xl:w-[308px]" />
        </div>
        <Form />
      </Container>
    </Section>
  );
};
