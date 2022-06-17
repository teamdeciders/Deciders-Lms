import React, { useState } from 'react';
import { BsPlusCircleDotted, BsDashCircleDotted } from 'react-icons/bs'
import { FaFileVideo } from 'react-icons/fa'
const Accordion = ({ id, moduleName, lessons }) => {
    const [active, setActive] = useState(false)
    return (
        <div className='p-2 shadow my-3 relative '>
            <div className='md:w-3/4 w-5/6'>
                {/* Module Name */}
                <h1 className='md:text-xl  text-gray- 500' > {moduleName}</h1>
            </div>
            <div onClick={() => { setActive(!active) }} className='absolute  w-10 h-10 rounded-full shadow-md top-0 right-2 flex justify-center items-center'>
                {
                    active ?
                        <BsDashCircleDotted className='text-3xl text-red-700' />
                        :
                        <BsPlusCircleDotted className='text-3xl' />
                }

            </div>
            <div className={`p-2 mt-3  ${active ? 'block' : 'hidden'} `}>
                {/* Lesson Name */}

                {
                    lessons.map(l => <div className='ml-3 my-1 flex p-1 border-b'>
                        <FaFileVideo />
                        <h1 className=' ml-3  text-sm ' >{l}</h1>
                    </div>)
                }





            </div>

        </div>

    );
};

export default Accordion;