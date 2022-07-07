import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import CourseCard from '../Home/CourseCard';
import { Helmet } from 'react-helmet-async';

import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { useEffect } from 'react';


const Courses = () => {
    const [courses, setCourse] = useState([])
    const [searchResult, setSearchResult] = useState(courses)
    useEffect(() => {
        
    }, [])
    

    const leftscroll = () => {
        const div = document.getElementById('mainscroll')
        div.scrollLeft -= 70

    }
    const rightscroll = () => {

        const div = document.getElementById('mainscroll')
        div.scrollLeft += 70

    }
    const handleSearch = event => {
        let searchTest = event.target.value.toLowerCase();
        const match = courses.filter(course => course.title.toLowerCase().includes(searchTest))
        setSearchResult(match)

    }

    return (
        <div>
            <Helmet>
                <title>All Courses - Deciders LMS</title>
            </Helmet>
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
                                <input onChange={handleSearch} className='block p-2.5 w-full z-20 text-sm bg-white border shadow-sm rounded-md  required' type="search" placeholder='Search Courses..' />
                            </div>


                        </div>
                        <div className='flex flex-wrap justify-center gap-8 lg:gap-12  items-center mt-6'>
                            {
                                searchResult?.map(course =>
                                    <CourseCard key={course._id} course={course} />
                                )
                            }
                        </div>
                        <div className='py-4 w-full my-4 flex justify-center items-center'>

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