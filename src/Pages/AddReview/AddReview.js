import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddReview = ({ img }) => {
    console.log(img);
    return (
        <div>
            <Helmet>
                <title>Add A Reviews - Deciders LMS</title>
            </Helmet>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>Add Review</h1>
            </div>
            <form >
                <div className='p-2'>


                    <div className="md:flex gap-4 mt-4">
                        <input name='courseDuration' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Name' required />
                        <input name='students' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Email' required />

                    </div>

                    <input name='image' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Ratting' />
                    <textarea name='description' className='w-full h-24 pl-3  rounded-md in-bord mb-3' type="text" placeholder='Descripation' />
                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="file" />

                    <button type='submit' className='p-2 bg-[#1672b8] hover:bg-[#154b77] rounded-md block mx-auto text-white'>Publish Review</button>

                </div>
            </form>
        </div>
    );
};

export default AddReview;