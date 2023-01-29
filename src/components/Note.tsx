import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { NoteType } from '../../typings';

import { Context } from '../context';
type Props = {
  note: NoteType;
};

const Note = ({ note }: Props) => {
  const { handleDeleteNote } = useContext(Context);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className='bg-seconds border-[1px] border-gray-800 rounded-md p-4'
    >
      <h3 className='mb-2 text-2xl font-semibold'>{note.title}</h3>
      <div className='bg-background border-[1px] border-gray-800 rounded-md p-4 '>
        <h4 className='mb-3 text-gray-300 font-semibold text-xl'>
          {note.category}
        </h4>
        <p>{note.description}</p>
      </div>
      <div className='flex gap-2 mt-5'>
        <button className='button'>Details</button>
        <button
          onClick={() => handleDeleteNote(note.id)}
          className='button-outline'
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default Note;
