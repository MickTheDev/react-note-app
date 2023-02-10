import React, { useContext } from 'react';
import { Context } from '../context';

type Props = {};

const NotesNav = ({}: Props) => {
  const { notesCounter, handleDeleteAll } = useContext(Context);
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mb-10 relative'>
      <h3 className='title'>
        Notes
        <span className=' flex items-center justify-center ml-2 w-7 h-7 text-lg bg-blue-600 rounded-[50%]'>
          {notesCounter}
        </span>
      </h3>
      <form
        action='#'
        onSubmit={(e) => e.preventDefault()}
        className='w-full flex flex-col md:flex-row md:justify-end gap-3'
      >
        <input
          type='text'
          className='bg-transparent outline-none p-2 border-[1px] rounded-md w-full md:max-w-[150px]'
          placeholder='Search notes'
        />
        <select className='bg-background outline-none p-2 border-[1px] rounded-md w-full md:max-w-[100px] cursor-pointer'>
          <option value='sorting'>Sorting</option>
          <option value='favorites'>Favorites</option>
        </select>
        <button
          onClick={handleDeleteAll}
          className='button'
        >
          Trash all
        </button>
      </form>
    </div>
  );
};

export default NotesNav;
