import { Link } from 'react-router-dom';

const Button = ({ link, title }) => {
  return (
    <Link
      to={link}
      className='w-fit px-7 py-2 rounded-md border border-[#21ff60ad] bg-[#21ff60ad] hover:bg-transparent transition-all ease-in-out mt-6 font-lexend text-white font-semibold text-lg'
    >
      {title}
    </Link>
  );
};
export default Button;
