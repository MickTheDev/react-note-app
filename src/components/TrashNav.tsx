import React, { useContext } from 'react';
import { Context } from '../context';

type Props = {};

const TrashNav = (props: Props) => {
  const { handleEmptyBin, trashedCounter } = useContext(Context);
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mb-10 relative'>
      <h3 className='title'>
        Trash
        <span className=' flex items-center justify-center ml-2 w-7 h-7 text-lg bg-blue-600 rounded-[50%]'>
          {trashedCounter}
        </span>
      </h3>
      <form
        action='#'
        onSubmit={(e) => e.preventDefault()}
        className='w-full flex flex-col md:flex-row md:justify-end gap-3'
      >
        <button
          onClick={handleEmptyBin}
          className='button'
        >
          Delete all
        </button>
      </form>
    </div>
  );
};

export default TrashNav;
