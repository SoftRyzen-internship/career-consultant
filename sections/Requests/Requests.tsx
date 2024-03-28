'use client';

import React from 'react';

import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Slider } from '@/components/Slider';
import { RequestCard } from '@/components/RequestCard';

import dataJson from '@/data/requests.json';

export type IRequests = {
  className?: string;
};

export const Requests = ({ className = '' }: IRequests) => {
  const { title, requests } = dataJson;

  return (
    <Section
      className={classNames('', className)}
      isTopPadding={true}
      sectionId="requests"
    >
      <Container>
        <SectionTitle
          text={title}
          center={false}
          className="mb-7 xl:mb-[60px]"
        />

        <Slider section={'requests'} data={requests} component={RequestCard} />
      </Container>
    </Section>
  );
};
