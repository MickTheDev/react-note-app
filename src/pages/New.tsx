import React from 'react';
import { motion } from 'framer-motion';
import { NewNoteForm } from '../components';

type Props = {};

const New = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      className='h-screen flex flex-col justify-center w-full text-white max-w-5xl ml-[60px] md:ml-[110px] xl:mx-auto py-24 px-4 overflow-hidden'
    >
      <NewNoteForm />
    </motion.div>
  );
};

export default New;
