import React from 'react';

const Header = () => {
    return (
        <div className='bg-[#FDFCF6] '>
            <div className='px-6 md:px-14 lg:max-w-7xl md-w-full mx-auto min-h-[60vh] h-auto'>
                <div className='flex flex-wrap'>
                    {/* <div className='lg:flex  md:flex-row lg:justify-between items-center'> */}

                    <div className='md:w-2/4   md:text-left flex items-center'>
                        <div>
                            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>সেরা <span className='lg:text-5xl text-[#CEC051] font-bold'>ই-লার্নিং</span> প্ল্যাটফর্ম </h1>
                            <h1 className='text-2xl md:text-3xl mt-1 lg:text-5xl font-bold'>  বাংলাদেশে</h1>
                            <p className='mt-4'>
                                মুক্ত কৌশলগত থিম এলাকার মাধ্যমে বৈপ্লবিক উদ্ভাবনকে স্বতন্ত্রভাবে পুনরায় সংজ্ঞায়িত
                                করুন।উচ্চ-দক্ষ আর্কিটেকচারের পরিবর্তে উচ্চ-প্রদান পরীক্ষার পদ্ধতিগুলিকে
                                ফসফ্লুরোসেন্টলি ই-সক্ষম করে।
                            </p>
                            <button className=' bg-[#515FCE] px-8 py-3 mt-8 rounded text-white'>শুরু করি</button>
                        </div>
                    </div>

                    <div className=' md:w-2/4 w-full  justify-center items-center'>
                        <img className='md:w-3/4  mx-auto block' src="https://i.ibb.co/qYz3Prh/Group-5200.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;