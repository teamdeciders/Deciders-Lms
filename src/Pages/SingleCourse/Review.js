import React from 'react';
import { useParams } from 'react-router-dom';
import useCourseData from '../../Hooks/useCourseData';

const Review = () => {
    const { id } = useParams()
    const [course] = useCourseData(id)
    const { reviews } = course
    return (
        <div className='p-2'>
            <div className='grid md:grid-cols-2 gap-5 rounded-md'>


                {
                    reviews?.map(review => <div className='shadow p-4 '>


                        <div className='flex gap-4'>
                            <img className='w-16 h-16 ring-2 rounded-full' src="https://i.ibb.co/tqddb5s/Kids-Teacher-02.png" alt="" />
                            <div>
                                <h2 className='text-xl'>কামরুল হক</h2>

                            </div>

                        </div>
                        <div>
                            <h2 className='text-sm mt-2 text-gray-600'>
                                স্যার এর কোর্স টি করে অনেক ভালো লাগলো । এত সুন্দর করে কোর্সটি সাজানো হয়েছে যে , নতুন দের জন্য দেশ সেরা কোর্স । অনেক অনেক ধন্যবাদ স্যার কে এত সুন্দর কোর্স উপহার দেয়ার জন্য ।
                            </h2>
                        </div>

                    </div>)
                }


            </div>
        </div>
    );
};

export default Review;