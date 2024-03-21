import { groq } from 'next-sanity';

export const reviewsQuery = groq`*[_type == "reviews"]{
  name,
  position,
  text,
  _id
}`;
