'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { RequestsList } from '@/components/RequestsList';
import { Slider } from '@/components/Slider';
import { RequestCard } from '@/components/RequestCard';

import dataJson from '@/data/requests.json';

export type IRequests = {
  className?: string;
};

export const Requests = ({ className = '' }: IRequests) => {
  const { title, requests } = dataJson;
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <Section
      className={classNames('', className)}
      isBottomPadding={true}
      isTopPadding={true}
    >
      <Container>
        <SectionTitle
          text={title}
          center={false}
          className="mb-7 xl:mb-[60px]"
        />
        {isDesktop ? (
          <RequestsList requestsList={requests} />
        ) : (
          <Slider
            section={'requests'}
            data={requests}
            component={RequestCard}
          />
        )}
      </Container>
    </Section>
  );
};
