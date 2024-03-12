import {
  FaAddressBook,
  FaHouse,
  FaLaptopCode,
  FaPhone,
  FaRegPenToSquare,
} from 'react-icons/fa6';

export const menuList = [
  { id: 1, icon: <FaHouse />, text: 'Home', to: '/' },
  { id: 2, icon: <FaAddressBook />, text: 'About', to: 'about' },
  { id: 3, icon: <FaRegPenToSquare />, text: 'Skills', to: 'skills' },
  { id: 4, icon: <FaLaptopCode />, text: 'Projects', to: 'projects' },
  { id: 5, icon: <FaPhone />, text: 'Contact', to: 'contact' },
];
