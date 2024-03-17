import { FaBars } from 'react-icons/fa6';
import logo from '../assets/e-icon.png';

const Navbar = ({ openSidebar }) => {
  return (
    <div className='w-full flex items-center justify-between p-5 border-b-2 border-b-[#00000088] fixed z-10 sm:hidden'>
      <div className='px-2 py-1 rounded-sm bg-[#21ff60ad]'>
        <img src={logo} alt='Developer logo' className='w-5' />
      </div>
      <button
        className='outline-none text-[#fff] text-xl'
        onClick={openSidebar}
      >
        <FaBars />
      </button>
    </div>
  );
};
export default Navbar;
