import React from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import card from '../../Assets/card1.png';

const MyCart = () => {
  return (
    <div>
      <div className=" h-[30vh]  bg-[#FDFCF6] w-full">
        <div className="lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 ">
          <h1 className="text-4xl font-bold text-center pt-20">আমার কার্ট</h1>
        </div>
      </div>

        <div className="bg-[#F6F7FD]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 lg:max-w-7xl md-w-full mb-24  mx-auto px-5 md:px-10 lg:px-16">
            <div>
            <div className=''>
                <p className='text-[#515FCE] font-semibold md:my-8'>আপনার ফাইলে 2 টি কোর্স যোগ করেছেন।</p>

                <div className='bg-[#979FE2] p-5 rounded grid grid-cols-1 md:grid-cols-2 relative my-2'>
                    <img className='rounded w-96 md:w-64 mr-3' src={card} alt="" />
                    <div className="">
                        <AiFillCloseCircle className='absolute top-0 right-0 md:top-2 md:right-3  text-white text-lg' />
                        <div className='text-xl text-white '>ফাইন্যান্স এবং ইনভেস্টমেন্ট সিরিজ:</div>
                        <div className='text-white font-medium'>গ্রাফিক্স ডিজাইন</div>
                        <div className='text-white font-medium text-xl mt-10 md:mt-18'>৳ ২৫০০</div>
                    </div>
                </div>
                
                <div className='bg-[#979FE2] p-5 rounded grid grid-cols-1 md:grid-cols-2 relative my-2'>
                    <img className='rounded w-96 md:w-64' src={card} alt="" />
                    <div>
                        <AiFillCloseCircle className='absolute top-0 right-0 md:top-2 md:right-3  text-white text-lg' />
                        <div className='text-xl text-white font-medium'>ফাইন্যান্স এবং ইনভেস্টমেন্ট সিরিজ:</div>
                        <div className='text-white font-medium'>গ্রাফিক্স ডিজাইন</div>
                        <div className='text-white font-medium text-xl mt-10 md:mt-18'>৳ ২৫০০</div>
                    </div>
                </div>
                
            </div>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mt-20">বিস্তারিত:</h2>
                
            </div>
        </div>
        </div>

    </div>
  );
};

export default MyCart;
