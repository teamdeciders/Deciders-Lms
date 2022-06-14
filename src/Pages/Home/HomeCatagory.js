
import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './HomeCatagory.css'






const HomeCatagory = () => {



    const leftscroll = () => {

        const div = document.getElementById('mainscroll')
        div.scrollLeft -= 70

    }
    const rightscroll = () => {

        const div = document.getElementById('mainscroll')
        div.scrollLeft += 70

    }
    return (
        <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-16 '>
            <div>
                <h1 className='md:text-4xl text-2xl font-bold my-2'>বৈশিষ্ট্য কোর্স</h1>

                <div className="flex ">
                    <div onClick={leftscroll} className="h-[35px] w-[35px]">
                        <BsArrowLeftCircleFill
                            className="w-full h-full block text-[#CEC051]" />
                    </div>
                    <div className="flex w-full overflow-x-scroll   homecatagory " id="mainscroll">
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>1</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>2</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>3</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>
                        <div className='px-4 py-2 inline-block mx-2 hover:bg-[#B3EAFF] hover:font-bold rounded-md bg-transparent border boder-[#41CCFF]'>
                            <h3>UX/UI</h3>
                        </div>

                        <div>


                        </div>

                    </div>
                    <div onClick={rightscroll} className="h-[35px] w-[35px] flex justify-center items-center">
                        <BsArrowRightCircleFill className="w-full h-full block text-[#CEC051]" />
                    </div>
                </div>









            </div>

        </div >
    );
};

export default HomeCatagory;