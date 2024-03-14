import Heading from '../components/Heading';
import { projects } from '../data';

const Projects = () => {
  return (
    <div className='w-[50%] h-screen bg-[#1e1e1e] p-16 overflow-scroll'>
      <Heading title='projects' />
      <div className='w-full grid grid-cols-2 gap-x-6 gap-y-8 mt-12'>
        {projects.map((project) => {
          const { id, link, image, githubLink, desc } = project;
          return (
            <section
              key={id}
              className='w-full h-80 bg-[#0000003d] rounded-xl p-2 flex flex-col gap-2 shadow-md shadow-gray-700'
            >
              <div className='h-[75%] w-full rounded-xl relative'>
                <img
                  src={image}
                  alt={`Project Image ${id}`}
                  className='h-full w-full rounded-[inherit]'
                />
                <div className='absolute left-0 top-0 w-full h-full bg-[#00000083] opacity-0 hover:opacity-100 transition ease-in-out delay-150 rounded-[inherit] flex items-center justify-center text-white font-lexend px-5 text-center text-lg'>
                  {desc}
                </div>
              </div>
              <article className='h-[25%] px-4 flex items-center gap-5'>
                <a
                  href={link}
                  target='_blank'
                  className='w-full bg-transparent border border-[#21ff60ad] text-white font-jolly text-2xl rounded-lg text-center py-[0.3rem] hover:scale-[1.06] hover:bg-[#21ff60ad] transition-all ease-in-out '
                >
                  Preview
                </a>
                <a
                  href={githubLink}
                  target='_blank'
                  className='w-full bg-transparent border border-[#21ff60ad] text-white font-jolly text-2xl rounded-lg text-center py-[0.3rem] hover:scale-[1.06] hover:bg-[#21ff60ad] transition-all ease-in-out '
                >
                  Github
                </a>
              </article>
            </section>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
