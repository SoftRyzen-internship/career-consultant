'use client';

import { useState } from 'react';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { NavBar } from '@/components/NavBar';
import { BurgerMenu } from '@/components/BurgerMenu';
import { LinkToFeedback } from '@/components/LinkToFeedback';

import Burger from '@/public/icons/burger.svg';

import ariaLabelBurger from '@/data/common.json';

type IHeader = {
  className: string;
};

export const Header = ({ className }: IHeader) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const onClose = () => setIsBurgerOpen(false);

  return (
    <header className={className}>
      <Container className="h-full flex items-center justify-between">
        <Logo className="ml-2 md:ml-0" />
        <div className="hidden xl:flex items-center justify-between gap-12 mr-2 md:mr-0">
          <NavBar />
          <LinkToFeedback section="header" className="" />
        </div>
        <button
          type="button"
          onClick={() => setIsBurgerOpen(true)}
          className="xl:hidden text-accent active:text-accentPressed "
        >
          <Burger
            className="w-6 h-6 mr-2 md:mr-0"
            aria-label={ariaLabelBurger}
          />
        </button>
        <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} />
      </Container>
    </header>
  );
};
