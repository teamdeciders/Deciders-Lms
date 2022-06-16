import React from 'react';
import { BsFacebook, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
const Instructor = () => {
    return (
        <div>
            <div className=" md:flex  gap-10  p-2 w-full">
                <div className='flex gap-5'>
                    <div className='w-[200px] shadow h-auto overflow-hidden'>
                        <img className='w-full h-full' src="https://i.ibb.co/tqddb5s/Kids-Teacher-02.png" alt="" />
                    </div>
                    <div className='min-w-max  h-auto overflow-hidden'>
                        <h2 className='text-xl font-bold'>Jhankar Mahbub</h2>
                        <h2 className='text-sm font-bold'>Web Developer.</h2>
                        <div className='flex gap-2 mt-2'>
                            <BsFacebook className='text-xl  hover:text-[#515FCE]'></BsFacebook>
                            <BsYoutube className='text-xl hover:text-[#515FCE]'></BsYoutube>
                            <AiFillInstagram className='text-xl hover:text-[#515FCE]'></AiFillInstagram>
                        </div>

                    </div>
                </div>
                <div className='md:w-3/4 md:mt-0 mt-6'>
                    <p className='text-gray-700 break-normal	' >
                        মুক্ত কৌশলগত থিম এলাকার মাধ্যমে বৈপ্লবিক উদ্ভাবনকে স্বতন্ত্রভাবে পুনরায় সংজ্ঞায়িত করুন।
                        উচ্চ-দক্ষ আর্কিটেকচারের পরিবর্তে উচ্চ-প্রদান পরীক্ষার পদ্ধতিগুলিকে ফসফ্লুরোসেন্টলি ই-সক্ষম
                        করে। মুক্ত কৌশলগত থিম এলাকার মাধ্যমে বৈপ্লবিক উদ্ভাবনকে স্বতন্ত্রভাবে পুনরায় সংজ্ঞায়িত করুন।
                        উচ্চ-দক্ষ আর্কিটেকচারের পরিবর্তে উচ্চ-প্রদান পরীক্ষার পদ্ধতিগুলিকে ফসফ্লুরোসেন্টলি ই-সক্ষম করে।
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Instructor;