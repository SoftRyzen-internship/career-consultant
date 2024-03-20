import { groq } from 'next-sanity';

export const servicesQuery = groq`*[_type == "services"]{
  title,
  duration,
  description,
  price,
  _id
}`;
