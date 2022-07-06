import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import CourseCard from './CourseCard';

const HomeCourse = () => {

    const { data: courses, isLoading, refetch } = useQuery('courses', () => fetch('http://localhost:5000/homecourses').then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 mt-6'>
            <div className='flex flex-wrap gap-6 lg:gap-12 justify-center items-center'>


                {
                    courses.map(course =>
                        <CourseCard key={course._id} course={course} />
                    )
                }




            </div>
            <Link to={'courses'} className=' bg-[#515FCE] block max-w-max mx-auto px-8 py-3 mt-8 rounded text-white'>View All</Link>
        </div>
    );
};

export default HomeCourse;