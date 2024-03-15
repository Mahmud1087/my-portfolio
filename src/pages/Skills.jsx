import Heading from '../components/Heading';
import ProgressBar from '../components/ProgressBar';
import { skills } from '../data';
import { motion } from 'framer-motion';

const Skills = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className='de w-[50%] h-screen bg-[#1e1e1e] p-16 overflow-scroll'>
      <Heading title='skills' />
      <motion.section
        variants={container}
        initial='hidden'
        animate='visible'
        className='h-full w-full grid grid-cols-3 gap-5 mt-8'
      >
        {skills.map((item) => {
          const { id, bg, skill } = item;
          return (
            <motion.div key={id} variants={items}>
              <div className='p-8 rounded-xl bg-[#0000003d] flex items-center justify-center shadow-sm shadow-gray-600 hover:scale-[1.1] transition-all ease-in-out'>
                <ProgressBar bg={bg} skill={skill} />
              </div>
            </motion.div>
          );
        })}
      </motion.section>
    </div>
  );
};
export default Skills;
