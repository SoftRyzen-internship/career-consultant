import React from 'react';

import { fetchServices } from '@/sanity/requests/fetchServices';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

import servicesLocal from '@/data/services.json';
import { Slider } from '@/components/Slider';
import { ServicesCard } from '@/components/ServicesCard';

// type ServicesProps = {
//   servicesDatas: IServices;
// };

export const Services: React.FC = async () => {
  const services = await fetchServices();
  console.log(services);

  const { title } = servicesLocal;
  return (
    <Section isChooseOrFeedbackSection>
      <div className="bg-customBackground ">
        <Container>
          <SectionTitle
            text={title}
            center={true}
            className="mb-4 md:mb-6 xl:mb-7 md:text-left md:w-[248px] xl:w-[292px]"
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
