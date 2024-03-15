import Heading from '../components/Heading';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='w-[50%] h-screen bg-[#1e1e1e] flex flex-col gap-8 p-16 overflow-hidden'>
      <Heading title='about me' />
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          type: 'linear',
          duration: 0.7,
          delay: 0.8,
          ease: [0.2, 0.71, 0.2, 1.01],
        }}
        className='flex flex-col gap-8 '
      >
        <p className='text-[#A79F9F] font-lexend leading-8'>
          Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
          Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
          Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
          drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
          candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
          muffin cookie gummies.
        </p>
        <p className='text-[#A79F9F] font-lexend leading-8 mb-5'>
          Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
          Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
          Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
          drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
          candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
          muffin cookie gummies.
        </p>
      </motion.div>
      <Button link='/contact' title='Contact Me' />
    </div>
  );
};
export default About;
