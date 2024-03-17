import { Outlet } from 'react-router-dom';
import SideNav from './components/SideNav';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className='sm:flex'>
      <SideNav />
      <Navbar openSidebar={openSidebar} />
      <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
      <Hero />
      <Outlet />
    </div>
  );
};
export default Layout;
