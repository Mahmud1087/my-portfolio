// import image from '../assets/image.jpg';
import image4 from '../assets/image4.jpg';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'just',
        duration: 0.9,
        delay: 0.4,
        ease: 'linear',
      }}
      className='hidden relative w-[35%] h-screen bg-[#1e1e1e] lg:block'
    >
      <img src={image4} alt='Image' className='h-full w-full' />
      <div className='absolute w-full flex flex-col items-center justify-center bottom-10 text-white'>
        <h1 className='font-jolly text-5xl'>Mahmud Abdulazeez</h1>
        <p className='font-lexend bg-[#21ff60ad] text-black px-4 py-1 font-bold rounded-lg'>
          Frontend Developer
        </p>
        <div className='flex gap-6 mt-6 text-xl'>
          <a
            href='https://www.linkedin.com/in/enesifrontenddev'
            target='_blank'
            className='hover:bg-[#21ff60ad] p-2 rounded-md'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://web.facebook.com/mahmud.mahmud.1000469'
            className='hover:bg-[#21ff60ad] p-2 rounded-md transition-all'
            target='_blank'
          >
            <FaFacebook />
          </a>
          <a
            href='https://twitter.com/MahmudEnesi'
            target='_blank'
            className='hover:bg-[#21ff60ad] p-2 rounded-md transition-all'
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default Hero;
