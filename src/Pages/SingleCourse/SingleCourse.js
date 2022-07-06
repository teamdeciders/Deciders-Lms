import React, { useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc'
import { ImStarFull } from 'react-icons/im'
import { TbClock, TbFileCertificate } from 'react-icons/tb'
import { MdOutlinePlayLesson } from 'react-icons/md'
import { BiBarChartAlt2 } from 'react-icons/bi'
import { Link, Outlet, useParams } from 'react-router-dom';
import useCourseData from '../../Hooks/useCourseData';
import Swal from 'sweetalert2'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
const SingleCourse = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [course] = useCourseData(id)
    const { image, title, courseDuration, student, price, level, teacherName, courseCatagory, reviews, certificate, _id } = course
    const addToCart = () => {
        if (user?.email) {
            const cartdetails = {
                courseId: _id,
                courseName: title,
                email: user?.email,
                coursePrice: price,
                courseImage: image,
                teacherName: teacherName

            }
            const url = `http://localhost:5000/addtocart/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartdetails)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.upsertedCount > 0) {
                        Swal.fire(
                            'SuccessFully Added',
                            'You Can Checkout this Course Now',
                            'success'
                        )
                    }
                    else if (data.matchedCount > 0) {
                        Swal.fire(
                            'Already Added',
                            'You Already Added this on your Cart',
                            'success'
                        )

                    }

                })

        }
        else {
            Swal.fire(
                'Log In First',
                "You Can't Add To Cart WithOut Login",
                'info'
            )
        }


    }




    return (
        <div>
            <div className=' h-[30vh]  bg-[#FDFCF6] w-full '>
                <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-12 '>
                    <h1 className='text-3xl font-bold text-center pt-12'>Course Details</h1>
                    <h1 className='text-xl font-bold text-center pt-5'>{title}</h1>
                </div>
            </div>
            <div className='w-full '>
                <div className='lg:max-w-7xl md-w-full  mt-4 mx-auto px-4  md:px-16 '>
                    <div className='md:flex'>
                        <div className=' text-left md:w-[700px] w-full  '>
                            <img className='block w-full md:w-[700px] md:h-[380px]' src={image} alt="" />
                            <div className='mt-2 '>
                                <h1 className='text-2xl font-bold  pt-5'>{title}</h1>
                                <div className='p-2 w-full flex gap-4 '>
                                    <div className="flex gap-5  min-w-max justify-between">
                                        <div className='w-[45px]   h-[45px] rounded-full bg-red-100 overflow-hidden'>
                                            <img className='w-full h-full' src="https://i.ibb.co/tqddb5s/Kids-Teacher-02.png" alt="" />
                                        </div>
                                        <div>
                                            <h2 className='text-xl font-bold'>{teacherName}</h2>

                                        </div>
                                    </div>

                                    <div className="flex gap-5 md:justify-between items-center w-full justify-end  md:flex-row flex-col">

                                        <h2 className='text-sm text-gray-700'>
                                            <FcGraduationCap className='inline-block  mx-2' />
                                            {student} </h2>
                                        <h2 className='text-sm text-gray-700 flex items-center '>
                                            <span>৪.৯</span>
                                            <span className='flex mx-2'>
                                                <ImStarFull className='text-yellow-600' />
                                                <ImStarFull className='text-yellow-600' />
                                                <ImStarFull className='text-yellow-600' />
                                                <ImStarFull className='text-yellow-600' />
                                                <ImStarFull className='text-yellow-600' />

                                            </span>
                                            <span>({reviews?.length})</span>
                                        </h2>


                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* add to cart */}
                        <div className="md:w-[450px] w-full mt-4 md:mt-0" >
                            <div className='w-[300px]  shadow h-[380px] py-5 px-2 relative bg-[#F6F7FD] rounded-md mx-auto'>
                                <div className='w-full h-[50px] p-2 mb-5 bg-white rounded-md flex justify-between items-center'>
                                    <h2 className='text-md font-bold'>Course Price</h2>
                                    <h2 className='text-md font-bold min-w-max'>৳{price}</h2>
                                </div>
                                <div className='w-full my-1 h-[40px] p-2 flex justify-between items-center'>
                                    <h2 className='text-md '>
                                        <FaRegUser className='inline-block text-md mr-2 text-[#515FCE]' />
                                        Instractor</h2>
                                    <h2 className='text-md  min-w-max'>{teacherName}</h2>
                                </div>
                                <div className='w-full my-1 h-[40px] p-2 flex justify-between items-center'>
                                    <h2 className='text-md '>
                                        <TbClock className='inline-block text-md mr-2 text-[#515FCE]' />
                                        Duration</h2>
                                    <h2 className='text-md  min-w-max'>{courseDuration}</h2>
                                </div>
                                <div className='w-full my-1 h-[40px] p-2 flex justify-between items-center'>
                                    <h2 className='text-md '>
                                        <MdOutlinePlayLesson className='inline-block text-md mr-2 text-[#515FCE]' />
                                        Lessons</h2>
                                    <h2 className='text-md  min-w-max'>৫০+</h2>
                                </div>
                                <div className='w-full my-1 h-[40px] p-2 flex justify-between items-center'>
                                    <h2 className='text-md '>
                                        <BiBarChartAlt2 className='inline-block text-md mr-2 text-[#515FCE]' />
                                        Level</h2>
                                    <h2 className='text-md  min-w-max'>{level}</h2>
                                </div>
                                <div className='w-full my-1 h-[40px] p-2 flex justify-between items-center'>
                                    <h2 className='text-md '>
                                        <TbFileCertificate className='inline-block text-md mr-2 text-[#515FCE]' />
                                        Certificate</h2>
                                    <h2 className='text-md  min-w-max'>{certificate}</h2>
                                </div>

                                <button onClick={addToCart} className=' bg-[#515FCE] hover:bg-[#FE5D03] absolute px-4 py-3 w-3/4 min-w-max -bottom-4 mx-auto left-0 right-0 rounded text-white text-center'>ADD TO CART</button>
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