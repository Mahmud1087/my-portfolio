const ProgressBar = ({ skill, bg }) => {
  return (
    <div
      className={`h-[150px] w-[150px] lg:h-[120px] lg:w-[120px] ${bg} rounded-full flex items-center justify-center`}
    >
      <div className='w-[130px] h-[130px] lg:h-[100px] lg:w-[100px] bg-gray-300 border border-[#1e1e1e] rounded-full flex items-center justify-center'>
        <h1 className='font-lexend text-xl font-bold lg:text-base'>{skill}</h1>
      </div>
    </div>
  );
};
export default ProgressBar;
