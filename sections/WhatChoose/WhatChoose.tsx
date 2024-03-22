import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { LinkTelegram } from '@/components/LinkTelegram';

import data from '@/data/whatChoose.json';

export type IWhatChoose = {
  // children: ReactNode;
  isGeneralSection: boolean;
  isChooseOrFeedbackSection?: boolean;
  className?: string;
};

export const WhatChoose = ({ className = '' }: IWhatChoose) => {
  const { title, text } = data;
  return (
    <Section
      className={classNames('choose pb-7', className)}
      isGeneralSection={false}
      isChooseOrFeedbackSection={false}
    >
      <Container>
        <div className="relative md:static top-[384px] py-7 md:py-10 xl:py-20">
          <SectionTitle
            text={title}
            center={true}
            className="mb-4 md:mb-6 xl:mb-7 md:text-left md:w-[248px] xl:w-[292px]"
          />
          <p className="mb-10 md:mb-[84px] xl:mb-[54px] w-[284px] mx-auto md:ml-0 font-mulish text-sm xl:text-base xl:font-normal  text-center md:text-left md:w-[248px] xl:w-[292px]">
            {text}
          </p>
          <LinkTelegram />
        </div>
      </Container>
    </Section>
  );
};
