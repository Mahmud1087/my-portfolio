import image from '../assets/image.jpg';
// import image2 from '../assets/image2.jpg';
// import image3 from '../assets/image3.jpg';
// import image4 from '../assets/image4.jpg';
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
      <img src={image} alt='Image' className='h-full w-full' />
      <div className='absolute w-full flex flex-col items-center justify-center bottom-10 text-white'>
        <h1 className='font-jolly text-5xl'>Mahmud Abdulazeez</h1>
        <p className='font-lato text-[#21ff60ad]'>Frontend Developer</p>
        <div className='flex gap-6 mt-6'>
          <a href='https://www.linkedin.com/in/enesifrontenddev'>
            <FaLinkedin />
          </a>
          <a href='facebook.com'>
            <FaFacebook />
          </a>
          <a href='https://twitter.com/MahmudEnesi?t=7RMs3omqqHLCY5lyH7VlcA&s=09'>
            <FaTwitter />
          </a>
          <a href='instagram.com'>
            <FaInstagram />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default Hero;
