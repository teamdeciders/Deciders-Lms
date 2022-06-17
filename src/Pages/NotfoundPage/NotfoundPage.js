import React from 'react';
import { Link } from 'react-router-dom';

const NotfoundPage = () => {
    return (
        <div className='w-full text-center'>
              <div className='flex justify-center'>
              <img className='lg:w-2/4 w-full' src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" alt="" />
              </div>
             <h1 className='text-4xl font-bold'>Page Not Found</h1>
             <p className='font-semibold'>Th page you're looking for might renamed. Or might never exist on this planet </p>
             
             <div className='lg:flex lg:justify-center lg:mt-4 mt-3 gap-4 w-full'>
                <Link to='/'><button className='px-8 py-3 rounded font-medium bg-blue-900 text-white mt-2'>Back To Home Page </button></Link>
                <button className='px-8 py-3 rounded font-medium bg-blue-900 text-white mt-2'>Contact Aliens For Help</button>
             </div>
        </div>
    ); 
};

export default NotfoundPage;