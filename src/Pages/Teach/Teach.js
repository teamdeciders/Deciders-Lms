import React from 'react';

const Teach = () => {
    return (
        <section className='bg-[#FDFCF6]'>
            <div className='px-6 md:px-14 lg:max-w-7xl md-w-full mx-auto min-h-[60vh] h-auto'>
                <div className='flex md:flex-wrap flex-wrap-reverse'>
                    {/* <div className='lg:flex  md:flex-row lg:justify-between items-center'> */}

                    <div className='md:w-2/4   md:text-left flex items-center'>
                        <div>
                            {/* <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Best <span className='lg:text-5xl text-[#CEC051] font-bold'>E-learning</span> Platform</h1> */}
                            <h1 className='text-2xl md:text-3xl mt-1 lg:text-5xl font-bold text-[#CEC051]'>Sign up as an instructor!</h1>
                            <p className='mt-4 font-semibold text-md'>
                                We are looking for skilled instructors from various fields to join our workforce. We need eminent mentors to share their knowledge spontaneously to produce more capable professionals. Over hundreds of courses, instructors and millions of learners are elevating our space!.
                            </p>
                            <button className=' bg-green-600 hover:bg-green-500 duration-300 ease-in-out block max-w-max  px-8 py-3  rounded text-white mt-6'>GOT HIRED</button>
                        </div>

                    </div>

                    <div className=' md:w-2/4 w-full  justify-center items-center'>
                        <img className='md:w-3/4  mx-auto block' src="https://rightedgelearning.com/wp-content/uploads/2021/11/single-man-main.png" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Teach;