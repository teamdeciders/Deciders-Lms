import { useQuery } from 'react-query';
import Loading from '../Pages/Loading/Loading';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }


    //make admin

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/makeadmin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })

                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Successfully made an admin',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    //make teacher

    const makeTeacher = (email) => {
        fetch(`http://localhost:5000/maketeacher/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })

                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Successfully made a teacher',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    //   delete user

    const handleDeleteUser = id => {
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
                <title>All Users - Deciders LMS</title>
            </Helmet>
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
                                    {user?.role ? user?.role : user?.userType}
                                </td>

                                <td className="px-6 py-4">
                                    {user?._id}
                                </td>

                                <td className="px-6 py-4">
                                    <div className='flex gap-3 cursor-pointer'>
                                        {user?.role === 'admin' ? <></> : <button onClick={() => makeAdmin(user.email)} className="px-2 py-1 outline rounded-md hover:bg-red-500  hover:text-white">Make Admin</button>}
                                        {user?.role === 'teacher' ? <></> : <button onClick={() => makeTeacher(user.email)} className="px-2 py-1 outline rounded-md hover:bg-red-500  hover:text-white">Make Teacher</button>}








                                        <button onClick={() => handleDeleteUser(user._id)} className="px-2 py-1 outline rounded-md hover:bg-red-500  hover:text-white">Delete User</button>
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