import React from 'react';
import { Link } from 'react-router-dom';
import abouthero from '../../Assets/abouthero.png'
const AboutHero = () => {
    return (
        <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 mt-24'>
            <div className='lg:flex lg:justify-between md:flex md:justify-between w-full'>
                <div>
                    <img className='w-[470px]' src={abouthero} alt="" />
                </div>

                <div className='lg:w-2/4 md:3/4 md:gap-6 w-full mt-2'>
                    <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold mb-4'>আপনি <span className='text-[#CEC051]'>A</span><span className='text-[#515FCE]'>B</span><span className='text-[#CEC051]'>C</span> এর সাথে যোগ দিতে
                        পারেন এবং আপনার উজ্জ্বল
                        ভবিষ্যতের জন্য আপনার দক্ষতা
                        আপগ্রেড করতে পারেন।
                    </h1>

                    <p className='text-gray-700'>মুক্ত কৌশলগpinstত থিম এলাকার মাধ্যমে বৈপ্লবিক উদ্ভাবনকে স্বতন্ত্রভাবে
                        পুনরায় সংজ্ঞায়িত করুন।উচ্চ-দক্ষ আর্কিটেকচারের পরিবর্তে উচ্চ-
                        প্রদান পরীক্ষার পদ্ধতিগুলিকে ফসফ্লুরোসেন্টলি ই-সক্ষম করে।</p>
                    <Link to={'courses'} className=' bg-[#515FCE] block max-w-max px-8 py-3 mt-8 rounded text-white'>Start Now</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;