const ProgressBar = ({ skill, bg }) => {
  return (
    <div
      className={`h-[150px] w-[150px] ${bg} rounded-full flex items-center justify-center lg:h-[120px] lg:w-[120px]`}
    >
      <div className='w-[130px] h-[130px] bg-gray-300 border border-[#1e1e1e] rounded-full flex items-center justify-center lg:h-[100px] lg:w-[100px]'>
        <h1 className='font-lexend text-xl font-bold lg:text-base'>{skill}</h1>
      </div>
    </div>
  );
};
export default ProgressBar;
