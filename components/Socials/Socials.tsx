import Link from 'next/link';

import EmailIcon from '../../public/icons/email.svg';
import TelegramIcon from '../../public/icons/telegram.svg';
import common from '../../data/common.json';
import classNames from 'classnames';

const { email, telegram } = common;

type ISocials = {
  className?: string;
};

export const Socials = ({ className = '' }: ISocials) => {
  return (
    <ul
      className={classNames('text-sm xl:text-base xl:font-normal', className)}
    >
      <li>
        <Link
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="py-2 xl:py-3 inline-flex gap-4 items-center text-accent active:text-accentPressed xl:hover:text-accentHover"
        >
          <EmailIcon className="w-6 h-6 stroke-accent" />
          <span className="text-text01 active:text-accentPressed xl:hover:text-accentHover">
            {email}
          </span>
        </Link>
      </li>
      <li>
        <Link
          href={`https://t.me/${telegram.substring(1)}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="py-2 xl:py-3 inline-flex gap-4 items-center text-accent"
        >
          <TelegramIcon className="w-6 h-6" />
          <span className="text-text01 active:text-accentPressed xl:hover:text-accentHover">
            {telegram}
          </span>
        </Link>
      </li>
    </ul>
  );
};
