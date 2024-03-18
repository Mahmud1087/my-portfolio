const ProgressBar = ({ skill, bg, color }) => {
  return (
    <div
      className={`h-[110px] w-[110px] ${bg} rounded-full flex items-center justify-center sm:h-[150px] sm:w-[150px] lg:h-[120px] lg:w-[120px]`}
    >
      <div className='h-[95px] w-[95px] bg-[#000000] border border-[#1e1e1e] rounded-full flex items-center justify-center sm:w-[130px] sm:h-[130px] lg:h-[105px] lg:w-[105px]'>
        <h1 className={`text-4xl ${color}`}>{skill}</h1>
      </div>
    </div>
  );
};
export default ProgressBar;
