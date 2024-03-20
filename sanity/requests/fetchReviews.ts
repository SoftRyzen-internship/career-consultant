import { client } from '../client';
import { reviewsQuery } from './queries/reviewsQuery';

export const fetchReviews = async () => {
  const reviews = await client.fetch(reviewsQuery);
  return reviews;
};
