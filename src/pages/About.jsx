import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import Button from '../components/Button';

const About = () => {
  return (
    <div className='w-[50%] h-screen bg-[#1e1e1e] flex flex-col gap-8 px-20 py-16'>
      <Heading title='about me' />
      <p className='text-[#A79F9F] font-lato leading-8'>
        Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
        Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan
        marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear
        claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi
        bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie
        gummies.
      </p>
      <p className='text-[#A79F9F] font-lato leading-8'>
        Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
        Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan
        marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear
        claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi
        bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie
        gummies.
      </p>
      <Button link='/contact' title='Contact Me' />
    </div>
  );
};
export default About;
