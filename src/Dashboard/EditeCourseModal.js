import React, { useMemo, useRef, useState } from 'react';
import JoditEditor from "jodit-react";
import Swal from 'sweetalert2';

export default function Modal({ setShowModal, showModal, data, refetch }) {
    let id = data._id
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        const title = e.target.title.value
        const courseDuration = e.target.courseDuration.value
        const student = e.target.student.value
        const price = e.target.price.value
        const level = e.target.level.value
        const teacherName = e.target.teacherName.value
        const courseCatagory = e.target.courseCatagory.value
        const overView = content
        const updatedCourse = {
            title, courseCatagory, courseDuration, student, price, level, teacherName, overView, image: data.image, publisher: data.publisher
        }

        fetch(`http://localhost:5000/editecourse/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedCourse),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                Swal.fire(
                    'Course Updated !',
                    'Course is updated',
                    'success'
                )
                refetch()
            });

        setShowModal(false)
    }

    return (

        <>

            {
                showModal ? (
                    <>
                        <div
                            className="justify-center mt-12 items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <form onSubmit={handleSubmit}>
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">

                                            <div>
                                                <div className='border-b-2 border-slate-100 mb-4'>
                                                    <h1 className='text-2xl font-bold text-center'>Edit Course</h1>
                                                </div>
                                                <div>

                                                    <div className='p-2'>
                                                        <input name='title' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Add Title' defaultValue={data.title} />
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={data.overView}
                                                            defaultValue={data.overView}
                                                            tabIndex={1}
                                                            onBlur={newContent => setContent(newContent)}
                                                            onChange={newContent => { }}
                                                        />
                                                        <div className="md:flex gap-4 mt-4">
                                                            <input name='courseDuration' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="number" placeholder='Duration in day' defaultValue={data.courseDuration} />
                                                            <input name='student' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="number" placeholder='Students' defaultValue={data.student} />

                                                        </div>
                                                        <div className="md:flex gap-4">
                                                            <input name='price' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="number" placeholder='Course Price' defaultValue={data.price} />
                                                            <input name='level' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Level' defaultValue={data.level} />

                                                        </div>
                                                        <div className="md:flex gap-4">
                                                            <input name='teacherName' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Teacher Name' defaultValue={data.teacherName} />


                                                        </div>
                                                        <input name='courseCatagory' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Course Catagory' defaultValue={data.courseCatagory} />
                                                        <label className='my-2' htmlFor="image">Set Course Image</label>
                                                        <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="file" disabled />
                                                        <span className='text-red-500 font-small' >You Can't Edite Course Image.</span>



                                                    </div>

                                                </div>


                                            </div>

                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"

                                            >
                                                Save Changes
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null
            }
        </>
    );
}