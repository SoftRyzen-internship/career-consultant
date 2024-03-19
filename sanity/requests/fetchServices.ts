import { client } from '../client';
import { serviceQuery } from './queries/service';

export const fetchServices = async () => {
  const services = await client.fetch(serviceQuery);
  return services;
};
