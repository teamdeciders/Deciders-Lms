import { compareAsc } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { GrStar } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {

    // console.log(course);
    const [style, setStyle] = useState({ display: 'none' });

    const navigate = useNavigate()
    const courseDetail = id => {
        navigate(`/course/${id}`)
    }



    return (
        <div>
            {/* Card Start --------------------------------- */}
            <div

                onMouseEnter={e => {
                    setStyle({ display: 'block' });
                }}
                onMouseLeave={e => {
                    setStyle({ display: 'none' })
                }}
                className=' shadow p-2 bg-[#F6F7FD]  w-full min-h-max max-w-xs cursor-pointer relative'>
                <div className="border w-[302px]  h-[200px] ">
                    {/* Course Image */}
                    <img className='w-full h-full' src={course.image} alt="" />
                </div>

                <div className='h-[140px] p-2 w-full '>
                    <h2 className='text-xl font-bold min-h-[52px] max-h-[54px] overflow-clip'>{course.title}</h2>
                    <h5 className='font-bold text-[#515FCE]'>{course.teacherName}</h5>

                    <div className='absolute bottom-0 w-11/12'>
                        <hr className='mt-2 border border-[#B3EAFF]' />
                        <div className=' w-full flex justify-between items-center h-[40px] p-2'>
                            <div className='flex'>
                                <GrStar className='text-xl font-bold  text-[#FBAE5C]' />
                                <GrStar className='text-xl font-bold  text-[#FBAE5C]' />
                                <GrStar className='text-xl font-bold  text-[#FBAE5C]' />
                                <GrStar className='text-xl font-bold  text-[#FBAE5C]' />
                                <GrStar className='text-xl font-bold  text-[#FBAE5C]' />
                            </div>
                            <div>
                                <h2 className='text-xl font-bold text-[#515FCE]'> ৳ {course.price}</h2>
                            </div>

                        </div>
                    </div>

                </div>
                <button onClick={() => courseDetail(course?._id)} className='text-xl w-[150px] h-[45px] font-bold absolute top-0 bottom-0 my-auto z-50 left-0 right-0 mx-auto rounded-md bg-orange-500 text-white overlay' style={style} >VIEW COURSE</button>




            </div>
            {/* Card End --------------------------------- */}
        </div>
    );
};

export default CourseCard;