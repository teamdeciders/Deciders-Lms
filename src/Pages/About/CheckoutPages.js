import React, { useState } from 'react';
import aboutheaderimage from '../../Assets/aboutheaderimage.png';
import card from '../../Assets/card1.png'
import { AiFillCloseCircle } from 'react-icons/ai'

const CheckoutPages = () => {

    const [count, setCount] = useState(1)

    const isIncrease = () => {
        setCount(count + 1)
    }

    const isDecrease = () => {
        if (count === 1) {
            return
        }
        else {
            return setCount(count - 1)
        }
    }

    return (
        <section>

            {/* Checkout Banner */}
            <div className='bg-[#FDFCF6] '>
                <div className='px-6 md:px-14 lg:max-w-7xl md-w-full mx-auto min-h-[60vh] h-auto'>

                    <div className='lg:flex lg:justify-around lg:items-center md:flex md:justify-center md:items-center'>
                        <div>
                            <h1 className='text-4xl font-bold'>Checkout Page</h1>
                        </div>
                        <div className='mt-8'>
                            <img src={aboutheaderimage} alt="" />
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-[#F6F7FD] px-5 md:px-24 py-16'>
                <p className='text-[#515FCE] font-semibold md:my-8'>আপনার ফাইলে 2 টি কোর্স যোগ করেছেন।</p>

                <div className='bg-[#979FE2] p-5 rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative my-2'>
                    <img className='rounded w-80' src={card} alt="" />
                    <div>
                    <AiFillCloseCircle className='absolute top-0 right-0 md:top-2 md:right-3  text-white text-lg'/>
                        <div className='text-2xl text-white font-medium'>ফাইন্যান্স এবং ইনভেস্টমেন্ট সিরিজ:</div>
                        <div className='text-white font-medium'>গ্রাফিক্স ডিজাইন</div>
                        <div className='text-white font-medium text-xl mt-10 md:mt-28'>৳ ২৫০০</div>
                    </div>
                    <div className='md:text-end text-center'>
                        <div className='flex justify-center md:justify-end md:mt-40 md:w-60'>
                            <p onClick={isDecrease} className='border px-5 py-2 rounded-l text-[#32323266] font-bold text-xl bg-white cursor-pointer'>-</p>
                            <p className='border px-5 py-2 bg-white text-[#515FCE] font-bold'>{count}</p>
                            <p onClick={isIncrease} className='border px-5 py-2 rounded-r text-[#CEC051] font-bold text-xl bg-white cursor-pointer'>+</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#979FE2] p-5 rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative my-2'>
                    <img className='rounded w-80' src={card} alt="" />
                    <div>
                    <AiFillCloseCircle className='absolute top-0 right-0 md:top-2 md:right-3 text-white text-lg'/>
                        <div className='text-2xl text-white font-medium'>ফাইন্যান্স এবং ইনভেস্টমেন্ট সিরিজ:</div>
                        <div className='text-white font-medium'>গ্রাফিক্স ডিজাইন</div>
                        <div className='text-white font-medium text-xl mt-10 md:mt-28'>৳ ২৫০০</div>
                    </div>
                    <div className='md:text-end text-center'>
                        <div className='flex justify-center md:justify-end md:mt-40 md:w-60'>
                            <p onClick={isDecrease} className='border px-5 py-2 rounded-l text-[#32323266] font-bold text-xl bg-white cursor-pointer'>-</p>
                            <p className='border px-5 py-2 bg-white text-[#515FCE] font-bold'>{count}</p>
                            <p onClick={isIncrease} className='border px-5 py-2 rounded-r text-[#CEC051] font-bold text-xl bg-white cursor-pointer'>+</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPages;