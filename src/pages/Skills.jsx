import Heading from '../components/Heading';
import ProgressBar from '../components/ProgressBar';
import { skills } from '../data';
import { motion } from 'framer-motion';
import { container, items } from '../components/utils';

const Skills = () => {
  return (
    <div className='w-full h-screen bg-[#1e1e1e] p-5 overflow-scroll pb-16 sm:pb-0 sm:p-16 lg:w-1/2'>
      <Heading title='skills' />
      <motion.section
        variants={container}
        initial='hidden'
        animate='visible'
        className='h-full w-full grid grid-cols-2 mt-8 gap-3 sm:gap-5 lg:grid-cols-3'
      >
        {skills.map((item) => {
          const { id, bg, skill } = item;
          return (
            <motion.div key={id} variants={items}>
              <div className='py-10 rounded-xl bg-[#0000003d] flex items-center justify-center shadow-sm shadow-gray-600 hover:scale-[1.1] transition-all ease-in-out sm:p-12 lg:p-8'>
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
