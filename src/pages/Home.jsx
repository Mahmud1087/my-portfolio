import Button from '../components/Button';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='w-[50%] bg-[#1e1e1e] flex flex-col gap-7 items-center justify-center text-center overflow-hidden'>
      <motion.h1
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          type: 'linear',
          duration: 0.7,
          delay: 0.4,
          ease: [0.2, 0.71, 0.2, 1.01],
        }}
        className='font-jolly text-8xl text-white'
      >
        Mahmud Abdulazeez
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'just',
          duration: 0.9,
          delay: 0.4,
          ease: [0.2, 0.71, 0.2, 1.01],
        }}
        className='font-lato text-[#A7A1A1] text-2xl flex flex-col gap-3'
      >
        <p>
          <span className='code'>{'<>'}</span> Frontend Developer{' '}
          <span className='code'>{'</>'}</span>
        </p>
        <p>
          <span className='code'>{'<>'}</span> Technical Writer{' '}
          <span className='code'>{'</>'}</span>
        </p>
        <p>
          <span className='code'>{'<>'}</span> Open Source Enthusiast{' '}
          <span className='code'>{'</>'}</span>
        </p>
      </motion.div>

      <Button link='/about' title='About Me' />
    </div>
  );
};
export default Home;
