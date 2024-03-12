import Heading from '../components/Heading';

const Skills = () => {
  return (
    <div className='w-[50%] h-screen bg-[#1e1e1e] px-20 py-16'>
      <Heading title='skills' />
      <div className='h-[100px] w-[100px] bg-black rounded-full flex items-center justify-center'>
        <div className='h-[75px] w-[75px] bg-white rounded-full flex items-center justify-center'>
          <h1 className='font-jolly text-2xl'>HTML</h1>
        </div>
      </div>
    </div>
  );
};
export default Skills;
