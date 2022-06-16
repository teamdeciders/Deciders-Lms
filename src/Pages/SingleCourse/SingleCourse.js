import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc'
import { ImStarFull } from 'react-icons/im'
import { TbClock, TbFileCertificate } from 'react-icons/tb'
import { MdOutlinePlayLesson } from 'react-icons/md'
import { BiBarChartAlt2 } from 'react-icons/bi'
import { Link, Outlet, useParams } from 'react-router-dom';
const SingleCourse = () => {
    let { params } = useParams()
    let { id } = useParams()
    console.log(id, params);
    return (
        <div>
            <div className=' h-[30vh]  bg-[#FDFCF6] w-full '>
                <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-12 '>
                    <h1 className='text-3xl font-bold text-center pt-12'>Course Details</h1>
                    <h1 className='text-xl font-bold text-center pt-5'>কমপ্লিট ফ্রন্ট-এন্ড ডেভেলপমেন্ট শিখুন (জাভাস্ক্রিপ্ট)</h1>
                </div>
            </div>
            <div className='w-full '>
                <div className='lg:max-w-7xl md-w-full  mt-4 mx-auto px-4  md:px-16 '>
                    <div className='md:flex'>
                        <div className=' text-left md:w-[700px] w-full  '>
                            <img className='block w-full md:w-[700px] md:h-[380px]' src="https://i.ibb.co/N3J98sG/course-img-8-1.png" alt="" />
                            <div className='mt-2 '>
                                <h1 className='text-2xl font-bold  pt-5'>কমপ্লিট ফ্রন্ট-এন্ড ডেভেলপমেন্ট শিখুন (জাভাস্ক্রিপ্ট)</h1>
                                <div className='p-2 w-full flex gap-4 '>
                                    <div className="flex gap-5  min-w-max justify-between">
                                        <div className='w-[45px]   h-[45px] rounded-full bg-red-100 overflow-hidden'>
                                            <img className='w-full h-full' src="https://i.ibb.co/tqddb5s/Kids-Teacher-02.png" alt="" />
                                        </div>
                                        <div>
                                            <h2 className='text-xl font-bold'>কামরুল হক</h2>
                                            <h2 className='text-sm '>ইন্সট্রাক্টর</h2>
                                        </div>
                                    </div>

                                    <div className="flex gap-5 md:justify-between items-center w-full justify-end  md:flex-row flex-col">

                                        <h2 className='text-sm text-gray-700'>
                                            <FcGraduationCap className='inline-block  mx-2' />
                                            ২২৪ জন স্টুডেন্ট </h2>
                                        <h2 className='text-sm text-gray-700 flex items-center '>
                                            <span>৪.৯</span>
                                            <span className='flex mx-2'>
                                                <ImStarFull className='text-yellow-600' />
                                                <ImStarFull className='text-yellow-600' />
                                                <ImStarFull className='text-yellow-600' />
                                                <ImStarFull className='text-yellow-600' />
                                                <ImStarFull className='text-yellow-600' />

                                            </span>
                                            <span>(২০২)</span>
                                        </h2>


                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="md:w-[450px] w-full mt-4 md:mt-0" >
                            <div className='w-[300px]  shadow h-[380px] py-5 px-2 relative bg-[#F6F7FD] rounded-md mx-auto'>
                                <div className='w-full h-[50px] p-2 mb-5 bg-white rounded-md flex justify-between items-center'>
                                    <h2 className='text-md font-bold'>কোর্সের মূল্য</h2>
                                    <h2 className='text-md font-bold min-w-max'>৳২৫০০</h2>
                                </div>
                                <div className='w-full my-1 h-[40px] p-2 flex justify-between items-center'>
                                    <h2 className='text-md '>
                                        <FaRegUser className='inline-block text-md mr-2 text-[#515FCE]' />
                                        ইন্সট্রাক্টর</h2>
                                    <h2 className='text-md  min-w-max'>ইয়াসিন আরাফাত</h2>
                                </div>
                                <div className='w-full my-1 h-[40px] p-2 flex justify-between items-center'>
                                    <h2 className='text-md '>
                                        <TbClock className='inline-block text-md mr-2 text-[#515FCE]' />
                                        সময়কাল</h2>
                                    <h2 className='text-md  min-w-max'>07 ঘন্টা 20 মিনিট</h2>
                                </div>
                                <div className='w-full my-1 h-[40px] p-2 flex justify-between items-center'>
                                    <h2 className='text-md '>
                                        <MdOutlinePlayLesson className='inline-block text-md mr-2 text-[#515FCE]' />
                                        লেকচার</h2>
                                    <h2 className='text-md  min-w-max'>৫০+</h2>
                                </div>
                                <div className='w-full my-1 h-[40px] p-2 flex justify-between items-center'>
                                    <h2 className='text-md '>
                                        <BiBarChartAlt2 className='inline-block text-md mr-2 text-[#515FCE]' />
                                        লেভেল</h2>
                                    <h2 className='text-md  min-w-max'>৳২৫০০</h2>
                                </div>
                                <div className='w-full my-1 h-[40px] p-2 flex justify-between items-center'>
                                    <h2 className='text-md '>
                                        <TbFileCertificate className='inline-block text-md mr-2 text-[#515FCE]' />
                                        সার্টিফিকেট</h2>
                                    <h2 className='text-md  min-w-max'>হ্যা</h2>
                                </div>

                                <button className=' bg-[#515FCE] absolute px-4 py-3 w-3/4 min-w-max -bottom-4 mx-auto left-0 right-0 rounded text-white'>কার্ড যোগ করুন</button>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full">
                <div className='lg:max-w-7xl md-w-full  mt-8 mx-auto px-2   md:px-16  '>
                    <div className="w-full mt-4 grid grid-cols-4 gap-1 text-center">

                        <Link to={''} className='p-2 font-bold min-w-max rounded-md bg-[#D9F5FF]  hover:bg-[#515FCE] hover:text-white'>
                            Overview
                        </Link>
                        <Link to={'curriculum'} className='p-2 font-bold min-w-max rounded-md bg-[#D9F5FF]  hover:bg-[#515FCE] hover:text-white'>
                            Curriculum
                        </Link>
                        <Link to={'instractor'} className='p-2 font-bold min-w-max rounded-md bg-[#D9F5FF]  hover:bg-[#515FCE] hover:text-white'>
                            Instructor
                        </Link>
                        <Link to={'review'} className='p-2 font-bold min-w-max rounded-md bg-[#D9F5FF]  hover:bg-[#515FCE] hover:text-white'>
                            Reviews
                        </Link>
                    </div>
                    {/* All Components */}
                    <div className=' mt-4'>
                        <Outlet />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SingleCourse;