import Heading from '../components/Heading';
import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <div className='w-[50%] h-screen bg-[#1e1e1e] p-16 overflow-scroll'>
      <Heading title='contact me' />
      <motion.form
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{
          type: 'linear',
          duration: 0.7,
          delay: 0.4,
          ease: [0.2, 0.71, 0.2, 1.01],
        }}
        className='w-full h-[inherit] mt-12 flex flex-col gap-8'
      >
        <label htmlFor='name' className='lbl'>
          Name
          <input type='text' name='name' />
        </label>
        <label htmlFor='email' className='lbl'>
          Email
          <input type='email' name='email' />
        </label>
        <label htmlFor='message' className='lbl'>
          Message
          <textarea name='message' id='message' cols='30' rows='10'></textarea>
        </label>
        <button
          type='submit'
          className='border border-[#21ff60ad] bg-[#21ff60ad] hover:bg-transparent transition-all ease-in-out font-jolly text-2xl w-fit py-2 px-10 text-white rounded-lg'
        >
          Send
        </button>
      </motion.form>
    </div>
  );
};
export default ContactMe;
