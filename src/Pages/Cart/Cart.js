import React, { useEffect, useState } from 'react';
import { ImStarFull } from 'react-icons/im'
import useCourseData from '../../Hooks/useCourseData';

const Cart = (id) => {
    // const [course, setCourse] = useState({})
    // console.log(course);

    // useEffect(() => {
    //     const url = `http://localhost:5000/course/${id}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCourse(data)
    //         })
    // }, [id])

    return (
        <div className=' mx-8 mt-6'>
            <div className='flex justify-between' >
                <div><h1 className='text-4xl font-bold font-sans text-[#a435f0] mt-8 hidden md:block'>Shopping Cart</h1></div>

                <div className='md:w-[320px] w-full px-4 mt-6 shadow-md rounded'>
                    <h1 className='text-2xl font-sans '>price :</h1>
                    <p className='text-4xl font-bold mt-2'>$2500</p>
                    <button className='bg-[#a435f0] px-8 py-3 w-full  mt-4 rounded-md font-medium text-white mb-3'>Checkout</button>
                </div>

            </div>




            <div>
                <div className='md:flex gap-10 border rounded md:w-3/4 w-full p-2 mt-10'>

                    <div className='md:flex gap-2 '>
                        <div>
                            <img className='md:h-24 md:w-36 p-1 rounded-sm' src="https://i.ibb.co/W0G0dPm/56-Bicycle-Maintenance-Course.jpg" alt="" />
                        </div>

                        <div>
                            <h1 className='md:text-2xl font-serif'>Ultimate Photography Bundle</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, impedit.</p>
                            <div className='flex items-center gap-2 mt-2'>
                                <p className='text-yellow-600'>4.6</p>
                                <span className='flex gap-1'>
                                    <ImStarFull className='text-yellow-600' />
                                    <ImStarFull className='text-yellow-600' />
                                    <ImStarFull className='text-yellow-600' />
                                    <ImStarFull className='text-yellow-600' />
                                    <ImStarFull className='text-yellow-600' />

                                </span>
                                <p className='text-gray-600 font-thin'>(4378 ratting)</p>
                            </div>
                            <span className='flex items-center gap-1 mt-1 min-w-max'>
                                <p className='text-gray-600 font-mono text-xs'> 41.5 total hours .</p>
                                <p className='text-gray-600 font-mono text-xs'> 207 lectures .</p>
                                <p className='text-gray-600 font-mono text-xs'> Beginner</p>
                            </span>
                        </div>


                    </div>

                    <div className='md:flex md:gap-8 flex justify-between '>
                        <div className='font-sans text-[#a435f0] cursor-pointer'>
                            <p>Remove</p>
                            <p>Save me later</p>
                        </div>
                        <div className='font-sans font-semibold text-[#a435f0]'>
                            <p>Total price</p>
                            <p>$2500</p>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className='md:flex gap-10 border rounded md:w-3/4 w-full p-2 mt-10'>

                    <div className='md:flex gap-2 '>
                        <div>
                            <img className='md:h-24 md:w-36 p-1 rounded-sm' src="https://i.ibb.co/W0G0dPm/56-Bicycle-Maintenance-Course.jpg" alt="" />
                        </div>

                        <div>
                            <h1 className='md:text-2xl font-serif'>Ultimate Photography Bundle</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, impedit.</p>
                            <div className='flex items-center gap-2 mt-2'>
                                <p className='text-yellow-600'>4.6</p>
                                <span className='flex gap-1'>
                                    <ImStarFull className='text-yellow-600' />
                                    <ImStarFull className='text-yellow-600' />
                                    <ImStarFull className='text-yellow-600' />
                                    <ImStarFull className='text-yellow-600' />
                                    <ImStarFull className='text-yellow-600' />

                                </span>
                                <p className='text-gray-600 font-thin'>(4378 ratting)</p>
                            </div>
                            <span className='flex items-center gap-1 mt-1 min-w-max'>
                                <p className='text-gray-600 font-mono text-xs'> 41.5 total hours .</p>
                                <p className='text-gray-600 font-mono text-xs'> 207 lectures .</p>
                                <p className='text-gray-600 font-mono text-xs'> Beginner</p>
                            </span>
                        </div>


                    </div>

                    <div className='md:flex md:gap-8 flex justify-between '>
                        <div className='font-sans text-[#a435f0] cursor-pointer'>
                            <p>Remove</p>
                            <p>Save me later</p>
                        </div>
                        <div className='font-sans font-semibold text-[#a435f0]'>
                            <p>Total price</p>
                            <p>$2500</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cart;