import { Metadata } from 'next';

import { fetchPolicy } from '@/sanity/requests/fetchPolicy';

import { Policy } from '@/sections/Policy';

import metaInfo from '@/data/meta/policy.json';

const { title, slug, openGraph } = metaInfo;

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${slug}/` as string;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  alternates: {
    canonical: baseUrl,
  },
  openGraph: { ...openGraph, url: `${baseUrl}` },
};

const page = async () => {
  const policy = await fetchPolicy();

  return <Policy data={policy} />;
};

export default page;
