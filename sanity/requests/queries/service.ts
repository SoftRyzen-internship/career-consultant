import { groq } from 'next-sanity';

export const serviceQuery = groq`*[_type == "services"]{
  title,
  duration,
  description,
  price,
  _id
}`;
