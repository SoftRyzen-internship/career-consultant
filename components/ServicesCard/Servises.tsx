import { useEffect, useState } from 'react';
import { fetchServices } from '@/sanity/requests/fetchServices';
import { ServicesCard } from '.';

type IService = {
  _id: string;
  title: string;
  description: [];
  duration?: string | undefined;
};

export const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetchServices();

        setServices(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetch();
  }, []);

  //   console.log(services);

  return (
    <ul>
      {services.map((service: IService) => {
        return <ServicesCard key={service._id} service={service} />;
      })}{' '}
    </ul>
  );
};
