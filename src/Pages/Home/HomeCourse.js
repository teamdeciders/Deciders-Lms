import React from 'react';

const HomeCourse = () => {
    return (
        <div className='lg:px-36 md:mx-16 px-2 mt-6'>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-6 '>
                <div className='rounded-md p-2 bg-[#DCDFF5] h-[500px] w-full max-w-xs card-border'>
                    <div className="img border-spacing-2 h-[250px] overflow-path">
                        <img className='w-full' src="https://i.ibb.co/QChDy0H/image.png" alt="" />
                    </div>

                </div>
                <div className='rounded-md p-2 bg-[#DCDFF5] h-[500px] w-full max-w-xs card-border'>
                    <div className="img border-spacing-2 h-[250px] overflow-path">
                        <img className='w-full' src="https://i.ibb.co/QChDy0H/image.png" alt="" />
                    </div>

                </div>
                <div className='rounded-md p-2 bg-[#DCDFF5] h-[500px] w-full max-w-xs card-border'>
                    <div className="img border-spacing-2 h-[250px] overflow-path">
                        <img className='w-full' src="https://i.ibb.co/QChDy0H/image.png" alt="" />
                    </div>

                </div>


            </div>
        </div>
    );
};

export default HomeCourse;