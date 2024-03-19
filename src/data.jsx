import projectImage1 from './assets/crappo.png';
import projectImage2 from './assets/logistics.png';
import projectImage3 from './assets/todo1.png';
import projectImage4 from './assets/foodex.png';

import logisticsCompressed from './assets/compressed/logisticsBlur.jpg';
import crappoCompressed from './assets/compressed/crappo.jpg';
import todoCompressed from './assets/compressed/todo1.jpg';
import foodexCompressed from './assets/compressed/foodex.jpg';

import {
  FaAddressBook,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHouse,
  FaHtml5,
  FaLaptopCode,
  FaPhone,
  FaReact,
  FaRegPenToSquare,
} from 'react-icons/fa6';
import { IoLogoCss3, IoLogoJavascript, IoLogoPython } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';

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
    skill: <FaHtml5 />,
    color: 'text-[#FF5733]',
  },
  {
    id: 2,
    bg: 'bg-[conic-gradient(transparent_68deg,#264de4_68deg)]',
    skill: <IoLogoCss3 />,
    color: 'text-[#264de4]',
  },
  {
    id: 3,
    bg: 'bg-[conic-gradient(transparent_108deg,#faf00a_108deg)]',
    skill: <IoLogoJavascript />,
    color: 'text-[#faf00a]',
  },
  {
    id: 4,
    bg: 'bg-[conic-gradient(transparent_110deg,#61dbfb_110deg)]',
    skill: <FaReact />,
    color: 'text-[#61dbfb]',
  },
  {
    id: 5,
    bg: 'bg-[conic-gradient(transparent_104deg,#4c1d95_104deg)]',
    skill: <SiTailwindcss />,
    color: 'text-[#4c1d95]',
  },
  {
    id: 6,
    bg: 'bg-[conic-gradient(transparent_170deg,purple_170deg)]',
    skill: <FaBootstrap />,
    color: 'text-[purple]',
  },
  {
    id: 7,
    bg: 'bg-[conic-gradient(transparent_85deg,#ff5733_85deg)]',
    skill: <FaGitAlt />,
    color: 'text-[#ff5733]',
  },
  {
    id: 8,
    bg: 'bg-[conic-gradient(transparent_110deg,#A79F9F_110deg)]',
    skill: <FaGithub />,
    color: 'text-[#A79F9F]',
  },
  {
    id: 9,
    bg: 'bg-[conic-gradient(transparent_175deg,#FF5766_175deg)]',
    skill: <FaFigma />,
    color: 'text-[#ff5766]',
  },
  {
    id: 10,
    bg: 'bg-[conic-gradient(transparent_180deg,#faf00a_180deg)]',
    skill: <IoLogoPython />,
    color: 'text-[#faf00a]',
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
    lazyImg: crappoCompressed,
  },
  {
    id: 2,
    image: projectImage2,
    link: 'https://transit-flow-logistics.netlify.app/',
    githubLink: 'https://github.com/Mahmud1087/transit-flow',
    desc: 'A fully responsive static landing page for a logistics company (TransitFlow). Built with React and tailwind',
    lazyImg: logisticsCompressed,
  },
  {
    id: 3,
    image: projectImage3,
    link: 'https://todo-appp-main.netlify.app/',
    githubLink:
      'https://github.com/Mahmud1087/react-projects/tree/main/todo-reactapp',
    desc: 'A todo app with features like filter (by all, completed, and active tasks), it also includes dark and light mode features. Built with react and styled component',
    lazyImg: todoCompressed,
  },
  {
    id: 4,
    image: projectImage4,
    link: 'https://foodex-restaurant.netlify.app/',
    githubLink: 'https://github.com/Mahmud1087/Restaurant-landing-page',
    desc: 'A fully responsive static landing page for a restaurant (foodex). Built with HTML, CSS, and JavaScript',
    lazyImg: foodexCompressed,
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
