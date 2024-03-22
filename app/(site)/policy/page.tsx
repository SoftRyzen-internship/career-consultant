import { PortableText } from '@portabletext/react';

import { fetchPolicy } from '@/sanity/requests/fetchPolicy';

import { Section } from '@/components/Section';

const page = async () => {
  const policy = await fetchPolicy();

  return (
    <Section className="bg-customBackground">
      <div className="container">
        <h1 className="font-fixel text-3xl text-text01 uppercase w-full mb-9 xl:text-5xl xl:w-[819px]">
          Політика конфіденційності та захисту персональних даних
        </h1>
        <div className="wrapper prose max-w-none  prose-h2:mt-0 prose-h2:text-[19px]  prose-h2:font-mulish prose-h2:font-medium prose-h2:text-text01 prose-h2:mb-6 prose-p:w-full prose-p:font-mulish prose-p:text-sm prose-p:mb-8 prose-ul:mt-0 prose-li:m-0 prose-li:text-sm prose-li:marker:text-text02 ">
          <PortableText value={policy} />
        </div>
      </div>
    </Section>
  );
};

export default page;
