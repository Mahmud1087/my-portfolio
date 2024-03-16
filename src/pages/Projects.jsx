import Heading from '../components/Heading';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { container, items } from '../components/utils';

const Projects = () => {
  return (
    <div className='w-full h-screen bg-[#1e1e1e] p-16 overflow-scroll lg:w-1/2'>
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
              className='w-full h-[38rem] bg-[#0000003d] rounded-xl p-2 flex flex-col gap-2 shadow-sm shadow-gray-700 lg:h-80'
            >
              <div className='h-[75%] w-full rounded-xl relative'>
                <img
                  src={image}
                  alt={`Project Image ${id}`}
                  className='h-full w-full rounded-[inherit]'
                />
                <div className='hidden absolute left-0 top-0 w-full h-full bg-[#00000083] opacity-0 hover:opacity-100 transition ease-in-out delay-150 rounded-[inherit] items-center justify-center text-white font-lexend px-5 text-center text-lg lg:flex'>
                  {desc}
                </div>
              </div>
              <p className='text-white font-lexend text-[1.7rem] mt-4 mx-4 lg:hidden'>
                {desc}
              </p>
              <article className='h-[25%] px-4 flex items-center gap-5'>
                <a
                  href={link}
                  target='_blank'
                  className='w-full bg-transparent border border-[#21ff60ad] text-white font-jolly text-[2.35rem] rounded-lg text-center py-3 hover:scale-[1.06] hover:bg-[#21ff60ad] transition-all ease-in-out lg:text-2xl lg:py-[0.3rem]'
                >
                  Preview
                </a>
                <a
                  href={githubLink}
                  target='_blank'
                  className='w-full bg-transparent border border-[#21ff60ad] text-white font-jolly text-[2.35rem] rounded-lg text-center py-3 hover:scale-[1.06] hover:bg-[#21ff60ad] transition-all ease-in-out lg:text-2xl lg:py-[0.3rem]'
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
