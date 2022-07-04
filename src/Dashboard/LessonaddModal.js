import React, { useMemo, useRef, useState } from 'react';
import JoditEditor from "jodit-react";
import Swal from 'sweetalert2';

export default function Modal({ setShowModal, showModal, data, refetch }) {
    let id = data._id
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const content = e.target.content.value
        const duration = e.target.duration.value
        const lessontype = e.target.lessontype.value
        const tag = e.target.tag.value
        const updatedLesson = {
            title,
            content,
            duration,
            lessontype,
            tag
        }
        fetch(`http://localhost:5000/editelesson/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedLesson),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => Swal.fire(
                'Lesson Updated !',
                'Lesson is updated',
                'success'
            ));
        refetch()
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
                                                    <h1 className='text-2xl font-bold text-center'>Edit Lesson</h1>
                                                </div>
                                                <div className='p-2'>

                                                    <input name='title' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Add Title' defaultValue={data.title} />
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={data.content}
                                                        defaultValue={data.content}
                                                        placeholder={'Start Typing'}
                                                        tabIndex={1}
                                                        name='content'
                                                        onBlur={newContent => setContent(newContent)}
                                                        onChange={newContent => { }}
                                                    />
                                                    <input className='w-full h-11 pl-3 rounded-md in-bord my-3' name='duration' type="text" placeholder='Duration' defaultValue={data.duration} />
                                                    <input className='w-full h-11 pl-3 rounded-md in-bord mb-3' name='lessontype' type="text" placeholder='Lesson Type (video or text)' defaultValue={data.lessontype} />

                                                </div>

                                                <input name='tag' className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Tag (Tag is Course Name)' defaultValue={data.tag} />

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