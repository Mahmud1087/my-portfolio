import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ link, title }) => {
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{
        type: 'linear',
        duration: 0.7,
        delay: 0.4,
        ease: [0.2, 0.71, 0.2, 1.01],
      }}
    >
      <Link
        to={link}
        className='w-fit px-8 py-2 rounded-md border border-[#21ff60ad] bg-[#21ff60ad] hover:bg-transparent transition-all ease-in-out mt-6 font-lexend text-white font-semibold text-base mx-5 sm:mx-0 sm:text-xl sm:px-8 sm:py-3 lg:px-7 lg:py-2 lg:text-base'
      >
        {title}
      </Link>
    </motion.div>
  );
};
export default Button;
