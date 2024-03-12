import { Outlet } from 'react-router-dom';
import SideNav from './components/SideNav';
import Hero from './components/Hero';

const Layout = () => {
  return (
    <div className='flex'>
      <SideNav />
      <Hero />
      <Outlet />
    </div>
  );
};
export default Layout;
