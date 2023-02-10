import React, { useContext } from 'react';
import { Context } from '../context';

type Props = {};

const FavoriteNav = (props: Props) => {
  const { favoriteCounter } = useContext(Context);
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mb-10 relative'>
      <h3 className='title'>
        Favorite
        <span className=' flex items-center justify-center ml-2 w-7 h-7 text-lg bg-blue-600 rounded-[50%]'>
          {favoriteCounter}
        </span>
      </h3>
    </div>
  );
};

export default FavoriteNav;
