import React from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { GrStar } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';


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
            <div className=' h-[30vh]  bg-[#FDFCF6] w-full'>
                <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 '>
                    <h1 className='text-4xl font-bold text-center pt-20'>আমাদের সকল কোর্স</h1>
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

                            {/* <div className='flex items-center mt-[-12px]'>
            <h1 className='w-10 h-10 border shadow-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto mt-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </h1>
            <input className='px-4 py-2 h-[40px] min-w-max border shadow-md' type="search" name="" id="" />
        </div> */}


                            <div class="relative">
                                <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium bg-white shadow-lg rounded-r-lg border">
                                    <GoSearch className='h-5 w-5 ' />
                                </button>
                                <input className='block p-2.5 w-full z-20 text-sm bg-white border shadow-sm rounded-md  required' type="search" name="" id="" />
                            </div>


                        </div>



                    </div >

                </div>


                {/* course card start */}
                <div className='flex flex-wrap gap-6 lg:gap-12 justify-center items-center'>
                    {/* Card Start --------------------------------- */}
                    <div className='rounded-md shadow p-2 bg-[#F6F7FD] h-[500px] w-full max-w-xs'>
                        <div className="img  h-[250px] overflow-path">
                            <img className='w-full' src="https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Digital-Marketing-Career-Track-Bohubrihi-620x440.png?x20306" alt="" />
                        </div>
                        <div className='h-[90px]  p-2 mt-2 flex'>
                            <div className='w-1/4 bg-red-500 rounded-full overflow-hidden  '>
                                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5CKyJ-XKwjSmwICNSLA5zKangbAbot-3VTz9oowmePnSAp2_qrbeVmxrVSDmen8Rov4&usqp=CAU" alt="" />
                            </div>
                            <div className='w-3/4 p-2 flex justify-between '>
                                <div>
                                    <h2 className='text-xl font-bold'> ঝংকার মাহবুব</h2>
                                    <h2 className='text-sm font-bold text-blue-600'>ওয়েব ডেবেলপার</h2>
                                </div>
                                <div className='flex items-center'>
                                    <Link to='/course/1'><button  className='bg-[#B3EAFF] px-2 py-2 rounded-md font-bold hover:bg-[#515FCE] hover:text-white'>Buy Now</button></Link>
                                </div>

                            </div>
                        </div>
                        <div className='h-[140px] p-2 w-full'>
                            <h2 className='text-xl font-bold h-[80px]'>যে ব্যক্তি ওয়েবসাইট তৈরী বা ডেভেলপ করে তাকে ওয়েব </h2>
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
                                    <h2 className='text-xl font-bold text-[#515FCE]'> ৳ ৫০৫০</h2>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* Card End --------------------------------- */}
                    {/* Card Start --------------------------------- */}
                    <div className='rounded-md shadow p-2 bg-[#F6F7FD] h-[500px] w-full max-w-xs'>
                        <div className="img  h-[250px] overflow-path">
                            <img className='w-full' src="https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Digital-Marketing-Career-Track-Bohubrihi-620x440.png?x20306" alt="" />
                        </div>
                        <div className='h-[90px]  p-2 mt-2 flex'>
                            <div className='w-1/4 bg-red-500 rounded-full overflow-hidden  '>
                                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5CKyJ-XKwjSmwICNSLA5zKangbAbot-3VTz9oowmePnSAp2_qrbeVmxrVSDmen8Rov4&usqp=CAU" alt="" />
                            </div>
                            <div className='w-3/4 p-2 flex justify-between '>
                                <div>
                                    <h2 className='text-xl font-bold'> ঝংকার মাহবুব</h2>
                                    <h2 className='text-sm font-bold text-blue-600'>ওয়েব ডেবেলপার</h2>
                                </div>
                                <div className='flex items-center'>
                                    <button className='bg-[#B3EAFF] px-2 py-2 rounded-md font-bold hover:bg-[#515FCE] hover:text-white'>Buy Now</button>
                                </div>

                            </div>
                        </div>
                        <div className='h-[140px] p-2 w-full'>
                            <h2 className='text-xl font-bold h-[80px]'>যে ব্যক্তি ওয়েবসাইট তৈরী বা ডেভেলপ করে তাকে ওয়েব </h2>
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
                                    <h2 className='text-xl font-bold text-[#515FCE]'> ৳ ৫০৫০</h2>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* Card End --------------------------------- */}
                    {/* Card Start --------------------------------- */}
                    <div className='rounded-md shadow p-2 bg-[#F6F7FD] h-[500px] w-full max-w-xs'>
                        <div className="img  h-[250px] overflow-path">
                            <img className='w-full' src="https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Digital-Marketing-Career-Track-Bohubrihi-620x440.png?x20306" alt="" />
                        </div>
                        <div className='h-[90px]  p-2 mt-2 flex'>
                            <div className='w-1/4 bg-red-500 rounded-full overflow-hidden  '>
                                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5CKyJ-XKwjSmwICNSLA5zKangbAbot-3VTz9oowmePnSAp2_qrbeVmxrVSDmen8Rov4&usqp=CAU" alt="" />
                            </div>
                            <div className='w-3/4 p-2 flex justify-between '>
                                <div>
                                    <h2 className='text-xl font-bold'> ঝংকার মাহবুব</h2>
                                    <h2 className='text-sm font-bold text-blue-600'>ওয়েব ডেবেলপার</h2>
                                </div>
                                <div className='flex items-center'>
                                    <button className='bg-[#B3EAFF] px-2 py-2 rounded-md font-bold hover:bg-[#515FCE] hover:text-white'>Buy Now</button>
                                </div>

                            </div>
                        </div>
                        <div className='h-[140px] p-2 w-full'>
                            <h2 className='text-xl font-bold h-[80px]'>যে ব্যক্তি ওয়েবসাইট তৈরী বা ডেভেলপ করে তাকে ওয়েব </h2>
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
                                    <h2 className='text-xl font-bold text-[#515FCE]'> ৳ ৫০৫০</h2>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* Card End --------------------------------- */}
                    {/* Card Start --------------------------------- */}
                    <div className='rounded-md shadow p-2 bg-[#F6F7FD] h-[500px] w-full max-w-xs'>
                        <div className="img  h-[250px] overflow-path">
                            <img className='w-full' src="https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Digital-Marketing-Career-Track-Bohubrihi-620x440.png?x20306" alt="" />
                        </div>
                        <div className='h-[90px]  p-2 mt-2 flex'>
                            <div className='w-1/4 bg-red-500 rounded-full overflow-hidden  '>
                                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5CKyJ-XKwjSmwICNSLA5zKangbAbot-3VTz9oowmePnSAp2_qrbeVmxrVSDmen8Rov4&usqp=CAU" alt="" />
                            </div>
                            <div className='w-3/4 p-2 flex justify-between '>
                                <div>
                                    <h2 className='text-xl font-bold'> ঝংকার মাহবুব</h2>
                                    <h2 className='text-sm font-bold text-blue-600'>ওয়েব ডেবেলপার</h2>
                                </div>
                                <div className='flex items-center'>
                                    <button className='bg-[#B3EAFF] px-2 py-2 rounded-md font-bold hover:bg-[#515FCE] hover:text-white'>Buy Now</button>
                                </div>

                            </div>
                        </div>
                        <div className='h-[140px] p-2 w-full'>
                            <h2 className='text-xl font-bold h-[80px]'>যে ব্যক্তি ওয়েবসাইট তৈরী বা ডেভেলপ করে তাকে ওয়েব </h2>
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
                                    <h2 className='text-xl font-bold text-[#515FCE]'> ৳ ৫০৫০</h2>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* Card End --------------------------------- */}
                    {/* Card Start --------------------------------- */}
                    <div className='rounded-md shadow p-2 bg-[#F6F7FD] h-[500px] w-full max-w-xs'>
                        <div className="img  h-[250px] overflow-path">
                            <img className='w-full' src="https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Digital-Marketing-Career-Track-Bohubrihi-620x440.png?x20306" alt="" />
                        </div>
                        <div className='h-[90px]  p-2 mt-2 flex'>
                            <div className='w-1/4 bg-red-500 rounded-full overflow-hidden  '>
                                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5CKyJ-XKwjSmwICNSLA5zKangbAbot-3VTz9oowmePnSAp2_qrbeVmxrVSDmen8Rov4&usqp=CAU" alt="" />
                            </div>
                            <div className='w-3/4 p-2 flex justify-between '>
                                <div>
                                    <h2 className='text-xl font-bold'> ঝংকার মাহবুব</h2>
                                    <h2 className='text-sm font-bold text-blue-600'>ওয়েব ডেবেলপার</h2>
                                </div>
                                <div className='flex items-center'>
                                    <button className='bg-[#B3EAFF] px-2 py-2 rounded-md font-bold hover:bg-[#515FCE] hover:text-white'>Buy Now</button>
                                </div>

                            </div>
                        </div>
                        <div className='h-[140px] p-2 w-full'>
                            <h2 className='text-xl font-bold h-[80px]'>যে ব্যক্তি ওয়েবসাইট তৈরী বা ডেভেলপ করে তাকে ওয়েব </h2>
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
                                    <h2 className='text-xl font-bold text-[#515FCE]'> ৳ ৫০৫০</h2>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* Card End --------------------------------- */}
                    {/* Card Start --------------------------------- */}
                    <div className='rounded-md shadow p-2 bg-[#F6F7FD] h-[500px] w-full max-w-xs'>
                        <div className="img  h-[250px] overflow-path">
                            <img className='w-full' src="https://bohubrihi.com/wp-content/uploads/2022/04/Full-Stack-Digital-Marketing-Career-Track-Bohubrihi-620x440.png?x20306" alt="" />
                        </div>
                        <div className='h-[90px]  p-2 mt-2 flex'>
                            <div className='w-1/4 bg-red-500 rounded-full overflow-hidden  '>
                                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5CKyJ-XKwjSmwICNSLA5zKangbAbot-3VTz9oowmePnSAp2_qrbeVmxrVSDmen8Rov4&usqp=CAU" alt="" />
                            </div>
                            <div className='w-3/4 p-2 flex justify-between '>
                                <div>
                                    <h2 className='text-xl font-bold'> ঝংকার মাহবুব</h2>
                                    <h2 className='text-sm font-bold text-blue-600'>ওয়েব ডেবেলপার</h2>
                                </div>
                                <div className='flex items-center'>
                                    <button className='bg-[#B3EAFF] px-2 py-2 rounded-md font-bold hover:bg-[#515FCE] hover:text-white'>Buy Now</button>
                                </div>

                            </div>
                        </div>
                        <div className='h-[140px] p-2 w-full'>
                            <h2 className='text-xl font-bold h-[80px]'>যে ব্যক্তি ওয়েবসাইট তৈরী বা ডেভেলপ করে তাকে ওয়েব </h2>
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
                                    <h2 className='text-xl font-bold text-[#515FCE]'> ৳ ৫০৫০</h2>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* Card End --------------------------------- */}
                   <button className=' bg-[#515FCE] block mx-auto px-8 py-3 mt-8 rounded text-white'>সকল কোর্স</button>
                </div>
            </div>

            <div>
            </div>



        </div>
    );
};

export default Courses;