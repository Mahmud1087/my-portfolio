import Heading from '../components/Heading';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='w-full h-screen bg-[#1e1e1e] flex flex-col gap-8 p-5 overflow-scroll pb-16 sm:pb-0 sm:overflow-scroll sm:p-16 lg:p-12  lg:w-1/2'>
      <Heading title='about me' />
      <motion.div
        initial={{ y: -10000 }}
        animate={{ y: 0 }}
        transition={{
          type: 'linear',
          duration: 0.7,
          delay: 0.8,
          ease: [0.2, 0.71, 0.2, 1.01],
        }}
        className='flex flex-col gap-8 text-[#A79F9F] font-lexend leading-9 text-base mx-4 sm:mx-0 sm:text-[1.35rem] lg:leading-8 lg:text-sm'
      >
        <p>
          Hello! I am Abdulazeez Mahmud Enesi, a passionate junior front-end
          developer and an aspiring technical writer.
          <br />
          I hold a B. Eng. in Metallurgical and Materials Engineering from
          Ahmadu Bello University (ABU), Nigeria and proudly a Graduate Member
          of the Nigeria Society of Engineers (GMNSE).
          <br />
          I embarked on my tech journey in 2022, starting with front-end
          development. Committed to continuous learning and growth.
          <br />
          <br />
          I specialize in building interactive and aesthetically pleasing web
          interfaces.
          <br />
          I am passionate about technical writing and also enthusiastic about
          discussing front-end development and tech in general.
          <br />I am open to internships, junior frontend roles, and also
          collaborating on web development projects.
        </p>
        <p className='mb-10 lg:mb-5'>
          - Hard Skills: HTML, CSS, JavaScript, ReactJS, TailwindCSS, currently
          exploring NodeJS and Python.
          <br />- Soft Skills: Effective Communication, Teamwork, Resilience
        </p>
      </motion.div>
      <Button link='/contact' title='Contact Me' />
    </div>
  );
};
export default About;
