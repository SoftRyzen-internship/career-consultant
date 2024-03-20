import { client } from '../client';
import { servicesQuery } from './queries/servicesQuery';

export const fetchServices = async () => {
  const services = await client.fetch(servicesQuery);
  return services;
};
