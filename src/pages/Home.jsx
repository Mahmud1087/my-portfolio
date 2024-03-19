import Button from '../components/Button';
import { motion } from 'framer-motion';
// import image from '../assets/image.jpg';
import image4 from '../assets/image4.jpg';

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#1e1e1e] flex flex-col gap-4 items-center justify-center text-center overflow-hidden sm:gap-0 lg:w-[50%]'>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'just',
          duration: 0.9,
          delay: 0.4,
          ease: 'linear',
        }}
        className='h-40 w-40 rounded-full shdw sm:h-56 sm:w-56 lg:hidden'
      >
        <img
          src={image4}
          alt='Developer image'
          className='w-full h-full rounded-[inherit] object-cover object-left-top'
        />
      </motion.div>
      <motion.h1
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          type: 'linear',
          duration: 0.7,
          delay: 0.4,
          ease: [0.2, 0.71, 0.2, 1.01],
        }}
        className='font-jolly text-[3.2rem] text-white sm:text-[5rem] lg:text-[5.5rem]'
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
        className='font-lato text-[#A7A1A1] text-base flex flex-col gap-2 sm:text-2xl lg:text-xl'
      >
        <p>
          <span className='code'>{'<>'}</span> Frontend Developer{' '}
          <span className='code'>{'</>'}</span>
        </p>
        <p>
          <span className='code'>{'<>'}</span> Technical Writer{' '}
          <span className='code'>{'</>'}</span>
        </p>
        <p className='mb-16 lg:mb-12'>
          <span className='code'>{'<>'}</span> Open Source Enthusiast{' '}
          <span className='code'>{'</>'}</span>
        </p>
      </motion.div>

      <Button link='/about' title='About Me' />
    </div>
  );
};
export default Home;
