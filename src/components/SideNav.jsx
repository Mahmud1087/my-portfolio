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
      className='w-[15%] bg-[#1e1e1e] h-screen flex flex-col items-center'
    >
      <div className='w-full flex justify-center items-end text-3xl text-[#272727] px-3 py-2 bg-[#21ff60ad] mt-8 font-jolly'>
        <img src={logo} alt='logo' className='w-7' />
        n
        <img src={logo} alt='logo' className='w-7' />
        si
      </div>

      <article className='flex flex-col gap-10 mt-24'>
        {menuList.map((item) => {
          const { id, icon, text, to } = item;
          return (
            <NavLink
              to={to}
              key={id}
              className={`${({ isActive }) => {
                return isActive ? 'active' : '';
              }} flex items-center gap-6 text-[#A79F9F] text-2xl hover:text-[#21ff60ad] transition-all ease-in-out`}
            >
              {icon}
              <p className='font-lexend text-sm'>{text}</p>
            </NavLink>
          );
        })}
      </article>

      <div className='grid place-items-end h-full mb-8 text-3xl text-white'>
        <a href='https://www.github.com/Mahmud1087' target='_blank'>
          <FaGithub />
        </a>
      </div>
    </motion.div>
  );
};
export default SideNav;
