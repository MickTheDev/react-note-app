import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { NoteType } from '../../typings';

import { Context } from '../context';
type Props = {
  note: NoteType;
};

const Note = ({ note }: Props) => {
  const { handleDeleteNote, handleUndoNote } = useContext(Context);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className='bg-seconds border-[1px] border-gray-800 rounded-md p-4 flex flex-col justify-between items-start gap-3'
    >
      <div className='w-full'>
        <h3 className='mb-2 text-2xl font-semibold'>{note.title}</h3>
        <div className='bg-background border-[1px] border-gray-800 rounded-md p-4 h-auto w-full'>
          <h4 className='mb-3 text-gray-300 font-semibold text-xl'>
            {note.category}
          </h4>
          <p>{note.description}</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <button className='button'>Details</button>
        {!note.trashed && (
          <button
            onClick={() => handleDeleteNote(note.id)}
            className='button-outline'
          >
            Delete
          </button>
        )}
        {note.trashed && (
          <button
            onClick={() => handleUndoNote(note.id)}
            className='button-outline'
          >
            Undo
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Note;
