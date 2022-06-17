import React from 'react';
import card1 from '../../Assets/card1.png'
const LatestBlogs = () => {
    return (
        // <div className='px-6 md:px-14 lg:px-24 mt-16 mb-12'>
        <div className='lg:max-w-7xl md-w-full mt-24  mx-auto px-4 mb-8  md:px-16 '>
            <h1 className='text-center text-3xl font-bold mt-8'>Our Latest Blog</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-10'>

                <div className='border shadow rounded-md max-w-sm w-full'>
                    <img className='w-full h-[230px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7cCNiMpYATgXHdPUO3irVRUxh16Pxwo99nhqJ1rxabqx0oFvc3fZ-3CC3E5y5oz-vD5c&usqp=CAU' alt="" />
                    <div className='flex mx-3 mt-4 lg:font-medium lg:gap-4 gap-2 mb-4'>
                        <p>20-04-2022</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>By: Alexa bin</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>20-Comment</p>
                    </div>
                    <p className='mx-3 font-semibold text-xl'>The latest microbiology for research
 </p>
                    <p className='mx-3 font-semibold text-xl'>Basic workshop</p>
                    <button className='buttonmodal btn1 mx-3 mt-4 mb-4'>Reed Now</button>
                </div>
                <div className='border shadow rounded max-w-sm w-full'>
                    <img className='w-full h-[230px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvhCzeeaHeWa3PXDG3D3_FXP-HWiGWOx0BFPykSMmyTxTOMEfVpPJSSF7AxEqZCM-gAw&usqp=CAU' alt="" />
                    <div className='flex mx-3 mt-4 lg:font-medium lg:gap-4 gap-2 mb-4'>
                        <p>20-04-2022</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>By: Alexa bin</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>20-Comment</p>
                    </div>
                    <p className='mx-3 font-semibold text-xl'>The latest microbiology for research </p>
                    <p className='mx-3 font-semibold text-xl'>Basic workshop</p>
                    <button className='buttonmodal btn1 mx-3 mt-4 mb-4'>Reed Now</button>
                </div>
                <div className='border shadow rounded max-w-sm w-full'>
                    <img className='w-full h-[230px]' src='https://leverageedu.com/blog/wp-content/uploads/2019/11/Primary-Teaching-Courses.jpg' alt="" />
                    <div className='flex mx-3 mt-4 lg:font-medium lg:gap-4 gap-2 mb-4 w-full'>
                        <p>20-04-2022</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>By: Alexa bin</p>
                        <div className='border border-[#CEC051]'></div>
                        <p>20-Comment</p>
                    </div>
                    <p className='mx-3 font-semibold text-xl'>The latest microbiology for research </p>
                    <p className='mx-3 font-semibold text-xl'>Basic workshop</p>
                    <button className='buttonmodal btn1 mx-3 mt-4 mb-4'>Reed Now</button>
                </div>

            </div>
        </div>
    );
};

export default LatestBlogs;