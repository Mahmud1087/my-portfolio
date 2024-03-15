import { motion } from 'framer-motion';

const Heading = ({ title }) => {
  return (
    <motion.h1
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{
        type: 'linear',
        duration: 0.7,
        delay: 0.4,
        ease: [0.2, 0.71, 0.2, 1.01],
      }}
      className='text-white font-jolly text-[5rem]'
    >
      <span className='code'>{`< `}</span>
      {title}
      <span className='code'>{` />`}</span>
    </motion.h1>
  );
};
export default Heading;
