import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import auth from '../Firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading/Loading';
const MyProfile = () => {
    const [active, setActive] = useState(false)
    const imageStoreKey = '16abc4ff06472ec2149292101479d701'
    const [user] = useAuthState(auth)


    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        const img = data.image[0]
        const formData = new FormData();
        formData.append('image', img);

        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.display_url
                    const profileData = {
                        name: data.name,
                        phone: data.phone,
                        address: data.address,
                        img: img
                    }
                    fetch(`http://localhost:5000/profiledata/${user?.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(profileData)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.result.acknowledged) {
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'Profile Update Succesfull!',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                                setActive(false)
                                refetch()
                            }
                            else {

                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong!',

                                })
                            }
                        })
                }
            })
    }

    const { data: profiledata, isLoading, refetch } = useQuery('profiledata', () => fetch(`http://localhost:5000/myprofile/${user?.email}`).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    const { email, name, _id, phone, address, img } = profiledata[0]
    return (
        <section>
            <div className='flex justify-between md:px-3'>
                <h2 className='text-3xl font-bold'>My Profile</h2>
                <p className='text-blue-600 font-bold cursor-pointer' onClick={() => setActive(!active)}>Edit</p>
            </div>
            <div className='border mt-2'></div>
            <div className='flex justify-center items-center md:space-x-28 my-5 flex-col md:flex-row'>
                <div className='space-y-4'>
                    <div className='w-32 h-32 mt-2'>
                        <img className='rounded-full w-full h-full ring-2' src={img ? img : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'} alt="" />
                    </div>
                    <div className='text-center'>
                        <button onClick={() => setActive(true)} className='py-2 bg-[#FC8B06] w-full rounded text-white font-bold'>Edit</button>
                    </div>
                </div>
                <div className='space-y-3'>
                    <div>
                        <p className='text-[#65A8E7] text-sm font-semibold'>Student ID:</p>
                        <p className='font-bold text-lg'>DL-{_id.slice(0, 6)}</p>
                    </div>
                    <div>
                        <p className='text-[#65A8E7] text-sm font-semibold'>Full name
                        </p>
                        <p className='font-bold text-lg'>
                            {name ? <p className='font-bold text-lg'>{name}</p> : <p className='font-bold text-lg'>{user?.displayName}</p>}
                        </p>
                    </div>
                    <div>
                        <p className='text-[#65A8E7] text-sm font-semibold'>Email Address :
                        </p>
                        <p className='font-bold text-lg'>{user?.email}
                        </p>
                    </div>
                    <div>
                        <p className='text-[#65A8E7] text-sm font-semibold'>Phone :
                        </p>
                        {phone ? <p className='font-bold text-lg'>{phone}</p> : <p className='font-bold text-lg'></p>}
                    </div>
                    <div>
                        <p className='text-[#65A8E7] text-sm font-semibold'>Address :
                        </p>
                        {address ? <p className='font-bold text-lg'>{address}</p> : <p className='font-bold text-sl text-gray-600'></p>}
                    </div>
                </div>
            </div>
            <div className={`md:w-3/4 cs-card-shadow mx-auto w-full min-h-max rounded-md p-4 ${active ? 'block' : 'hidden'}`}>
                <h2 className='text-xl font-bold text-center'>Edit Your Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-3 ' >
                    <input {...register("name")} className='w-full mt-4 h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Your Name' defaultValue={user?.displayName} />
                    <input {...register("phone")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Your Phone Number' required />
                    <input {...register("address")} className='w-full h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Your Address' required />
                    <input type="file" {...register("image")} required />
                    <button type='submit' className='px-3  py-2  rounded-md border hover:border-transparent font-bold border-blue-700 hover:bg-[#FC8B06] hover:text-white'>Update</button>
                </form>

            </div>
        </section>
    );
};

export default MyProfile;