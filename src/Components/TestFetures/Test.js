import React from 'react';

const Test = () => {
    return (
        <div>
            <div className='bg-[#FDFCF6] min-h-[30vh] p-10'>
                <h1 className='text-3xl font-bold text-center'>I am Test File</h1>
            </div>
            <div className='px-6 md:px-14 lg:max-w-7xl md-w-full mx-auto min-h-[60vh] h-auto'>
                <div className=" p-4 cs-card-shadow rounded-md  ">
                    <iframe className='mx-auto md:w-[860px] md:h-[515px] h-[250px] w-full'  src="https://www.youtube.com/embed/oz4fDIbKw10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Test;