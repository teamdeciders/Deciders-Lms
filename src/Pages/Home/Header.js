import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#FDFCF6] '>
            <div className='px-6 md:px-14 lg:max-w-7xl md-w-full mx-auto min-h-[60vh] h-auto'>
                <div className='flex flex-wrap'>
                    {/* <div className='lg:flex  md:flex-row lg:justify-between items-center'> */}

                    <div className='md:w-2/4   md:text-left flex items-center'>
                        <div>
                            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Best <span className='lg:text-5xl text-[#CEC051] font-bold'>E-learning</span> Platform</h1>
                            <h1 className='text-2xl md:text-3xl mt-1 lg:text-5xl font-bold'> in Bangladesh</h1>
                            <p className='mt-4'>
                            Individually redefine revolutionary innovation through open strategic theme areas. Phosphorescently e-enables high-performance testing methods instead of highly-skilled architectures.
                            </p>
                            <Link to={'courses'} className=' bg-[#515FCE] block max-w-max  px-8 py-3  rounded text-white mt-6'>Get Started</Link>
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