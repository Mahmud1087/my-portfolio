import Heading from '../components/Heading';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { container, items } from '../components/utils';

const Projects = () => {
  return (
    <div className='w-full h-screen bg-[#1e1e1e] overflow-scroll p-5 sm:p-16 lg:p-12 lg:w-1/2'>
      <Heading title='projects' />
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='w-full grid gap-x-4 gap-y-8 mt-12 lg:grid-cols-2'
      >
        {projects.map((project) => {
          const { id, link, image, githubLink, desc } = project;
          return (
            <motion.section
              variants={items}
              key={id}
              className='w-full h-[30rem] bg-[#0000003d] rounded-xl p-2 flex flex-col gap-2 shadow-sm shadow-gray-700 sm:h-[40rem] lg:h-[20rem]'
            >
              <div className='h-[70%] w-full rounded-xl relative'>
                <img
                  src={image}
                  alt={`Project Image ${id}`}
                  className='h-full w-full rounded-[inherit]'
                />
                <div className='hidden absolute left-0 top-0 w-full h-full bg-[#000000bd] opacity-0 hover:opacity-100 transition ease-in-out delay-150 rounded-[inherit] items-center justify-center text-white font-lexend px-5 text-center text-sm lg:flex'>
                  {desc}
                </div>
              </div>
              <p className='text-white font-lexend mt-4 mx-4 text-base leading-9 sm:text-[1.56rem] lg:hidden'>
                {desc}
              </p>
              <article className='h-[25%] px-4 flex items-center gap-5'>
                <a
                  href={link}
                  target='_blank'
                  className='w-full bg-transparent border border-[#21ff60ad] text-white font-jolly rounded-lg text-center py-3 hover:scale-[1.06] hover:bg-[#21ff60ad] transition-all ease-in-out text-2xl sm:text-[2.35rem] lg:text-2xl lg:py-[0.3rem]'
                >
                  Preview
                </a>
                <a
                  href={githubLink}
                  target='_blank'
                  className='w-full bg-transparent border border-[#21ff60ad] text-white font-jolly rounded-lg text-center py-3 hover:scale-[1.06] hover:bg-[#21ff60ad] transition-all ease-in-out text-2xl sm:text-[2.35rem] lg:text-2xl lg:py-[0.3rem]'
                >
                  Github
                </a>
              </article>
            </motion.section>
          );
        })}
      </motion.div>
    </div>
  );
};
export default Projects;
