'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import footer from '@/data/footer.json';

export const FooterLink = () => {
  const pathname = usePathname();
  const { home, policy } = footer;

  return (
    <Link
      className="font-mulish text-xs text-text02 xl:text-[16px] font-normal leading-[1.4] relative policy  transition-all duration-300 hover:text-text01  focus:text-text01 "
      href={pathname === '/' ? '/policy' : '/'}
    >
      {pathname === '/' ? policy : home}
    </Link>
  );
};
