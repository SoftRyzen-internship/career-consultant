import React from 'react';

import { fetchServices } from '@/sanity/requests/fetchServices';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

import servicesLocal from '@/data/services.json';
import { Slider } from '@/components/Slider';
import { ServicesCard } from '@/components/ServicesCard';

export const Services: React.FC = async () => {
  const services = await fetchServices();

  const { title } = servicesLocal;
  return (
    <Section isChooseOrFeedbackSection>
      <div
        id="services"
        className="bg-customBackground flex flex-col justify-center"
      >
        <Container>
          <SectionTitle
            text={title}
            center={false}
            className="mb-7  xl:mb-[60px] "
          />
          <Slider
            data={services}
            component={ServicesCard}
            section={'services'}
          />
        </Container>
      </div>
    </Section>
  );
};
