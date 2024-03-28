'use client';

import { useState } from 'react';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { NavBar } from '@/components/NavBar';
import { BurgerMenu } from '@/components/BurgerMenu';
import { LinkToFeedback } from '@/components/LinkToFeedback';

import Burger from '@/public/icons/burger.svg';

import dataJson from '@/data/common.json';

type IHeader = {
  className: string;
};

export const Header = ({ className }: IHeader) => {
  const { ariaLabelBurger } = dataJson;
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
          aria-label={ariaLabelBurger}
          onClick={() => setIsBurgerOpen(true)}
          className="xl:hidden text-accent active:text-accentPressed p-2 md:p-0"
        >
          <Burger className="w-6 h-6" />
        </button>
        <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} />
      </Container>
    </header>
  );
};
