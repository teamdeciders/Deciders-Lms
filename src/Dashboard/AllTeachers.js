import React from 'react';
import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading/Loading';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const AllTeachers = () => {
    const { data: allteachers, isLoading, refetch } = useQuery('allteachers', () => fetch('http://localhost:5000/allteachers').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleDeleteTeacher = id => {
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


                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )

                            refetch()

                        }
                    })

            }
        })


    }



    return (
        <div> 
            <Helmet>
        <title>All Teachers - Deciders LMS</title>
      </Helmet>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>All Teacher's</h1>
            </div>
            <div className=" overflow-x-auto rounded-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-white bg-[#2366B5]">
                        <tr>
                            <th className="px-6 py-4">
                                Email
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
                            allteachers.map(teacher => <tr key={teacher._id}>

                                <td className="px-6 py-4">
                                    {teacher.email}
                                </td>

                                <td className="px-6 py-4">
                                    {teacher._id}
                                </td>

                                <td className="px-6 py-4">
                                    <div className='flex gap-3 cursor-pointer'>

                                        <AiOutlineDelete className='text-2xl hover:text-red-500' onClick={() => handleDeleteTeacher(teacher._id)}></AiOutlineDelete>
                                    </div>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTeachers;