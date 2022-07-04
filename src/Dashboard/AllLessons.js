import React from 'react';
import { useState } from 'react';
import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../Pages/Loading/Loading';
import LessonaddModal from './LessonaddModal';
const AllLessons = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [lessondata, setLessondata] = useState({})
    const [editeform, setEditeForm] = useState(false)
    const { data: lessons, isLoading, refetch } = useQuery('lessons', () => fetch('http://localhost:5000/alllessons').then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    const handleDeleteLesson = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/lesson/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Lesson Deleted!',
                                'Lesson has been deleted.',
                                'success'
                            )

                            refetch()

                        }
                    })

            }
        })


    }
    const handleDuplicateLesson = data => {
        let { title, content, duration, lessontype, tag } = data
        let newdata = {
            title: title + "(Copyed)",
            content,
            duration,
            lessontype,
            tag
        }
        fetch('http://localhost:5000/duplicatelesson', {
            method: 'POST',
            body: JSON.stringify(newdata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => Swal.fire(
                'Lesson Duplicated',
                'success'
            ));
        refetch()
    }

    const handleEditeLesson = (data) => {
        console.log(data);

    }

    return (
        <div>
            <div className='border-b-2 mb-4'>
                <h1 className='text-2xl font-bold text-center'>All Lessons</h1>
            </div>
            <div className=" overflow-x-auto rounded-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-white bg-[#2366B5]">
                        <tr>
                            <th className="px-6 py-4">
                                Title
                            </th>

                            <th className="px-6 py-4">
                                Tag
                            </th>
                            <th className="px-6 py-4">
                                ID
                            </th>

                            <th className="px-6 py-4">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            lessons.map(lesson => <tr key={lesson._id}>

                                <td className="px-6 py-4 font-bold">
                                    {lesson.title}
                                </td>

                                <td className="px-6 py-4">
                                    {lesson.tag}
                                </td>
                                <td className="px-6 py-4">
                                    {lesson._id}
                                </td>

                                <td className="px-6 py-4">
                                    <div className='flex gap-3 cursor-pointer'>

                                        <AiOutlineEdit className='text-xl hover:text-orange-600' onClick={() => {
                                            setShowModal(true)
                                            setLessondata(lesson)
                                            console.log(lesson);
                                        }} ></AiOutlineEdit>

                                        <AiOutlineCopy className='text-xl hover:text-blue-600 ' onClick={() => handleDuplicateLesson(lesson)}></AiOutlineCopy>
                                        <AiOutlineDelete className='text-xl hover:text-red-600' onClick={() => handleDeleteLesson(lesson._id)}></AiOutlineDelete>
                                    </div>
                                </td>



                            </tr>)
                        }

                    </tbody>
                </table>
                <LessonaddModal setShowModal={setShowModal} showModal={showModal} data={lessondata} refetch={refetch} />
            </div>

        </div>
    );
};

export default AllLessons;