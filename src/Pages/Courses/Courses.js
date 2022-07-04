import React from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { GrStar } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';
import CourseCard from '../Home/CourseCard';
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading';


const Courses = () => {
    const { data: courses, isLoading, refetch } = useQuery('courses', () => fetch('http://localhost:5000/allcourses').then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    const leftscroll = () => {

        const div = document.getElementById('mainscroll')
        div.scrollLeft -= 70

    }
    const rightscroll = () => {

        const div = document.getElementById('mainscroll')
        div.scrollLeft += 70

    }
    return (
        <div>
            <div className=' h-[30vh]  bg-[#FDFCF6] w-full'>
                <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 '>
                    <h1 className='text-4xl font-bold text-center pt-20'>All Courses</h1>
                </div>
            </div>

            <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 '>
                {/* homecatagory */}

                <div className='mt-24'>


                    <div >
                        <div className='lg:flex lg:justify-between'>


                            <div className="flex lg:w-3/4 md:w-2/4 w-full">
                                <div onClick={leftscroll} className="h-[35px] w-[35px]">
                                    <BsArrowLeftCircleFill
                                        className="w-full h-full block text-[#CEC051]" />
                                </div>
                                <div className=" flex flex-grow gap-x-2  overflow-x-scroll   homecatagory w-3/4" id="mainscroll">

                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max mx-2    hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Graphic's Design</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>web Design</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Web Development</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Health and Fitness</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Free Pdf Certificate</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Bundle Courses</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Graphic's Design</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Graphic's Design</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Graphic's Design</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Graphic's Design</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Graphic's Design</h3>
                                    </div>

                                    {/* Slide Item End*/}
                                    {/* Slide Item Start */}
                                    <div className='px-4 py-2 h-[40px] min-w-max inline  mx-2  hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                                        <h3>Graphic's Design</h3>
                                    </div>

                                    {/* Slide Item End*/}





                                    <div>


                                    </div>

                                </div>
                                <div onClick={rightscroll} className="h-[35px] w-[35px] flex justify-center items-center">
                                    <BsArrowRightCircleFill className="w-full h-full block text-[#CEC051] cursor-pointer" />
                                </div>
                            </div>



                            <div className="relative">
                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium bg-white shadow-lg rounded-r-lg border">
                                    <GoSearch className='h-5 w-5 ' />
                                </button>
                                <input className='block p-2.5 w-full z-20 text-sm bg-white border shadow-sm rounded-md  required' type="search" name="" id="" />
                            </div>


                        </div>
                        <div className='flex flex-wrap gap-6 lg:gap-12  items-center'>
                            {
                                courses.map(course =>
                                    <CourseCard key={course._id} course={course} />
                                )
                            }
                        </div>



                    </div >

                </div>

            </div>

            <div>
            </div>



        </div>
    );
};

export default Courses;