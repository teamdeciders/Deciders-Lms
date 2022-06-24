import React, { useMemo, useRef, useState } from 'react';
import JoditEditor from "jodit-react";

const AddLessons = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('')
    console.log(content);

    return (
        <div>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>Add Lessons</h1>
            </div>
            <div className='p-2'>

                <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Add Title' />
                <JoditEditor
                    ref={editor}
                    value={content}
                    placeholder={'Start Typing'}
                    tabIndex={1}
                    
                    onBlur={newContent => setContent(newContent)}
                    onChange={newContent => { }}
                />
                <input className='w-full h-11 pl-3 rounded-md in-bord my-3' type="text" placeholder='Duration' />
                <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Lesson Type' />

            </div>
            <div className="md:flex gap-4">
                <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Course Price' />
                <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Level' />

            </div>
            <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Tag (Tag is Course Name)' />


            <button className='p-2 bg-[#1672b8] hover:bg-[#154b77] rounded-md block mx-auto text-white'>Publish Lesson</button>
            

        </div>

    );
};

export default AddLessons;