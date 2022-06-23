import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FcInfo } from 'react-icons/fc'
const Aleart = ({ data }) => {
    const [show, setShow] = useState(false)
    const close = () => {
        setShow(!show)
    }
    return (
        <div className={`max-w-sm w-full p-4 car cs-card-shadow rounded-md absolute top-3  right-0  z-10 bg-[#FFFFFF] ${show ?'hidden' : 'block' }`}>
            <div className="grid grid-cols-6 gap-1">
                <div className='col-span-1 flex items-center justify-center'>
                    <FcInfo className='text-2xl' />
                </div>
                <div className='col-span-4  '>
                    <h1 className='text-green-500 font-bold text-red'>{data}</h1>
                </div>
                <div onClick={close} className='col-span-1 flex items-center justify-center '>
                    <AiOutlineCloseCircle className='text-2xl' />
                </div>
            </div>
        </div>
    );
};

export default Aleart;