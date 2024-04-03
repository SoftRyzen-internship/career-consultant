import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { CustomComponents } from '@/components/CustomComponents';

type IPolicy = {
  data: PortableTextBlock[];
};

export const Policy = ({ data }: IPolicy) => {
  return (
    <Section className=" bg-customBackground pt-[30px] pb-[28px] md:pt-[40px] md:pb-[29px] xl:pt-[100px] xl:pb-[74px] ">
      <Container className="xl:w-[1072px]">
        <h1 className="font-fixel text-3xl text-text01 uppercase  mb-9 md:w-full md:mb-[40px] xl:text-5xl xl:w-[819px] xl:mb-[60px]">
          Політика конфіденційності та захисту персональних даних
        </h1>
        <div className="prose max-w-none  [&>p:nth-child(5)]:mb-5  [&>p:nth-child(19)]:mb-0 prose-h2:mt-0 prose-h2:text-lg prose-h2:font-mulish prose-h2:font-medium prose-h2:text-text01 prose-h2:mb-6 prose-p:text-text02 prose-p:font-mulish prose-p:text-sm prose-p:mb-8  prose-ul:m-0  prose-li:m-0 prose-ul:text-text02 prose-li:text-sm prose-li:marker:text-text02 prose-a:font-mulish prose-a:text-text02 prose-a:text-sm md:prose-p:mb-12 xl:prose-h2:mb-7 xl:prose-p:mb-[60px] xl:prose-h2:text-2xl xl:prose-p:text-[18px] xl:prose-p:leading-[1.5] ">
          <PortableText value={data} components={CustomComponents} />
        </div>
      </Container>
    </Section>
  );
};
