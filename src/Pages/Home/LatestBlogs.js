import React from 'react';
import card1 from '../../Assets/card1.png'
const LatestBlogs = () => {
    return (
        <div className='px-6 md:px-14 lg:px-24 mt-16 mb-12'>
            <h1 className='text-center text-4xl font-bold mt-8'>সর্বশেষ খবর এবং ব্লগ</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-10'>

                <div className='border border-[#01A1DB] max-w-sm w-full'>
                    <img className='w-full h-[230px]' src={card1} alt="" />
                    <div className='flex mx-3 mt-4 lg:font-medium lg:gap-4 gap-2 mb-4'>
                        <p>20-04-2022</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>By: Alexa bin</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>20-Comment</p>
                    </div>
                    <p className='mx-3 font-semibold text-xl'>গবেষণার জন্য সর্বশেষ মাইক্রো জৈবিক </p>
                    <p className='mx-3 font-semibold text-xl'>মৌলিক কর্মশালা</p>
                    <button className='buttonmodal btn1 mx-3 mt-4 mb-4'>পড়ুন</button>
                </div>
                <div className='border border-[#01A1DB] max-w-sm w-full'>
                    <img className='w-full h-[230px]' src={card1} alt="" />
                    <div className='flex mx-3 mt-4 lg:font-medium lg:gap-4 gap-2 mb-4'>
                        <p>20-04-2022</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>By: Alexa bin</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>20-Comment</p>
                    </div>
                    <p className='mx-3 font-semibold text-xl'>গবেষণার জন্য সর্বশেষ মাইক্রো জৈবিক </p>
                    <p className='mx-3 font-semibold text-xl'>মৌলিক কর্মশালা</p>
                    <button className='buttonmodal btn1 mx-3 mt-4 mb-4'>পড়ুন</button>
                </div>
                <div className='border border-[#01A1DB] max-w-sm w-full'>
                    <img className='w-full h-[230px]' src={card1} alt="" />
                    <div className='flex mx-3 mt-4 lg:font-medium lg:gap-4 gap-2 mb-4 w-full'>
                        <p>20-04-2022</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>By: Alexa bin</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>20-Comment</p>
                    </div>
                    <p className='mx-3 font-semibold text-xl'>গবেষণার জন্য সর্বশেষ মাইক্রো জৈবিক </p>
                    <p className='mx-3 font-semibold text-xl'>মৌলিক কর্মশালা</p>
                    <button className='buttonmodal btn1 mx-3 mt-4 mb-4'>পড়ুন</button>
                </div>

            </div>
        </div>
    );
};

export default LatestBlogs;