import Button from '../components/Button';

const Home = () => {
  return (
    <div className='w-[50%] bg-[#1e1e1e] flex flex-col gap-7 items-center justify-center text-center'>
      <h1 className='font-jolly text-8xl text-white'>Mahmud Abdulazeez</h1>
      <div className='font-lato text-[#A7A1A1] text-2xl flex flex-col gap-3'>
        <p>
          <span className='code'>{'<>'}</span> Frontend Developer{' '}
          <span className='code'>{'</>'}</span>
        </p>
        <p>
          <span className='code'>{'<>'}</span> Technical Writer{' '}
          <span className='code'>{'</>'}</span>
        </p>
        <p>
          <span className='code'>{'<>'}</span> Open Source Enthusiast{' '}
          <span className='code'>{'</>'}</span>
        </p>
      </div>

      <Button link='/about' title='About Me' />
    </div>
  );
};
export default Home;
