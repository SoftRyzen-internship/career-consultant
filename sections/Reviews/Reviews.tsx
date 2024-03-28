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
    <Section isTopPadding={true} isBottomPadding={true} sectionId="reviews">
      <Container>
        <SectionTitle text={title} className="mb-[28px] xl:mb-[60px]" />
        <Slider section={'reviews'} component={FeedbackCard} data={reviews} />
      </Container>
    </Section>
  );
}
