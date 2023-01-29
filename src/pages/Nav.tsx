import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMenu, AiOutlineHeart } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { HiArrowSmRight } from 'react-icons/hi';

type Props = {};

const Nav = ({}: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div
      className={`absolute left-0 h-screen z-50 ${
        menuOpen ? 'w-[220px] md:w-[320px] px-4' : 'md:w-[100px] w-[55px] px-1'
      } bg-[#0D1016] text-white flex flex-col justify-start gap-[50px] md:px-4 py-6 ease-in-out duration-300 border-r-[1px] border-[#f2f2f2]`}
    >
      <div
        className='absolute -right-14 md:-right-20 border-2 border-[#f2f2f2] p-1 md:p-3 rounded-xl w-fit ease-in-out duration-200'
        onClick={handleToggleMenu}
      >
        <HiArrowSmRight
          size={30}
          className={`${
            !menuOpen ? 'rotate-0' : 'rotate-180'
          } ease-in-out duration-300 delay-150 scale-75 md:scale-100`}
        />
      </div>
      <Link
        to='/'
        onClick={handleToggleMenu}
      >
        <h1 className='p-4 font-semibold text-2xl'>
          {menuOpen && 'Notes app'}
        </h1>
      </Link>
      <nav>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link
              to='/new'
              className={`navLink ${menuOpen && 'justify-start'}`}
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlinePlus
                size={25}
                className='scale-75 md:scale-100'
              />
              {menuOpen && 'Create new'}
            </Link>
          </li>
          <li>
            <Link
              to='/notes'
              className={`navLink ${menuOpen && 'justify-start'}`}
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineMenu
                size={25}
                className='scale-75 md:scale-100'
              />
              {menuOpen && 'Notes'}
            </Link>
          </li>
          <li>
            <Link
              to='/trash'
              className={`navLink ${menuOpen && 'justify-start'}`}
              onClick={() => setMenuOpen(false)}
            >
              <BsFillTrashFill
                size={25}
                className='scale-75 md:scale-100'
              />
              {menuOpen && 'Trash'}
            </Link>
          </li>
          <li>
            <Link
              to='/favorite'
              className={`navLink ${menuOpen && 'justify-start'}`}
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineHeart
                size={25}
                className='scale-75 md:scale-100'
              />
              {menuOpen && 'Favorite'}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
