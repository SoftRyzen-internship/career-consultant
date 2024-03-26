import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Slider } from '@/components/Slider';
import { FeedbackCard } from '@/components/FeedbackCard';

import data from '@/data/feedback.json';
import { fetchReviews } from '@/sanity/requests/fetchReviews';

export async function Reviews() {
  const { title } = data;
  const reviews = await fetchReviews();

  return (
    <Section
      isChooseOrFeedbackSection={true}
      className="py-[60px] md:py-[60px] xl:py-[80px]"
    >
      <Container className="xl:relative">
        <SectionTitle
          text={title}
          className="mb-[28px] xl:absolute xl:top-0 xl:left-[32px]"
        />
        <Slider section={'reviews'} component={FeedbackCard} data={reviews} />
      </Container>
    </Section>
  );
}
