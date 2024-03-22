import { fetchPolicy } from '@/sanity/requests/fetchPolicy';
import { PortableText } from '@portabletext/react';
const Page = async () => {
  const policy = await fetchPolicy();

  return (
    <div className="prose prose-strong:text-red-500">
      {' '}
      {/* стилі до strong не застосовуються */}
      <PortableText value={policy} />
    </div>
  );
};

export default Page;
