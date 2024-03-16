import Button from '../components/Button';
import { motion } from 'framer-motion';
import image from '../assets/image.jpg';
// import image2 from '../assets/image2.jpg';
// import image3 from '../assets/image3.jpg';
// import image4 from '../assets/image4.jpg';

const Home = () => {
  return (
    <div className='w-full bg-[#1e1e1e] flex flex-col gap-7 items-center justify-center text-center overflow-hidden lg:w-[50%]'>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'just',
          duration: 0.9,
          delay: 0.4,
          ease: 'linear',
        }}
        className='h-56 w-56 rounded-full shdw lg:hidden'
      >
        <img
          src={image}
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
        className='font-jolly text-[5rem] text-white lg:text-8xl'
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
        <p className='mb-6'>
          <span className='code'>{'<>'}</span> Open Source Enthusiast{' '}
          <span className='code'>{'</>'}</span>
        </p>
      </motion.div>

      <Button link='/about' title='About Me' />
    </div>
  );
};
export default Home;
