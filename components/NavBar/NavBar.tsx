'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import jsonData from '@/data/common.json';

import RightArrow from '@/public/icons/right-arrow-link.svg';

type INavBar = {
  onClick?: () => void;
};

export const NavBar = ({ onClick }: INavBar) => {
  const data = jsonData.navBar;
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-[24px] xl:inline-flex xl:flex-row xl:gap-[48px]">
        {data.map((item, index) => (
          <li key={index}>
            {pathname === '/policy' ? (
              <Link
                href={`/#${item.moveTo}`}
                onClick={onClick}
                className="navbar-link hover-pseudo-underline flex justify-between items-center font-fixel text-3xl text-text01 cursor-pointer transition-[color] duration-300 active:text-accent
              xl:text-base xl:font-normal xl:font-mulish xl:text-text02 xl:hover:text-text01"
              >
                <span>{item.text}</span>
                <RightArrow className="navbar-icon w-[24px] h-[24p] stroke-text01 stroke-2 xl:hidden" />
              </Link>
            ) : (
              <ScrollLink
                to={item.moveTo}
                href="/"
                smooth={true}
                offset={-10}
                spy={true}
                duration={500}
                ignoreCancelEvents={false}
                onClick={onClick}
                className="navbar-link hover-pseudo-underline flex justify-between items-center font-fixel text-3xl text-text01 cursor-pointer transition-[color] duration-300 active:text-accent
              xl:text-base xl:font-normal xl:font-mulish xl:text-text02 xl:hover:text-text01"
              >
                <span>{item.text}</span>
                <RightArrow className="navbar-icon w-[24px] h-[24p] stroke-text01 stroke-2 xl:hidden" />
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
