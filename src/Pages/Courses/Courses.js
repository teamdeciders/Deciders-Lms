import React from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import HomeCourse from '../Home/HomeCourse';

const Courses = () => {

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
            <div className='bg-[#FDFCF6] h-[30vh]'>
                <h1 className='text-4xl font-bold text-center pt-20'>আমাদের সকল কোর্স</h1>
            </div>

            {/* homecatagory */}

            <div className='mt-24'>


                <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 '>
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

                        {/* <div className='flex items-center mt-[-12px]'>
                            <h1 className='w-10 h-10 border shadow-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto mt-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </h1>
                            <input className='px-4 py-2 h-[40px] min-w-max border shadow-md' type="search" name="" id="" />
                        </div> */}


               <div class="relative">
               <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-white shadow-lg rounded-r-lg border  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
               <input className='block p-2.5 w-full z-20 text-sm bg-white border shadow-sm rounded-md  required' type="search" name="" id="" />
                 </div>


                    </div>



                </div >

            </div>

             
             {/* card start */}

             <div>
                <HomeCourse></HomeCourse>
             </div>


        </div>
    );
};

export default Courses;