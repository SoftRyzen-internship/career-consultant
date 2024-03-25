import { useEffect, useState } from 'react';
import { fetchServices } from '@/sanity/requests/fetchServices';
import { ServicesCard } from '.';

type IService = {
  _id: string;
  title: string;
  description: [];
  price: string;
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

  return (
    <ul>
      {services.map((service: IService) => {
        return <ServicesCard key={service._id} service={service} />;
      })}{' '}
    </ul>
    // <ul>
    //   <li>
    //     <ServicesCard key={0} service={services[0]} />
    //   </li>
    //   <li>
    //     <ServicesCard key={1} service={services[1]} />
    //   </li>
    // </ul>
  );
};
