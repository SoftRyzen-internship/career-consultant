import { PortableTextComponents } from '@portabletext/react';

export const CustomComponents: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const target = value?.target;

      const rel = 'noopener noreferrer nofollow';
      return (
        <a href={value?.href} target={target} rel={rel}>
          {children}
        </a>
      );
    },
  },
};
