import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { RiNotification2Fill } from 'react-icons/ri'



const DashboardHome = () => {

    const [date, setDate] = useState(new Date())

    return (
        <div >
            <div className='flex justify-center md:gap-10  gap-6 flex-col md:flex-row '>
                <div className='cs-round border  rounded-md shadow-md relative  w-full h-[380px]  md:max-w-md'>
                    <div className='bg-[#FC8B06] cs-round h-4 rounded-md absulate top-0  z-10'></div>
                    <div className="p-2 ">
                        <h3 className='font-bold'>Hot Offers</h3>
                        <div className="flex justify-center items-center flex-col md:px-5 py-3 space-y-2  ">
                            <div className='w-full flex p-3 rounded-md border shadow'>
                                <div className='w-[20%] text-end'>
                                    <div className='flex justify-center items-center  bg-[#FC8B06] w-12 h-12 rounded-md'>
                                        <RiNotification2Fill className='text-2xl text-white' />
                                    </div>
                                </div>
                                <div className='w-[70%]'>
                                    <div>সুখবর ! আমাদের প্রতিটি কোর্সে...</div>
                                    <div>10 min ago</div>
                                </div>
                            </div>
                            <div className='w-full flex p-3 rounded-md border shadow'>
                                <div className='w-[20%] text-end'>
                                    <div className='flex justify-center items-center  bg-[#FC8B06] w-12 h-12 rounded-md'>
                                        <RiNotification2Fill className='text-2xl text-white' />
                                    </div>
                                </div>
                                <div className='w-[70%]'>
                                    <div>ঈদ উপলক্ষে ১০% ছাড় ! বিস্তারিত...</div>
                                    <div>1 days ago</div>
                                </div>
                            </div>


                            <div className='w-full flex p-3 rounded-md border shadow'>
                                <div className='w-[20%] text-end'>
                                    <div className='flex justify-center items-center  bg-[#FC8B06] w-12 h-12 rounded-md'>
                                        <RiNotification2Fill className='text-2xl text-white' />
                                    </div>
                                </div>
                                <div className='w-[70%]'>
                                    <div>সুখবর ! আমাদের প্রতিটি কোর্সে...</div>
                                    <div> 2 days ago</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='cs-round rounded-md shadow-md relative  w-full h-[380px]  md:max-w-md'>
                    <div className='bg-[#41CCFF] cs-round h-4 rounded-md absulate top-0 '></div>
                    <div className="p-2">
                        <h3 className='font-bold'>Calendar</h3>
                        <div className='flex w-full justify-center flex-shrink'>
                            <DayPicker
                                mode='single'
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:px-11 my-4'>
                <div className='font-bold'>Accouncment</div>
                <div className='m-5 space-y-3'>
                    <div className='  border-l-8 border-blue-700'>

                        <div className='font-bold pl-4'>
                            আপনি যদি আমাদের প্লাটফর্মে শিক্ষকতা করতে চান তাহলে আজ ই রেজিস্টার করুন ।
                        </div>
                    </div>
                    <div className='  border-l-8 border-yellow-500'>

                        <div className='font-bold pl-4'>
                            আপনি যদি আমাদের প্লাটফর্মে শিক্ষকতা করতে চান তাহলে আজ ই রেজিস্টার করুন ।
                        </div>
                    </div>
                    <div className='  border-l-8 border-orange-400'>

                        <div className='font-bold pl-4'>
                            আপনি যদি আমাদের প্লাটফর্মে শিক্ষকতা করতে চান তাহলে আজ ই রেজিস্টার করুন ।
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default DashboardHome;