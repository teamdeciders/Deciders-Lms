import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { BsCartCheck } from 'react-icons/bs';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import useMyCartData from '../../Hooks/useMyCartData';
import UseAdmin from '../Others/UseAdmin';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    // singout
    const [user] = useAuthState(auth)
    const handleSingOut = () => {
        signOut(auth)
    }
    const [admin] = UseAdmin(user)
    const [myCart] = useMyCartData(user?.email)
    return (
        <div className='bg-[#FDFCF6]'>
            <nav className='md:px-24 px-4 lg:max-w-7xl  md-w-full mx-auto  sticky top-0 z-10 '>
                <div className='w-full sticky'>
                    <div className='md:flex items-center justify-between border-b'>
                        <div className='font-bold text-2xl cursor-pointer flex items-start 
      text-gray-800'>
                            <Link to={'/'} > <img className='md:w-28 w-16 h-[60px]' src="https://i.ibb.co/XzzNm65/Educational-Service-Logo-1364695.png" alt="" /></Link>
                        </div>

                        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-2 top-4 cursor-pointer md:hidden'>
                            {open ? <GrClose className='h-5 w-5' /> : <AiOutlineMenu className='h-6 w-6' />}
                        </div>

                        <ul onClick={() => setOpen(!open)} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static lg:bg-[#FDFCF6] md:bg-[#FDFCF6] bg-[#FDFCF6]  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-14 ' : 'top-[-650px]'}`}>
                            <li className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={'/'} className='text-gray-800 hover:text-gray-400 duration-500'>Home</Link>
                            </li>


                            <li className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={'/courses'} className='text-gray-800 hover:text-gray-400 duration-500'>Courses</Link>
                            </li>

                            <li className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={'/teach'} className='text-gray-800 hover:text-gray-400 duration-500'>Teach</Link>
                            </li>
                            <li className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={'/contact'} className='text-gray-800 hover:text-gray-400 duration-500'>Contact</Link>
                            </li>
                            <li className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={'/dashboard'} className='text-gray-800 hover:text-gray-400 duration-500'>Dashboard</Link>
                            </li>
                           <li className='md:ml-8 text-xl md:my-0 my-7 block '>
                                    <span className=' w-5 h-5 rounded-full bg-green-600 text-white flex justify-center  items-center ml-4 absolute -mt-2 text-sm'>{myCart.length}</span>
                                    <Link to={'/cart'} className='text-gray-800 hover:text-gray-400 duration-500 '>
                                        <BsCartCheck></BsCartCheck>

                                    </Link>

                                </li>

                            
                            {user ? <li className='md:ml-8 text-xl md:my-0 my-7'><button onClick={handleSingOut} className='hover:text-[#1826a8] duration-500 border-2 rounded border-[#6776e6] text-[#6776e6] px-8 py-2'>Singout</button></li> :
                                <li className='md:ml-8 text-2xl md:my-0 my-7'>
                                    <Link to={'/login'} className='hover:text-[#1826a8] duration-500 border-2 rounded border-[#6776e6] text-[#6776e6] px-8'>Login</Link>
                                </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;