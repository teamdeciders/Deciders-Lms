import React, { useState } from 'react';
import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../Pages/Loading/Loading';
import EditeCourseModal from './EditeCourseModal'
import { Helmet } from 'react-helmet-async';

const AllCourses = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [coursedata, setCoursedata] = useState({})
    const { data: courses, isLoading, refetch } = useQuery('courses', () => fetch('http://localhost:5000/allcourses').then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    const handleDeleteCourse = id => {
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


                fetch(`http://localhost:5000/course/${id}`, {
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
                                'Course Deleted!',
                                'Course has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })

    }

    const handleDuplicateCourse = data => {
        let { title, overView, courseDuration, student, price, level, teacherName, courseCatagory, image, publisher, reviews } = data
        let newdata = {
            title: title + " (Duplicated) ",
            overView, courseDuration, student, price, level, teacherName, courseCatagory, image, publisher, reviews
        }
        fetch('http://localhost:5000/duplicatecourse', {
            method: 'POST',
            body: JSON.stringify(newdata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                Swal.fire(
                    'Course Duplicated',
                    'success'
                )
                refetch()
            });

    }

    return (
        <div>
             <Helmet>
        <title>All Course - Deciders LMS</title>
      </Helmet>
            <div className='border-b-2 mb-4'>
                <h1 className='text-2xl font-bold text-center'>All Courses : {courses.length}</h1>
            </div>
            <div className=" overflow-x-auto rounded-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-white bg-[#2366B5]">
                        <tr>
                            <th className="px-6 py-4">
                                Title
                            </th>
                            <th className="px-6 py-4">
                                Author
                            </th>
                            <th className="px-6 py-4">
                                Course Category
                            </th>
                            <th className="px-6 py-4">
                                ID
                            </th>
                            <th className="px-6 py-4">
                                Level
                            </th>
                            <th className="px-6 py-4">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(course => <tr key={course._id}>

                                <td className="px-6 py-4 font-bold">
                                    {course.title}
                                </td>
                                <td className="px-6 py-4">
                                    {course.publisher}
                                </td>
                                <td className="px-6 py-4">
                                    {course.courseCatagory}
                                </td>
                                <td className="px-6 py-4">
                                    {course._id}
                                </td>
                                <td className="px-6 py-4">
                                    {course.level}
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex gap-3 cursor-pointer'>
                                        <AiOutlineEye></AiOutlineEye>
                                        <AiOutlineEdit
                                            onClick={() => {
                                                setShowModal(true)
                                                setCoursedata(course)
                                            }}
                                        ></AiOutlineEdit>
                                        <AiOutlineCopy onClick={() => handleDuplicateCourse(course)}></AiOutlineCopy>
                                        <AiOutlineDelete onClick={() => handleDeleteCourse(course._id)}></AiOutlineDelete>
                                    </div>
                                </td>

                            </tr>)
                        }



                    </tbody>
                </table>
                <EditeCourseModal setShowModal={setShowModal} showModal={showModal} data={coursedata} refetch={refetch} />
            </div>
        </div>
    );
};

export default AllCourses;