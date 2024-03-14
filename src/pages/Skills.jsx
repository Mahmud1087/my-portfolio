import Heading from '../components/Heading';
import ProgressBar from '../components/ProgressBar';
import { skills } from '../data';

const Skills = () => {
  return (
    <div className='de w-[50%] h-screen bg-[#1e1e1e] p-16 overflow-scroll'>
      <Heading title='skills' />
      <section className='h-full w-full grid grid-cols-3 gap-5 mt-8'>
        {skills.map((item) => {
          const { id, bg, skill } = item;
          return (
            <div
              key={id}
              className='rounded-xl bg-[#0000003d] flex items-center justify-center shadow-sm shadow-gray-600 hover:scale-[1.1] transition-all ease-in-out'
            >
              <ProgressBar bg={bg} skill={skill} />
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Skills;
