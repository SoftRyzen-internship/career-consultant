import { client } from '../client';
import { reviewQuery } from './queries/review';

export const fetchReviews = async () => {
  const reviews = await client.fetch(reviewQuery);
  return reviews;
};
