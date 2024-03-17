import { Outlet } from 'react-router-dom';
import SideNav from './components/SideNav';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <div className='sm:flex'>
      <SideNav />
      <Navbar />
      <Hero />
      <Outlet />
    </div>
  );
};
export default Layout;
