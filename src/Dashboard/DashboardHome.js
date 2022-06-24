import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { RiNotification2Fill } from 'react-icons/ri'

const DashboardHome = () => {

    const [date, setDate] = useState(new Date())

    return (
        <div className='gap-10'>
            <div className='md:flex justify-center'>
                <div className='cs-round rounded-md shadow-md relative  w-full h-[380px]  md:max-w-md'>
                    <div className='bg-[#FC8B06] cs-round h-4 rounded-md absulate top-0 '></div>
                    <div className="p-2">
                        <h3 className='font-bold'>Hot Offers</h3>
                        <div className="flex justify-center items-center flex-col md:px-5 py-3 space-y-2">
                            <div className='w-full flex p-3 rounded-md border shadow'>
                                <div className='w-[20%] text-end'>
                                    <div className='flex justify-center items-center'>
                                        <RiNotification2Fill className='text-4xl text-[#F37A50]' />
                                    </div>
                                </div>
                                <div className='w-[70%]'>
                                    <div>সুখবর ! আমাদের প্রতিটি কোর্সে...</div>
                                    <div>10 min ago</div>
                                </div>
                            </div>
                            <div className='w-full flex p-3 rounded-md border shadow'>
                                <div className='w-[20%] text-end'>
                                    <div className='flex justify-center items-center'>
                                        <RiNotification2Fill className='text-4xl text-[#F37A50]' />
                                    </div>
                                </div>
                                <div className='w-[70%]'>
                                    <div>ঈদ উপলক্ষে ১০% ছাড় ! বিস্তারিত...</div>
                                    <div>1 days ago</div>
                                </div>
                            </div>
                            <div className='w-full flex p-3 rounded-md border shadow'>
                                <div className='w-[20%] text-end'>
                                    <div className='flex justify-center items-center'>
                                        <RiNotification2Fill className='text-4xl text-[#F37A50]' />
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

            <div className='md:px-11 md:my-4'>
                <div className='font-bold'>Accouncment</div>
                <div className='m-5 space-y-3'>
                    <div className='relative'>
                        <div className='bg-red-500 h-4 absolute bottom-0'></div>
                        <div className='font-bold'>
                            আপনি যদি আমাদের প্লাটফর্মে শিক্ষকতা করতে চান তাহলে আজ ই রেজিস্টার করুন ।
                        </div>
                    </div>
                    <div className='font-bold'>
                        আজকে রাত ১০টা থেকে কালকে সকাল ১১ টা পর্যন্ত আমাদের ওয়েব সাইট বন্ধ থাকবে।
                    </div>
                    <div className='font-bold'>
                        ১০% ছাড় এর অফার এর সেশ সময় আজ রাত ১০ টা ।
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DashboardHome;