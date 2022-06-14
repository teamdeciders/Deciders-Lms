import React from 'react';
import aboutheaderimage from '../../Assets/aboutheaderimage.png'
const AboutHeader = () => {
    return (
        <div className='bg-[#FDFCF6] '>
            <div className='px-6 md:px-14 lg:max-w-7xl md-w-full mx-auto min-h-[60vh] h-auto'>

              <div className='lg:flex lg:justify-around lg:items-center md:flex md:justify-center md:items-center'>
                  <div>
                      <h1 className='text-4xl font-bold'>ABC সম্পর্কে।</h1>
                      </div>
                  <div className='mt-8'>
                      <img src={aboutheaderimage} alt="" />
                  </div>
              </div>

            </div>
        </div>
    );
};

export default AboutHeader;