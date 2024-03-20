import { client } from '../client';
import { policyQuery } from './queries/policyQuery';

export const fetchPolicy = async () => {
  const policy = await client.fetch(policyQuery);
  return policy[0].text;
};
