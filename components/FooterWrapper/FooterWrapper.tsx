'use client';

import { usePathname } from 'next/navigation';

import React from 'react';

type IFooterWrapper = {
  children: React.ReactNode;
};

export const FooterWrapper = ({ children }: IFooterWrapper) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex flex-col  gap-[28px] items-center md:w-full md:py-[16px] xl:py-0  md:flex-row justify-between  ${pathname === '/' ? 'xl:w-[565px]' : 'xl:w-[488px]'}`}
    >
      {children}
    </div>
  );
};
