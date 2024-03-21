import classNames from 'classnames';

import { IWhatChoose } from './types';

import { SectionTitle } from '@/components/SectionTitle';
import { LinkTelegram } from '@/components/LinkTelegram';

import dataJSON from '../../data/whatChoose.json';

export const WhatChoose = ({ className = '' }: IWhatChoose) => {
  const { title, text } = dataJSON;
  return (
    <section className={classNames('', className)}>
      <div className="container">
        <SectionTitle text={title} />
        <p>{text}</p>
        <LinkTelegram />
      </div>
    </section>
  );
};
