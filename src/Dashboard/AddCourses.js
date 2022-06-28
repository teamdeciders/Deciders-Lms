import React, { useState, useMemo, useRef, } from 'react';
import JoditEditor from "jodit-react";
import { ImCross } from 'react-icons/im'
const AddCourses = () => {
    const [moduleInput, setModuleInput] = useState(false)
    const [lessons, setLessons] = useState(false)
    const addModule = () => {
        setModuleInput(true)
        let newDiv = document.createElement('div')
        newDiv.className = `flex items-center ${moduleInput ? 'block' : 'hidden'} `
        newDiv.innerHTML = `<h1 className='text-6xl'>Mayed</h1>`

        document.getElementById('Displaymodule').appendChild(newDiv)

    }
    const addLessons = () => {
        setLessons(!moduleInput)
    }
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const addCourse = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const overview = content
        const courseDuration = Number(e.target.courseDuration.value)
        const students = Number(e.target.students.value)
        const price = Number(e.target.price.value)
        const teacherName = e.target.teacherName.value
        const teacherimage = e.target.teacherimage.value
        const level = e.target.level.value
        const catagory = e.target.catagory.value
        const image = e.target.image.value
        const reviewCount = Number(e.target.reviewCount.value)
        const coursedata = {
            title: title,
            overview: overview,
            courseDuration: courseDuration,
            students: students,
            price: price,
            level: level,
            catagory: catagory,
            image: image,
            teacherName: teacherName,
            teacherimage: teacherimage,
            reviewCount: reviewCount,

        }


        console.log(coursedata);
    }
    return (
        <div>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>Add Course</h1>
            </div>
            <form onSubmit={addCourse}>
                <div className='p-2'>

                    <input name='title' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Add Title' required />
                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)}
                        onChange={newContent => { }}
                    />
                    <div className="md:flex gap-4 mt-4">
                        <input name='courseDuration' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Duration in day' required />
                        <input name='students' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Students' required />

                    </div>
                    <div className="md:flex gap-4">
                        <input name='price' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Course Price' />
                        <input name='level' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Level' />

                    </div>
                    <div className="md:flex gap-4">
                        <input name='teacherName' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Teacher Name' />
                        <input name='reviewCount' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Default Review' />

                    </div>
                    <input name='catagory' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Course Catagory' />
                    <input name='image' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Course Image URL' />
                    <input name='teacherimage' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Teacher Image URL' />
                    <label className='my-2' htmlFor="image">Set featured image</label>
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="file" />
                    <div className='p-2'>
                        <p>Course Curriculum</p>
                        <div className="flex gap-5">
                            <div onClick={addModule} className='p-2 bg-[#FC8B06] hover:bg-[#c26b08] text-white rounded-sm text-sm'>ADD MODULE</div>
                            <button onClick={addLessons} className='p-2 bg-[#FC8B06] hover:bg-[#c26b08] text-white rounded-sm text-sm'>ADD LESSON</button>
                        </div>
                        {/* Add a module */}
                        <div id='Displaymodule'>
                            {/* <input className='w-full h-11  my-3 rounded-md in-bord pl-3 ' type="text" placeholder='Module Name' />
                            <ImCross onClick={() => setModuleInput(false)} className='m-3 text-red-500' /> */}

                        </div>
                        {/* Add a Lessons */}
                        <div className={`flex items-center ${lessons ? 'block' : 'hidden'} `}>
                            <input className='w-full h-11  my-3 rounded-md in-bord pl-3 ' type="text" placeholder='Search Lesson' />
                            <ImCross onClick={() => setLessons(false)} className='m-3 text-red-500' />
                        </div>

                    </div>
                    <button type='submit' className='p-2 bg-[#1672b8] hover:bg-[#154b77] rounded-md block mx-auto text-white'>Publish Course</button>

                </div>
            </form>
        </div>
    );
};

export default AddCourses;