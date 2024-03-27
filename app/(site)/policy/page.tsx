import { fetchPolicy } from '@/sanity/requests/fetchPolicy';

import { Policy } from '@/sections/Policy';

const page = async () => {
  const policy = await fetchPolicy();

  return <Policy data={policy} />;
};

export default page;
