import { FaTimes } from 'react-icons/fa';
import { menuList } from '../data';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';

const Sidebar = ({ closeSidebar, sidebarOpen }) => {
  return (
    <AnimatePresence mode='wait' initial={false}>
      {sidebarOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed left-0 top-0 w-full h-screen bg-[#00000088] z-20'
          onClick={closeSidebar}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 50,
            }}
            className='absolute right-0 top-0 w-2/3 h-full bg-[#272727] p-5 grid'
          >
            <button
              className='outline-none w-full flex justify-end text-2xl text-red-600'
              onClick={closeSidebar}
            >
              <FaTimes />
            </button>
            <aside className='grid place-content-center gap-12 mt-12'>
              {menuList.map((list) => {
                const { id, icon, text, to } = list;
                return (
                  <NavLink
                    to={to}
                    key={id}
                    className={`${({ isActive }) => {
                      return isActive ? 'active' : '';
                    }} flex items-center gap-6 text-[#A79F9F] text-2xl hover:text-[#21ff60ad] transition-all ease-in-out lg:text-2xl`}
                    onClick={closeSidebar}
                  >
                    {icon}
                    <p className='font-lexend text-base'>{text}</p>
                  </NavLink>
                );
              })}
            </aside>
            <a
              href='https://github.com/Mahmud1087'
              target='_blank'
              className='grid place-content-center mt-32 text-white text-2xl'
            >
              <FaGithub />
            </a>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
export default Sidebar;
