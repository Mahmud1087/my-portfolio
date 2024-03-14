const Heading = ({ title }) => {
  return (
    <h1 className='text-white font-jolly text-8xl'>
      <span className='code'>{`< `}</span>
      {title}
      <span className='code'>{` />`}</span>
    </h1>
  );
};
export default Heading;
