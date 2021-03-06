import React from 'react';
import { BsFacebook, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
const OurTeachers = () => {
    return (
        <div className='lg:max-w-7xl md-w-full  mx-auto px-4 mt-16  md:px-16 '>
            <div className='md:flex gap-10  my-4'>
                <div className=' md:w-2/4  mb-8'>
                    <h1 className='md:text-3xl text-2xl font-bold'>আমাদের দক্ষ প্রশিক্ষক মন্ডলি</h1>
                </div>
                <div className=' md:w-3/4'>
                    <h1 >মুক্ত কৌশলগত থিম এলাকার মাধ্যমে বৈপ্লবিক উদ্ভাবনকে স্বতন্ত্রভাবে পুনরায় সংজ্ঞায়িত করুন।
                        উচ্চ-দক্ষ আর্কিটেকচারের পরিবর্তে উচ্চ-প্রদান পরীক্ষার পদ্ধতিগুলিকে ফসফ্লুরোসেন্টলি ই-সক্ষম করে।</h1>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-8  md:px-0  '>

                {/* Teacher Card Start */}
                <div className='p-2 cs-border-shadow  w-full md:max-w-[280px]  '>
                    <div className='h-[150px] mx-auto  w-[150px]  overflow-hidden'>
                        <img className='w-full h-full' src="https://i.ibb.co/1nNrJJx/Kids-Teacher-04.png" alt="" />
                    </div>
                    <div className='w-full h-[100px] text-center mt-2'>
                        <h1 className='text-xl font-bold '>Md Moshiur Rahamn </h1>
                        <h1 className='text-sm font-bold text-[#515FCE] '>Web Developer </h1>
                        <div className='flex justify-center mt-4'>
                            <BsFacebook className='text-xl mx-2 hover:text-[#515FCE]'></BsFacebook>
                            <BsYoutube className='text-xl mx-2 hover:text-[#515FCE]'></BsYoutube>
                            <AiFillInstagram className='text-xl mx-2 hover:text-[#515FCE]'></AiFillInstagram>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                {/* Teacher Card End----------------- */}
               
                {/* Teacher Card Start */}
                <div className='p-2 cs-border-shadow  w-full md:max-w-[280px]  '>
                    <div className='h-[150px] mx-auto  w-[150px]  overflow-hidden'>
                        <img className='w-full h-full' src="https://i.ibb.co/qrK4XbD/Kids-Teacher-03.png" alt="" />
                    </div>
                    <div className='w-full h-[100px] text-center mt-2'>
                        <h1 className='text-xl font-bold '>Md Moshiur Rahamn </h1>
                        <h1 className='text-sm font-bold text-[#515FCE] '>Web Developer </h1>
                        <div className='flex justify-center mt-4'>
                            <BsFacebook className='text-xl mx-2 hover:text-[#515FCE]'></BsFacebook>
                            <BsYoutube className='text-xl mx-2 hover:text-[#515FCE]'></BsYoutube>
                            <AiFillInstagram className='text-xl mx-2 hover:text-[#515FCE]'></AiFillInstagram>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                {/* Teacher Card End----------------- */} {/* Teacher Card Start */}
                <div className='p-2 cs-border-shadow  w-full md:max-w-[280px]  '>
                    <div className='h-[150px] mx-auto  w-[150px]  overflow-hidden'>
                        <img className='w-full h-full' src="https://i.ibb.co/tqddb5s/Kids-Teacher-02.png" alt="" />
                    </div>
                    <div className='w-full h-[100px] text-center mt-2'>
                        <h1 className='text-xl font-bold '>Md Moshiur Rahamn </h1>
                        <h1 className='text-sm font-bold text-[#515FCE] '>Web Developer </h1>
                        <div className='flex justify-center mt-4'>
                            <BsFacebook className='text-xl mx-2 hover:text-[#515FCE]'></BsFacebook>
                            <BsYoutube className='text-xl mx-2 hover:text-[#515FCE]'></BsYoutube>
                            <AiFillInstagram className='text-xl mx-2 hover:text-[#515FCE]'></AiFillInstagram>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                {/* Teacher Card End----------------- */} {/* Teacher Card Start */}
                <div className='p-2 cs-border-shadow  w-full md:max-w-[280px]  '>
                    <div className='h-[150px] mx-auto  w-[150px]  overflow-hidden'>
                        <img className='w-full h-full' src="https://i.ibb.co/tqddb5s/Kids-Teacher-02.png" alt="" />
                    </div>
                    <div className='w-full h-[100px] text-center mt-2'>
                        <h1 className='text-xl font-bold '>Md Moshiur Rahamn </h1>
                        <h1 className='text-sm font-bold text-[#515FCE] '>Web Developer </h1>
                        <div className='flex justify-center mt-4'>
                            <BsFacebook className='text-xl mx-2 hover:text-[#515FCE]'></BsFacebook>
                            <BsYoutube className='text-xl mx-2 hover:text-[#515FCE]'></BsYoutube>
                            <AiFillInstagram className='text-xl mx-2 hover:text-[#515FCE]'></AiFillInstagram>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                {/* Teacher Card End----------------- */}

            </div>
        </div>
    );
};

export default OurTeachers;