import React, { useState } from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Loading/Loading';
import useToken from '../../Components/Others/useToken';

const SignUp = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
   //google singup
   const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
   const { register, formState: { errors }, watch, handleSubmit } = useForm();
   const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
   const [updateProfile, updating, updateError] = useUpdateProfile(auth);
   const navigate = useNavigate()
   const location = useLocation()

   let from = location.state?.from?.pathname || '/'
   const [token] = useToken(user || googleUser)


   const onSubmit = async data => {
      await createUserWithEmailAndPassword(data.email, data.password)
      await updateProfile({ displayName: data.name });
      // console.log('updated done');
   }



   if (loading || googleLoading || updating) {
      return <Loading></Loading>
   }

   let errorMessage
   if (error || googleError || updateError) {
      errorMessage = <p className='text-red-500 font-serif'> {error?.message || googleError?.message || updateError.message}</p>
   }
   if (token) {
      console.log(user);
      // navigate('/')
      navigate(from, { replace: true })
   }










   return (
      <div className='lg:flex justify-center mt-12'>
         <div className='hidden lg:block'>
            <img src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526" alt="" />
         </div>
         <div className='md:w-[500px] w-full  shadow-xl p-8 rounded'>
            <p className='text-xl font-semibold mb-4'>Please Singup Deciders Account!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input  {...register("name", {
                  required: {
                     value: true,
                     message: 'Name is Required'
                  }
               })} type="text" className='py-3 px-3 border border-[#515FCE] rounded w-full mb-4' placeholder='Your Full Name' />
               <label className="label">  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.name.message}</span>}  </label>



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
                  <input {...register("password", {
                     required: {
                        value: true,
                        message: 'Password is Required'
                     },
                     minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                     }
                  })} type={showPassword ? 'text' : 'password'} className='py-3 px-3 border border-[#515FCE] mb-4 rounded w-full' placeholder='Your Password' />

                  {/* {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>} */}
                  {errors.password && <label className="label"> <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>  </label>}


                  <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} className='absolute top-4 right-4 cursor-pointer' ></AiOutlineEyeInvisible>
               </div>

               <div className='relative'>
                  <input  {...register("confirmpassword", {
                     required: "PLease give a confirm password",
                     minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                     },
                     validate: (val) => {
                        if (watch('password') !== val) {
                           return "passwords did't match";
                        }
                     }
                  })} type={showConfirmPassword ? 'text' : 'password'} className='py-3 px-3 border border-[#515FCE] rounded w-full' placeholder='Confirm Password' />

                  {/* {errors.confirmpassword?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.confirmpassword.message}</span>} */}
                  {errors.confirmpassword && <label className="label"> <span className="label-text-alt text-red-500 font-medium">{errors.confirmpassword.message}</span> </label>}


                  <AiOutlineEyeInvisible onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute top-4 right-4 cursor-pointer' ></AiOutlineEyeInvisible>
               </div>
               {errorMessage}
               <button className=' bg-[#515FCE] w-full py-3 rounded text-white mt-4'>Singup</button>
               <div className='md:flex justify-evenly gap-4 mt-4'>
                  <button onClick={() => signInWithGoogle()} className=' bg-[#FC8B06] w-full py-3 px-1 rounded mt-4'><span className='flex items-center gap-2 justify-center'><FaGoogle></FaGoogle> Continue With Google</span></button>
                  <button className=' bg-[#515FCE] w-full py-3 px-1 text-white rounded mt-4'><span className='flex items-center gap-2 justify-center'><BsFacebook></BsFacebook> Continue With Facebook</span></button>
               </div>
               <p className='font-medium text-center mt-5'>Already have an account? <Link to='/login'><span className='text-[#515FCE]'>Please Login</span></Link></p>
            </form>
         </div>

      </div>
   );
};

export default SignUp;