import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Loading/Loading';
import useToken from '../../Components/Others/useToken';


const Login = () => {
   const [showPassword, setShowPassword] = useState(false)

   // Login system

   const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
   const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
   const { register, formState: { errors }, handleSubmit } = useForm();
   const [token] = useToken(user || googleUser)
   const navigate = useNavigate()
   const location = useLocation()
   let from = location.state?.from?.pathname || "/"

   const onSubmit = (data) => {
      console.log(data);
      signInWithEmailAndPassword(data.email, data.password)
   }

   if (loading || googleLoading) {
      return <Loading></Loading>
   }

   let errorMessage
   if (error || googleError) {
      errorMessage = <p className='font-blod text-red-600'>{error?.message || googleError?.message}</p>
   }

   if (token) {
      // console.log(user);
      // navigate('/')
      navigate(from, { replace: true });
   }

   return (
      <div className='lg:flex justify-center mt-12'>
         <div className='hidden lg:block'>
            <img src="https://lh3.googleusercontent.com/BLPgeHnmm_jXD9odvEPr6y3-9tBKwfgOXEk7ysvnIPcCbCJ4WtCTfHnvgzqV-fHHrSJhx-ixjfwa2nVpy6TnnX28ErUNU3UtTg=w911" alt="" />
         </div>
         <div className='md:w-[500px] w-full  shadow-xl p-8 rounded'>
            <p className='text-xl font-semibold mb-4'>Log In to Your Deciders Account!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input  {...register("email", {
                  required: {
                     value: true,
                     message: 'Email is Required'
                  },
                  pattern: {
                     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                     message: 'Provide a valid Email'
                  }
               })} type="email" className='py-3 px-3 border border-[#515FCE] rounded w-full mb-4' placeholder='Your Email Address' />
               <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}

               </label>
               <div className='relative'>
                  <input  {...register("password", {
                     required: {
                        value: true,
                        message: 'Password is Required'
                     },
                     minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                     }
                  })} type={showPassword ? 'text' : 'password'} className='py-3 px-3 border border-[#515FCE] rounded w-full' placeholder='Your Password' />
                  <label className="label">
                     {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}
                     {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}

                  </label>
                  <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} className='absolute top-4 right-4 cursor-pointer' ></AiOutlineEyeInvisible>
               </div>

               <div className='flex justify-end mt-3'><Link to='/resetpassword' className='font-medium text-[#515FCE]'>Forget Password</Link></div>
               {errorMessage}
               <button className=' bg-[#515FCE] w-full py-3 rounded text-white mt-4'>Login</button>
               <div className='md:flex justify-evenly gap-4 mt-4'>
                  <button onClick={() => signInWithGoogle()} className=' bg-[#FC8B06] w-full py-3 px-1 rounded mt-4'><span className='flex items-center gap-2 justify-center'><FaGoogle></FaGoogle> Continue With Google</span></button>
                  <button className=' bg-[#515FCE] w-full py-3 px-1 text-white rounded mt-4'><span className='flex items-center gap-2 justify-center'><BsFacebook></BsFacebook> Continue With Facebook</span></button>
               </div>
               <p className='font-medium text-center mt-5'>New To Dciders Lms? <Link to='/singup'><span className='text-[#515FCE]'>Create an Account</span></Link></p>


            </form>

         </div>

      </div>


   );
};

export default Login;