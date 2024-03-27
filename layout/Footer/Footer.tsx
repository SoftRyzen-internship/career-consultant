import Link from 'next/link';

import React from 'react';

import { Foot } from './types';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

import Goit from '@/public/icons/go-it.svg';
import Ryzen from '@/public/icons/softryzen.svg';

type FooterProps = {
  footer: Foot;
  sheet: 'main' | 'policy';
};

export const Footer: React.FC<FooterProps> = ({ footer, sheet }) => {
  const { created, policy, home, links } = footer;
  const { goit, ryzen } = links;
  return (
    <footer className="bg-customBackground relative bord py-5 md:py-0 xl:py-6 ">
      <Container>
        <nav className="flex flex-col items-center gap-[28px] md:gap-0 xl:flex-row justify-between">
          <div
            className={`flex flex-col  gap-[28px] items-center md:w-full md:py-[16px] md:flex-row justify-between ${sheet === 'main' ? 'xl:w-[565px]' : 'xl:w-[488px]'}`}
          >
            <Logo />

            <Link
              className="font-mulish text-xs text-text02 xl:text-[16px] font-medium leading-[1.4] relative policy  transition-all duration-300 hover:text-text01  focus:text-text01 "
              href={sheet === 'main' ? '/policy' : '/'}
            >
              {sheet === 'main' ? policy : home}
            </Link>
          </div>
          <div className="flex flex-col items-center gap-[15px] md:flex-row md:py-[16px] justify-center md:items-start xl:gap-[32px]">
            <p className="inline-block font-mulish text-xs text-text02 xl:text-[16px] font-medium leading-[1.4]">
              {created}
            </p>

            <ul className="flex gap-[28px] list-none ">
              <li>
                <a
                  className="inline-block cursor-pointer text-text03  transition-all duration-300 hover:text-text02 focus:text-text02 "
                  href={goit.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={goit.aria}
                >
                  <Goit className="w-[67px] h-[20px] xl:w-[81px] xl:h-[24px] " />
                </a>
              </li>
              <li>
                <a
                  className="inline-block cursor-pointer text-text03  transition-all duration-300 hover:text-text02 focus:text-text02 "
                  href={ryzen.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={ryzen.aria}
                >
                  <Ryzen className=" w-[135px] h-[20px] xl:w-[161px] xl:h-[24px]" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </footer>
  );
};
