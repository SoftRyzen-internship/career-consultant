import { PortableTextComponents } from '@portabletext/react';

export const CustomComponents: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const target = value?.target || '_self';

      const rel =
        target === '_blank' ? 'noopener noreferrer nofollow' : undefined;
      return (
        <a href={value?.href} target={target} rel={rel}>
          {children}
        </a>
      );
    },
  },
};
