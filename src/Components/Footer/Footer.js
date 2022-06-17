import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#979FE2] '>
            <div className=' bg-[#979FE2] lg:max-w-7xl md-w-full mt-24  mx-auto px-4 mb-0  md:px-16 '>
                <div className='lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center lg:pt-28 lg:pb-16 md:pt-20 md:pb-10 pb-4'>

                    <div className='lg:w-60 md:w-48 w-full lg:ml-10 pt-3 text-gray-100'>
                        <h1 className='text-xl font-bold text-black lg:mb-2 md:mb-1'>Decicers Lms</h1>
                        <p>মুক্ত কৌশলগত থিম এলাকার মাধ্যমে বৈপ্লবিক
                            উদ্ভাবনকে স্বতন্ত্রভাবে পুনরায় সংজ্ঞায়িত করুন।
                            উচ্চ-দক্ষ আর্কিটেকচারের পরিবর্তে উচ্চ-প্রদান
                            পরীক্ষার পদ্ধতিগুলিকে ফসফ্লুরোসেন্টলি
                            ই-সক্ষম করে।</p>
                    </div>
                    <div className='pb-3 pt-3 text-gray-100'>
                        <h1 className='text-xl font-bold text-black lg:mb-2 md:mb-1'>Our academy</h1>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Features & Staff</p>
                        <p>Our Pricing</p>
                        <p>Latest News</p>
                    </div>
                    <div className='pb-3 text-gray-100 '>
                        <h1 className='text-xl font-bold text-black lg:mb-2 md:mb-1'>Support</h1>
                        <p>FAQ’s </p>
                        <p>Features & Staff</p>
                        <p>Contact</p>
                        <p>24/7 Days</p>
                    </div>
                    <div className='lg:mr-10 text-gray-100'>
                        <h1 className='text-xl font-bold text-black lg:mb-2 md:mb-1'>Resources</h1>
                        <p> Customers’s  </p>
                        <p>Whitepaper</p>
                        <p>Dev API</p>
                        <p>Media Coverage</p>
                        <p>GDPR</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;