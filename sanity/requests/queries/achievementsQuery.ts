import { groq } from 'next-sanity';

export const achievementsQuery = groq`*[_type == "achievements"]{
  
  item[]{
    _key,
    quantity,
    description
  }
}`;
