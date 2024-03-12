import { Link } from 'react-router-dom';

const Button = ({ link, title }) => {
  return (
    <Link
      to={link}
      className='w-fit px-7 py-2 rounded-md bg-[#21ff60ad] mt-6 font-lexend text-white font-semibold text-lg'
    >
      {title}
    </Link>
  );
};
export default Button;
