import React from 'react';
import { motion } from 'framer-motion';
import { NotesNav, NotesList } from '../components';
import { NoteType } from '../../typings';

type Props = {
  notes: NoteType[];
  counter: String;
};

const Notes = ({ notes, counter }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      className='h-screen flex flex-col justify-center w-full text-white max-w-5xl ml-[60px] md:ml-[110px] xl:mx-auto py-24 px-4 overflow-hidden'
    >
      <NotesNav counter={counter} />
      <NotesList notes={notes} />
    </motion.div>
  );
};

export default Notes;
