import { useState } from 'react';
import Heading from '../components/Heading';
import { motion } from 'framer-motion';
import { sendCustomEmail } from '../components/emailHelper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
  const msgSent = () =>
    toast.success('Message sent, will get back to you soon', {
      position: 'top-center',
      closeOnClick: true,
      // className: 'sent',
    });

  const msgEmpty = () =>
    toast.error('One or more fields is empty', {
      position: 'top-center',
      closeOnClick: true,
    });

  const validate = () => {
    details.name === '' || details.email === '' || details.message === ''
      ? msgEmpty()
      : msgSent();
  };

  const initialDetailsState = {
    name: '',
    email: '',
    message: '',
  };
  const [details, setDetails] = useState(initialDetailsState);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendCustomEmail(details);
    setDetails(initialDetailsState);
  };

  return (
    <div className='w-full h-screen bg-[#1e1e1e] p-16 overflow-scroll lg:w-1/2'>
      <ToastContainer />
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
        onSubmit={handleSubmit}
      >
        <label htmlFor='name' className='lbl'>
          <div>
            Name <span className='text-red-600 text-3xl'>*</span>
          </div>
          <input
            type='text'
            name='name'
            value={details.name}
            onChange={handleDetailsChange}
            required
          />
        </label>
        <label htmlFor='email' className='lbl'>
          <div>
            Email <span className='text-red-600 text-3xl'>*</span>
          </div>
          <input
            type='email'
            name='email'
            value={details.email}
            onChange={handleDetailsChange}
            required
          />
        </label>
        <label htmlFor='message' className='lbl'>
          <div>
            Message <span className='text-red-600 text-3xl'>*</span>
          </div>
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='10'
            value={details.message}
            onChange={handleDetailsChange}
            required
          ></textarea>
        </label>
        <button
          type='submit'
          className='border border-[#21ff60ad] bg-[#21ff60ad] hover:bg-transparent transition-all ease-in-out font-jolly text-4xl w-fit py-3 px-14 text-white rounded-lg lg:text-2xl lg:py-2 lg:px-10'
          onClick={validate}
        >
          Send
        </button>
      </motion.form>
    </div>
  );
};
export default ContactMe;
