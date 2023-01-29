import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {};

const Landing = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      className='w-full h-screen flex items-center justify-center text-white ml-[60px] md:ml-[110px] xl:mx-auto px-4 md:px-10 overflow-hidden'
    >
      <div className='flex flex-col items-start justify-center'>
        <h2 className='text-2xl sm:text-4xl font-semibold mb-4'>
          Best notes app for everyone!
        </h2>
        <p className='text-xl text-gray-400 font-semibold mb-8'>
          Create your first Note
        </p>
        <Link
          to='/new'
          className='px-8 py-4 bg-blue-600 rounded-xl text-xl'
        >
          Get started
        </Link>
      </div>
      <img
        src='/landing.svg'
        alt='Landing'
        className='h-[400px] hidden xl:block'
      />
    </motion.div>
  );
};

export default Landing;
