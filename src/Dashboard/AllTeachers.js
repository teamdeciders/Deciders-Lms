import React from 'react';
import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading/Loading';

const AllTeachers = () => {
    const { data: allteachers, isLoading, refetch } = useQuery('allteachers', () => fetch('http://localhost:5000/allteachers').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
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
                                        <AiOutlineEye></AiOutlineEye>
                                        <AiOutlineEdit></AiOutlineEdit>
                                        <AiOutlineCopy></AiOutlineCopy>
                                        <AiOutlineDelete></AiOutlineDelete>
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