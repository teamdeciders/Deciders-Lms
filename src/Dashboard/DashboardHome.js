import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const DashboardHome = () => {

    const [date, setDate] = useState(new Date())

    return (
        <div className='md:flex gap-10 justify-center'>
            <div className='cs-round rounded-md shadow-md relative  w-full h-[380px]  md:max-w-md'>
                <div className='bg-[#FC8B06] cs-round h-4 rounded-md absulate top-0 '></div>
                <div className="p-2">
                    <h3 className='font-bold'>Hot Offers</h3>

                </div>

            </div>
            <div className='cs-round rounded-md shadow-md relative  w-full h-[380px]  md:max-w-md'>
                <div className='bg-[#41CCFF] cs-round h-4 rounded-md absulate top-0 '></div>
                <div className="md:p-2">
                    <h3 className='font-bold'>Calendar</h3>
                    <div className='flex justify-center items-center w-full'>
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>


        </div>

    );
};

export default DashboardHome;