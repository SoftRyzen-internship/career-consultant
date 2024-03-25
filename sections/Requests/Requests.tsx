import classNames from 'classnames';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

import data from '@/data/requests.json';
// import { Slider } from '@/components/Slider';

export type IRequests = {
  className?: string;
};

export const Requests = ({ className = '' }: IRequests) => {
  const { title } = data;
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
        {/* <Slider /> */}
      </Container>
    </Section>
  );
};
