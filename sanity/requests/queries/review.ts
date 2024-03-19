import { groq } from 'next-sanity';

export const reviewQuery = groq`*[_type == "reviews"]{
  name,
  position,
  description,
  _id
}`;
