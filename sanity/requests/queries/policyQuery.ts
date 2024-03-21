import { groq } from 'next-sanity';

export const policyQuery = groq`*[_type == "policy"]{
  text
}`;
