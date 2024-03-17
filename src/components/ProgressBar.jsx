const ProgressBar = ({ skill, bg }) => {
  return (
    <div
      className={`h-[110px] w-[110px] sm:h-[150px] sm:w-[150px] ${bg} rounded-full flex items-center justify-center lg:h-[120px] lg:w-[120px]`}
    >
      <div className='h-[95px] w-[95px] sm:w-[130px] sm:h-[130px] bg-gray-300 border border-[#1e1e1e] rounded-full flex items-center justify-center lg:h-[100px] lg:w-[100px]'>
        <h1 className='font-lexend font-bold text-base sm:text-xl lg:text-base'>
          {skill}
        </h1>
      </div>
    </div>
  );
};
export default ProgressBar;
