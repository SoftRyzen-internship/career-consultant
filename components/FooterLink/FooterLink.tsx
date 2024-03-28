'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import footer from '@/data/footer.json';

export const FooterLink = () => {
  const pathname = usePathname();
  const { home, policy } = footer;

  return (
    <Link href={pathname === '/' ? '/policy' : '/'}>
      {pathname === '/' ? policy : home}
    </Link>
  );
};
