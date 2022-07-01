import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { useQuery } from 'react-query';
import auth from '../Firebase.init';
import Loading from '../Pages/Loading/Loading';
const AllStudents = () => {

    const { data: allstudents, isLoading, refetch } = useQuery('allstudents', () => fetch('http://localhost:5000/allstudents').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    let st = allstudents.filter(sd => !sd.role)
    const allStudents = st

    return (
        <div>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>All Student's</h1>
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
                            allStudents.map(student => <tr key={student._id}>
                                <td className="px-6 py-4">
                                    {student.email}
                                </td>

                                <td className="px-6 py-4">
                                    {student._id}
                                </td>

                                <td className="px-6 py-4">
                                    <div className='flex gap-3 cursor-pointer'>

                                        <AiOutlineDelete className='text-2xl hover:text-red-500'></AiOutlineDelete>
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

export default AllStudents;