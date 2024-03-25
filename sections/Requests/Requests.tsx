import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

import data from '@/data/requests.json';

export type IRequests = {
  className?: string;
};

export const Requests = ({ className = '' }: IRequests) => {
  const { title } = data;
  return (
    <Section className={classNames('', className)}>
      <Container>
        <SectionTitle
          text={title}
          center={true}
          className="mb-4 md:mb-6 xl:mb-7 md:text-left md:w-[248px] xl:w-[292px]"
        />
      </Container>
    </Section>
  );
};
