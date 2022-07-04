import React, { useMemo, useRef, useState } from 'react';
import JoditEditor from "jodit-react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const AddLessons = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const onSubmit = async data => {
        let newData = { ...data, content }
        fetch('http://localhost:5000/addlesson', {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                Swal.fire(
                    'Lessons Published!',
                    'Good Job',
                    'success'
                )
                reset()
                navigate('/dashboard/alllessons')

            }
            );

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className='border-b-2 border-slate-100 mb-4'>
                    <h1 className='text-2xl font-bold text-center'>Add Lessons</h1>
                </div>
                <div className='p-2'>

                    <input {...register("title")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Add Title' />
                    <JoditEditor
                        ref={editor}
                        value={content}
                        placeholder={'Start Typing'}
                        tabIndex={1}
                        {...register("content")}
                        onBlur={newContent => setContent(newContent)}
                        onChange={newContent => { }}
                    />
                    <input className='w-full h-11 pl-3 rounded-md in-bord my-3' {...register("duration")} type="text" placeholder='Duration' />
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' {...register("lessontype")} type="text" placeholder='Lesson Type (video or text)' />

                </div>

                <input {...register("tag")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Tag (Tag is Course Name)' />


                <button type='submit' className='p-2 bg-[#1672b8] hover:bg-[#154b77] rounded-md block mx-auto text-white'>Publish Lesson</button>


            </div>
        </form>

    );
};

export default AddLessons;