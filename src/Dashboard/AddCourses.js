import React, { useState, useMemo, useRef, } from 'react';
import JoditEditor from "jodit-react";
import { ImCross } from 'react-icons/im'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import { Helmet } from 'react-helmet-async';

const AddCourses = () => {
    const [user] = useAuthState(auth)
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const imageStoreKey = '16abc4ff06472ec2149292101479d701'
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const onSubmit = async data => {

        const img = data.image[0]
        const formData = new FormData();
        formData.append('image', img);

        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.display_url
                    let newData = { ...data, overView: content, publisher: user.displayName, image: img, reviews: [], certificate: 'Yes' }
                    fetch(`http://localhost:5000/addcourse`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(newData)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data) {
                                console.log(data);
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'Course Publish Succesfull!',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                                navigate('/dashboard/allcourses')
                            }
                            else {

                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong!',

                                })
                            }
                        })
                }
            })
    }



    return (
        <div>
            <Helmet>
                <title>Add A Course - Deciders LMS</title>
            </Helmet>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>Add Course</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='p-2'>

                    <input {...register("title")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Add Title' required />
                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)}
                        onChange={newContent => { }}
                    />
                    <div className="md:flex gap-4 mt-4">
                        <input  {...register("courseDuration")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="number" placeholder='Duration in day' required />
                        <input  {...register("student")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="number" placeholder='Students' required />

                    </div>
                    <div className="md:flex gap-4">
                        <input  {...register("price")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="number" placeholder='Course Price' />
                        <input  {...register("level")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Level' />

                    </div>
                    <div className="md:flex gap-4">
                        <input  {...register("teacherName")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Teacher Name' />


                    </div>
                    <input  {...register("courseCatagory")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Course Catagory' />
                    <label className='my-2' htmlFor="image">Set Course Image</label>
                    <input  {...register("image")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="file" />

                    <button type='submit' className='p-2 bg-[#1672b8] hover:bg-[#154b77] rounded-md block mx-auto text-white'>Publish Course</button>

                </div>
            </form>
        </div>
    );
};

export default AddCourses;
