import React from 'react';
import { NoteType } from '../../typings';
import { NotesList } from '../components';
import { motion } from 'framer-motion';

type Props = {
  trashed: NoteType[];
};

const Trash = ({ trashed }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      className='h-screen flex flex-col justify-center w-full text-white max-w-5xl ml-[60px] md:ml-[110px] xl:mx-auto py-24 px-4 overflow-hidden'
    >
      <NotesList notes={trashed} />
    </motion.div>
  );
};

export default Trash;
