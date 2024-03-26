import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Socials } from '@/components/Socials';
import { Form } from '@/components/Form';

import data from '@/data/feedbackSection.json';

export type IFeedback = {
  className?: string;
};

export const Feedback = ({ className = '' }: IFeedback) => {
  const { title, text } = data;
  return (
    <Section
      className={classNames('bg-white', className)}
      isChooseOrFeedbackSection
    >
      <Container className="md:flex justify-between">
        <div>
          <SectionTitle
            text={title}
            center={true}
            className="mb-4 md:mb-6 xl:mb-7 md:text-left md:w-[248px] xl:w-[280px]"
          />
          <p className="mb-6 md:mb-[60px] xl:mb-[52px] w-[260px] mx-auto md:ml-0 font-mulish text-text02 text-sm xl:text-base xl:font-normal text-center md:text-left md:w-[248px] xl:w-[280px]">
            {text}
          </p>
          <Socials className="w-[279px] mx-auto xl:w-[308px]" />
        </div>
        <Form />
      </Container>
    </Section>
  );
};
