import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<ContactMe />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
