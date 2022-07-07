import React from 'react';
import { MdOutlineCancel } from "react-icons/md"
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { useState } from 'react';

const CartCard = ({ data }) => {
    const [course, setCourse] = useState(data)
    const deleteCart = (id) => {
        fetch(`http://localhost:5000/deletecart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted Item',
                    text: 'Successfully Removed',

                })
                setCourse(data)
            });
    }
    return (

        <div className='p-2 border shadow  min-h-max relative mb-4 '>
            <div className="flex gap-3">
                <div className='w-28  bg-blue-100'> <img className='w-full h-full border' src={course.courseImage} alt="" /></div>
                <div className=''>
                    <div className="md:max-w-[550px]">
                        <h2 className='md:text-xl font-bold min-h-max text-zinc-600' title={course.courseName}>{course.courseName.slice(0, 45)} ...</h2>
                        <h1 className='md:text-xl font-bold text-blue-800'><span className='text-black'>Price :</span>  ৳ {course.coursePrice}</h1>
                    </div>
                    <div onClick={() => deleteCart(course._id)} className="bg-red-50 flex justify-center cursor-pointer items-center hover:bg-red-600 duration-200 w-10 md:w-16 h-10 absolute right-0 my-auto bottom-0 top-0 rounded-l-full ">
                        <MdOutlineCancel className='text-3xl hover:text-white' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartCard;