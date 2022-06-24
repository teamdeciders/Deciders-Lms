import React, { useState } from 'react';
import { ImCross } from 'react-icons/im'
const AddCourses = () => {
    const [moduleInput, setModuleInput] = useState(false)
    const [lessons, setLessons] = useState(false)
    const addModule = () => {
        setModuleInput(!moduleInput)
    }
    const addLessons = () => {
        setLessons(!moduleInput)
    }
    return (
        <div>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>Add Course</h1>
            </div>
            <div className='p-2'>

                <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Add Title' />
                <textarea className='w-full  p-2 rounded-md in-bord h-96 mb-3' type="text" placeholder='Add Title' />
                <div className="md:flex gap-4">
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Duration in day' />
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Students' />

                </div>
                <div className="md:flex gap-4">
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Course Price' />
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Level' />

                </div>
                <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Course Catagory' />
                <label className='my-2' htmlFor="image">Set featured image</label>
                <input name='image' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="file" />
                <div className='p-2'>
                    <p>Course Curriculum</p>
                    <div className="flex gap-5">
                        <button onClick={addModule} className='p-2 bg-[#FC8B06] hover:bg-[#c26b08] text-white rounded-sm text-sm'>ADD MODULE</button>
                        <button onClick={addLessons} className='p-2 bg-[#FC8B06] hover:bg-[#c26b08] text-white rounded-sm text-sm'>ADD LESSON</button>
                    </div>
                    {/* Add a module */}
                    <div className={`flex items-center ${moduleInput ? 'block' : 'hidden'} `}>
                        <input className='w-full h-11  my-3 rounded-md in-bord pl-3 ' type="text" placeholder='Module Name' />
                        <ImCross onClick={() => setModuleInput(false)} className='m-3 text-red-500' />
                    </div>
                    {/* Add a Lessons */}
                    <div className={`flex items-center ${lessons ? 'block' : 'hidden'} `}>
                        <input className='w-full h-11  my-3 rounded-md in-bord pl-3 ' type="text" placeholder='Search Lesson' />
                        <ImCross onClick={() => setLessons(false)} className='m-3 text-red-500' />
                    </div>

                </div>
                <button className='p-2 bg-[#1672b8] hover:bg-[#154b77] rounded-md block mx-auto text-white'>Publish Course</button>

            </div>
        </div>
    );
};

export default AddCourses;