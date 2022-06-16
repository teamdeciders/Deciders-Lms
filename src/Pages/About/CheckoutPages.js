import React from 'react';
import aboutheaderimage from '../../Assets/aboutheaderimage.png';

const CheckoutPages = () => {
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

            <div className='bg-[#F6F7FD] px-24 py-16'>
                <p className='text-[#515FCE] font-semibold'>আপনার ফাইলে 2 টি কোর্স যোগ করেছেন।</p>

                <div>
                    
                </div>
            </div>
        </section>
    );
};

export default CheckoutPages;