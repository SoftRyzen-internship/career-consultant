import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Slider } from '@/components/Slider';
import { ServicesCard } from '@/components/ServicesCard';

import servicesLocal from '@/data/services.json';
import { fetchServices } from '@/sanity/requests/fetchServices';

export const Services = async () => {
  const services = await fetchServices();

  const { title } = servicesLocal;
  return (
    <Section isChooseOrFeedbackSection>
      <div className="bg-customBackground flex flex-col justify-center">
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
