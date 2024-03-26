import { RequestCard } from '@/components/RequestCard';

type Description = {
  id: number;
  text: string;
};

type Request = {
  id: number;
  alt: string;
  icon: string;
  title: string;
  list: Description[];
};

type IRequestsList = {
  requestsList: Request[];
};

export const RequestsList = ({ requestsList }: IRequestsList) => {
  return (
    <ul className="flex gap-8">
      {requestsList.map(request => {
        return <RequestCard key={request.id} card={request} />;
      })}
    </ul>
  );
};
