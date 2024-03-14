const ProgressBar = ({ skill, bg }) => {
  return (
    <div
      className={`h-[110px] w-[110px] ${bg} rounded-full flex items-center justify-center`}
    >
      <div className='h-[90px] w-[90px] bg-gray-300 border border-[#1e1e1e] rounded-full flex items-center justify-center'>
        <h1 className='font-jolly text-[1.35rem]'>{skill}</h1>
      </div>
    </div>
  );
};
export default ProgressBar;
