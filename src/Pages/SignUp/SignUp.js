import React, { useState } from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
   return (
      <div className='lg:flex justify-center mt-12'>
         <div className='hidden lg:block'>
            <img src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526" alt="" />
         </div>
         <div className='md:w-[500px] w-full  shadow-xl p-8 rounded'>
            <p className='text-xl font-semibold mb-4'>Please Singup Deciders Account!</p>
            <form>
               <input type="text" className='py-3 px-3 border border-[#515FCE] rounded w-full mb-4' placeholder='Your Full Name' />
               <input type="email" className='py-3 px-3 border border-[#515FCE] rounded w-full mb-4' placeholder='Your Email Address' />
               <div className='relative'>
                  <input type={showPassword ? 'text' : 'password'} className='py-3 px-3 border border-[#515FCE] mb-4 rounded w-full' placeholder='Your Password' />

                  <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} className='absolute top-4 right-4 cursor-pointer' ></AiOutlineEyeInvisible>
               </div>
               <div className='relative'>
                  <input type={showConfirmPassword ? 'text' : 'password'} className='py-3 px-3 border border-[#515FCE] rounded w-full' placeholder='Confirm Password' />

                  <AiOutlineEyeInvisible onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute top-4 right-4 cursor-pointer' ></AiOutlineEyeInvisible>
               </div>

               <button className=' bg-[#515FCE] w-full py-3 rounded text-white mt-4'>Login</button>
               <div className='md:flex justify-evenly gap-4 mt-4'>
                  <button className=' bg-[#FC8B06] w-full py-3 px-1 rounded mt-4'><span className='flex items-center gap-2 justify-center'><FaGoogle></FaGoogle> Continue With Google</span></button>
                  <button className=' bg-[#515FCE] w-full py-3 px-1 text-white rounded mt-4'><span className='flex items-center gap-2 justify-center'><BsFacebook></BsFacebook> Continue With Facebook</span></button>
               </div>
               <p className='font-medium text-center mt-5'>Already have an account? <Link to='/login'><span className='text-[#515FCE]'>Please Login</span></Link></p>
            </form>
         </div>

      </div>
   );
};

export default SignUp;