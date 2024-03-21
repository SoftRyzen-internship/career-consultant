import { PortableText } from '@portabletext/react';

import { fetchPolicy } from '@/sanity/requests/fetchPolicy';

const page = async () => {
  const policy = await fetchPolicy();
  return (
    <div className="container">
      <div className="prose prose-h2:mt-8 prose-h2:mb-6 prose-h2:font-mulish prose-p:font-fixel prose-h2:text-lg prose-p:text-sm prose-li:m-0 prose-li:p-0 prose-li:marker:text-text02  prose-h2:text-text01  prose-p:text-text02 ">
        <PortableText value={policy} />
      </div>
    </div>
  );
};

export default page;
