import React from 'react';

const Header = () => {
    return (
        <div className='bg-[#FDFCF6] px-6 md:px-14 lg:px-24 h-[70vh]'>
           <div className='lg:flex lg:justify-between items-center'>

           <div className=''>
                <h1 className='text-2xl md:text-3xl lg:text-4xl'>সেরা <span className='lg:text-4xl text-orange-200'>ই-লার্নিং</span> প্ল্যাটফর্ম </h1>
                <h1 className='text-2xl md:text-3xl mt-1 lg:text-4xl'>  বাংলাদেশে</h1>
                <p className='mt-4'>
                    মুক্ত কৌশলগত থিম এলাকার মাধ্যমে বৈপ্লবিক উদ্ভাবনকে স্বতন্ত্রভাবে পুনরায় সংজ্ঞায়িত
                    করুন।উচ্চ-দক্ষ আর্কিটেকচারের পরিবর্তে উচ্চ-প্রদান পরীক্ষার পদ্ধতিগুলিকে
                    ফসফ্লুরোসেন্টলি ই-সক্ষম করে।
                </p>
                  <button className=' bg-[#515FCE] px-8 py-3 mt-8 rounded text-white'>শুরু করি</button>
            </div>

             <div className='mt-8'>
                <img src="https://cdn.dribbble.com/users/1894420/screenshots/14032021/programming_01.gif" alt="" />
             </div>

           </div>
        </div>
    );
};

export default Header;