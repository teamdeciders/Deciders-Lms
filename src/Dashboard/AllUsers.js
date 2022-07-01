import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading/Loading';
const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold text-center'>All Users</h1>
            </div>
            <div className=" overflow-x-auto rounded-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-white bg-[#2366B5]">
                        <tr>
                            <th className="px-6 py-4">
                                Email
                            </th>
                            <th className="px-6 py-4">
                                User Type
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
                            users?.map(user => <tr key={user?._id}>

                                <td className="px-6 py-4">
                                    {user?.email}
                                </td>
                                <td className="px-6 py-4">
                                    {user?.userType ? user?.userType : 'Student'}
                                </td>

                                <td className="px-6 py-4">
                                    {user?._id}
                                </td>

                                <td className="px-6 py-4">
                                    <div className='flex gap-3 cursor-pointer'>
                                        <button className="px-2 py-1 outline rounded-md hover:bg-red-500  hover:text-white">Make Admin</button>
                                        <button className="px-2 py-1 outline rounded-md hover:bg-red-500  hover:text-white">Make Teacher</button>
                                        <button className="px-2 py-1 outline rounded-md hover:bg-red-500  hover:text-white">Delete User</button>
                                    </div>
                                </td>

                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;