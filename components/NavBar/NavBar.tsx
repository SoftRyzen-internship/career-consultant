import { Link } from 'react-scroll';
import jsonData from '@/data/common.json';
import RightArrow from '@/public/icons/right-arrow-link.svg';

export const NavBar = () => {
  const navItems = jsonData.navBar[0];
  const data = [...navItems.request, ...navItems.reviews, ...navItems.feedback];

  return (
    <nav className="lg:w-[299px]">
      <ul className="flex flex-col gap-[24px] xl:flex-row xl:gap-[48px]">
        {data.map((item, index) => (
          <li key={index}>
            <Link
              to={item.moveTo}
              smooth={true}
              offset={50}
              duration={500}
              delay={500}
              ignoreCancelEvents={false}
              className="navbar-link hover-pseudo-underline flex justify-between items-center font-fixel text-3xl text-text01 cursor-pointer transition-[color] active:text-text02
              xl:text-base xl:font-normal xl:font-mulish xl:text-text02 xl:hover:text-text01"
            >
              <span>{item.text}</span>
              <RightArrow className="navbar-icon w-[24px] h-[24p] stroke-text01 stroke-2 xl:hidden" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
