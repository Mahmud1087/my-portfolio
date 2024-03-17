import projectImage1 from './assets/crappo.png';
import projectImage2 from './assets/logistics.png';
import projectImage3 from './assets/todo1.png';
import projectImage4 from './assets/foodex.png';

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

// const progressPercent = [
//   { 100: 0 },
//   { 90: 36 },
//   { 80: 72 },
//   { 70: 108 },
//   { 60: 144 },
//   { 50: 180 },
//   { 40: 216 },
//   { 30: 252 },
//   { 20: 288 },
//   { 10: 324 },
//   { 0: 360 },
// ];

export const skills = [
  {
    id: 1,
    bg: 'bg-[conic-gradient(transparent_36deg,#FF5733_36deg)]',
    skill: 'HTML',
  },
  {
    id: 2,
    bg: 'bg-[conic-gradient(transparent_68deg,#264de4_68deg)]',
    skill: 'CSS',
  },
  {
    id: 3,
    bg: 'bg-[conic-gradient(transparent_108deg,#faf00a_108deg)]',
    skill: 'JavaScript',
  },
  {
    id: 4,
    bg: 'bg-[conic-gradient(transparent_130deg,#61dbfb_130deg)]',
    skill: 'ReactJs',
  },
  {
    id: 5,
    bg: 'bg-[conic-gradient(transparent_144deg,#4c1d95_144deg)]',
    skill: 'Tailwind',
  },
  {
    id: 6,
    bg: 'bg-[conic-gradient(transparent_170deg,purple_170deg)]',
    skill: 'Bootstrap',
  },
  {
    id: 7,
    bg: 'bg-[conic-gradient(transparent_110deg,#d9d9d9_110deg)]',
    skill: 'Git/Github',
  },
  {
    id: 8,
    bg: 'bg-[conic-gradient(transparent_175deg,#FF5766_175deg)]',
    skill: 'Figma',
  },
  {
    id: 9,
    bg: 'bg-[conic-gradient(transparent_180deg,#faf00a_180deg)]',
    skill: 'Python',
  },
  // {
  //   id: 10,
  //   bg: 'bg-[conic-gradient(transparent_216deg,#FF5733_216deg)]',
  //   skill: 'HTML',
  // },
];

export const projects = [
  {
    id: 1,
    image: projectImage1,
    link: 'https://crappo-crypto-page.netlify.app/',
    githubLink: 'https://github.com/Mahmud1087/crappo-cryptocurrency-webpage',
    desc: 'A fully responsive landing page for a crypto currency webapp. Built with HTML, CSS, and JavaScript',
  },
  {
    id: 2,
    image: projectImage2,
    link: 'https://transit-flow-logistics.netlify.app/',
    githubLink: 'https://github.com/Mahmud1087/transit-flow',
    desc: 'A fully responsive static landing page for a logistics company (TransitFlow). Built with React and tailwind',
  },
  {
    id: 3,
    image: projectImage3,
    link: 'https://todo-appp-main.netlify.app/',
    githubLink:
      'https://github.com/Mahmud1087/react-projects/tree/main/todo-reactapp',
    desc: 'A todo app with features like filter (by all, completed, and active tasks), it also includes dark and light mode features. Built with react and styled component',
  },
  {
    id: 4,
    image: projectImage4,
    link: 'https://foodex-restaurant.netlify.app/',
    githubLink: 'https://github.com/Mahmud1087/Restaurant-landing-page',
    desc: 'A fully responsive static landing page for a restaurant (foodex). Built with HTML, CSS, and JavaScript',
  },
  // {
  //   id: 5,
  //   image: projectImage,
  //   link: '',
  //   githubLink: '',
  //   desc: 'This is just another project built with reactJs',
  // },
  // {
  //   id: 6,
  //   image: projectImage,
  //   link: '',
  //   githubLink: '',
  //   desc: 'This is just another project built with reactJs',
  // },
];
