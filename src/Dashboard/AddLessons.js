import React from 'react';

const AddLessons = () => {
    return (
        <div>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>Add Lessons</h1>
            </div>
            <div className='p-2'>

                <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Add Title' />
                <textarea className='w-full  p-2 rounded-md in-bord h-96 mb-3' type="text" placeholder='Add Title' />
                <div className="md:flex gap-4">
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Duration' />
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Lesson Type' />

                </div>
                <div className="md:flex gap-4">
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Course Price' />
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Level' />

                </div>
                <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Tag (Tag is Course Name)' />
                
                
                <button className='p-2 bg-[#1672b8] hover:bg-[#154b77] rounded-md block mx-auto text-white'>Publish Lesson</button>

            </div>
        </div>
    );
};

export default AddLessons;