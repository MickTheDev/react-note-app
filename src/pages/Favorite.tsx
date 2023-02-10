import React from 'react';
import { FavoriteNav, NotesList } from '../components';
import { motion } from 'framer-motion';
import { NoteType } from '../../typings';

type Props = {
  favoriteNotes: NoteType[];
};

const Favorite = ({ favoriteNotes }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      className='h-screen flex flex-col justify-center w-full text-white max-w-5xl ml-[60px] md:ml-[110px] xl:mx-auto py-24 px-4 overflow-hidden'
    >
      <FavoriteNav />
      <NotesList notes={favoriteNotes} />
    </motion.div>
  );
};

export default Favorite;
