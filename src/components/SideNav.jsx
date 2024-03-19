import { NavLink } from 'react-router-dom';
import logo from '../assets/e-icon.png';
import { menuList } from '../data';
import { FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const SideNav = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{
        type: 'linear',
        duration: 0.9,
        delay: 0.4,
        ease: [0.2, 0.71, 0.2, 1.01],
      }}
      className='hidden w-[18%] bg-[#1e1e1e] h-screen flex-col items-center border-r-2 border-[#00000065] sm:px-3 sm:flex lg:px-0 lg:w-[15%]'
    >
      <div className='w-full flex justify-center items-end text-xl text-[#272727] px-3 py-1 bg-[#21ff60ad] mt-8 font-jolly sm:rounded-lg lg:rounded-none'>
        <img src={logo} alt='logo' className='w-5' />
        n
        <img src={logo} alt='logo' className='w-5' />
        si
      </div>

      <article className='flex flex-col sm:gap-16 sm:mt-36 lg:gap-10 lg:mt-20'>
        {menuList.map((item) => {
          const { id, icon, text, to } = item;
          return (
            <NavLink
              to={to}
              key={id}
              className={`${({ isActive }) => {
                return isActive ? 'active' : '';
              }} flex items-center gap-6 text-[#A79F9F] text-[1.75rem] hover:text-[#21ff60ad] transition-all ease-in-out lg:text-xl`}
            >
              {icon}
              <p className='hidden font-lexend text-xs lg:block'>{text}</p>
            </NavLink>
          );
        })}
      </article>

      <div className='grid place-items-end h-full mb-4 text-2xl text-white'>
        <a href='https://www.github.com/Mahmud1087' target='_blank'>
          <FaGithub />
        </a>
      </div>
    </motion.div>
  );
};
export default SideNav;
