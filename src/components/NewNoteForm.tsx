import React, { useContext } from 'react';
import { Favorite } from '../pages';

import { Context } from '../context';
import { Link } from 'react-router-dom';

type Props = {};

const NewNoteForm = (props: Props) => {
  const {
    handleAddNote,
    setTitle,
    title,
    setDescription,
    description,
    setCategory,
    category,
    setFavorite,
    favorite,
  } = useContext(Context);

  return (
    <div className='flex items-center justify-between gap-8 text-white'>
      <div className='flex flex-col gap-5 items-start justify-between w-full lg:w-[544px]'>
        <h3 className='title'>Create new note</h3>
        <form className='flex flex-col gap-4 w-full'>
          <label className='flex flex-col justify-center items-start'>
            Title
            <input
              type='text'
              className='border-[1px] border-gray-800 bg-transparent outline-none rounded-md px-4 py-2 w-full'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              maxLength={25}
            />
          </label>
          <label className='flex flex-col justify-center items-start'>
            Description
            <textarea
              className='border-[1px] border-gray-800 bg-transparent outline-none rounded-md px-4 py-2 w-full min-h-[100px] max-h-[150px]'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              maxLength={150}
            />
          </label>
          <label className='flex flex-col justify-center items-start'>
            Category
            <select
              className='border-[1px] border-gray-800 bg-background outline-none rounded-md px-4 py-3 w-full'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='Shopping'>Shopping</option>
              <option value='Traveling'>Traveling</option>
              <option value='Business'>Business</option>
              <option value='Cooking'>Cooking</option>
              <option value='Other'>Other</option>
            </select>
          </label>
          <label className='flex flex-row gap-3'>
            <input
              type='checkbox'
              onChange={(e) => setFavorite(e.target.checked)}
              checked={favorite}
            />
            Is favorite
          </label>
          <Link
            to='/notes'
            className='button'
            onClick={() => handleAddNote()}
          >
            Create new note
          </Link>
        </form>
      </div>
      <img
        src='/notes.svg'
        alt='notes'
        className='w-[400px] hidden lg:block'
      />
    </div>
  );
};

export default NewNoteForm;
