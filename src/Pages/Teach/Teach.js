import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

const Teach = () => {
    return (
        <section className=''>
            <div className='w-full  bg-[#FDFCF6] '>
                <div className='px-6 md:px-14 lg:max-w-7xl md-w-full mx-auto min-h-max h-auto '>
                    <div className='flex  flex-row-reverse '>

                        <div className='md:w-2/4   md:text-left flex items-center'>
                            <div className='md:text-left text-center'>

                                <h1 className='text-3xl md:text-3xl mt-1 lg:text-5xl font-bold text-[#CEC051]'>Sign up as an instructor!</h1>
                                <p className='mt-4 font-semibold text-md'>
                                    We are looking for skilled instructors from various fields to join our workforce. We need eminent mentors to share their knowledge spontaneously to produce more capable professionals. Over hundreds of courses, instructors and millions of learners are elevating our space!.
                                </p>
                                <button className=' bg-green-600 hover:bg-green-500 duration-300 ease-in-out  max-w-max  px-8 py-3  rounded text-white mt-6 block mx-auto'>GOT HIRED</button>
                            </div>

                        </div>

                        <div className=' md:w-2/4 w-full md:block hidden '>
                            <img className='md:w-2/4  mx-auto block' src="https://rightedgelearning.com/wp-content/uploads/2021/11/single-man-main.png" alt="" />
                        </div>

                    </div>
                </div>

            </div>
            <div className='lg:max-w-7xl w-full  mx-auto px-4  md:px-16 mt-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-10 gap-y-8'>


                    <div className='col-span-2 border p-7 rounded-lg cs-card-shadow'>
                        <h1 className='text-3xl font-semibold mb-12'>Instructor form Submission</h1>
                        <div>
                            <form>
                                <div className='grid grid-cols-1 gap-7'>
                                    <input type="text" name="name" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Name" />
                                    <input type="email" name="email" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email" />
                                    <input type="number" name="phone" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Phone" />
                                    <input type="text" name="website" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="LinkdIne Link" />
                                    <input type="text" name="website" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Area of Expertise" />
                                </div>
                                <input className='bg-[#515FCE] p-2 rounded-md text-white mt-9 cursor-pointer' type="submit" value="Submit Now" />
                            </form>
                        </div>
                    </div>


                    <div className='md:h-1/2 border p-5 shadow-lg rounded-md bg-[#0B2519] text-white'>
                        <h1 className='text-3xl font-semibold text-center'>Need Any Help?</h1>
                        <div className='mt-8'>
                            <div className='flex gap-x-5 items-center'>
                                <div className='w-14 h-14 border border-blue-300 rounded-full flex justify-center items-center'>
                                    <BiPhoneCall className='text-white p-1 text-4xl' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold'>+77-00-222-1111</h3>
                                </div>
                            </div>

                            <div className='flex gap-x-5 items-center mt-5'>
                                <div className='w-14 h-14 border border-blue-300 rounded-full flex justify-center items-center'>
                                    < AiOutlineMail className='text-white p-1 text-4xl' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold'>example@email.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Teach;